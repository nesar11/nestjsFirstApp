import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { ControllersController } from './controllers/controllers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './services/model/feed.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([FeedPostEntity])
    ],
  providers: [FeedService],
  controllers: [ControllersController]
})
export class FeedModule {}
