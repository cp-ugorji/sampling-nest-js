import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SendMessageDto } from './dtos/send-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    getMessages(){

    }

    @Post()
    sendMessage(@Body() body: SendMessageDto){
        console.log(body);
    }

    @Get("/:id")
    getAMessage(@Param() id: string){
        console.log(id);
    }
}
