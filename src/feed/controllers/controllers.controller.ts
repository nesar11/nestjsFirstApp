import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Any, DeleteResult, UpdateResult } from 'typeorm';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../services/model/feed.model';

@Controller('feed')
export class ControllersController {
constructor(
    private feedService : FeedService
) {}
    @Post()
    create(@Body() feedPost: FeedPost):Observable<FeedPost>{
        return this.feedService.createPost(feedPost)

    }

    @Get()
    findAll(): Observable<FeedPost[]>{
        return this.feedService.findAllPosts();
    }


    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() feedPost: FeedPost) :Observable<UpdateResult>{
        return this.feedService.updatePost(id, feedPost);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult>{
        return this.feedService.deletrePost(id)

    }




}


