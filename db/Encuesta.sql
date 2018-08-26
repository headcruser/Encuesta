CREATE DATABASE encuesta;

use encuesta;

CREATE TABLE lenguajes(
    id INT NOT NULL AUTO_INCREMENT,
    opcion char(80),
    voto smallint,
    Constraint pkprod primary key (id)
);

INSERT INTO lenguajes(opcion, voto)
  VALUES
  ('c'          , 0 ),
  ('c++'        , 0 ),
  ('java'       , 0 ),
  ('php'        , 0 ),
  ('javascript' , 0 );
