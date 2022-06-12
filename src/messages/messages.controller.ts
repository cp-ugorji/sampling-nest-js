import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { SendMessageDto } from './dtos/send-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService){
    }

    @Get()
    getMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    sendMessage(@Body() body: SendMessageDto){
        return this.messagesService.createMessage(body.content);
    }

    @Get("/:id")
    async getAMessage(@Param() id: string){
        const message = await this.messagesService.findOne(id);
        if(!message){
            throw new NotFoundException("No message with the given id.")
        }
        return message;
    }
}
