import { createServer } from "node:http";

// export const server = …
export const server = createServer ((request, response) => {
if (request.url === "/hello") {
    response.statusCode = 200;
    response.end ("Hello Peoples");
}})