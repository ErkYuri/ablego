import { useState } from 'react'
import Navbar from '../components/Navbar'
import CardLocal from '../components/CardLocal'
import ModalDetalhes from '../components/ModalDetalhes'
import Footer from '../components/Footer'

// Nossa lista de locais (Array de Objetos)
const listaDeLocais = [
  {
    id: 1, // É importante ter um ID único para cada item
    nome: "Café Sereno",
    categoria: "Cafeteria",
    nota: "4.8",
    imagem: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    tagVerde: "Rampa de Acesso",
    iconeVerde: "♿",
    tagVermelha: "Menu em Braille",
    extras: "2"
  },
  {
    id: 2,
    nome: "Museu Histórico",
    categoria: "Cultura",
    nota: "4.9",
    imagem: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&q=80",
    tagVerde: "Elevador",
    iconeVerde: "↕️",
    tagVermelha: "Audiodescrição",
    extras: "7"
  },
  {
    id: 3,
    nome: "Parque Central",
    categoria: "Lazer",
    nota: "4.5",
    imagem: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=600&q=80",
    tagVerde: "Pistas Planas",
    iconeVerde: "🛣️",
    tagVermelha: "Banheiro Adaptado",
    extras: "3"
  }
];



function Home() {

  const [localSelecionado, setLocalSelecionado] = useState(null)

  return (
    <div className="w-full min-h-screen bg-slate-50 pt-24 pb-10">
      <Navbar />

      {/* Container Principal */}
      <main className="px-4 md:px-10 flex flex-col items-center max-w-4xl mx-auto">
        
        {/* Título de Impacto */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center leading-tight tracking-tight">
          Sua cidade <span className="text-orange-600">sem barreiras.</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 text-center font-medium max-w-2xl">
          Encontre e avalie a acessibilidade de restaurantes, parques e pontos culturais perto de você.
        </p>

        {/* Barra de Pesquisa Moderna (Estilo Airbnb) */}
        <div className="w-full mt-10 relative group">
          {/* Ícone de Lupa */}
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>

          <input 
            type="text" 
            placeholder="Para onde deseja ir?" 
            className="w-full pl-14 pr-36 py-5 rounded-full border-2 border-transparent bg-white shadow-md hover:shadow-lg focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 text-lg text-slate-800 placeholder-slate-400"
          />

          {/* Botão Embutido */}
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-6 py-3 rounded-full font-bold shadow-sm transition-all duration-300 flex items-center gap-2">
            <span className="hidden md:block">Buscar</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:hidden">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Filtros em Pílulas (Scroll horizontal no celular) */}
        <div className="w-full mt-8 flex gap-3 overflow-x-auto pb-4 justify-start md:justify-center" style={{ scrollbarWidth: 'none' }}>
          <button className="whitespace-nowrap bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md active:scale-95 transition-all">
            📍 Todos
          </button>
          <button className="whitespace-nowrap bg-white text-slate-700 border border-slate-200 hover:border-orange-500 hover:text-orange-600 px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-all">
            🍽️ Restaurantes
          </button>
          <button className="whitespace-nowrap bg-white text-slate-700 border border-slate-200 hover:border-orange-500 hover:text-orange-600 px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-all">
            ☕ Cafés
          </button>
          <button className="whitespace-nowrap bg-white text-slate-700 border border-slate-200 hover:border-orange-500 hover:text-orange-600 px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-all">
            🏛️ Museus
          </button>
          <button className="whitespace-nowrap bg-white text-slate-700 border border-slate-200 hover:border-orange-500 hover:text-orange-600 px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-all">
            🌳 Parques
          </button>
        </div>

        {/* Bloco dos Cards */}
        <div className="w-full mt-10 mb-20">
          <h2 className="text-xl font-bold text-slate-800 mb-6 uppercase tracking-wide">
            Locais em Destaque
          </h2>

          {/* Grid: 1 coluna no celular, 2 no tablet, 3 no PC */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            
            {/* O comando .map percorre a lista e desenha um Card para cada local */}
            {listaDeLocais.map((local) => (
              <CardLocal 
                key={local.id} // O React exige uma chave única ao criar listas
                nome={local.nome}
                categoria={local.categoria}
                nota={local.nota}
                imagem={local.imagem}
                tagVerde={local.tagVerde}
                iconeVerde={local.iconeVerde}
                tagVermelha={local.tagVermelha}
                extras={local.extras}
                onAbrirModal={() => setLocalSelecionado(local)} // Passa o objeto inteiro!
              />
            ))}

          </div>
          
        </div>

      </main>

      {/* Renderiza o Modal APENAS se houver um 'localSelecionado' na memória.
          Função para "limpar" a memória (null) e fechar a tela. */}
      <ModalDetalhes 
        local={localSelecionado} 
        fecharModal={() => setLocalSelecionado(null)} 
      />

      <Footer></Footer>
      


    </div>
  )
}

export default Home