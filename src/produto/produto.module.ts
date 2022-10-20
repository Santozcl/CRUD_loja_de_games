import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaModule } from "src/categoria/categoria.module";
import { ProdutoController } from "./controllers/produto.controller";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./service/produto.service";

@Module({
imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
providers: [ProdutoService],
controllers: [ProdutoController],
exports: [TypeOrmModule]
})

export class ProdutoModule{}