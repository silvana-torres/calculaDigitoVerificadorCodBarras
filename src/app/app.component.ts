import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public onClick() {}

  public calculaDigitoVerificador() {
    let digitoVerificador = 0;

    const banco = '237';
    const moeda = '9';
    const dataVencimento = '2025/02/21';
    let dataBase = '1997/10/07';
    const valorFatura = '199658'; //com duas casas decimais mas sem separador
    const agencia = '6349';
    const carteira = '19';
    const nossoNumero = '00000000002';
    const conta = '0221782';
    const zero = '0';
    let fatorVencimento = 0;

    if (dataVencimento >= '2025/02/22') {
      dataBase = '2025/02/22';

      fatorVencimento =
        1000 + Date.parse(dataVencimento) - Date.parse(dataBase);
    } else {
      fatorVencimento = Date.parse(dataVencimento) - Date.parse(dataBase);
    }

    console.log('fatorVencimento', fatorVencimento);
    console.log(fatorVencimento / (1000 * 60 * 60 * 24));

    const codigoParte1 = banco + moeda;
    console.log('codigoParte1', codigoParte1);
    const codigoParte2 =
      fatorVencimento.toString() +
      valorFatura +
      agencia +
      carteira +
      nossoNumero +
      conta +
      zero;

    console.log('codigoParte2', codigoParte2);

    //fator de multiplicação => 4329876543298765432987654329876543298765432

    const posicao1C = Number(codigoParte1.substr(0, 1)) * 4;
    const posicao2C = Number(codigoParte1.substr(1, 1)) * 3;
    const posicao3C = Number(codigoParte1.substr(2, 1)) * 2;
    const posicao4C = Number(codigoParte1.substr(3, 1)) * 9;

    const posicao6C = Number(codigoParte2.substr(0, 1)) * 8;
    const posicao7C = Number(codigoParte2.substr(1, 1)) * 7;
    const posicao8C = Number(codigoParte2.substr(2, 1)) * 6;
    const posicao9C = Number(codigoParte2.substr(3, 1)) * 5;
    const posicao10C = Number(codigoParte2.substr(4, 1)) * 4;
    const posicao11C = Number(codigoParte2.substr(5, 1)) * 3;
    const posicao12C = Number(codigoParte2.substr(6, 1)) * 2;
    const posicao13C = Number(codigoParte2.substr(4, 1)) * 9;
    const posicao14C = Number(codigoParte2.substr(8, 1)) * 8;
    const posicao15C = Number(codigoParte2.substr(9, 1)) * 7;
    const posicao16C = Number(codigoParte2.substr(10, 1)) * 6;
    const posicao17C = Number(codigoParte2.substr(11, 1)) * 5;
    const posicao18C = Number(codigoParte2.substr(12, 1)) * 4;
    const posicao19C = Number(codigoParte2.substr(13, 1)) * 3;
    const posicao20C = Number(codigoParte2.substr(14, 1)) * 2;
    const posicao21C = Number(codigoParte2.substr(15, 1)) * 9;
    const posicao22C = Number(codigoParte2.substr(16, 1)) * 8;
    const posicao23C = Number(codigoParte2.substr(17, 1)) * 7;
    const posicao24C = Number(codigoParte2.substr(18, 1)) * 6;
    const posicao25C = Number(codigoParte2.substr(19, 1)) * 5;
    const posicao26C = Number(codigoParte2.substr(20, 1)) * 4;
    const posicao27C = Number(codigoParte2.substr(21, 1)) * 3;
    const posicao28C = Number(codigoParte2.substr(22, 1)) * 2;
    const posicao29C = Number(codigoParte2.substr(23, 1)) * 9;
    const posicao30C = Number(codigoParte2.substr(24, 1)) * 8;
    const posicao31C = Number(codigoParte2.substr(25, 1)) * 7;
    const posicao32C = Number(codigoParte2.substr(26, 1)) * 6;
    const posicao33C = Number(codigoParte2.substr(27, 1)) * 5;
    const posicao34C = Number(codigoParte2.substr(28, 1)) * 4;
    const posicao35C = Number(codigoParte2.substr(29, 1)) * 3;
    const posicao36C = Number(codigoParte2.substr(30, 1)) * 2;
    const posicao37C = Number(codigoParte2.substr(31, 1)) * 9;
    const posicao38C = Number(codigoParte2.substr(32, 1)) * 8;
    const posicao39C = Number(codigoParte2.substr(33, 1)) * 7;
    const posicao40C = Number(codigoParte2.substr(34, 1)) * 6;
    const posicao41C = Number(codigoParte2.substr(35, 1)) * 5;
    const posicao42C = Number(codigoParte2.substr(36, 1)) * 4;
    const posicao43C = Number(codigoParte2.substr(37, 1)) * 3;
    const posicao44C = Number(codigoParte2.substr(38, 1)) * 2;

    const soma =
      posicao1C +
      posicao2C +
      posicao3C +
      posicao4C +
      posicao6C +
      posicao7C +
      posicao8C +
      posicao9C +
      posicao10C +
      posicao11C +
      posicao12C +
      posicao13C +
      posicao14C +
      posicao15C +
      posicao16C +
      posicao17C +
      posicao18C +
      posicao19C +
      posicao20C +
      posicao21C +
      posicao22C +
      posicao23C +
      posicao24C +
      posicao25C +
      posicao26C +
      posicao27C +
      posicao28C +
      posicao29C +
      posicao30C +
      posicao31C +
      posicao32C +
      posicao33C +
      posicao34C +
      posicao35C +
      posicao36C +
      posicao37C +
      posicao38C +
      posicao39C +
      posicao40C +
      posicao41C +
      posicao42C +
      posicao43C +
      posicao44C;

    console.log('soma', soma);

    const modulo = soma % 11;

    console.log('modulo', modulo);
    let digito = 11 - modulo;

    if (digito == 0 || digito == 1 || digito > 9) {
      digito = 1;
    }

    console.log(digito);
  }
}
