import { Produto } from "../model/Produto";

export interface ProdutoRepository{
    
    //Métodos CRUD
    cadastrar(produto: Produto):void;
    listarTodas():void;
    procurarPorId(numero: number):void;
    atualizar(produto: Produto):void;
    deletar(id: number):void;

}