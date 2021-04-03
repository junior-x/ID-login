import React, { useState } from "react";
import "./style.css";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import CadastroFinalizado from "./CadastroFinalizado";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={proximo} />,
    <CadastroFinalizado />,
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;