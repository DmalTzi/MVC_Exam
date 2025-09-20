import { Hono } from "hono";
import { auth } from "$model/auth";

const route = new Hono();

route.post("/login", async (c) => {
    const body = await c.req.json();
    const token = await auth(c, body);
    if (token === "invalid") {
        return c.json({message: "Invalid username or password"}, 400)
    }
    if (token === "notfound") {
        return c.json({message: "User not found"}, 404)
    }
    if (token === "wrong") {
        return c.json({message: "Wrong password"}, 401)
    }
    return c.json({token})
})

export default route;