import {Router, Request, Response} from "express"

import auth from "./auth"
import user from "./user"
import post from "./post"

const routes = Router()

routes.use("/login", auth)
routes.use("/user", user)
routes.use("/post", post)

export default routes