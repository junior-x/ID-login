///import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <section className="App-header">
          <h1 className="App-header_text">FORMULÁRIO DE CADASTRO</h1>
        </section>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
