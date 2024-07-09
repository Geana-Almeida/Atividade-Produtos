export abstract class Produto{
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;


	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}


	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}


	public get tipo(): number {
		return this._tipo;
	}


	public get preco(): number {
		return this._preco;
	}


	public set id(value: number) {
		this._id = value;
	}


	public set nome(value: string) {
		this._nome = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}


	public set preco(value: number) {
		this._preco = value;
	}

    public visualizar():void{
        console.log("*************************************************");
        console.log("Produto da Dona Benta");
        console.log("*************************************************");
        console.log(`ID do Produto: ${this.id}`);
        console.log(`Nome do produto: ${this.nome}`);
        console.log(`Tipo do Produto: ${this.tipo}`);
        console.log(`Preço do produto: ${this.preco}`)
    }

}