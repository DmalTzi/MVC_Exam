import app from "$lib/server/server";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ request }) => app.fetch(request);
export const POST: RequestHandler = async ({ request }) => app.fetch(request);
export const PUT: RequestHandler = async ({ request }) => app.fetch(request);
export const DELETE: RequestHandler = async ({ request }) => app.fetch(request);
export const PATCH: RequestHandler = async ({ request }) => app.fetch(request);