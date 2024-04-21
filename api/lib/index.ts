import App from "./app";
import IndexController from "./controlers/index.controller";
import PostController from "./controlers/data.controller";
import UserController from "./controlers/userController";

const app: App = new App([
    new PostController(),
    new UserController(),
    new IndexController()
]);


app.listen()