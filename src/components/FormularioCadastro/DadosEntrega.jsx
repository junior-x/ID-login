import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./style.css";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      className="formulario-cadastro_model formulario-cadastro_background"
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({cep, endereco, numero, estado, cidade});
      }}
    >
        <TextField 
        value={cep}
        onChange={(event) => {
          event.preventDefault();
          setCep(event.target.value)
        }}
        id="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
      value={endereco}
      onCchange={(event) => {
        event.preventDefault();
        setEndereco(event.target.value);
      }}
        id="endereco"
        label="endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
      value={numero}
      onChange={(event) => {
        event.preventDefault();
        setNumero(event.target.value);
      }}
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
      value={estado}
      onChange={(event) => {
        event.preventDefault();
        setEstado(event.target.value)
      }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
      value={cidade}
      onChange={(event) => {
        event.preventDefault();
        setCidade(event.target.value);
      }}
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
