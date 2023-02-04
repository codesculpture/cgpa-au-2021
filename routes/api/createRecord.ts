import { Handlers } from "$fresh/server.ts"
import { connect } from "https://deno.land/x/redis@v0.29.0/mod.ts";


export const handler: Handlers = {
	async PUT(req,ctx) {
	const redis = await connect({
  		hostname: Deno.env.get("DB_URL"),
  		port: Deno.env.get("DB_PORT"),
		password: Deno.env.get("DB_PWD")
		});
		await redis.set(req.body.regNo, req.body.name);

		return new Response(
			"Sucess", {
				status: 200
			}
		)
	}
}
