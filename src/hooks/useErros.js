import { useState } from 'react';

function useErros(validacoes) {

  function criarEstadoInicial() {
    const estadoInicial = {};

    for (const campo in validacoes) {
      estadoInicial[campo] = { valido: true, texto: "" };
    }

    return estadoInicial;
  }

  const [erros, setErros] = useState(criarEstadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const ehValido = validacoes[name](value);

    setErros({
      ...erros,
      [name]: ehValido
    });
  }

  function possoProsseguir() {
    for (const campo in erros) {
      if (!erros[campo].valido) return false;
    }

    return true;
  }

  return [erros, validarCampos, possoProsseguir];
}

export default useErros;