CREATE DATABASE rol_dt;

USE database_links;

CREATE TABLE dts(
    id SERIAL NOT NULL, 
    name_DT VARCHAR(16) NOT NULL,
    team_DT VARCHAR(60) NOT NULL,
    age_DT VARCHAR(100) NOT NULL,
    valoration_DT VARCHAR(100) NOT NULL
);

CREATE TABLE leaguebarrels(
    id SERIAL NOT NULL, 
    league_barrels VARCHAR(16) NOT NULL,
    name_league_barrels VARCHAR(60) NOT NULL,
    location_league_barrels VARCHAR(100) NOT NULL,
    type_league_barrels VARCHAR(100) NOT NULL
);
CREATE TABLE matches(
    id SERIAL NOT NULL, 
    place_Match VARCHAR(16) NOT NULL,
    match_time VARCHAR(60) NOT NULL,
    Date_match VARCHAR(60) NOT NULL
    
);
CREATE TABLE teams(
    id SERIAL NOT NULL, 
    name_team VARCHAR(16) NOT NULL,
    league_team VARCHAR(60) NOT NULL
);

CREATE TABLE camps(
    id SERIAL NOT NULL, 
    camp_number VARCHAR(16) NOT NULL
);
CREATE TABLE players(
    name_Player SERIAL NOT NULL, 
    surname_Player VARCHAR(100) NOT NULL,
    age_Player VARCHAR(100) NOT NULL,
    player_Valuation VARCHAR(100) NOT NULL,
    
);