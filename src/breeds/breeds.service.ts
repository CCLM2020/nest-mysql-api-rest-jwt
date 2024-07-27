import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BreedsService {

constructor(@InjectRepository(Breed) private readonly breedRepository: Repository<Breed>) {}

  async create(createBreedDto: CreateBreedDto) {
    return await this.breedRepository.save(createBreedDto);
  }

  async findAll() {
    return await this.breedRepository.find();
  }

  async findOne(id: number) {
    const breed = await this.breedRepository.findOneBy({id});

    if (!breed) {
      throw new BadRequestException('Breed not found');
    }

    return breed;
  }

  async findOneBreed(breed: string) {
    const breedEntity = await this.breedRepository.findOneBy({name: breed});
    console.log('breedEntity:' + breedEntity);

    if (breedEntity) {
      throw new BadRequestException('Breed already exists');
    }
  
    return null;
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {

    await this.findOne(id);

    console.log(await this.findOneBreed(updateBreedDto.name));

    return await this.breedRepository.update(id, {
      ...updateBreedDto,
     name: updateBreedDto.name,
    });

  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.breedRepository.softDelete({ id });
  }
}
