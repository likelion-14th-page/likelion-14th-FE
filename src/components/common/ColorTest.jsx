export default function ColorTest() {
  return (
    <div className="bg-bg-dark min-h-screen p-8">
      <h1 className="text-white text-4xl font-bold mb-12">Color System Test</h1>

      {/* Orange Palette */}
      <section className="mb-12">
        <h2 className="text-white text-2xl font-bold mb-6">Orange Palette</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-orange-gradient p-4 text-center">
            <div className="text-white text-sm font-bold">orange-gradient</div>
            <div className="text-white text-xs">#BA4E23</div>
          </div>
          <div className="bg-orange-01 p-4 text-center">
            <div className="text-white text-sm font-bold">orange-01</div>
            <div className="text-white text-xs">#6C2D14</div>
          </div>
          <div className="bg-orange-02 p-4 text-center">
            <div className="text-white text-sm font-bold">orange-02</div>
            <div className="text-white text-xs">#804229</div>
          </div>
          <div className="bg-orange-03 p-4 text-center">
            <div className="text-white text-sm font-bold">orange-03</div>
            <div className="text-white text-xs">#DC8563</div>
          </div>
          <div className="bg-orange-04 p-4 text-center">
            <div className="text-white text-sm font-bold">orange-04</div>
            <div className="text-white text-xs">#BA4E23</div>
          </div>
        </div>
      </section>

      {/* Bright Orange Palette */}
      <section className="mb-12">
        <h2 className="text-white text-2xl font-bold mb-6">Bright Orange Palette</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-bright-orange-01 p-4 text-center">
            <div className="text-bg-dark text-sm font-bold">bright-orange-01</div>
            <div className="text-bg-dark text-xs">#FFE4D3</div>
          </div>
          <div className="bg-bright-orange-02 p-4 text-center">
            <div className="text-bg-dark text-sm font-bold">bright-orange-02</div>
            <div className="text-bg-dark text-xs">#F3EAE5</div>
          </div>
          <div className="bg-bright-orange-01-hover p-4 text-center">
            <div className="text-bg-dark text-sm font-bold">bright-orange-01-hover</div>
            <div className="text-bg-dark text-xs">#ECCEBB</div>
          </div>
          <div className="bg-bright-orange-01-press p-4 text-center">
            <div className="text-bg-dark text-sm font-bold">bright-orange-01-press</div>
            <div className="text-bg-dark text-xs">#CCB6A9</div>
          </div>
        </div>
      </section>

      {/* Gray Palette */}
      <section className="mb-12">
        <h2 className="text-white text-2xl font-bold mb-6">Gray Palette</h2>
        <div className="grid grid-cols-7 gap-4">
          <div className="bg-white-custom p-4 text-center">
            <div className="text-bg-dark text-sm font-bold">white</div>
            <div className="text-bg-dark text-xs">#FFFFFF</div>
          </div>
          <div className="bg-gray-01 p-4 text-center">
            <div className="text-bg-dark text-sm font-bold">gray-01</div>
            <div className="text-bg-dark text-xs">#EDEDED</div>
          </div>
          <div className="bg-gray-02 p-4 text-center">
            <div className="text-bg-dark text-sm font-bold">gray-02</div>
            <div className="text-bg-dark text-xs">#D9D9D9</div>
          </div>
          <div className="bg-gray-03 p-4 text-center">
            <div className="text-gray-01 text-sm font-bold">gray-03</div>
            <div className="text-gray-01 text-xs">#B0B0B0</div>
          </div>
          <div className="bg-gray-05 p-4 text-center">
            <div className="text-white text-sm font-bold">gray-05</div>
            <div className="text-white text-xs">#8F8F8F</div>
          </div>
          <div className="bg-gray-07 p-4 text-center">
            <div className="text-white text-sm font-bold">gray-07</div>
            <div className="text-white text-xs">#515154</div>
          </div>
          <div className="bg-yellow-main p-4 text-center">
            <div className="text-bg-dark text-sm font-bold">yellow-main</div>
            <div className="text-bg-dark text-xs">#DABE5A</div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section>
        <h2 className="text-white text-2xl font-bold mb-6">Background</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-dark border-2 border-white p-4 text-center">
            <div className="text-white text-sm font-bold">bg-dark</div>
            <div className="text-white text-xs">#080300</div>
          </div>
          <div className="bg-bg-secondary p-4 text-center">
            <div className="text-white text-sm font-bold">bg-secondary</div>
            <div className="text-white text-xs">#1C1C1C</div>
          </div>
        </div>
      </section>
    </div>
  );
}