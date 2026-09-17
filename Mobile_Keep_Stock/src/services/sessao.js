// Sessão do usuário logado, em memória (equivale ao session do Flask no sistema web)
// Não usa armazenamento nativo: o app sempre entra pela tela de Login

let usuarioAtual = null;

export function salvarSessao(usuario) {
  usuarioAtual = usuario;
}

export function lerSessao() {
  return usuarioAtual;
}

export function limparSessao() {
  usuarioAtual = null;
}
