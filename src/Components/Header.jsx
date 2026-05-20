import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="w-full flex justify-center bg-linear-to-r from-[#2A2D3E] to-[#dd7d24] rounded-b-[50px] shadow-lg">
      <div className="w-full max-w-6xl flex justify-between items-center px-8 py-2">
        <div>
          <p className="text-orange-300 text-xs uppercase tracking-widest font-semibold">
            TOP CLUB SOCCER
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">
            Dashboard de Jugadores
          </h1>

          <p className="text-gray-200 text-sm mt-2 max-w-xl">
            Gestiona tus estrellas favoritas, analiza estadísticas y descubre
            talentos.
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
