import { Injectable } from "@nestjs/common";
import { writeFile, readFile } from "fs/promises";

@Injectable()
export class MessagesRepository{
    async findOne(id: string){
        const contents = await readFile("messages.json", "utf8");
        const messages = JSON.parse(contents);
        return messages[id];

    }

    async findAll(){
        const contents = await readFile("messages.json", "utf8");
        const messages = JSON.parse(contents);
        return messages;
    }

    async sendMessage(content: string){
        const contents = await readFile("messages.json", "utf8");
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = {id, content};
        await writeFile("messages.json", messages);
    }
}