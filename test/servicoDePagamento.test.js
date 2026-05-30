import { ServicoDePagamento } from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('Classe de Serviço de Pagamento', function() {
    it('Validar que a categoria seja padrão para valor menor que 100.00', () => {
        //Arrange
        const servicoPagamento = new ServicoDePagamento();
        //Act
        servicoPagamento.pagar('0987-7656-3475', 'Internet', 99.99);
        const ultimoPagamento = servicoPagamento.consultarUltimoPagamento();
        //Assert
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

    it('Validar explicitamente o caso de borda para valor igual a 100.00', () => {
        //Arrange
        const servicoPagamento = new ServicoDePagamento();
        //Act
        servicoPagamento.pagar('1234-5678-9000', 'Condomínio', 100.00);
        const ultimoPagamento = servicoPagamento.consultarUltimoPagamento();
        //Assert
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

    it('Validar que a categoria seja cara para pagamento acima de 100.00', () => {
        //Arrange
        const servicoPagamento = new ServicoDePagamento();

        //Act
        servicoPagamento.pagar('0987-7656-3475', 'Energia', 140.00);
        const ultimoPagamento = servicoPagamento.consultarUltimoPagamento();

        //Assert
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('Validar que o objeto retornado contém todas as propriedades esperadas', () => {
        //Arrange
        const servicoPagamento = new ServicoDePagamento();

        //Act
        servicoPagamento.pagar('0987-7656-3475', 'Energia', 140.00);
        const ultimoPagamento = servicoPagamento.consultarUltimoPagamento();

        //Assert
        assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Energia');
        assert.equal(ultimoPagamento.valor, 140.00);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });


    it('Validar que após vários pagamentos a consulta retorne somente o mais recente', () => {
        //Arrange
        const servicoPagamento = new ServicoDePagamento();

        //Act
        servicoPagamento.pagar('0987-7656-3475', 'Energia', 140.00);
        servicoPagamento.pagar('1234-5678-9000', 'Condomínio', 100.00);
        servicoPagamento.pagar('0987-7656-3475', 'Internet', 99.99);
        const ultimoPagamento = servicoPagamento.consultarUltimoPagamento();

        //Assert
        assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Internet');
        assert.equal(ultimoPagamento.valor, 99.99);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });
});
