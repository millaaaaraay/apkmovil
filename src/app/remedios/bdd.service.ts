import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class BddService {

  db: SQLiteObject | null = null;

  constructor(
    private sqlite: SQLite, 
    private apiRestService: DataService // Inyectar ApiRestService
  ) { }

  setDatabase(db:SQLiteObject) {
    if(this.db===null)
    {
      this.db=db
    };
  }
  createTables():Promise<any>{
    let tables=`
    CREATE TABLE IF NOT EXISTS sesion_data
    (
      user_name TEXT PRIMARY KEY NOT NULL,
      password INTEGER NOT NULL,
      active INTEGER(1) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS remedios
    (
      id INTEGER PRIMARY KEY ,
      nombre TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      dosis TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS usuarios
    (
      id NUMBER PRIMARY KEY ,
      nombre TEXT NOT NULL,
      apellido TEXT NOT NULL,
      email TEXT NOT NULL,
      clave TEXT NOT NULL,
    );`;
    return this.db.executeSql(tables);
  }










}
