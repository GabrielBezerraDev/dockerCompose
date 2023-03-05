import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
    constructor(
        private produtoService:ProdutosService
    ) {}

    @Get()
    async listarTodos(): Promise<ProdutoEntity[]>{
        return this.produtoService.listarTodos();
    }

    @Get(':id')
    async buscarProduto(@Param('id') id:number): Promise<ProdutoEntity>{
        return this.produtoService.buscarProduto(id);
    }

    @Post('buscarvarios')
    async buscarVariosProdutos(@Body() body:{ termo:string }): Promise<ProdutoEntity[]> {
        return this.produtoService.buscarVarios(body.termo);
    }

    @Post()
    async create(@Body() produto:ProdutoEntity): Promise<ProdutoEntity>{
        return this.produtoService.create(produto);
    }

    @Put()
    async update(@Body() produto:ProdutoEntity): Promise<ProdutoEntity>{
        return this.produtoService.update(produto);
    }

    @Delete(':id')
    async delete(@Param('id') id:number): Promise<any>{
        this.produtoService.delete(id);
    }
}