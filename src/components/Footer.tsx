import {
  Heart,
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
  MonitorSpeaker,
  Volume1,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-evenly md:justify-between lg:md:justify-between">
      <div className="flex items-center gap-3">
        <Image
          className="lg:h-auto lg:w-22 md:w-11 md:h-11"
          src="/metalica.jpg"
          width={56}
          height={56}
          alt="Capa do álbum 'Quest for Fire' de Skrillex"
        />
        <div className="flex flex-col">
          <strong className="font-normal lg:text-base md:text-sm">
            Enter Sandman
          </strong>
          <span className="lg:text-sm text-xs text-zinc-400">Metallica</span>
        </div>
        <Heart
          className="lg:ml-3 lg:w-auto lg:h-auto md:w-4 md:h-4 md:ml-1 hover:fill-green-400 hover:text-green-400"
          width={20}
          height={20}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center lg:gap-6 md:gap-5">
          <Shuffle
            size={20}
            className="hidden md:flex lg:md:flex text-zinc-200 lg:w-auto lg:h-auto md:w-4 md:h-4"
          />
          <SkipBack
            size={20}
            className="hidden md:flex lg:md:flex text-zinc-200 lg:w-auto lg:h-auto md:w-4 md:h-4"
          />
          <button className="w-6 h-6 lg:w-10 lg:h-10 md:w-8 md:h-8 flex items-center justify-center pl-0.5 md:pl-1 lg:pl-1 rounded-full bg-white text-black">
            <Play
              className="w-3 h-3 lg:w-auto lg:h-auto md:w-4 md:h-4"
              fill="black"
            />
          </button>
          <SkipForward
            size={20}
            className="hidden md:flex lg:md:flex text-zinc-200 lg:w-auto lg:h-auto md:w-4 md:h-4"
          />
          <Repeat
            size={20}
            className="hidden md:flex lg:md:flex text-zinc-200 lg:w-auto lg:h-auto md:w-4 md:h-4"
          />
        </div>
        <div className="hidden md:flex lg:md:flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:38</span>
          <div className="h-1 rounded-full lg:w-96 md:w-56 bg-zinc-600">
            <div className="bg-zinc-200 lg:w-24 md:w-16 h-1 rounded-full hover:bg-green-400"></div>
          </div>
          <span className="text-xs text-zinc-400">3:25</span>
        </div>
      </div>
      <div className="flex items-center lg:gap-4 md:gap-3">
        <Mic2
          size={20}
          className="hidden md:flex lg:md:flex md:w-4 md:h-4 lg:w-auto lg:h-auto"
        />
        <ListMusic
          size={20}
          className="hidden md:flex lg:md:flex md:w-4 md:h-4 lg:w-auto lg:h-auto"
        />
        <MonitorSpeaker
          size={20}
          className="md:w-4 md:h-4 lg:w-auto lg:h-auto"
        />
        <div className="hidden md:flex lg:md:flex items-center gap-1">
          <Volume1 size={20} className="md:w-4 md:h-4 lg:w-auto lg:h-auto" />
          <div className="h-1 rounded-full lg:w-24 md:w-20 bg-zinc-600">
            <div className="bg-zinc-200 lg:w-8 h-1 md:w-6 rounded-full hover:bg-green-400"></div>
          </div>
        </div>
        <Maximize2
          size={20}
          className="hidden md:flex lg:md:flex md:w-4 md:h-4 lg:w-auto lg:h-auto"
        />
      </div>
    </footer>
  );
}
