function MunicipalityCard({
  municipality,
  isSelected,
  onClick,
}) {
  const icons = {
    "san-jose-de-gracia": "▲",
    "san-francisco-de-los-romo": "▦",
    "rincon-de-romos": "⌂",
    "pabellon-de-arteaga": "▤",
    "jesus-maria": "♨",
    "el-llano": "≋",
    cosio: "━",
    calvillo: "◇",
    asientos: "♜",
    tepezala: "♧",
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group min-h-[190px] rounded-2xl border-2 p-4 text-center transition-all duration-300 ${
        isSelected
          ? "scale-[1.02] border-blue-500 bg-white shadow-xl shadow-blue-500/20"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
      }`}
    >
      <div
        className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-2xl ${
          isSelected
            ? "bg-blue-500 text-white"
            : "text-blue-500"
        }`}
      >
        {icons[municipality.id]}
      </div>

      <h3 className="min-h-[42px] text-sm font-black leading-tight text-[#071b4d]">
        {municipality.name}
      </h3>

      <div className="mt-2 text-3xl font-black text-[#071b4d]">
        {municipality.observed2020.toLocaleString()}
      </div>

      <p className="text-xs font-medium text-slate-500">
        Personas (2020)
      </p>

      <div className="mx-auto mt-3 inline-flex rounded-full bg-gradient-to-r from-emerald-600 to-green-400 px-3 py-1 text-xs font-black text-white shadow-sm">
        ↗ +{municipality.growth}%
      </div>
    </button>
  )
}

export default MunicipalityCard
