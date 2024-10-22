const infoTragos = [
    "Fernet: Originario de Italia. Dato curioso: Se toma con coca",
    "Cerveza: Originaria de Mesopotamia. Dato curioso: Hay más de 100 tipos",
    "Vino: Originario de la Antigua Persia. Dato curioso: Se elabora con uvas",
    "Gancia: Originario de Italia. Dato curioso: El aperitivo mas elegido por las maestras de nivel inicial"
  ];
  
  function mostrarMensajeDeEleccion(trago) {
    switch (trago) {
      case 1:
        alert("¡Si no hay Fernet que no haya nada!");
        break;
      case 2:
        alert("¡Reconozco que la rueda también es un buen invento pero no va tan bien con la pizza!");
        break;
      case 3:
        alert("¡Ojo, cuando el vino entra, la verdad sale!");
        break;
      case 4:
        alert("¡Quiere vestirse de cerveza para que la tomen en serio!");
        break;
      default:
        alert("Opción inválida.");
        break;
    }
  
    if (trago >= 1 && trago <= infoTragos.length) {
        alert(infoTragos[trago - 1]);
        console.log("Elegiste la opción:", trago);
    }
  }
  
  function obtenerEleccionUsuario(mensajeMenu) {
    let menu = parseInt(prompt(mensajeMenu));
    return menu;
  }

  function ejecutarSimulador(mensajeDespedida) {
    let continuar = true;
  
    while (continuar) {
      let eleccion = obtenerEleccionUsuario("Elija su trago preferido para saber más:\n 1-Fernet\n 2-Cerveza\n 3-Vino\n 4-Gancia\n 5-Salir");
  
      if (eleccion === 5) {
        continuar = false;
        alert(mensajeDespedida);
      } else {
        mostrarMensajeDeEleccion(eleccion);
      }
    }
  }
  
  ejecutarSimulador("¡Gracias y beba con moderación!");
  