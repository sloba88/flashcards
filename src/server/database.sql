-- ---
-- Table 'Invoices'
--
-- ---

DROP TABLE IF EXISTS Flashcards CASCADE;

CREATE TABLE Flashcards (
  id serial primary key,
  term TEXT NULL DEFAULT NULL,
  definition TEXT NULL DEFAULT NULL
);

insert into flashcards(term, definition) values ('sample term', 'sample definition');
