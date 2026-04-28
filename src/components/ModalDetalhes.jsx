// src/components/ModalDetalhes.jsx

function ModalDetalhes({ local, fecharModal }) {
  // Se não houver nenhum local selecionado, não desenha nada na tela
  if (!local) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      
      {/* A Caixa Branca do Modal */}
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl transform transition-all">
        
        {/* Header com a Foto do Local */}
        <div className="relative h-48 w-full">
          <img 
            src={local.imagem} 
            alt={local.nome} 
            className="w-full h-full object-cover" 
          />
          {/* Botão de Fechar (O "X") */}
          <button 
            onClick={fecharModal}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-800 p-2 rounded-full shadow-lg hover:bg-white active:scale-95 transition-all"
          >
            ✖
          </button>
        </div>

        {/* Conteúdo Completo */}
        <div className="p-6">
          <h2 className="text-2xl font-extrabold text-slate-800">{local.nome}</h2>
          <p className="text-sm font-bold text-orange-600 tracking-wider uppercase mb-6">
            {local.categoria}
          </p>

          <h3 className="font-bold text-slate-700 mb-4 border-b pb-2">
            Checklist Completo
          </h3>
          
          {/* Lista Mockada (Simulando o banco de dados completo) */}
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-green-800 bg-green-50/50 p-2 rounded-lg border border-green-100">
              <span className="text-xl">{local.iconeVerde}</span> <span className="font-semibold">{local.tagVerde}</span>
            </li>
            
            {local.tagVermelha && (
              <li className="flex items-center gap-3 text-red-800 bg-red-50/50 p-2 rounded-lg border border-red-100">
                <span className="text-xl">❌</span> <span className="font-semibold">Falta: {local.tagVermelha}</span>
              </li>
            )}
            
            <li className="flex items-center gap-3 text-green-800 bg-green-50/50 p-2 rounded-lg border border-green-100">
              <span className="text-xl">🦮</span> <span className="font-semibold">Cão Guia Permitido</span>
            </li>
            <li className="flex items-center gap-3 text-green-800 bg-green-50/50 p-2 rounded-lg border border-green-100">
              <span className="text-xl">♿</span> <span className="font-semibold">Banheiro Adaptado</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ModalDetalhes