CREATE DATABASE rol_dt;

USE database_links;

CREATE TABLE dt(
    id SERIAL NOT NULL, 
    name_DT VARCHAR(16) NOT NULL,
    team_DT VARCHAR(60) NOT NULL,
    age_DT VARCHAR(100) NOT NULL,
    valoration_DT VARCHAR(100) NOT NULL
);
<<<<<<< HEAD
CREATE TABLE Player(
    id SERIAL NOT NULL, 
    name_Player VARCHAR(16) NOT NULL,
    surname_Player VARCHAR(60) NOT NULL,
    age_Player VARCHAR(100) NOT NULL,
    player_Valuation VARCHAR(100) NOT NULL
=======

CREATE TABLE League_barrels(
    id SERIAL NOT NULL, 
    league_barrels VARCHAR(16) NOT NULL,
    name_league_barrels VARCHAR(60) NOT NULL,
    location_league_barrels VARCHAR(100) NOT NULL,
    type_league_barrels VARCHAR(100) NOT NULL
>>>>>>> 126e3b0ec6ee67585774fbf6ef8c60fe3235210d
);
CREATE TABLE Match(
    id SERIAL NOT NULL, 
    place_Match VARCHAR(16) NOT NULL,
    match_time VARCHAR(60) NOT NULL,
    Date_match VARCHAR(60) NOT NULL
    
);
<<<<<<< HEAD
CREATE TABLE League_barrels(
    id SERIAL NOT NULL, 
    league_barrels VARCHAR(16) NOT NULL,
    name_league_barrels VARCHAR(60) NOT NULL,
    location_league_barrels VARCHAR(100) NOT NULL,
    type_league_barrels VARCHAR(100) NOT NULL
);

CREATE TABLE Team(
    id SERIAL NOT NULL, 
=======
CREATE TABLE Team(
    id SERIAL NOT NULL, 
>>>>>>> 126e3b0ec6ee67585774fbf6ef8c60fe3235210d
    name_team VARCHAR(16) NOT NULL,
    league_team VARCHAR(60) NOT NULL
);

CREATE TABLE camp(
    id SERIAL NOT NULL, 
<<<<<<< HEAD
=======
    name_Player VARCHAR(16) NOT NULL,
    surname_Player VARCHAR(60) NOT NULL,
    age_Player VARCHAR(100) NOT NULL,
    player_Valuation VARCHAR(100) NOT NULL
);
CREATE TABLE camp(
    id SERIAL NOT NULL, 
>>>>>>> 126e3b0ec6ee67585774fbf6ef8c60fe3235210d
    camp_number VARCHAR(100) NOT NULL
    
);