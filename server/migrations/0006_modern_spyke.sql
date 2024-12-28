ALTER TABLE "email_tokens" RENAME TO "email_token";--> statement-breakpoint
ALTER TABLE "email_token" DROP CONSTRAINT "email_tokens_id_token_pk";--> statement-breakpoint
ALTER TABLE "email_token" ADD CONSTRAINT "email_token_id_token_pk" PRIMARY KEY("id","token");