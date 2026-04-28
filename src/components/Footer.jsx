function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-16 border-t-4 border-orange-500">
      <div className="max-w-4xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna 1: A Marca */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-wide">Able<span className="text-orange-500">Go</span></span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Sua cidade sem barreiras. Nossa missão é mapear e promover a acessibilidade, garantindo o direito de ir e vir para todos.
          </p>
        </div>

        {/* Coluna 2: Links Úteis (Sua Ideia!) */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold mb-2">Links Úteis</h4>
          <a href="#" className="text-sm hover:text-orange-500 transition-colors">Lei Brasileira de Inclusão</a>
          <a href="#" className="text-sm hover:text-orange-500 transition-colors">Solicitar Passe Livre</a>
          <a href="#" className="text-sm hover:text-orange-500 transition-colors">Guia do Cão-Guia</a>
          <a href="#" className="text-sm hover:text-orange-500 transition-colors">Denunciar Barreiras</a>
        </div>

        {/* Coluna 3: O Projeto */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold mb-2">O Projeto</h4>
          <a href="#" className="text-sm hover:text-orange-500 transition-colors">Sobre Nós</a>
          <a href="#" className="text-sm hover:text-orange-500 transition-colors">Como Avaliar um Local</a>
        </div>

      </div>

      {/* Direitos Autorais */}
      <div className="max-w-4xl mx-auto px-4 md:px-10 mt-12 pt-6 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">
          &copy; 2026 AbleGo.
        </p>
        <p className="text-xs text-slate-500 flex items-center gap-1">
          Feito para um mundo mais inclusivo
        </p>
      </div>
    </footer>
  )
}

export default Footer