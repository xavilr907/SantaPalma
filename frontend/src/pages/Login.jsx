import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const nav = useNavigate();
  const [tab, setTab] = useState("login");
  const submit = (e)=>{ e.preventDefault(); nav("/home"); };

  return (


    <div 
    className= "min-h-screen grid place-items-center p-4 bg-cover bg-center"
  style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/IMG_6989.JPG')",
  }}>

     {/* Logo */}
          <img src="/images/icons/Recurso_22.png" className="mx-auto mb-4 w-20 sm:w-28 md:w-32 lg:w-40 h-auto object-contain" />


    {/* Card */}
      <div className="bg-white rounded-2xl shadow-card p-6 w-full max-w-sm">

      
      
        {/* Tabs */}
        <div className="flex gap-2 bg-sheet-100 rounded-full p-1 mb-6">

          <button onClick={()=>setTab("login")}
            className={`flex-1 rounded-full py-2 ${tab==="login"?"bg-brand-600 text-white":"text-ink-700"}`}>
            Log in
          </button>

           <button onClick={()=>setTab("signup")}
            className={`flex-1 rounded-full py-2 ${tab==="signup"?"bg-brand-600 text-white":"text-ink-700"}`}>
            Sign up
          </button>
        </div>

      

         {/* Título */}
        <h2 className="text-xl font-semibold mb-4 text-ink-900">
          {tab==="login" ? "Bienvenido a Santa Palma" : "Crear cuenta"}
        </h2>


        {/* Formulario */}
        <form onSubmit={submit} className="space-y-3">
          {tab==="signup" && (
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Nombre" />
          )}

          <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" />
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Contraseña" type="password" />
          <button className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-full py-3 font-semibold">
            {tab==="login" ? "Log in" : "Registrarme"}
          </button>
        </form>

        {tab==="login" && (
          <p className="text-right text-sm mt-2">
            ¿Olvidaste tu contraseña? <span className="text-brand-600 underline">Recuperar</span>
          </p>
         )}
      </div>
    </div>
  );
}
