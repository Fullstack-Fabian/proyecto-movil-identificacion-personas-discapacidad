import { useState } from "react"
import Navbar from "./components/Navbar"
import MunicipalityCard from "./components/MunicipalityCard"
import MunicipalityDetail from "./components/MunicipalityDetail"
import { municipalities } from "./data/municipalities"

function App() {
  const [selectedMunicipality, setSelectedMunicipality] = useState(
    municipalities[1],
  )

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-[1500px] px-6 py-8 lg:px-10">

        {/* HERO */}
        <section>
          <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight text-blue-600 md:text-5xl">
            Panel Interactivo de Planeación Territorial
          </h1>

          <h2 className="mt-1 max-w-5xl text-xl font-black leading-tight text-blue-600 md:text-2xl">
            del Módulo de Identificación para Personas con Discapacidad
          </h2>

          <div className="mt-4 flex items-center gap-3 text-sm font-black text-[#071b4d]">
            <span>Censo INEGI 2020</span>
            <span>→</span>
            <span>Escenario de planeación 2026</span>
          </div>

          <div className="mt-3 h-1 w-[480px] max-w-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-transparent" />
        </section>

        {/* CONTENIDO */}
        <section className="mt-7 grid gap-7 xl:grid-cols-[640px_1fr]">

          {/* IZQUIERDA */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-black text-[#071b4d]">
                📍 ¿Dónde quieres iniciar la brigada?
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Selecciona un municipio para ver su análisis,
                proyección y recomendación.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-4">
              {municipalities.map((municipality) => (
                <MunicipalityCard
                  key={municipality.id}
                  municipality={municipality}
                  isSelected={
                    selectedMunicipality.id === municipality.id
                  }
                  onClick={() =>
                    setSelectedMunicipality(municipality)
                  }
                />
              ))}
            </div>
          </div>

          {/* DERECHA */}
          <div>
            <MunicipalityDetail
              municipality={selectedMunicipality}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
