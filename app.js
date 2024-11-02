import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function criarepopularTabela(id, name, email, password) {
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database,
  });
  db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT)`
  );

  db.run(
    `INSERT INTO usuarios (id, name, email, password) VALUES (?, ?, ?, ?)`,
    [id, name, email, password]
  );
}

criarepopularTabela(1, "Joaquim", "joaquim@joaquim", "123456");
