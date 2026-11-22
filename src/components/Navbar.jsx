function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#071b4d] text-white shadow-lg">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 lg:px-10">
        
        {/* Identidad */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 text-2xl shadow-lg shadow-blue-500/30">
            ♿
          </div>

          <div className="leading-tight">
            <div className="text-lg font-black tracking-tight">
              Brigada Móvil de
            </div>
            <div className="text-lg font-black tracking-tight">
              Credencialización Incluyente
            </div>
            <div className="mt-1 text-xs font-medium text-blue-200">
              Planeación Territorial • Personas con Discapacidad
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-bold shadow-lg shadow-blue-500/30">
            ⌂ Inicio
          </button>

          <button className="rounded-xl px-5 py-3 text-sm font-bold transition hover:bg-white/10">
            ⚖ Comparar
          </button>

          <button className="rounded-xl px-5 py-3 text-sm font-bold transition hover:bg-white/10">
            ⚙ Prioridad
          </button>

          <button className="rounded-xl px-5 py-3 text-sm font-bold transition hover:bg-white/10">
            ▣ Metodología
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
