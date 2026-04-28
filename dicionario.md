# Dicionário Tailwind - Arquivo de Consulta

## 1: Estrutura, Layout e Espaçamentos

| Classe Tailwind | O que significa? | Exemplo |
| :--- | :--- | :--- |
| **`flex`** | Cria uma "caixa flexível". Permite organizar itens lado a lado ou em coluna. | `<div className="flex ...">` (Selos lado a lado) |
| **`flex-col`** | Organiza os itens em **coluna** (um embaixo do outro). | `<div className="flex flex-col">` (Foto em cima, texto embaixo) |
| **`items-center`**| Alinha os itens bem no **centro** verticalmente. | `<div className="flex items-center gap-2">` |
| **`justify-between`**| Joga um item para a extrema esquerda e outro para a direita. | `<nav className="... justify-between">` (Navbar) |
| **`gap-2`** | Cria um buraco/espaço (*gap*) de tamanho 2 entre os itens. | `<div className="... gap-2">` |
| **`w-full`** | Ocupa **100% da largura** (*width*) disponível. | `<div className="w-full ...">` |
| **`px-4`** | Espaçamento interno (Padding) nos lados esquerdo e direito. | `<main className="px-4 ...">` |
| **`py-2`** | Espaçamento interno (Padding) em cima e embaixo. | `<button className="... py-2">` |
| **`mt-4`** | Margem externa no topo (*Margin Top*). Empurra o que está acima. | `<p className="mt-4 ...">` |

## 2: Cores, Fundos e Bordas

| Classe Tailwind | O que significa? | Exemplo |
| :--- | :--- | :--- |
| **`bg-white`** | Define o **fundo** (*background*) como branco. | `bg-white` (Fundo dos cards e da Navbar) |
| **`bg-slate-50`** | Fundo cinza-azulado bem clarinho (quase branco). | `bg-slate-50` (Fundo da página inteira) |
| **`bg-orange-500`**| Fundo laranja vibrante (cor principal da marca). | `bg-orange-500` (Botão de buscar/entrar) |
| **`bg-green-50`** | Fundo verde bem clarinho (para sucessos). | `bg-green-50` (Fundo do selo de acessibilidade ok) |
| **`border`** | Adiciona uma **borda** fina ao redor do elemento. | `border-slate-100` (Borda discreta nos cards) |
| **`border-orange-500`**| Muda a cor da borda para o laranja da marca. | `focus:border-orange-500` (Borda da pesquisa ao clicar) |
| **`rounded-lg`** | Arredonda levemente as pontas (Large). | `rounded-lg` (Bordas dos selos de acessibilidade) |
| **`rounded-full`** | Deixa o elemento totalmente redondo (formato pílula). | `rounded-full` (Botões e barra de pesquisa) |
| **`shadow-md`** | Adiciona uma **sombra** média, dando profundidade. | `shadow-md` (Faz o card parecer flutuar sobre o fundo) |

## 3: Textos e Tipografia

| Classe Tailwind | O que significa? | Exemplo |
| :--- | :--- | :--- |
| **`text-sm`** | Texto pequeno (*Small*). | `text-sm` (Usado nos selos e botões menores) |
| **`text-lg`** | Texto grande (*Large*). | `text-lg` (Usado na descrição abaixo do título) |
| **`text-4xl`** | Texto muito grande (estilo título principal). | `text-4xl` (Título: "Sua cidade sem barreiras") |
| **`font-bold`** | Deixa o texto em **negrito**. | `font-bold` (Nomes dos locais e títulos) |
| **`font-extrabold`**| Deixa o texto muito grosso e impactante. | `font-extrabold` (Título principal da página) |
| **`text-slate-600`**| Cor do texto em um cinza escuro suave. | `text-slate-600` (Textos de descrição) |
| **`text-orange-600`**| Cor do texto em laranja (destaque). | `text-orange-600` (Palavra "sem barreiras") |
| **`uppercase`** | Transforma todo o texto em **MAIÚSCULO**. | `uppercase` (Categoria: CAFETERIA) |
| **`tracking-wide`** | Aumenta o espaço entre as letras. | `tracking-wider` (Dá um ar moderno aos títulos pequenos) |

## 4: Interações e Efeitos (Hover & Active)

| Classe Tailwind | O que significa? | Exemplo |
| :--- | :--- | :--- |
| **`hover:bg-orange-600`**| Muda a cor de fundo quando o mouse passa por cima. | `hover:bg-orange-600` (Botão de busca) |
| **`active:scale-95`** | Faz o botão "encolher" um pouquinho ao ser clicado. | `active:scale-95` (Efeito de clique real) |
| **`transition-all`** | Faz as mudanças (cor, tamanho) serem suaves/animadas. | `transition-all` (Evita que a cor mude de forma brusca) |
| **`duration-300`** | Define que a animação dura 300 milissegundos. | `duration-300` (Velocidade da suavização) |
| **`cursor-pointer`** | Transforma a seta do mouse naquela "mãozinha" de link. | `cursor-pointer` (Indica que algo é clicável) |
| **`focus:ring-4`** | Cria um "halo" ou brilho ao redor de um campo de texto. | `focus:ring-orange-100` (Brilho ao clicar na pesquisa) |
| **`object-cover`** | Faz a imagem preencher o espaço sem ficar esticada. | `object-cover` (Fotos dos locais no Card) |

## 5: Posicionamento e Responsividade (Telas)

| Classe Tailwind | O que significa? | Exemplo |
| :--- | :--- | :--- |
| **`relative`** | Cria um ponto de referência para itens "flutuarem" dentro dele. | `relative` (Usado no card para a nota flutuar sobre a foto) |
| **`absolute`** | Faz o item "flutuar" em uma posição exata (ex: no topo à direita). | `absolute top-3 right-3` (A nota 4.8 em cima da foto) |
| **`grid`** | Cria uma grade organizada (tipo uma planilha). | `grid grid-cols-1` (Organiza os cards) |
| **`md:grid-cols-3`** | **Mágica do Celular:** Em telas médias (PC), usa 3 colunas. | `md:grid-cols-3` (No celular fica 1 card, no PC ficam 3) |
| **`hidden`** | Esconde o elemento completamente. | `hidden md:block` (Esconde o texto "Buscar" no celular e mostra no PC) |
| **`mx-auto`** | Centraliza uma caixa horizontalmente (Margem Automática). | `mx-auto` (Mantém o conteúdo no meio da tela) |
| **`z-50`** | Define quem fica "por cima" de quem (camadas). | `z-50` (Faz a Navbar ficar sempre acima das fotos ao rolar a página) |