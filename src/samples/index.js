"use strict";
/**
 * Type Assertion
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var valor = 123;
console.log("Type assertion: ".concat(typeof valor, " (").concat(valor, ")"));
var valorStr = valor;
console.log("Type assertion: ".concat(typeof valorStr, " (").concat(valorStr, ")"));
var valores = ['texto1', 123, true, []];
valores[0] = 123;
var valoresTuple = valores;
valoresTuple[0] = '123';
var criaSerVivo = function (nome, idade) {
    return {
        nome: nome,
        idade: idade,
        morre: function () { }
    };
};
var criaVegetal = function (serVivo, localizacao) {
    var vegetal = serVivo;
    vegetal.localizacao = localizacao;
    return vegetal;
};
var criaAnimal = function (serVivo, peso) {
    var animal = serVivo;
    animal.peso = peso;
    return animal;
};
var cachorro = criaSerVivo('cachorro', 1);
cachorro = criaAnimal(cachorro, 5);
console.log(cachorro.peso);
var margarida = criaSerVivo('margarida', 1);
margarida = criaVegetal(margarida, { latitude: 19.000, longitude: 123 });
console.log(typeof margarida);
var Ser = /** @class */ (function () {
    function Ser(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Ser.prototype.morre = function (data) {
        this.dbObito = data;
    };
    return Ser;
}());
var SerAnimal = /** @class */ (function () {
    function SerAnimal(serVivo, peso) {
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.peso = peso;
    }
    SerAnimal.prototype.morre = function (data) {
        this.dbObito = data;
    };
    return SerAnimal;
}());
var SerVegetal = /** @class */ (function () {
    function SerVegetal(serVivo, localizacao) {
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.localizacao = localizacao;
    }
    SerVegetal.prototype.morre = function (data) {
        this.dbObito = data;
    };
    return SerVegetal;
}());
var serGato = new Ser('gato', 1);
var gato = new SerAnimal(serGato, 5);
var serRosa = new Ser('rosa', 1);
var rosa = new SerVegetal(serRosa, { latitude: 19, longitude: 43 });
gato.morre(new Date());
rosa.morre(new Date());
console.log(gato);
console.log(rosa);
/**
 * Heranca
 */
var SerAnimal1 = /** @class */ (function (_super) {
    __extends(SerAnimal1, _super);
    function SerAnimal1(nome, idade, peso) {
        var _this = _super.call(this, nome, idade) || this;
        _this.peso = peso;
        return _this;
    }
    return SerAnimal1;
}(Ser));
var SerVegetal1 = /** @class */ (function (_super) {
    __extends(SerVegetal1, _super);
    function SerVegetal1(nome, idade, localizacao) {
        var _this = _super.call(this, nome, idade) || this;
        _this.localizacao = localizacao;
        return _this;
    }
    return SerVegetal1;
}(Ser));
var galinha = new SerAnimal1('galinha', 1, 2);
var camara = new SerVegetal1('camara', 1, { latitude: 19, longitude: 43 });
galinha.morre(new Date());
camara.morre(new Date());
console.log(galinha);
console.log(camara);
var Ser2 = /** @class */ (function () {
    function Ser2(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Ser2.prototype.morre = function (data) {
        this.dtObito = data;
    };
    Ser2.prototype.mudaNome = function (nome) {
        this.nome = nome;
    };
    return Ser2;
}());
// const ser1 = new Ser2('cavalo', 12);
// ser1.mudaNome('burro');
var SerAnimal2 = /** @class */ (function (_super) {
    __extends(SerAnimal2, _super);
    function SerAnimal2(nome, idade, peso) {
        var _this = _super.call(this, nome, idade) || this;
        _this.peso = peso;
        return _this;
    }
    return SerAnimal2;
}(Ser2));
var SerVegetal2 = /** @class */ (function (_super) {
    __extends(SerVegetal2, _super);
    function SerVegetal2(nome, idade, localizacao) {
        var _this = _super.call(this, nome, idade) || this;
        _this.localizacao = localizacao;
        _this.localizacao = localizacao;
        return _this;
    }
    return SerVegetal2;
}(Ser2));
var zebra = new SerAnimal2('zebra', 10, 200);
var mangueira = new SerVegetal2('mangueira', 20, { latitude: 19, longitude: 43 });
zebra.mudaNome('zebra 1');
zebra.morre(new Date());
mangueira.morre(new Date());
console.log(zebra);
console.log(mangueira);
