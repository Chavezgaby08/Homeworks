function verificarNumero(numero) {
  if (numero % 2 === 0) {
    console.log("El número es PAR");
  } else {
    console.log("El número es IMPAR");
  }
}

verificarNumero(4);
verificarNumero(7);

const verificarNumeroArrow = (numero) => {
  if (numero % 2 === 0) {
    console.log("El número es PAR");
  } else {
    console.log("El número es IMPAR");
  }
};

verificarNumeroArrow(10);
verificarNumeroArrow(3);