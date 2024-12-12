a) Seleccionar el nombre y apellido de los árbitros que sean jugadores
Esto requiere encontrar la intersección entre las entidades "Arbitro" y "Jugador". Asumimos que los nombres y apellidos están en la tabla "Persona".

SELECT P.nombre, P.apellido1
FROM Persona P
WHERE P.num_ss IN (
    SELECT A.num_ss_arbitro
    FROM Arbitro A
    INTERSECT
    SELECT J.num_ss_jugador
    FROM Jugador J
);

b) Seleccionar el nombre y apellido de los árbitros que no sean jugadores
Esto requiere encontrar los árbitros que no están en la intersección con jugadores.

SELECT P.nombre, P.apellido1
FROM Persona P
WHERE P.num_ss IN (
    SELECT A.num_ss_arbitro
    FROM Arbitro A
    EXCEPT
    SELECT J.num_ss_jugador
    FROM Jugador J
);


c) Número de partidos jugados por equipo como local de los 3 equipos que hayan jugado más
Esto implica agrupar los partidos por el equipo local y ordenar los resultados en orden descendente del número de partidos.

SELECT P.equipo_local, COUNT(*) AS num_partidos
FROM Partido P
GROUP BY P.equipo_local
ORDER BY num_partidos DESC
LIMIT 3;


d) Sumar los presupuestos de todos los equipos
Esto requiere una simple suma de la columna presupuesto en la tabla "Equipo".

SELECT SUM(E.presupuesto) AS total_presupuesto
FROM Equipo E;


e) Mostrar nombre y apellido de los jugadores ordenados por el apellido de forma ascendente y por el nombre de forma descendente
Ordenamos los resultados como se solicita.

SELECT P.nombre, P.apellido1
FROM Persona P
JOIN Jugador J ON P.num_ss = J.num_ss_jugador
ORDER BY P.apellido1 ASC, P.nombre DESC;

f) Listar los equipos de la A a la Z y mostrar solo los 3 primeros
Esto implica ordenar alfabéticamente los equipos y limitar la salida a 3.

SELECT E.nombre
FROM Equipo E
ORDER BY E.nombre ASC
LIMIT 3;