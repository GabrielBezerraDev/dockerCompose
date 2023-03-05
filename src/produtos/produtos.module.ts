import { Module } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntity])],
  controllers: [ProdutosController],
  providers: [ProdutosService]
})
export class ProdutosModule {}
