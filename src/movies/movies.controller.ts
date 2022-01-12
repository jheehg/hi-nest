import { MoviesService } from './movies.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.MoviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch(':id')
  update(@Param('id') movidId: number, @Body() updateData: UpdateMovieDto) {
    return this.MoviesService.update(movidId, updateData);
  }
}
