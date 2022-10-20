import { Controller, Get, HttpCode, Param } from "@nestjs/common";
import { Body, Delete, Post, Put } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../service/produto.service";

@Controller('/produto')
export class ProdutoController{
    constructor(
        private readonly produtoService: ProdutoService
    ){}
   
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]>{
        return this.produtoService.findall();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto>{
        return this.produtoService.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Produto[]>{
        return this.produtoService.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    creat(@Body()produto: Produto): Promise<Produto>{
        return this.produtoService.create(produto)
    }
    
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()produto: Produto): Promise<Produto>{
        return  this.produtoService.update(produto)
    }
    

    @Delete()
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id,', ParseIntPipe) id: number){
        return this.produtoService.delete(id)
    }
}


