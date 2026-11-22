function MunicipalityDetail({ municipality }) {
  const difference =
    municipality.projected2026 - municipality.observed2020

  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">

      {/* Header */}
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-3xl text-white shadow-lg shadow-blue-500/30">
            ▦
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#071b4d] md:text-3xl">
              {municipality.name}
            </h2>

            <p className="text-sm font-medium text-slate-500">
              Análisis territorial de población con discapacidad
            </p>
          </div>
        </div>

        <span className="hidden rounded-full bg-purple-100 px-4 py-2 text-xs font-black text-purple-600 sm:block">
          ✓ Municipio seleccionado
        </span>
      </div>

      {/* Imagen */}
      <div className="relative mx-5 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#172554] via-purple-700 to-purple-500">
        <img
          src={municipality.image}
          alt={municipality.name}
          className="h-[260px] w-full object-cover opacity-80 transition duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111a58]/90 via-purple-900/10 to-transparent" />

        <div className="absolute bottom-5 left-5 text-white">
          <p className="text-sm font-black">
            {municipality.name} • Referente visual de la cabecera municipal
          </p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 px-5 py-5 md:grid-cols-3">

        <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-5 text-white shadow-lg">
          <div className="text-4xl font-black">
            {municipality.observed2020.toLocaleString()}
          </div>
          <div className="mt-1 text-sm font-bold">
            Personas (2020)
          </div>
          <div className="mt-2 text-xs font-medium text-blue-50">
            Censo de referencia
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 p-5 text-white shadow-lg">
          <div className="text-4xl font-black">
            {municipality.projected2026.toLocaleString()}
          </div>
          <div className="mt-1 text-sm font-bold">
            Personas (2026)
          </div>
          <div className="mt-2 text-xs font-medium text-purple-100">
            Proyección de planeación
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 p-5 text-white shadow-lg">
          <div className="text-4xl font-black">
            +{municipality.growth}%
          </div>

          <div className="mt-1 text-sm font-bold">
            Crecimiento estimado
          </div>

          <div className="mt-2 text-xs font-medium text-green-50">
            (+{difference.toLocaleString()} personas)
          </div>
        </div>
      </div>

      {/* Análisis */}
      <div className="grid gap-5 px-5 pb-6 md:grid-cols-2">

        {/* Gráfico visual */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-5">
            <h3 className="text-lg font-black text-[#071b4d]">
              Evolución proyectada
            </h3>

            <p className="text-xs text-slate-500">
              Comparativo de población de referencia
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-xs font-bold">
                <span>2020</span>
                <span>{municipality.observed2020.toLocaleString()}</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  style={{
                    width: "82%",
                  }}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-xs font-bold">
                <span>2026</span>
                <span>{municipality.projected2026.toLocaleString()}</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interpretación */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-black text-[#071b4d]">
            🎯 ¿Qué significa?
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            La población con discapacidad en{" "}
            <span className="font-black text-purple-600">
              {municipality.name}
            </span>{" "}
            muestra un crecimiento estimado de{" "}
            <span className="font-black text-emerald-600">
              {municipality.growth}%
            </span>
            , equivalente a aproximadamente{" "}
            <span className="font-black text-[#071b4d]">
              {difference.toLocaleString()} personas
            </span>
            .
          </p>

          <div className="mt-5 rounded-xl bg-blue-50 p-4">
            <p className="text-xs font-bold leading-5 text-blue-900">
              El dato permite dimensionar la demanda potencial y orientar
              la planeación territorial de la brigada móvil.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MunicipalityDetail
