import type { Context } from "hono";
import { getCookie } from "hono/cookie";
import { jwt, verify } from "hono/jwt";

export const useAuth = async (c: Context, next: () => Promise<void>) => {
    try {
        const token = getCookie(c, "token") ?? c.req.header('Authorization')?.split("Bearer ")[1];
        if (!token) throw new Error("No token provided");

        const user = await verify(token, "abc");
        if (!user) throw new Error("Invalid token");

        const payload = await verify(token, "abc");
        
        c.set("user", payload);
        await next();
    } catch (error) {
        return c.json({ message: "Unauthorized" }, 401);
    }
}