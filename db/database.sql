CREATE DATABASE gestionfisidb;

USE gestionfisidb;

CREATE TABLE articulo(
    codigo INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    categoria VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (codigo)
);

DESCRIBE articulo;

INSERT INTO articulo VALUES (1,"FOLDER MANILA OFICIO","UTILES DE OFICINA"),
                             (2,"SOBRES MANILA A-4","UTILES DE OFICINA"),
                             (3,"SOBRES MANILA OFICIO","UTILES DE OFICINA"),
                             (4,"CINTA SCOTCH","UTILES DE OFICINA"),
                             (5,"CORTA PAPEL","UTILES DE OFICINA");