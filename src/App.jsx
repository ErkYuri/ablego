// src/App.jsx
import Navbar from './components/Navbar' // Importando a peça que criamos

function App() {
  return (
    // pt-20 (padding-top) é necessário porque a Navbar está fixa no topo.
    // Sem isso, o conteúdo da página ficaria escondido atrás da barra.
    <div className="w-full min-h-screen bg-gray-50 pt-20">
      <Navbar /> {/* Colocando a barra na tela */}

      {/* Conteúdo principal da página (Folha em branco por enquanto) */}
      <main className="px-4 md:px-10">
        <h1 className="text-3xl font-bold text-gray-800">Início do AbleGo</h1>
        <p className="mt-2 text-gray-600">Terreno capinado e com o cabeçalho pronto!</p>
      </main>
    </div>
  )
}

export default App