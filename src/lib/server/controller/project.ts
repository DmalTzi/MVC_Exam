import { Hono } from "hono";
import { useAuth } from "$middlewares/auth";
import ProjectModel  from "$model/project";

const route = new Hono();

route.use(useAuth)

route.post("/create", async (c) => {
    const body = await c.req.json();
    await ProjectModel.create(body);
    return c.json({message: "Create project"})
})

route.get("/getAll", async (c) => {
    const datas = await ProjectModel.getAll();
    return c.json({message: "List projects", datas})
})

route.get("/get/:id", async (c) => {
    const id = c.req.param("id");
    const data = await ProjectModel.get(id);
    return c.json({message: `Get project ${id}`, data})
})

export default route;