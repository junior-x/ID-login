import React, { useState } from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

function FormularioCadastro({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      className="formulario-cadastro_model formulario-cadastro_background"
      onSubmint={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, promocoes, novidades});
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="outlined-basic"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="outlined-basic"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <label>Promoções</label>
      <Checkbox
        checked={promocoes}
        onChange={(event) => {
          setPromocoes(event.target.checked);
        }}
        defaultChecked={promocoes}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <label>Novidades</label>
      <Checkbox
        checked={novidades}
        onChange={(event) => {
          setNovidades(event.target.checked);
        }}
        defaultChecked={novidades}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Button
        variant="outlined"
        color="secondary"
        className="formulario-cadastro_checkbox"
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
