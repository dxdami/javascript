//declaro la funcion saludar
function saludar() {
    alert(
      "Bienvenido" +
        nombre +
        " a continuacion podra escojer productos de la tienda"
    );
  }
  // declaro la funcion comprar producto
  function comprarProducto() {
    producto = prompt(
      "elija uno de nuestros productos \n 1: Six pack de cerveza  \n 2: caja de vinos \n 3: energizantes"
    );
  
    if (producto === "1") {
      alert(" elegiste six pack de cerveza");
    } else if (producto === "2") {
      alert(" elegiste caja de vinos");
    } else if (producto === "3") {
      alert(" elegiste energizantes");
    }
    //aca vuelvo a preguntar por el prompt de opcion para terminar el proceso
    opcion = prompt(
      "vuelva a ingresar una opcion \n 1: comprar bebida \n 2: mostrar precios finales  \n 3: terminar"
    );
  }
  // declaro la funcion finalizar compra
  function finalizarCompra() {
    if (producto === "1") {
      alert(
        "usted eligio six pack de cerveza final de " +
          sixPack * 1.21
      );
    } else if (producto === "2") {
      alert(
        "usted eligio caja de vinos  por un monto  final de " +
          cajaVino * 1.21
      );
    } else if (producto == "3") {
      alert(
        "usted eligio energizantes por un monto  final de " +
          energizante * 1.21
      );
    }
  }
  
  // main
  //declaro variables
  let producto;
  let sixPack = 1500;
  let cajaVino = 2500;
  let energizante = 2000;
  let nombre = prompt("ingrese su nombre");
  //llamo a la funcion saludar
  saludar();
  let opcion = prompt(
    "ingrese una opcion: \n 1: comprar bebida \n 2: finalizar compra  \n 3: terminar  "
  );
  //agrego bucle while, mientras la opcion no sea 3...
  while (opcion !== "3") {
    if (opcion === "1") {
      comprarProducto();
    }
    if (opcion === "2") {
      //si ingreso la opcion dos, llamo a la funcion finalizarCompra
      //y le asigno el "3" a opcion para que corte el bucle
      finalizarCompra();
      opcion = "3";
    }
  }
  
  alert("gracias por su compra");