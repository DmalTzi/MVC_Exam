
import { db } from "$db/index";
import { pledge, project, reward_tier } from "$db/schema";
import { eq } from "drizzle-orm";

const createPledge = async (body: {project_id: string, amount: number, reward_tier: string}, user: {id: number}) => {
    const query = await db.query.project.findFirst({
        where: eq(project.id, body.project_id)
    });

    if (!query) {
        return "notfound"
    }

    if (body.amount <= 0 || isNaN(body.amount) || !body.amount) {
        return "invalid"
    }

    if (query.deadline.getTime() < Date.now()) {
        return "deadline"
    }

    const minimum = await db.query.reward_tier.findFirst({
        where: eq(reward_tier.name, body.reward_tier)
    });

    if (!minimum) {
        return "notfound"
    }

    if (body.reward_tier) {
        if (body.amount < minimum.sponsorship) {
            return "invalid"
        }
    }

    await db.update(project).set({ 
        current_amount: (query.current_amount += body.amount)
    }).where(eq(project.id, body.project_id));

    await db.insert(pledge).values({
        user_id: user.id,
        project_id: body.project_id,
        time: new Date(),
        amount: body.amount,
        reward_tier: body.reward_tier
    })
    return "success"
}

export default {
    createPledge
};  