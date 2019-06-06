DROP DATABASE IF EXISTS movieDate;

CREATE DATABASE movieDate;

USE movieDate;

CREATE TABLE  `movieRating` (

 `movieId` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `movieRanking` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
