import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ProdutosService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private produtoRepository: Repository<ProdutoEntity>
    ){}

    async listarTodos(): Promise<ProdutoEntity[]> {
        return this.produtoRepository.find();
    }

    async buscarProduto(id:number): Promise<ProdutoEntity> {
        return this.produtoRepository.findOneBy({ id });
    }

    async create(produto:ProdutoEntity): Promise<ProdutoEntity> {
        return await this.produtoRepository.save(produto);
    }

    async update(produto:ProdutoEntity): Promise<ProdutoEntity> {
        const id = produto.id;
        await this.produtoRepository.update(produto.id, produto);
        return this.produtoRepository.findOneBy({ id });
    }

    async delete(id:number): Promise<any> {
        return await this.produtoRepository.delete(id);
    }
}
