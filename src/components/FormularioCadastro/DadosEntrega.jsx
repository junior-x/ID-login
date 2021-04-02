import { TextField, Button } from "@material-ui/core";
import React from "react";
import "./style.css"

function DadosEntrega({aoEnviar}) {
  return (
    <form 
        className="formulario-cadastro_model formulario-cadastro_background"
        onSubmit={(event)=>{
        event.preventDefault();
        aoEnviar();}}
    >
      <TextField
        id="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereco"
        label="endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="texte"
        variant="outlined"
        margin="normal"
      />
      <Button
        type="submit"
        variant="outlined"
        color="secondary"
        className="formulario-cadastro_checkbox"
        fullWidth
          >
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
