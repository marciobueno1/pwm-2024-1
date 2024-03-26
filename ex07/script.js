const inputCampo = document.getElementById("inputCampo");
const inputValor = document.getElementById("inputValor");
const btAdicionar = document.getElementById("btAdicionar");
const btRemover = document.getElementById("btRemover");
const preObjeto = document.getElementById("preObjeto");

let objeto = {};

const refreshObjeto = () => {
  preObjeto.innerHTML = "";
  for (const campo in objeto) {
    preObjeto.innerHTML += `${campo} = ${objeto[campo]}\n`;
  }
};

const handleClickBtAdicionar = () => {
  let campo = inputCampo.value;
  let valor = inputValor.value;
  if (!campo || !valor) {
    alert("Necessário preencher os dois campos!");
    return;
  }
  objeto[campo] = valor;
  refreshObjeto();
  inputCampo.value = "";
  inputValor.value = "";
  inputCampo.focus();
};

const handleClickBtRemover = () => {
  let campo = inputCampo.value;
  if (!campo) {
    alert("Necessário preencher o campo!");
    return;
  }
  if (!(campo in objeto)) {
    alert("Campo inexistent!");
    return;
  }
  delete objeto[campo];
  refreshObjeto();
  inputCampo.value = "";
  inputCampo.focus();
};

btAdicionar.onclick = handleClickBtAdicionar;
btRemover.onclick = handleClickBtRemover;
