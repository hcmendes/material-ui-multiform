import React, { useState, useContext } from 'react';
import { TextField, Button } from "@material-ui/core";

import ValidacoesCadastroContext from "../../contexts/ValidacoesCadastroContext";
import useErros from "../../hooks/useErros";

function DadosCadastro({ aoEnviar }) {

  const validacoes = useContext(ValidacoesCadastroContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, validarCampos, possoProsseguir] = useErros(validacoes);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (possoProsseguir()) {
        aoEnviar({ email, senha });
      }
    }}>
      <TextField 
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email" 
        label="Email" 
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth />

      <TextField 
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha" 
        label="Senha" 
        name="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth />

      <Button type="submit" 
        variant="contained" 
        color="primary">

        Próximo
      </Button>
    </form>
  )
}

export default DadosCadastro;