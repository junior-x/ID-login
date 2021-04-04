import React, { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container } from "@material-ui/core"
import { validarCPF, validarSenha} from "./models/cadastro.js";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm" className="App">
        <h1>Formulário de cadastro</h1>
       <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf:validarCPF, senha:validarSenha}} />
      </Container>
    );
    
  }
}
function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
