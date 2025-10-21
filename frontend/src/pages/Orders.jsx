export default function Orders() {
  return (
    <div className="space-y-5">
      <section className="bg-white rounded-2xl p-4 shadow">
        <h3 className="font-semibold mb-2">Actividad reciente</h3>
        <div className="text-4xl font-bold text-lime-700">73%</div>
        <p className="text-xs text-gray-500">
          ¡Ya casi entregamos tu pedido! Tiempo transcurrido: 12:06 minutos
        </p>
        <button className="mt-3 rounded-full bg-lime-600 text-white px-4 py-2">Detalles</button>
      </section>

      <section className="bg-white rounded-2xl p-4 shadow">
        <h3 className="font-semibold mb-1">Historial</h3>
        <div className="text-sm text-gray-600">Licores · 2 productos · Completado</div>
      </section>
    </div>
  );
}
