import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-20 md:w-72 lg:w-72 bg-zinc-950 p-6">
      <div className="hidden md:flex lg:md:flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-0 md:gap-3 lg:gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          <p className="hidden md:flex lg:flex">Início</p>
        </a>
        <a
          href=""
          className="flex items-center gap-0 md:gap-3 lg:gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          <p className="hidden md:flex lg:flex">Buscar</p>
        </a>
        <a
          href=""
          className="flex items-center gap-0 md:gap-3 lg:gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          <p className="hidden md:flex lg:flex">Sua biblioteca</p>
        </a>
      </nav>

      <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <a
          className="text-sm text-zinc-400 hover:text-zinc-100 truncate"
          href=""
        >
          Mix Melancólico
        </a>
        <a
          className="text-sm text-zinc-400 hover:text-zinc-100 truncate"
          href=""
        >
          Relaxing Songs
        </a>
        <a
          className="text-sm text-zinc-400 hover:text-zinc-100 truncate"
          href=""
        >
          De Cria
        </a>
        <a
          className="text-sm text-zinc-400 hover:text-zinc-100 truncate"
          href=""
        >
          Musicas que Resgatei do Relacionamento Antigo
        </a>
      </nav>
    </aside>
  );
}
