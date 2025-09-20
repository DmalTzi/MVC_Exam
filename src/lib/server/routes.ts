import { Hono } from "hono";
import AuthRoute from "$controller/auth";
import ProjectRoute from "$controller/project";
import PledgeRoute from "$controller/pledge";
const route = new Hono();

route.route("/auth", AuthRoute)
     .route("/project", ProjectRoute)
     .route("/pledge", PledgeRoute); // Temporary, replace with PledgeRoute when available

export default route;