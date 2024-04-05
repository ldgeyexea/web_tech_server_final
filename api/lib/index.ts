import App from "./app";
import IndexController from "./controlers/index.controller";
import PostController from "./controlers/data.controller";

const app: App = new App([
    new PostController(),
    new IndexController(),
]);


app.listen()