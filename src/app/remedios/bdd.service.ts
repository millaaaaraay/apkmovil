import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite';
import { Platform } from '@ionic/angular';
import { Clremedios } from './models/CLremedios';

@Injectable({
  providedIn: 'root'
})
export class BddService {

  db: SQLiteObject | null = null;

  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      this.initDatabase();
    });
  }

  initDatabase(): Promise<any> {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db = db;
      return this.createTables();
    })
    .catch(e => {
      console.error('Error opening database', e);
      return Promise.reject(e); // Rechazamos la promesa si hay un error en la creación de la base de datos
    });
  }

  createTables(): Promise<any> {
    const tables = `
      CREATE TABLE IF NOT EXISTS remedios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        dosis TEXT NOT NULL
      );
    `;

    if (this.db) {
      return this.db.executeSql(tables, [])
        .then(() => console.log('Tables created'))
        .catch(e => {
          console.error('Error creating tables', e);
          return Promise.reject(e); // Aseguramos que la promesa se rechaza en caso de error
        });
    } else {
      return Promise.reject('Database is not initialized'); // Siempre retornar una promesa
    }
  }
  addRemedio(remedios: Clremedios): Promise<any> {
    const query = `INSERT INTO remedios (nombre, descripcion, dosis) VALUES (?, ?, ?)`;
    const values = [remedios.nombre, remedios.descripcion, remedios.dosis];
  
    if (this.db) {
      return this.db.executeSql(query, values)
        .then(() => {
          console.log('Remedio added:', remedios);
          return remedios; // Retornamos el remedio añadido
        })
        .catch(e => {
          console.error('Error adding remedio', e);
          return Promise.reject(e);
        });
    } else {
      return Promise.reject('Database is not initialized');
    }
  }
  getRemedios(): Promise<Clremedios[]> {
    const query = `SELECT * FROM remedios`;
  
    if (this.db) {
      return this.db.executeSql(query, [])
        .then((res) => {
          let remedios: Clremedios[] = [];
          for (let i = 0; i < res.rows.length; i++) {
            remedios.push(res.rows.item(i));
          }
          console.log('Fetched remedios:', remedios);
          return remedios;
        })
        .catch(e => {
          console.error('Error fetching remedios', e);
          return Promise.reject(e);
        });
    } else {
      return Promise.reject('Database is not initialized');
    }
  }
  getRemedio(id: number): Promise<Clremedios> {
    const query = `SELECT * FROM remedios WHERE id = ?`;
  
    if (this.db) {
      return this.db.executeSql(query, [id])
        .then((res) => {
          if (res.rows.length > 0) {
            console.log('Fetched remedio:', res.rows.item(0));
            return res.rows.item(0);
          } else {
            return Promise.reject('No remedio found with id: ' + id);
          }
        })
        .catch(e => {
          console.error('Error fetching remedio by id', e);
          return Promise.reject(e);
        });
    } else {
      return Promise.reject('Database is not initialized');
    }
  }
  deleteRemedio(id: number): Promise<any> {
    const query = `DELETE FROM remedios WHERE id = ?`;
  
    if (this.db) {
      return this.db.executeSql(query, [id])
        .then(() => {
          console.log('Deleted remedio with id:', id);
          return id; // Retornamos el ID del remedio eliminado
        })
        .catch(e => {
          console.error('Error deleting remedio', e);
          return Promise.reject(e);
        });
    } else {
      return Promise.reject('Database is not initialized');
    }
  }
  updateRemedio(id: number, remedios: Clremedios): Promise<any> {
    const query = `UPDATE remedios SET nombre = ?, descripcion = ?, dosis = ? WHERE id = ?`;
    const values = [remedios.nombre, remedios.descripcion, remedios.dosis, id];
  
    if (this.db) {
      return this.db.executeSql(query, values)
        .then(() => {
          console.log('Updated remedio with id:', id);
          return remedios; // Retornamos el remedio actualizado
        })
        .catch(e => {
          console.error('Error updating remedio', e);
          return Promise.reject(e);
        });
    } else {
      return Promise.reject('Database is not initialized');
    }
  }
    
  
}
