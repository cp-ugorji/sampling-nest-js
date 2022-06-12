import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    getMessages(){

    }

    @Post()
    sendMessage(@Body() body: any){
        console.log(body);
    }

    @Get("/:id")
    getAMessage(@Param() id: string){
        console.log(id);
    }
}
