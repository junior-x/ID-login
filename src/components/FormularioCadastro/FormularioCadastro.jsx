import React, { useEffect, useState } from "react";
import "./style.css";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import CadastroFinalizado from "./CadastroFinalizado";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    console.log(dadosColetados);
  })

  const formularios = [
    <DadosUsuario aoEnviar={ColetarDados} />,
    <DadosPessoais aoEnviar={ColetarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={ColetarDados} />,
    <CadastroFinalizado />,
  ];

  function ColetarDados(dados){
    setDados({...dadosColetados, ...dados}) ;
    proximo();
  }

  function proximo(dados) {
    setEtapaAtual(etapaAtual + 1);
  }
  return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro; 