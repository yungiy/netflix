import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entity/movie.entity';
import { MovieDetail } from './entity/movie-detail';
import { Director } from 'src/director/entitiy/director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Movie,
    MovieDetail,
    Director
  ])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
 