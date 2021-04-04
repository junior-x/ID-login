import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    senha: { valido: true, texto: "" },
  });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar(){
    let posso = true;
    for(let campo in erros){
      if(!erros[campo].valido){
        return false
      }
    }
  }
  
  return (
    <form
      className="formulario-cadastro_model formulario-cadastro_background"
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        onBlur={validarCampos}
        id="email"
        label="email"
        type="email"
        name="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.value}
        helperText={erros.senha.value}
        id="senha"
        label="senha"
        type="password"
        name="senha"
        required
        variant="outlined"
        margin="normal"
        fullWidth
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

export default DadosUsuario;
