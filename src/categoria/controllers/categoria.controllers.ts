import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Body, Delete, Post, Put } from "@nestjs/common/decorators";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@Controller('/categoria')
export class CategoriaController{
   constructor(
      private readonly categoriaService: CategoriaService
   ){}

   @Get()
   @HttpCode(HttpStatus.OK)
   findAll(): Promise<Categoria[]>{
      return this.categoriaService.findall();

   }

   @Get('/:id')
   @HttpCode(HttpStatus.OK)
   findById(@Param('id', ParseIntPipe) id : number): Promise<Categoria>{
      return this.categoriaService.findById(id)

   }

   @Get('/marca/:marca')
   @HttpCode(HttpStatus.OK)
   findByMarca(@Param('marca') marca: string): Promise<Categoria[]>{
      return this.categoriaService.findbyMarca(marca)
   }

   @Post()
   @HttpCode(HttpStatus.CREATED)
   creat(@Body() categoria: Categoria): Promise<Categoria>{
      return this.categoriaService.create(categoria)
   }

   @Put()
   @HttpCode(HttpStatus.OK)
   update(@Body()categoria: Categoria): Promise<Categoria>{
      return this.categoriaService.update(categoria)
   }

   @Delete()
   @HttpCode(HttpStatus.NO_CONTENT)
   delete(@Param('id', ParseIntPipe)id : number){
      return this.categoriaService.delete(id)
   }

   

}




    

