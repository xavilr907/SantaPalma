import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section
      className="h-screen grid place-items-center text-white"
      style={{
        backgroundImage: "url('/bg.jpg')", // pon una imagen en /public/bg.jpg
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/40 p-6 rounded-2xl text-center space-y-4">
        <h1 className="text-4xl font-bold">Santa Palma</h1>
        <p className="opacity-90">Menú, pedidos y pagos en un solo lugar</p>
        <Link
          to="/login"
          className="inline-block rounded-full px-6 py-3 bg-white text-black font-semibold"
        >
          Iniciar sesión
        </Link>
      </div>
    </section>
  );
}
