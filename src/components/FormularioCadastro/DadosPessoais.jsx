import React, { useState } from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

function DadosPessoais({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      className="formulario-cadastro_model formulario-cadastro_background"
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, promocoes, novidades, cpf });
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
        onBlur={(event) => {
          const ehValido = validarCPF(cpf);
          setErros({ cpf: ehValido });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
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
        type="submit"
        variant="outlined"
        color="secondary"
        className="formulario-cadastro_checkbox"
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
