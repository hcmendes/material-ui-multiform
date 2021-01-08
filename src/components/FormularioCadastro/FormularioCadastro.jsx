import React, { useState, useEffect } from "react";
import { StepLabel, Stepper, Step, Typography } from "@material-ui/core";

import DadosPessoais from "./DadosPessoais";
import DadosCadastro from "./DadosCadastro";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar }) {

  const [dadosColetados, setDados] = useState({});

  function coletarDados(dados) {
    setDados({
      ...dadosColetados,
      ...dados
    });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  const [etapaAtual, setEtapaAtual] = useState(0);
  const formularios = [
    <DadosCadastro aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  useEffect(() => {
    if (etapaAtual === (formularios.length - 1)) {
      aoEnviar(dadosColetados);
    }
  });

  return (
    <>
    <Stepper activeStep={etapaAtual}>
      <Step>
        <StepLabel>Login</StepLabel>
      </Step>

      <Step>
        <StepLabel>Pessoal</StepLabel>
      </Step>

      <Step>
        <StepLabel>Entrega</StepLabel>
      </Step>

      <Step>
        <StepLabel>Finalização</StepLabel>
      </Step>
    </Stepper>

    {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
