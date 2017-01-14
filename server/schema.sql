CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  message TEXT NOT NULL,
  user_id INTEGER,
  room_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES usernames(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

