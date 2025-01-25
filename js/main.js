const infoJugadores = [
    "Mediapunta/Mediocentro ofensivo: Ebox-to-box con excelente visión de juego, capacidad de llegada al área y potente remate.",
    "Delantero/Extremo derecho: Atacante versátil, alta movilidad, definición precisa y capacidad de desequilibrio.",
    "Delantero centro: Nueve puro, especialista en definición, movimientos sin balón y juego de espaldas.",
    "Segundo delantero/Mediapunta: Mediapunta polivalente, capacidad de asociación, repliegue táctico y llegada al gol.",
  ];
  
  function mostrarMensajeDeEleccion(jugador) {
    switch (jugador) {
      case 1:
        alert("Jude Bellingham (Real Madrid)");
        break;
      case 2:
        alert("Julián Álvarez (Atlético de Madrid)");
        break;
      case 3:
        alert("Robert Lewandowski (Barcelona F.C.)");
        break;
      case 4:
        alert("Antoine Griezmann (Atlético de Madrid)");
        break;
      default:
        alert("Opción inválida.");
        break;
    }
  
    if (jugador >= 1 && jugador <= infoJugadores.length) {
        alert(infoJugadores[jugador - 1]);
        console.log("Elegiste la opción:", jugador);
    }
  }
  
  function obtenerEleccionUsuario(mensajeMenu) {
    let menu = parseInt(prompt(mensajeMenu));
    return menu;
  }

  function ejecutarSimulador(mensajeDespedida) {
    let continuar = true;
  
    while (continuar) {
      let eleccion = obtenerEleccionUsuario("Elija un jugador para saber más:\n 1-Jude Bellingham\n 2-Julián Álvarez\n 3-Robert Lewandowski\n 4-Antoine Griezmann\n 5-Salir");
  
      if (eleccion === 5) {
        continuar = false;
        alert(mensajeDespedida);
      } else {
        mostrarMensajeDeEleccion(eleccion);
      }
    }
  }
  
  ejecutarSimulador("Hasta pronto");
  