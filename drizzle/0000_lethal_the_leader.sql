DO $$ BEGIN
 CREATE TYPE "public"."age" AS ENUM('BABY', 'ADULT');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."sex" AS ENUM('FEMALE', 'MALE');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."size" AS ENUM('SMALL', 'MEDIUM', 'BIG');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cats" (
	"id" serial PRIMARY KEY NOT NULL,
	"img" text NOT NULL,
	"name" varchar(16) NOT NULL,
	"age" "age" NOT NULL,
	"sex" "sex" NOT NULL,
	"size" "size" NOT NULL
);
