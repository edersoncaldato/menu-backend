import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

export class CategoryService {
    @InjectRepository(Category) 
    constructor( 
        private readonly categoryRepository: Repository<Category> 
    ) {
        
    }

    findAll(): Promise<Category[]> {
        return this.categoryRepository.find({
            order: { name: 'ASC' }
        });
    }

    findOne(id: string): Promise<Category> {
        const category = this.categoryRepository.findOneBy({ id });

        if(!category) {
            throw new NotFoundException('Categoria não encontrada');
        }
        return category;
    }

    create(): Promise<Category> {
        
    }

    update(): Promise<Category> {

    }

    remove(): Promise<void> {

    }
}