function Navbar() {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-100 shadow-sm flex items-center justify-between px-4 md:px-10 fixed top-0 left-0 z-50">
      
      {/* Área da Logo (Esquerda) */}
      <div className="flex items-center gap-2">
        <img 
          src="/logo-mini-nobg.png" 
          alt="Logo Minimalista AbleGo" 
          className="h-10 w-auto" 
        />
        <span className="text-xl font-bold text-gray-800 hidden md:block">
          AbleGo
        </span>
      </div>

      {/* Área de Ações (Direita) */}
      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors duration-300">
          Ajuda
        </button>
        <button className="bg-orange-500 text-white px-5 py-2 text-sm font-semibold rounded-full shadow hover:bg-orange-600 hover:shadow-lg transition-all duration-300 active:scale-95 active:bg-orange-700">
          Entrar
        </button>
      </div>
    </nav>
  )
}

export default Navbar