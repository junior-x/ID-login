import React, { useState, useContext } from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  const validacoes = useContext(ValidacoesCadastro);

  return (
    <form
      className="formulario-cadastro_model formulario-cadastro_background"
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, promocoes, novidades, cpf });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        id="outlined-basic"
        label="Nome"
        name="nome"
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
        name="sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        margin="normal"
        variant="outlined"
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
