CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (300) NOT NULL,
    "category" VARCHAR (20) DEFAULT "uncategorized"
);

-- Default categories. You may change them :)
INSERT INTO "favorites" ("name")
VALUES ('none'), ('funny'), ('animals'), ('action'), ('other')
