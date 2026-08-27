## Gerador de Lembretes, com HTML, CSS e JavaScript
- meu-projeto/
- ├── index.html
- ├── style.css
- └── script.js



## 🚀 Novidades e Atualizações Recentes

### 🌙 Modo Escuro (Dark Mode)
- **Botão de Alternância Fixo:** Posicionado no canto superior direito de forma discreta e minimalista.
- **Adaptação Visual:** Fundo da página, formulários, selects e cards ajustam suas cores automaticamente ao alternar o tema.
- **Ajuste de Ícones:** O seletor de data teve seu ícone invertido para manter a visibilidade no tema escuro.

### 📅 Novos Campos de Lembrete
- **Data de Vencimento (`input[type="date"]`):** Permite atribuir uma data limite para cada lembrete.
- **Formatação Automática:** A data no padrão ISO (`AAAA-MM-DD`) é convertida para o formato local (`DD/MM/AAAA`) na exibição.
- **Status do Lembrete:** Opção de selecionar entre três estados:
  - ⏳ *Pendente*
  - 🔄 *Em Andamento*
  - ✅ *Concluído*
- **Suporte Completo na Edição:** Ao clicar em "Editar", o formulário carrega a descrição, prioridade, data e status anteriores para atualização.

### 🔍 Sistema de Busca e Filtros em Tempo Real
- **Busca Textual:** Campo para filtrar lembretes pela descrição.
- **Filtro por Prioridade:** Exibe apenas lembretes de prioridade *Baixa*, *Média* ou *Alta*.
- **Filtro por Status:** Permite visualizar tarefas filtrando por *Pendente*, *Em Andamento* ou *Concluído*.
- **Filtro por Data:** Permite encontrar lembretes que vencem em um dia específico.
- **Filtros Cumulativos:** Todos os critérios de busca funcionam simultaneamente.

---

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estruturação semântica e inputs nativos.
- **CSS3:** Estilização responsiva, `grid`, `flexbox` e suporte ao modo escuro via classe `.dark-mode`.
- **JavaScript (ES6+):** Manipulação da DOM, escutadores de eventos (`input`, `change`, `click`) e armazenamento de dados em `dataset`.
