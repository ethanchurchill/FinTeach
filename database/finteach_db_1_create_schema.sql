DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS "classroom" CASCADE;
DROP TABLE IF EXISTS "students" CASCADE;
DROP TABLE IF EXISTS "lkp_user_type" CASCADE;
DROP TABLE IF EXISTS "module_progress" CASCADE;
DROP TABLE IF EXISTS "assigned_modules" CASCADE;
DROP TABLE IF EXISTS "module" CASCADE;
DROP TABLE IF EXISTS "submodule" CASCADE;
DROP TABLE IF EXISTS "content_field" CASCADE;
DROP TABLE IF EXISTS "tags" CASCADE;
DROP TABLE IF EXISTS "lkp_tag" CASCADE;


CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" text,
  "password" varchar, --find authenatiction system
  "name" text,
  "email" text,
  "created_date" timestamp,
  "user_type" int
);

CREATE TABLE "classroom" (
  "id" SERIAL PRIMARY KEY,
  "teacher_id" int,
  "name" text,
  "roster_count" int
);

CREATE TABLE "students" (
  "id" SERIAL PRIMARY KEY,
  "student_id" int,
  "classroom_id" int
);

CREATE TABLE "lkp_user_type" (
  "id" SERIAL PRIMARY KEY,
  "type" varchar
);

CREATE TABLE "module_progress" (
  "id" SERIAL PRIMARY KEY,
  "module_completed" boolean,
  "current_submodule" int,
  "module_id" int,
  "user_id" int
);

CREATE TABLE "assigned_modules" (
  "id" SERIAL PRIMARY KEY,
  "module_id" int,
  "classroom_id" int
);

CREATE TABLE "module" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "total_submodules" int,
  "description" text,
  "img_ref" text,
  "module_length" text,
  "etc" text, --estimated time of completion
  "submodule_id" int
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

-- Decide on quiz scheme
--
-- CREATE TABLE "quiz" (
--   "id" SERIAL PRIMARY KEY,
--   "p_submodule_id" int
-- );
--

CREATE TABLE "tags" (
  "id" SERIAL PRIMARY KEY,
  "module_id" int,
  "tag_id" int
);

CREATE TABLE "lkp_tag" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar
);


ALTER TABLE "assigned_modules" ADD FOREIGN KEY ("module_id") REFERENCES "module" ("id");

ALTER TABLE "assigned_modules" ADD FOREIGN KEY ("classroom_id") REFERENCES "classroom" ("id");

ALTER TABLE "students" ADD FOREIGN KEY ("classroom_id") REFERENCES "classroom" ("id");

ALTER TABLE "students" ADD FOREIGN KEY ("student_id") REFERENCES "users" ("id");

ALTER TABLE "classroom" ADD FOREIGN KEY ("teacher_id") REFERENCES "users" ("id");

-- ALTER TABLE "submodule" ADD FOREIGN KEY ("id") REFERENCES "quiz" ("p_submodule_id");

ALTER TABLE "module_progress" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "module_progress" ADD FOREIGN KEY ("module_id") REFERENCES "module" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("user_type") REFERENCES "lkp_user_type" ("id");

ALTER TABLE "tags" ADD FOREIGN KEY ("tag_id") REFERENCES "lkp_tag" ("id");

ALTER TABLE "tags" ADD FOREIGN KEY ("module_id") REFERENCES "module" ("id");

ALTER TABLE "submodule" ADD FOREIGN KEY ("p_module_id") REFERENCES "module" ("id");

ALTER TABLE "content_field" ADD FOREIGN KEY ("p_submodule_id") REFERENCES "submodule" ("id");
