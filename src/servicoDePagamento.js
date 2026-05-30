export class ServicoDePagamento {
    #pagamentos // Propriedade Privada

    constructor () { //Primeiro método a ser executado quando usar a Classe
        this.#pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) { //Método
        this.#pagamentos.push({
            codigoBarras,
            empresa,
            valor,
            categoria: valor > 100 ? 'cara' : 'padrão'
        });
    }

    consultarUltimoPagamento() {
        return this.#pagamentos[this.#pagamentos.length - 1];
    }
}

/*
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. Pagamentos serão 
armazenados como objetos Javascript dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: Código de Barras, 
Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade 'categoria' 
preenchida pela função como 'cara', caso contrário, a propriedade 'categoria' será preenchida pela função como 'padrão'. O método de 
consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
  
  A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe 
  dentro da pasta test usando Mocha e Node Assert.

1. Entradas
    - codigoBarras: código de barras do pagamento em formato de texto.
    - empresa: nome da empresa recebedora do pagamento.
    - valor: valor numérico do pagamento.

2. Regras
    - O serviço deve possuir um método para realizar pagamento;
    - O serviço deve possuir um método para consultar o último pagamento realizado;
    - Cada pagamento deve ser armazenado como um objeto Javascript em uma lista de pagamentos;
    - Todo pagamento deve conter as propriedades codigoBarras, empresa e valor;
    - Se o valor for maior que 100.00, a categoria deve ser 'cara';
    - Se o valor for menor ou igual a 100.00, a categoria deve ser 'padrão'.

3. Processamento
    - No método pagar, receber codigoBarras, empresa e valor.
    - Montar um objeto com codigoBarras, empresa, valor e categoria.
    - Definir a categoria de acordo com a regra de valor.
    - Adicionar esse objeto à lista de pagamentos.
    - No método consultarUltimoPagamento, retornar somente o último pagamento registrado.

4. Saídas
    - Ao pagar: registro do pagamento armazenado internamente na lista.
    - Ao consultar: objeto contendo codigoBarras, empresa, valor e categoria do último pagamento.
  */
