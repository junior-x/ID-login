import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import "./style.css";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import CadastroFinalizado from "./CadastroFinalizado";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximo} />;
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntrega aoEnviar={proximo} />;
      case 3:
        return <CadastroFinalizado />;
      default:
        return <Typography>Error</Typography>;
    }
  }
  return <>{formularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;
