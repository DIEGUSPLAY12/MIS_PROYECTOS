


--------------------Ejercicio_1--------------------

/*A- Selecciona el identificador de las temporadas que han empezado entre el 2010 y el 2015:*/

SELECT id_temporada
FROM Temporada
WHERE fecha_inicio BETWEEN '2010-01-01' AND '2015-12-31';



/*B- Selecciona las temporadas que no han terminado (suponiendo que una temporada que no ha terminado tendrá el valor de ese atributo a NULL):*/

SELECT id_temporada
FROM Temporada
WHERE fecha_fin IS NULL;



/*C- Selecciona el nombre de las competiciones con un nombre de televisión de más de 5 letras:*/

SELECT nombre_competicion
FROM Competicion
WHERE LENGTH(nombre_TV) > 5;



/*D- Selecciona el nombre de las competiciones con un nombre de televisión que empiece con el texto ‘SKY’:*/

SELECT nombre_competicion
FROM Competicion
WHERE nombre_TV LIKE 'SKY%';



/*E- Selecciona las ciudades donde tenemos equipos, evitando tener resultados repetidos:*/

SELECT DISTINCT ciudad
FROM Equipo;



/*F- Selecciona el nombre del equipo y su ciudad que ha quedado en 1º lugar, en la competición ‘La Liga’ en la temporada con identificador 3:*/

SELECT e.nombre_equipo, e.ciudad
FROM Clasificacion c
JOIN Equipo e ON c.nombre_equipo = e.nombre_equipo
WHERE c.id_temporada = 3
AND c.nombre_competicion = 'La Liga'
AND c.posicion = 1;



/*G- Selecciona el nombre de los equipos de Madrid, Barcelona o Sevilla:*/

SELECT nombre_equipo
FROM Equipo
WHERE ciudad IN ('Madrid', 'Barcelona', 'Sevilla');



/*H- Muestra los equipos que han quedado entre los tres primeros clasificados en la competición ‘Champions’ en la temporada con id 5:*/

SELECT nombre_equipo
FROM Clasificacion
WHERE id_temporada = 5
AND nombre_competicion = 'Champions'
AND posicion BETWEEN 1 AND 3;





--------------------Ejercicio_2--------------------

/*A- Selecciona el nombre y apellido de los árbitros:*/

SELECT p.nombre, p.apellido1
FROM Persona AS p, arbitro AS a
WHERE p.num_ss = a.num_ss_arbitro;



/*B- Muestra el nombre de los equipos fundados antes del 1950 que tengan entrenador en la actualidad:*/

SELECT nombre
FROM Equipo
WHERE ano_fundacion < 1950 AND entrenador IS NOT NULL;



/*C- Selecciona el nombre y apellido de los jugadores con el dorsal 1 y su ubicación sea ‘Portero’ o con el dorsal 9 y su ubicación sea ‘Delantero’:*/

SELECT p.nombre, p.apellido1
FROM Persona AS p ,jugador AS j
WHERE  p.num_ss = j.num_ss_jugador AND(dorsal = 1 AND ubicacion = 'Portero') 
OR (dorsal = 9 AND ubicacion = 'Delantero');



/*D- Muestra el nombre, apellido y apellido2 en un único campo, separado por espacios de las personas que tengan una letra ‘c’ en su nombre:*/

SELECT CONCAT(p.nombre, ' ', p.apellido1, ' ', p.apellido2) AS nombre_completo
FROM Persona p
WHERE p.nombre LIKE '%c%';



/*E- Muestra los partidos jugados durante un mes de Febrero (de cualquier año):*/

SELECT *
FROM Partido
WHERE MONTH(fecha) = 2;



/*F- Muestra los partidos jugados hoy:*/

SELECT *
FROM Partido
WHERE fecha = CURRENT_DATE;



/*G- Muestra los árbitros que han iniciado entre el 2000 y el 2005 que sean ´Técnico Informático’ de profesión:*/

SELECT p.nombre, p.apellido1
FROM Persona p
JOIN Arbitro a ON p.num_ss = a.num_ss_arbitro
WHERE a.ano_inicio BETWEEN 2000 AND 2005 AND a.profesion = 'Técnico Informático';



/*H- Muestra el nombre de los equipos y su presupuesto, reduciendo este último en 100.000 euros:*/

SELECT nombre, (presupuesto - 100000) AS presupuesto_reducido
FROM Equipo;





--------------------Ejercicio_3--------------------

/*A- Selecciona los usuarios, que son subscriptores asociados:*/

SELECT u.id_usuario, u.DNI, u.email, u.direccion, u.num_targeta
FROM Usuario u
JOIN Subscriptor s ON u.id_usuario = s.id_subscriptor
WHERE s.es_asociado = TRUE;



/*B- Selecciona los usuarios, que son clientes a los que no les gusta el formato electrónico:*/

SELECT u.id_usuario, u.DNI, u.email, u.direccion, u.num_targeta
FROM Usuario u
JOIN Cliente c ON u.id_usuario = c.id_cliente
WHERE c.gusta_electronicc = FALSE;



/*C- Selecciona las colecciones iniciadas antes del 1970 y terminadas antes del 2000:*/

SELECT nombre_coleccion
FROM Coleccion
WHERE ano_inicio < 1970 AND ano_fin < 2000;



/*D- Selecciona el identificador de los subscriptores que han iniciado la colección con nombre ‘Minerales del Mundo’ desde el 1er número:*/

SELECT id_subscriptor
FROM Subscriptor_Coleccion
WHERE nombre_coleccion = 'Minerales del Mundo' AND num_inicio = 1;



/*E- Selecciona la id de los usuarios que no tengan un email válido (suponiendo que un email válido tiene que contener una @):*/

SELECT id_usuario
FROM Usuario
WHERE email NOT LIKE '%@%';



/*F- Muestra las id’s de los regalos que pesan menos de 100g o más de 500g (suponiendo que el atributo peso se guarda en gramos):*/

SELECT id_regalo
FROM Regalo
WHERE peso < 100 OR peso > 500;



/*G- Selecciona las entregas de enero del 2019:*/

SELECT *
FROM Entrega
WHERE fecha_entrega BETWEEN '2019-01-01' AND '2019-01-31';



/*H- Selecciona las entregas del 31 de Diciembre de 2018 o del 1 de Enero del 2019:*/

SELECT *
FROM Entrega
WHERE fecha_entrega IN ('2018-12-31', '2019-01-01');