import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [tab, setTab] = useState("login");

  const submit = (e) => {
    e.preventDefault();
    nav("/home");
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl p-6 shadow">
      <div className="flex gap-2 bg-gray-100 rounded-full p-1 mb-6">
        <button
          onClick={()=>setTab("login")}
          className={`flex-1 rounded-full py-2 ${tab==="login"?"bg-lime-600 text-white":"text-gray-700"}`}
        >
          Log in
        </button>
        <button
          onClick={()=>setTab("signup")}
          className={`flex-1 rounded-full py-2 ${tab==="signup"?"bg-lime-600 text-white":"text-gray-700"}`}
        >
          Sign up
        </button>
      </div>

      {tab==="login" ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Bienvenido a Santa Palma</h2>
          <form onSubmit={submit} className="space-y-3">
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" />
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Contraseña" type="password" />
            <button className="w-full bg-lime-600 text-white rounded-full py-3 font-semibold">Log in</button>
          </form>
          <p className="text-right text-sm mt-2">
            ¿Olvidaste tu contraseña? <span className="text-lime-600 underline">Recuperar</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Crear cuenta</h2>
          <form onSubmit={submit} className="space-y-3">
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Nombre" />
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" />
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Contraseña" type="password" />
            <button className="w-full bg-lime-600 text-white rounded-full py-3 font-semibold">Registrarme</button>
          </form>
        </>
      )}
    </div>
  );
}
