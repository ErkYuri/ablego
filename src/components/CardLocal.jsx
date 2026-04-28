function CardLocal({ nome, categoria, nota, imagem, tagVerde, iconeVerde, tagVermelha, extras, onAbrirModal }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-sm overflow-hidden border border-slate-100 flex flex-col">
      
      {/* 1. Bloco da Foto */}
      <div className="relative h-48 w-full shrink-0">
        <img 
          src={imagem} 
          alt={`Foto de ${nome}`} 
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-3 left-3 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {categoria}
        </span>
        <div className="absolute top-3 right-3 bg-white text-slate-800 text-xs font-bold px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
          <span className="text-yellow-500">⭐</span> {nota}
        </div>
      </div>
      
      {/* 2. Bloco dos Textos */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
        
        <p className="mt-4 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Checklist de Acessibilidade
        </p>

        <div className="flex flex-col gap-2">
          
          {/* Selo Verde */}
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-sm font-semibold">
            <span>{iconeVerde}</span> {tagVerde}
          </div>

          {/* Selo Vermelho */}
          {tagVermelha && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm font-semibold">
              <span>❌</span> {tagVermelha}
            </div>
          )}

          {/* Botão de Extras */}
          {extras && (
            <div className="flex justify-end mt-1">

              <button 
                onClick={onAbrirModal}
                className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-sm px-4 py-1.5 rounded-lg border border-slate-200 transition-colors active:scale-95 shadow-sm">
                +{extras}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default CardLocal