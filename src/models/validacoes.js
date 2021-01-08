function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

function validarSenha(senha) {
  if (senha.length < 6 || senha.length > 72) {
    return {valido:false, texto:"Senha deve ter entre 6 e 72 digitos."}
  } else {
    return {valido:true, texto:""}
  }
}

function validarNome(nome) {
  if (nome.length < 6 || nome.length > 72) {
    return {valido:false, texto:"Nome deve ter entre 6 e 72 digitos."}
  } else {
    return {valido:true, texto:""}
  }
}

export {
  validarCPF,
  validarSenha,
  validarNome
}