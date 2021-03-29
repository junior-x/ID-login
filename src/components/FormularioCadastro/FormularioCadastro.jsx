import React from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

function FormularioCadastro() {
  return (
    <form className="formulario-cadastro_model formulario-cadastro_background">
     
      <section className="formulario-cadastro_box">
        <form
          noValidate
          autoComplete="off"
          className="formulario-cadastro_text"
        >
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
        </form>

        <form
          noValidate
          autoComplete="off"
          className="formulario-cadastro_text"
        >
          <TextField id="outlined-basic" label="Sobrenome" variant="outlined" />
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
