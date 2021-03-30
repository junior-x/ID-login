import React, { useState } from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <form className="formulario-cadastro_model formulario-cadastro_background">
      <section className="formulario-cadastro_box">
        <form
          className="formulario-cadastro_text"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(nome, sobrenome);
          }}
          >
          <TextField
            value={nome}
            onChange={(event) => {
              let tmpNome = event.target.value;
              if (tmpNome.length >= 3) {
                tmpNome = tmpNome.substr(0, 3);
              }

              setNome(tmpNome);
            }}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
          />
        </form>

        <form
          noValidate
          autoComplete="off"
          className="formulario-cadastro_text"
        >
          <TextField
            value={sobrenome}
            onChange={(event) => {
              setSobrenome(event.target.value);
            }}
            id="outlined-basic"
            label="Sobrenome"
            variant="outlined"
          />
        </form>

        <form
          noValidate
          autoComplete="off"
          className="formulario-cadastro_text"
        >
          <TextField id="outlined-basic" label="CPF" variant="outlined" />
        </form>

        <label>Promoções</label>
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />

        <label>Novidades</label>
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />

        <section className="formulario-cadastro_checkbox">
          <Button
            variant="outlined"
            color="secondary"
            className="formulario-cadastro_checkbox"
          >
            Cadastrar
          </Button>
        </section>
      </section>
    </form>
  );
}

export default FormularioCadastro;
