const products = [
  { id:1, name:"Bruschetas", price:18000, img:"/p1.jpg" },
  { id:2, name:"Pizza Margarita", price:28000, img:"/p2.jpg" },
  { id:3, name:"Limonada", price:9000, img:"/p3.jpg" },
  { id:4, name:"Cerveza", price:12000, img:"/p4.jpg" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero con buscador */}
      <div
        className="h-36 rounded-2xl bg-cover bg-center flex items-end p-4 text-white"
        style={{backgroundImage:"url('/hero.jpg')"}} // pon hero.jpg en /public
      >
        <div>
          <h2 className="text-2xl font-semibold drop-shadow">¿Qué se te antoja hoy?</h2>
          <input
            className="mt-2 w-72 max-w-full rounded-full px-4 py-2 text-black"
            placeholder="Buscar..."
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 px-1">
        <button className="border-b-2 border-lime-600 pb-1 font-semibold">Comidas</button>
        <button className="text-gray-500">Bebidas</button>
        <button className="text-gray-500">Licores</button>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-2 gap-3">
        {products.map(p => (
          <div key={p.id} className="rounded-2xl bg-white shadow p-2">
            <div
              className="h-24 rounded-xl bg-gray-200 mb-2 bg-cover bg-center"
              style={{backgroundImage:`url('${p.img}')`}}
            />
            <div className="text-sm">{p.name}</div>
            <div className="text-xs text-gray-500">${p.price.toLocaleString("es-CO")}</div>
            <button className="mt-2 w-full rounded-lg bg-lime-600 text-white py-1">Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
