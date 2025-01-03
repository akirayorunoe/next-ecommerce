CREATE TABLE "password_reset_token" (
	"id" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "password_reset_token_id_token_pk" PRIMARY KEY("id","token")
);
--> statement-breakpoint
CREATE TABLE "two_factor_token" (
	"id" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "two_factor_token_id_token_pk" PRIMARY KEY("id","token")
);
