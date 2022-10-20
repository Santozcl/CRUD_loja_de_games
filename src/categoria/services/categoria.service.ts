import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";

import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";

@Injectable()
export class CategoriaService{

   constructor(
      @InjectRepository(Categoria)
      private  categoriaRepository: Repository<Categoria>,

   ){}

   async findall(): Promise<Categoria[]>{
      return await this.categoriaRepository.find({
         relations:{
            produto: true
         }
      })
   }

   async findById(id:number): Promise<Categoria>{
      let categoria = await this.categoriaRepository.findOne({
         where:{
            id
         },
         relations:{
            produto: true
         }
      });

      if (!categoria)
      throw new HttpException('Categoria não encontrada',HttpStatus.NOT_FOUND)
      return categoria
   }

   async findbyMarca(marca: string): Promise<Categoria[]>{
      return await this.categoriaRepository.find({
         where:{
            marca: ILike (`%${marca}%`)
         },
         relations:{
            produto: true

         }
      })
   }
   
   async create(categoria: Categoria): Promise<Categoria>{
      return await this.categoriaRepository.save(categoria);

   }

   async update(categoria: Categoria): Promise<Categoria>{
      let buscaCategoria: Categoria = await this.findById(categoria.id)

      if(! buscaCategoria || !categoria.id)
         throw new HttpException('Categoria não encontrada ', HttpStatus.NOT_FOUND)

     return await this.categoriaRepository.save(categoria) 
   }

   async delete(id: number): Promise<DeleteResult>{

      let buscaCategoria = await this.findById(id)

      if(!buscaCategoria)
         throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
    
      return await this.categoriaRepository.delete(id)
   }
}

