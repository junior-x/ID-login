///import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm" className="App-canvas">
        <section className="App-header">
          <h1 className="App-header_text">FORMULÁRIO DE CADASTRO</h1>
        </section>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length!== 11){
    return{valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return{valido:true, texto:""}
  }
}

export default App;
