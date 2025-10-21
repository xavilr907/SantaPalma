import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section
      className="h-screen relative text-white"
      style={{backgroundImage:"url('/images/hero.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative h-full grid place-items-center">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Santa Palma</h1>
          <Link className="inline-block rounded-full px-6 py-3 bg-white text-ink-900 font-semibold" to="/login">
            Log in
          </Link>
          <p className="text-sm">¿No tienes cuenta? <span className="text-brand-300 underline">Regístrate</span></p>
        </div>
      </div>
    </section>
  );
}
