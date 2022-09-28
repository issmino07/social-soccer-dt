CREATE DATABASE rol_dt;

USE database_links;

CREATE TABLE dt(
    id SERIAL NOT NULL, 
    name_DT VARCHAR(16) NOT NULL,
    team_DT VARCHAR(60) NOT NULL,
    age_DT VARCHAR(100) NOT NULL,
    valoration_DT VARCHAR(100) NOT NULL
);

CREATE TABLE Liga_barrial(
    id SERIAL NOT NULL, 
    liga_barrial VARCHAR(16) NOT NULL,
    nombre_liga_barrial VARCHAR(60) NOT NULL,
    ubicacion_liga_barrial VARCHAR(100) NOT NULL,
    tipo_liga_barrial VARCHAR(100) NOT NULL
);
CREATE TABLE Match(
    id SERIAL NOT NULL, 
    place_Match VARCHAR(16) NOT NULL,
    match_time VARCHAR(60) NOT NULL,
    Date_match VARCHAR(60) NOT NULL
    
);
CREATE TABLE Equipment(
    id SERIAL NOT NULL, 
    name_Equipment VARCHAR(16) NOT NULL,
    league_team VARCHAR(60) NOT NULL
);
CREATE TABLE Player(
    id SERIAL NOT NULL, 
    name_Player VARCHAR(16) NOT NULL,
    surname_Player VARCHAR(60) NOT NULL,
    age_Player VARCHAR(100) NOT NULL,
    player_Valuation VARCHAR(100) NOT NULL
);
CREATE TABLE cancha(
    id SERIAL NOT NULL, 
    court_number VARCHAR(100) NOT NULL
    
);




