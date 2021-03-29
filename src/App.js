import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <Fragment>
        <section className="App-header">
          <h1 className="App-header_text">FORMULÁRIO DE CADASTRO</h1>
        </section>
        <FormularioCadastro />
      </Fragment>
    );
  }
}

export default App;
