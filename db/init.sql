DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

INSERT INTO usuarios (nombre, password) VALUES ('admin', '1234');
INSERT INTO usuarios (nombre, password) VALUES ('user_0', 'qwert');
INSERT INTO usuarios (nombre, password) VALUES ('user_1', 'iloveyou');
INSERT INTO usuarios (nombre, password) VALUES ('user_2', 'nicepass');
