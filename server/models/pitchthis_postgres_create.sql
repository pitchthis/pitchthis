SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.user (
	"id" serial NOT NULL,
	"username" varchar NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.games (
	"id" serial NOT NULL,
	"game_title" varchar NOT NULL,
	"user_id" bigint NOT NULL,
	CONSTRAINT "games_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.topics (
	"id" serial NOT NULL,
	"game_id" bigint NOT NULL,
	"pros_cons" varchar NOT NULL,
  "topic" varchar NOT NULL,
	CONSTRAINT "topics_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.games ADD CONSTRAINT "games_fk0" FOREIGN KEY ("user_id") REFERENCES public.user("id");
ALTER TABLE public.topics ADD CONSTRAINT "topics_fk0" FOREIGN KEY ("game_id") REFERENCES  public.games("id");

