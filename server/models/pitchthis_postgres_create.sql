-- DROP TABLE public.user CASCADE;
-- DROP TABLE public.topics CASCADE;
-- DROP TABLE public.games CASCADE;

SET statement_timeout
=0;
SET lock_timeout
= 0;
SET idle_in_transaction_session_timeout
= 0;
SET client_encoding
= 'UTF8';
SET standard_conforming_strings
= on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies
= false;
SET xmloption
= content;
SET client_min_messages
= warning;
SET row_security
= off;


CREATE TABLE public.user
(
	"id" serial NOT NULL,
	"username" varchar NOT NULL,
	"avatar" varchar,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
)
WITH (
  OIDS=FALSE
);

CREATE TABLE public.games
(
	"id" serial NOT NULL,
	"game_title" varchar NOT NULL,
	"user_id" bigint NOT NULL,
	CONSTRAINT "games_pk" PRIMARY KEY ("id")
)
WITH (
  OIDS=FALSE
);


CREATE TABLE public.topics
(
	"id" serial NOT NULL,
	"game_id" bigint NOT NULL,
	"pros_cons" varchar NOT NULL,
	"topic" varchar NOT NULL,
	"description" varchar NOT NULL,
	CONSTRAINT "topics_pk" PRIMARY KEY ("id")
)
WITH (
  OIDS=FALSE
);

ALTER TABLE public.games ADD CONSTRAINT "games_fk0" FOREIGN KEY ("user_id") REFERENCES public.user("id");
ALTER TABLE public.topics ADD CONSTRAINT "topics_fk0" FOREIGN KEY ("game_id") REFERENCES  public.games("id");

INSERT INTO public.user
VALUES
	(1, 'blondjay123@gmail.com', null);


INSERT INTO public.games
VALUES
	(1, 'Software Engineering', 1);

INSERT INTO public.topics
VALUES
	(1, 1, 'pros', 'React', 'React is cool for the kids in school');
INSERT INTO public.topics
VALUES
	(2, 1, 'pros', 'React', 'React stateful management');
INSERT INTO public.topics
VALUES
	(3, 1, 'pros', 'React', 'Better than Vanilla JS');
INSERT INTO public.topics
VALUES
	(4, 1, 'cons', 'React', 'Learning curve');
INSERT INTO public.topics
VALUES
	(5, 1, 'cons', 'React', 'Testing is hard');
INSERT INTO public.topics
VALUES
	(6, 1, 'cons', 'React', 'Prop drilling');

INSERT INTO public.topics
VALUES
	(7, 1, 'pros', 'Express', 'Express is cool for the kids in school');
INSERT INTO public.topics
VALUES
	(8, 1, 'pros', 'Express', 'Express stateful management');
INSERT INTO public.topics
VALUES
	(9, 1, 'pros', 'Express', 'Better than Vanilla Node');
INSERT INTO public.topics
VALUES
	(10, 1, 'cons', 'Express', 'Learning curve');
INSERT INTO public.topics
VALUES
	(11, 1, 'cons', 'Express', 'Testing is hard');
INSERT INTO public.topics
VALUES
	(12, 1, 'cons', 'Express', 'Better alternatives out there');

INSERT INTO public.topics
VALUES
	(13, 1, 'pros', 'GraphQL', 'GraphQL is cool for the kids in school');
INSERT INTO public.topics
VALUES
	(14, 1, 'pros', 'GraphQL', 'GraphQL prevents over-fetching or under-fetching');
INSERT INTO public.topics
VALUES
	(15, 1, 'pros', 'GraphQL', 'Better than REST API');
INSERT INTO public.topics
VALUES
	(16, 1, 'cons', 'GraphQL', 'Learning curve - How to write schemas?');
INSERT INTO public.topics
VALUES
	(17, 1, 'cons', 'GraphQL', 'N + 1 issue');
INSERT INTO public.topics
VALUES
	(18, 1, 'cons', 'GraphQL', 'Error handling needs to be created by developer');


INSERT INTO public.games
VALUES
	(2, 'Cars', 1);

INSERT INTO public.topics
VALUES
	(19, 2, 'pros', 'BMW', 'BMW is cool for the kids in school');
INSERT INTO public.topics
VALUES
	(20, 2, 'pros', 'BMW', 'BMWs are fast');
INSERT INTO public.topics
VALUES
	(21, 2, 'pros', 'BMW', 'BMW the drivers car');
INSERT INTO public.topics
VALUES
	(22, 2, 'cons', 'BMW', 'Expensive to maintain');
INSERT INTO public.topics
VALUES
	(23, 2, 'cons', 'BMW', 'Expensive parts');
INSERT INTO public.topics
VALUES
	(24, 2, 'cons', 'BMW', 'Sports car or luxury car? Tries too hard to do both');

INSERT INTO public.games
VALUES
	(3, 'NBA Basketball', 1);

INSERT INTO public.topics
VALUES
	(25, 3, 'pros', 'Lakers', 'Lakers is cool for the kids in school');
INSERT INTO public.topics
VALUES
	(26, 3, 'pros', 'Lakers', 'Lakerss are really good');
INSERT INTO public.topics
VALUES
	(27, 3, 'pros', 'Lakers', 'Lakers historic organization');
INSERT INTO public.topics
VALUES
	(28, 3, 'cons', 'Lakers', 'Not enough 3 point shooters');
INSERT INTO public.topics
VALUES
	(29, 3, 'cons', 'Lakers', 'Team average age is old');
INSERT INTO public.topics
VALUES
	(30, 3, 'cons', 'Lakers', 'Expensive salaries');


INSERT INTO public.topics
VALUES
	(31, 1, 'pros', 'Kubernetes', 'Kubernetes is cool for the kids in school');
INSERT INTO public.topics
VALUES
	(32, 1, 'pros', 'Kubernetes', 'Kubernetes prevents over-fetching or under-fetching');
INSERT INTO public.topics
VALUES
	(33, 1, 'pros', 'Kubernetes', 'Better than REST API');
INSERT INTO public.topics
VALUES
	(34, 1, 'cons', 'Kubernetes', 'Learning curve - How to write schemas?');
INSERT INTO public.topics
VALUES
	(35, 1, 'cons', 'Kubernetes', 'N + 1 issue');
INSERT INTO public.topics
VALUES
	(36, 1, 'cons', 'Kubernetes', 'Error handling needs to be created by developer');

INSERT INTO public.topics
VALUES
	(37, 1, 'pros', 'Websockets', 'Websockets is cool for the kids in school');
INSERT INTO public.topics
VALUES
	(38, 1, 'pros', 'Websockets', 'Websockets prevents over-fetching or under-fetching');
INSERT INTO public.topics
VALUES
	(39, 1, 'pros', 'Websockets', 'Better than REST API');
INSERT INTO public.topics
VALUES
	(40, 1, 'cons', 'Websockets', 'Learning curve - How to write schemas?');
INSERT INTO public.topics
VALUES
	(41, 1, 'cons', 'Websockets', 'N + 1 issue');
INSERT INTO public.topics
VALUES
	(42, 1, 'cons', 'Websockets', 'Error handling needs to be created by developer');

INSERT INTO public.topics
VALUES
	(43, 1, 'pros', 'Websockets', 'Websockets is cool for the kids in school');
INSERT INTO public.topics
VALUES
	(44, 1, 'pros', 'Websockets', 'Websockets prevents over-fetching or under-fetching');
INSERT INTO public.topics
VALUES
	(45, 1, 'pros', 'Websockets', 'Better than REST API');
INSERT INTO public.topics
VALUES
	(46, 1, 'cons', 'Websockets', 'Learning curve - How to write schemas?');
INSERT INTO public.topics
VALUES
	(47, 1, 'cons', 'Websockets', 'N + 1 issue');
INSERT INTO public.topics
VALUES
	(48, 1, 'cons', 'Websockets', 'Error handling needs to be created by developer');

-- SELECT *
-- FROM "public"."user"
-- 	JOIN "public"."games" ON "public"."games"."user_id" = "public"."user"."id"
-- 	JOIN "public"."topics" ON "public"."topics"."game_id" = "public"."games"."id";