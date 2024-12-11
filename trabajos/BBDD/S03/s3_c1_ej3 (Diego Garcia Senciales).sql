DROP DATABASE IF EXISTS s3_c1_ej3;
CREATE DATABASE s3_c1_ej3;
USE s3_c1_ej3;


DROP TABLE IF EXISTS Regalo;
DROP TABLE IF EXISTS Entrega;
DROP TABLE IF EXISTS Cliente_Entrega;
DROP TABLE IF EXISTS Subscriptor_Coleccion;
DROP TABLE IF EXISTS Subscriptor;
DROP TABLE IF EXISTS Cliente;
DROP TABLE IF EXISTS Usuario;
DROP TABLE IF EXISTS Coleccion;



CREATE TABLE Usuario (
    
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    DNI CHAR(9) NOT NULL,
    email VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    num_targeta VARCHAR(20) NOT NULL
);

CREATE TABLE Subscriptor (
    id_subscriptor INT PRIMARY KEY,
    es_asociado BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_subscriptor) REFERENCES Usuario(id_usuario)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Cliente (
    id_cliente INT PRIMARY KEY,
    gusta_electronico BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_cliente) REFERENCES Usuario(id_usuario)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Coleccion (
    nombre_coleccion VARCHAR(100) PRIMARY KEY,
    ano_inicio INT,
    ano_fin INT
);

CREATE TABLE Subscriptor_Coleccion (
    id_subscriptor INT,
    nombre_coleccion VARCHAR(100),
    num_inicio INT,
    PRIMARY KEY (id_subscriptor, nombre_coleccion),
    FOREIGN KEY (id_subscriptor) REFERENCES Subscriptor(id_subscriptor)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (nombre_coleccion) REFERENCES Coleccion(nombre_coleccion)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Cliente_Entrega (
    id_cliente INT,
    fecha_entrega DATE,
    nombre_coleccion VARCHAR(100),
    PRIMARY KEY (id_cliente, fecha_entrega, nombre_coleccion),
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (nombre_coleccion) REFERENCES Coleccion(nombre_coleccion)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Entrega (
    fecha_entrega DATE,
    nombre_coleccion VARCHAR(100),
    num_paginas INT,
    PRIMARY KEY (fecha_entrega, nombre_coleccion),
    FOREIGN KEY (nombre_coleccion) REFERENCES Coleccion(nombre_coleccion)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Regalo (
    id_regalo INT AUTO_INCREMENT,
    fecha_entrega DATE,
    nombre_coleccion VARCHAR(100),
    peso DECIMAL(10, 2) UNSIGNED,
    PRIMARY KEY (id_regalo),
    FOREIGN KEY (fecha_entrega, nombre_coleccion) REFERENCES Entrega(fecha_entrega, nombre_coleccion)
        ON UPDATE CASCADE ON DELETE CASCADE
);