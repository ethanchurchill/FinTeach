-- -----------------------------
-- Delete Tables if they exists.
-- -----------------------------
DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS "module_progress" CASCADE;
DROP TABLE IF EXISTS "module" CASCADE;
DROP TABLE IF EXISTS "submodule" CASCADE;
DROP TABLE IF EXISTS "content_field" CASCADE;
DROP TABLE IF EXISTS "quiz" CASCADE;
DROP TABLE IF EXISTS "quiz_options" CASCADE;
DROP TABLE IF EXISTS "tags" CASCADE;
DROP TABLE IF EXISTS "lkp_tag" CASCADE;


-- --------------
-- Table Creation
-- --------------
CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" text,
  "password" varchar, --find authenatiction system
  "name" text,
  "email" text,
  "created_date" timestamp
  -- "user_type" int
);

CREATE TABLE "module_progress" (
  "id" SERIAL PRIMARY KEY,
  "module_completed" boolean,
  "current_submodule" int,
  "module_id" int,
  "user_id" int
);

CREATE TABLE "module" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "total_submodules" int,
  "description" text,
  "img_ref" text,
  "module_length" text,
  "etc" text, --estimated time of completion
);

CREATE TABLE "submodule" (
  "id" SERIAL PRIMARY KEY,
  "p_module_id" int,
  "title" text,
  "description" text,
  "type" char,
  "order" int
);

CREATE TABLE "content_field" (
  "id" SERIAL PRIMARY KEY,
  "p_submodule_id" int,
  "subtitle" text,
  "material" text,
  "img_ref" varchar,
  "order" int
);

CREATE TABLE "quiz" (
  "id" SERIAL PRIMARY KEY,
  "p_submodule_id" int,
  "question" text,
  "answer" int
  "img_ref" varchar
);

CREATE TABLE "quiz_options" (
  "id" SERIAL PRIMARY KEY,
  "quiz_id" int,
  "content" text,
  "order" int
);

CREATE TABLE "tags" (
  "id" SERIAL PRIMARY KEY,
  "module_id" int,
  "tag_id" int
);

CREATE TABLE "lkp_tag" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar
);

-- -----------------------
-- Foreign Key Declaration
-- -----------------------

ALTER TABLE "quiz" ADD FOREIGN KEY ("answer") REFERENCES "quiz_options" ("id");

ALTER TABLE "quiz" ADD FOREIGN KEY ("p_submodule_id") REFERENCES "submodule" ("id");

ALTER TABLE "quiz_options" ADD FOREIGN KEY ("quiz_id") REFERENCES "quiz" ("id");

ALTER TABLE "module_progress" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "module_progress" ADD FOREIGN KEY ("module_id") REFERENCES "module" ("id");

ALTER TABLE "tags" ADD FOREIGN KEY ("tag_id") REFERENCES "lkp_tag" ("id");

ALTER TABLE "tags" ADD FOREIGN KEY ("module_id") REFERENCES "module" ("id");

ALTER TABLE "submodule" ADD FOREIGN KEY ("p_module_id") REFERENCES "module" ("id");

ALTER TABLE "content_field" ADD FOREIGN KEY ("p_submodule_id") REFERENCES "submodule" ("id");
