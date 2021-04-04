import React, { useEffect, useState } from "react";
import "./style.css";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import CadastroFinalizado from "./CadastroFinalizado";
import { Step, StepIcon, Stepper } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.lenght - 1) {
      aoEnviar.log(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={ColetarDados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={ColetarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={ColetarDados} validacoes={validacoes} />,
    <CadastroFinalizado />,
  ];

  function ColetarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    console.log(dadosColetados);
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepIcon>I</StepIcon>
        </Step>
        <Step>
          <StepIcon>II</StepIcon>
        </Step>
        <Step>
          <StepIcon>III</StepIcon>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
