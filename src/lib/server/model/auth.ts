import type { Context } from "hono";
import { sign } from "hono/jwt";
import { db } from "$db/index";
import { eq } from "drizzle-orm";
import { user } from "$db/schema";
import { setCookie } from "hono/cookie";

export const auth = async(c: Context, body:{username: string, password: string}) => {
    const {username, password} = body;
    if (!username || !password) {
        return "invalid"
    }

    const query = await db.query.user.findFirst({
        where: eq(user.username, username)
    });

    if (!query) {
        return "notfound"
    }

    if (query.password !== password) {
        return "wrong"
    }

    const token = await sign({ "id": query.id, username }, "abc");
    setCookie(c, 'token', token)

    return token
}