import { createServer } from "node:http";
import Chance from "chance";

// export const server = …
export const server = createServer((request, response) => {
    if (request.url === "/hello") {
        response.statusCode = 200;
        response.end("Hello Poeples");
    } else {
        response.statusCode = 404;
        response.end("Error")
    }
}
)
const chance = new Chance(() => {
    chance.name;
    chance.age;
    chance.profession;

    /* 
    `Hallo, mein Name ist ${name} 
    und ich bin ${age} Jahre alt. 
    Ich bin ${profession}.` 
    */
});