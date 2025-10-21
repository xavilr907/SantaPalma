import { NavLink } from "react-router-dom";

const base = "flex-1 text-center py-2";
const active = "text-lime-700 font-semibold border-t-2 border-lime-600";
const idle = "text-gray-500";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,.06)]">
      <div className="flex">
        <NavLink to="/home" className={({isActive})=>`${base} ${isActive?active:idle}`}>Inicio</NavLink>
        <NavLink to="/orders" className={({isActive})=>`${base} ${isActive?active:idle}`}>Pedidos</NavLink>
        <NavLink to="/account" className={({isActive})=>`${base} ${isActive?active:idle}`}>Cuenta</NavLink>
      </div>
    </nav>
  );
}
