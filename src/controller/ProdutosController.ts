
import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutosController implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array<Produto>();
    public id: number = 0;


    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("A conta foi cadastrada com sucesso!");
    }
    listarTodas(): void {
        for(let produto of this.listaProdutos){
            produto.visualizar();
        }
    }
    procurarPorId(numero: number): void{
        let buscarId = this.buscarId(numero);

        if(buscarId !== null){
            buscarId.visualizar();
        }

        else{
            console.log("\nO produto não foi encontrado");
        }
    }
    atualizar(novoproduto: Produto): void {
       this.listaProdutos.forEach(function teste(produto){
        if(novoproduto.id === produto.id){
            produto.nome = novoproduto.nome;
            produto.preco = novoproduto.preco;
            produto.tipo = novoproduto.tipo;
        }
       })
    }

    deletar(id: number): void {
        this.listaProdutos = this.listaProdutos.filter((produto) => {
            return produto.id !== id
        })
    }

    //Metodos auxiliares
    public gerarId():number{
        return ++ this.id
    }

    public buscarId(numero: number): Produto | null{
        for(let produto of this.listaProdutos){
            if(numero === produto.id){
                return produto;
            }
        }

        return null
    }

}