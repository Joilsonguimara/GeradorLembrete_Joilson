//variaveis principais

const inputTexto = document.getElementById("input-texto");
const selectPrioridade = document.getElementById("select-prioridade");
const btnAdicionar = document.getElementById("btn-adicionar");
const listaLembretes = document.getElementById("lista-lembretes");
const msgErro = document.getElementById("msg-erro");
//novo
const inputData = document.getElementById("input-data");
const selectStatus = document.getElementById("select-status");



const PRIORIDADE_PADRAO = 'baixa'; //valor oadrai da oruirudade ysada oara resetar i sekect

// Função auxiliar para formatar a data de AAAA-MM-DD para DD/MM/AAAA
function formatarData(dataISO) {
  if (!dataISO) return 'Sem data';
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}

//função para adicionar um novo lembrete. 
function adicionarLembrete(){

    //carrega o texto digitado em cada campo

    const texto = inputTexto.value.trim(); // o trim apaga os espaços no inicio e no fim. 
    const prioridade = selectPrioridade.value;
    const data = inputData.value;
    const status = selectStatus.value;

    //verifica se o campo da descrição está vazio 
    if(texto == ""){

        msgErro.textContent = "Digite o a descrição do lembrete!";
        inputTexto.focus();

        return; // ele para e não permite finalizar

    }
    

    msgErro.textContent = '';

    //antes de criar o carde verifica se está sendo editado algum 
    const cardEditando = document.querySelector('.card-item[data-editando="true"]');

    if(cardEditando){
        // Atualiza os dados salvos no elemento
        cardEditando.dataset.texto = texto;
        cardEditando.dataset.prioridade = prioridade;
        cardEditando.dataset.data = data;
        cardEditando.dataset.status = status;
        
        //atualiza o texto 
        cardEditando.querySelector('strong').textContent = texto;
        
        const smallEdit = cardEditando.querySelector('small');
        smallEdit.textContent = `Prioridade: ${prioridade.toUpperCase()} | Status: `;

        const statusBold = document.createElement('b');
        statusBold.textContent = status;
        smallEdit.append(statusBold, ` | Vence: ${formatarData(data)}`);

        cardEditando.classList.remove('alta', 'media', 'baixa');
        cardEditando.classList.add(prioridade);

        cardEditando.removeAttribute('data-editando');

    }else{

        //criar um card
        const novoCard = criarCardLembrete(texto, prioridade, data, status);

        //insere o Card dentro do container da lista
        listaLembretes.appendChild(novoCard);

    }

    //limpar o campo do lembrete
inputTexto.value = '';
  selectPrioridade.value = PRIORIDADE_PADRAO;
  inputData.value = '';
  selectStatus.value = 'Pendente';
  inputTexto.focus();

}


function criarCardLembrete(texto, prioridade,data, status){
    //cria o elemento principale do card (div)
    const card = document.createElement('div');

    //adiciona a classe base  do card 
    card.classList.add('card-item', prioridade);

    // Guarda os dados no dataset para resgatá-los na edição
    card.dataset.texto = texto;
    card.dataset.prioridade = prioridade;
    card.dataset.data = data;
    card.dataset.status = status;

    //div que agrupa o texto e a prioridade
    const infoWrapper = document.createElement('div');

    //paragrafo com o texto em negrito
    const paragrafo = document.createElement('p');
    const strong = document.createElement('strong');
    
    // insere como texto puro não como html
    strong.textContent = texto;
    paragrafo.appendChild(strong);

    //elemento pequeno mostrando a prioridade em maiúscula
    const pequeno = document.createElement('small');
    pequeno.textContent = `Prioridade: ${prioridade.toUpperCase()} | Status: `;
    const statusBoldNovo = document.createElement('b');
    statusBoldNovo.textContent = status;
    pequeno.append(statusBoldNovo, ` | Vence: ${formatarData(data)}`);
    
    // junta o paragrafo e o small
    infoWrapper.append(paragrafo, pequeno);



    //----------BOTÃO DE EXCLUIR-------------
    const btnDeletar = document.createElement('button');
    btnDeletar.type = 'button';
    btnDeletar.classList.add('btn-deletar');
    btnDeletar.textContent = 'Excluir';
    btnDeletar.addEventListener('click', () => card.remove());


    //----------BOTÃO DE EDITAR-------------
    const btnEditar = document.createElement('button');
    btnEditar.type = 'button';
    btnEditar.classList.add('btn-editar');
    btnEditar.textContent = 'Editar';

    btnEditar.addEventListener('click', () => {
        inputTexto.value = card.dataset.texto;
        selectPrioridade.value = card.dataset.prioridade;
        inputData.value = card.dataset.data;
        selectStatus.value = card.dataset.status;
        inputTexto.focus();

        card.dataset.editando = "true";
    });
    
    
    const botoes = document.createElement('div');
  botoes.classList.add('botoes');
  botoes.append(btnEditar, btnDeletar);

  card.append(infoWrapper, botoes);
  return card;


}

//botão  de enviar
btnAdicionar.addEventListener('click', adicionarLembrete);



// Tema escuro
const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  btnTheme.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

//-----------FILTRO ----------

// Captura dos elementos de filtro
const filtroBusca = document.getElementById("filtro-busca");
const filtroPrioridade = document.getElementById("filtro-prioridade");
const filtroStatus = document.getElementById("filtro-status");
const filtroData = document.getElementById("filtro-data");

// Função para aplicar todos os filtros aplicados
function aplicarFiltros() {
  const termoBusca = filtroBusca.value.toLowerCase().trim();
  const prioridadeSel = filtroPrioridade.value;
  const statusSel = filtroStatus.value;
  const dataSel = filtroData.value;

  const cards = listaLembretes.querySelectorAll('.card-item');

  cards.forEach(card => {
    const texto = (card.dataset.texto || '').toLowerCase();
    const prioridade = card.dataset.prioridade || '';
    const status = card.dataset.status || '';
    const data = card.dataset.data || '';

    // Verifica se atende a todos os critérios simultaneamente
    const atendeTexto = texto.includes(termoBusca);
    const atendePrioridade = !prioridadeSel || prioridade === prioridadeSel;
    const atendeStatus = !statusSel || status === statusSel;
    const atendeData = !dataSel || data === dataSel;

    if (atendeTexto && atendePrioridade && atendeStatus && atendeData) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Escuta as alterações nos inputs para filtrar em tempo real
[filtroBusca, filtroPrioridade, filtroStatus, filtroData].forEach(elemento => {
  elemento.addEventListener('input', aplicarFiltros);
  elemento.addEventListener('change', aplicarFiltros);
});