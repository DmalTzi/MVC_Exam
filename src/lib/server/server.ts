import { Hono } from "hono";
import { logger } from "hono/logger";
import Router from "./routes";

const app = new Hono().basePath("/api");

app.use(logger());

app.use("*", (c, next) => {
  console.log(`${c.req.method} ${c.req.url}`);
  return next();
});

app.route("", Router);

export default app;
