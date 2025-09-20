import { db } from "$db/index";
import { catagory, project, projectToCatagory } from "$db/schema";
import { eq } from "drizzle-orm";

const create = async(body:{id: string, name: string, target: number, deadline: number}) => {
    const {id, name, target, deadline} = body;
    if (!name || !deadline || target < 0 || isNaN(target) || isNaN(deadline) || !target) {
        return "invalid"
    }

    await db.insert(project).values({
        id,
        name,
        target,
        deadline: new Date(deadline), // Convert timestamp to Date object
        current_amount: 0
    })

    return "success"
}

const getAll = async() => {
    const query = await db.select()
        .from(project)
        .innerJoin(projectToCatagory, eq(project.id, projectToCatagory.project_id))
        .innerJoin(catagory, eq(projectToCatagory.catagory_name, catagory.name))
    return query
}

const get = async(id: string) => {
    const query = await db.select()
        .from(project)
        .innerJoin(projectToCatagory, eq(project.id, projectToCatagory.project_id))
        .innerJoin(catagory, eq(projectToCatagory.catagory_name, catagory.name))
        .where(eq(project.id, id))
    return query
}

export default {
    create,
    getAll,
    get
}