import { Hono } from "hono";
import { useAuth } from "$middlewares/auth";
import PledgeModel  from "$model/pledge";

const route = new Hono();

route.use(useAuth)

route.post("/", async (c) => {
    const user = c.get("user") as { id: number, username: string }
    console.log(user)
    const body = await c.req.json()
    
    const result = await PledgeModel.createPledge(body, { id: user.id })
    if (result !== "success") {
        return c.json({message: "Error"}, 400)
    }
    return c.json("OK")
})

export default route;