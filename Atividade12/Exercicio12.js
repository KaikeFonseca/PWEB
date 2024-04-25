//PARTE 1 - RETANGULO
/*var base = parseFloat(prompt("Informe a base do retângulo: "));
var altura = parseFloat(prompt("Informe a altura do retângulo: "));

function Retangulo(base, altura){
    this.base = base;
    this.altura = altura;

    this.calcularArea = function(){
        return base*altura;
    }
}

var retangulo1 = new Retangulo(base, altura);
alert("Base: " + retangulo1.base + "\nAltura: " + retangulo1.altura + "\nÁrea do retângulo: " + retangulo1.calcularArea())
*/
//PARTE 2 - CONTA BANCARIA

class Conta{
    constructor(){
        this._nomeCorrentista;
        this._banco;
        this._numConta;
        this._saldo;
    }
    setNome(value){
        this._nomeCorrentista = value;
    }
    getNome(){
        return this._nomeCorrentista;
    }
    setBanco(value){
        this._banco = value;
    }
    getBanco(){
        return this._banco;
    }
    setNumConta(value){
        this._numConta = value;
    }
    getNumConta(){
        return this._numConta;
    }
    setSaldo(value){
        this._saldo = value;
    }
    getSaldo(){
        return this._saldo;
    }
}

class contaCorrente extends Conta{
    constructor(){
        super();
        this._saldoEspecial;
    }
    setSaldoEspecial(value){
        this._saldoEspecial = value;
    }
    getSaldoEspecial(){
        return this._saldoEspecial;
    }
}

class contaPoupanca extends Conta{
    constructor(){
        super();
        this._juros;
        this._dtVencimento;
    }
    setJuros(value){
        this._juros = value;
    }
    getJuros(){
        return this._juros;
    }
    setDtVencimento(value){
        this._dtVencimento = value;
    }
    getDtVencimento(){
        return this._dtVencimento;
    }
}

var nome, banco, numConta, Saldo;

function recebe(){
     nome = prompt("Informe o nome: ");
     banco = prompt("Informe o banco: ");
     numConta = parseInt(prompt("Informe o número da conta: "));
     saldo = parseFloat(prompt("Informe o saldo: "))
}

var x = parseInt(prompt("Deseja criar qual tipo de conta:\nConta corrente --- 1\nConta Poupança --- 2"))

if(x == 1){
    //pegando os dados q são da Classe Pai
    recebe();

    //pegando os dados da classe filha
    var saldoEspecial = parseFloat(prompt("Informe o saldo especial: "));
    
    //criando o obj
    var contaNovaCorrente = new contaCorrente();
    
    //atribuindo os valores do obj
    contaNovaCorrente.setNome(nome);
    contaNovaCorrente.setBanco(banco);
    contaNovaCorrente.setNumConta(numConta);
    contaNovaCorrente.setSaldo(saldo);
    contaNovaCorrente.setSaldoEspecial(saldoEspecial);

    alert("Nome da conta: " + contaNovaCorrente.getNome() + "\nNome do banco: " + contaNovaCorrente.getBanco() + "\nNúmero da conta: " + contaNovaCorrente.getNumConta() + "\nSaldo: " + contaNovaCorrente.getSaldo() + "\nSaldo Especial: " + contaNovaCorrente.getSaldoEspecial());
} else{
    //pegando os dados q são da Classe Pai
    recebe();

    //pegando os dados da classe filha
    var juros = parseFloat(prompt("Informe o juros: "));
    var dataVencimento = prompt("Informe data de vencimento: ");
    
    //criando o obj
    var contaNovaPoupanca = new contaPoupanca();
    
    //atribuindo os valores do obj
    contaNovaPoupanca.setNome(nome);
    contaNovaPoupanca.setBanco(banco);
    contaNovaPoupanca.setNumConta(numConta);
    contaNovaPoupanca.setSaldo(saldo);
    contaNovaPoupanca.setJuros(juros);
    contaNovaPoupanca.setDtVencimento(dataVencimento);

    alert("Nome da conta: " + contaNovaPoupanca.getNome() + "\nNome do banco: " + contaNovaPoupanca.getBanco() + "\nNúmero da conta: " + contaNovaPoupanca.getNumConta() + "\nSaldo: " + contaNovaPoupanca.getSaldo() + "\nJuros: " + contaNovaPoupanca.getJuros() + "%" + "\nData de vencimento: " + contaNovaPoupanca.getDtVencimento());
}