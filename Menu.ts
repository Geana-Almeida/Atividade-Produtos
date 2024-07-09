import readlinesync = require("readline-sync");
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";
import { colors } from "./src/util/Colors";
import { ProdutosController } from "./src/controller/ProdutosController";


export function main(){
    let opcao, id, tipo,  preco: number;
    let nome, generico, fragancia: string;
    const tipoProduto = ['Medicamento', 'Cosmetico'];

    const produto: ProdutosController = new ProdutosController();
    

    while(true){
        console.log(colors.bg.black, colors.fg.yellowstrong);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("               Produto da Dona Benta                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos as Produtos             ");
        console.log("            3 - Consultar Produto por Id             ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     "
    ,colors.reset);
    
    

        console.log("Informa a opção que deseja: ")
        opcao = readlinesync.questionInt("")

        if(opcao === 6){
            console.log("\nProdutos da Dona Benta agradece pela preferencia!!");
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("\n\nCadastrar novo produto\n\n");
                console.log("Digite o nome do produto: ");
                nome = readlinesync.question("");

                console.log("Digite o preço do produto: ");
                preco = readlinesync.questionFloat("");

                console.log("Digite o tipo do produto: ");
                tipo = readlinesync.keyInSelect(tipoProduto, "", {cancel : false}) + 1; //+1 pois indice cmc com 0;

                switch(tipo){
                    case 1:
                        console.log("Digite o nome do medicamento generico: ");
                        generico = readlinesync.question("");
                        produto.cadastrar(
                            new Medicamento(produto.gerarId(), nome, tipo, preco, generico)
                        )
                        break;

                    case 2:
                        console.log("Digite a fragancia do produto:");
                        fragancia = readlinesync.question("");
                        produto.cadastrar(
                            new Cosmetico(produto.gerarId(), nome, tipo, preco, fragancia)
                        )
                        break;
                }


                break;
            case 2: 
                console.log("\n\nListar todos os Produtos\n\n");
                produto.listarTodas();
                break;

            case 3:
                console.log("\n\nConsultar Id do produto");
                console.log("Digite o id do produto")
                id = readlinesync.questionInt("");

                produto.procurarPorId(id);
                break;

            case 4:
                console.log("\n\nAtualizar produto\n\n");
                console.log("Digite o id do produto que deseja atualizar: ");
                id = readlinesync.questionInt("");

                if(produto.buscarId(id) !== null){
                    console.log("Digite o nome do produto: ");
                    nome = readlinesync.question("");

                    console.log("Digite o preço do produto: ");
                    preco = readlinesync.questionFloat("");

                    console.log("Digite o tipo do produto: ");
                    tipo = readlinesync.keyInSelect(tipoProduto, "", {cancel : false}) + 1; //+1 pois indice cmc com 0;

                    switch(tipo){
                        case 1:
                            console.log("Digite o nome do medicamento generico: ");
                            generico = readlinesync.question("");
                            produto.atualizar(
                                new Medicamento(id, nome, tipo, preco, generico)
                            )
                            break;

                        case 2:
                            console.log("Digite a fragancia do produto:");
                            fragancia = readlinesync.question("");
                            produto.atualizar(
                                new Cosmetico(id, nome, tipo, preco, fragancia)
                            )
                            break;
                    }   
                }
                break;

            case 5:
                console.log("\n\nConsultar Id do produto");
                console.log("Digite o id do produto")
                id = readlinesync.questionInt("");

                if(produto.buscarId(id) !== null){
                    produto.deletar(id);
                }

                else{
                    console.log("Id não existe.")
                }
                
                break;
            default:
                console.log("Opção inválida. Digite novamente a opção.");
        }
    
    }   
}

main()