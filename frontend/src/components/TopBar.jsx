export default function TopBar() {
  return (
    <header className="h-14 px-4 flex items-center justify-between bg-white shadow-sm">
      <button aria-label="menu" className="text-2xl">☰</button>
      <strong className="text-lg">Santa Palma</strong>
      <button aria-label="cart" className="text-2xl">🛒</button>
    </header>
  );
}
