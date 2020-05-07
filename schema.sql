DROP DATABASE IF EXISTS eslamoDB;

CREATE DATABASE eslamoDB;

USE eslamoDB;


CREATE TABLE IF NOT EXISTS emotional_states (
	emotional_state_id INT NOT NULL AUTO_INCREMENT,
	emotional_state TEXT NOT NULL,
	PRIMARY KEY (emotional_state_id)
);

CREATE TABLE IF NOT EXISTS users (
	user_id INT NOT NULL AUTO_INCREMENT,
	first_name  TEXT NOT NULL ,
	last_name TEXT NOT NULL,
	email TEXT NOT NULL ,
	gender TEXT,
	phone_number INT,
    emotional_state_id INT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	PRIMARY KEY (user_id),
    FOREIGN KEY (emotional_state_id) REFERENCES emotional_states (emotional_state_id)
);

CREATE TABLE IF NOT EXISTS verses (
	verse_id INT NOT NULL AUTO_INCREMENT,
	verse_text TEXT NOT NULL ,
	surah TEXT NOT NULL ,
	chapter INT NOT NULL,
	verse_number INT NOT NULL,
	PRIMARY KEY (verse_id)
);

CREATE TABLE IF NOT EXISTS hadiths (
	hadith_id INT NOT NULL AUTO_INCREMENT,
	hadith_text TEXT NOT NULL ,
	book TEXT NOT NULL,
	source TEXT NOT NULL,
	title TEXT NOT NULL,
	PRIMARY KEY (hadith_id)
);

CREATE TABLE IF NOT EXISTS states_verses (
	state_verse_id INT NOT NULL AUTO_INCREMENT,
	verse_id INT NOT NULL,
	emotional_state_id INT NOT NULL,
	PRIMARY KEY (state_verse_id),
    FOREIGN KEY (verse_id) REFERENCES verses (verse_id),
    FOREIGN KEY (emotional_state_id) REFERENCES emotional_states (emotional_state_id)
);

CREATE TABLE IF NOT EXISTS states_hadith (
	state_verse_id INT NOT NULL AUTO_INCREMENT,
	hadith_id INT NOT NULL,
	emotional_state_id INT NOT NULL,
	PRIMARY KEY (state_verse_id),
    FOREIGN KEY (hadith_id) REFERENCES hadiths (hadith_id),
    FOREIGN KEY (emotional_state_id) REFERENCES emotional_states (emotional_state_id)
);

CREATE TABLE IF NOT EXISTS users_verses (
	state_verse_id INT NOT NULL AUTO_INCREMENT,
	verse_id INT NOT NULL,
	user_id INT NOT NULL,
	PRIMARY KEY (state_verse_id),
    FOREIGN KEY (verse_id) REFERENCES verses (verse_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE IF NOT EXISTS users_hadith (
	state_verse_id INT NOT NULL AUTO_INCREMENT,
	hadith_id INT NOT NULL,
	user_id INT NOT NULL,
	PRIMARY KEY (state_verse_id),
    FOREIGN KEY (hadith_id) REFERENCES hadiths (hadith_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE IF NOT EXISTS passwords (
	id INT NOT NULL AUTO_INCREMENT,
	user_password INT NOT NULL,
	user_id INT NOT NULL,
    salt TEXT NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);
-- ALTER TABLE users ADD CONSTRAINT users_fk0 FOREIGN KEY (emotional_state_id) REFERENCES emotional_states(emotional_state_id);

-- ALTER TABLE emotional_states ADD CONSTRAINT emotional_states_fk0 FOREIGN KEY (emotional_state_id) REFERENCES users(user_id);

-- ALTER TABLE emotional_states ADD CONSTRAINT emotional_states_fk1 FOREIGN KEY (emotional_state) REFERENCES doaa();

-- ALTER TABLE states_verses ADD CONSTRAINT states_verses_fk0 FOREIGN KEY (verse) REFERENCES verses(verse_id);

-- ALTER TABLE states_verses ADD CONSTRAINT states_verses_fk1 FOREIGN KEY (state_id) REFERENCES emotional_states(emotional_state_id);

-- ALTER TABLE states_hadith ADD CONSTRAINT states_hadith_fk0 FOREIGN KEY (hadith_id) REFERENCES verses(verse_id);

-- ALTER TABLE states_hadith ADD CONSTRAINT states_hadith_fk1 FOREIGN KEY (state_id) REFERENCES emotional_states(emotional_state_id);

-- ALTER TABLE users_verses ADD CONSTRAINT users_verses_fk0 FOREIGN KEY (verse_id) REFERENCES verses(verse_id);

-- ALTER TABLE users_verses ADD CONSTRAINT users_verses_fk1 FOREIGN KEY (user_id) REFERENCES users(user_id);

-- ALTER TABLE users_hadith ADD CONSTRAINT users_hadith_fk0 FOREIGN KEY (hadith_id) REFERENCES verses(verse_id);

-- ALTER TABLE users_hadith ADD CONSTRAINT users_hadith_fk1 FOREIGN KEY (state_id) REFERENCES emotional_states(emotional_state_id);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/