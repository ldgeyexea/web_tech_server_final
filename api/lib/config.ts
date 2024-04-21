import * as process from "process";

export const config = {
    port: process.env.PORT || 3100,
    databaseUrl:process.env.MONGODB_URL||'mongodb+srv://twwai:KTp5wYwutrLHPLT@cluster0.ooees.mongodb.net/IoT?retryWrites=true&w=majority',
    supportedPostCount:15,
    JwtSecret:'secret',
};

