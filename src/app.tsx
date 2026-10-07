import { cn } from "cn";
import "@fontsource-variable/outfit";

import equillibrium from "./assets/equilibrium.jpg";
import avatar from "./assets/avatar.png";
import { Ethereum } from "./assets/Ethereum";
import { Clock } from "./assets/Clock";
import { View } from "./assets/View";

export function App() {
  const style = {
    "bg-blue-950": "bg-[hsl(217,54%,11%)]",
    "bg-blue-900": "bg-[hsl(216,50%,16%)]",
    "bg-blue-800": "bg-[hsl(215,32%,27%)]",
    "bg-cyan-400": "bg-[hsl(178,100%,50%)]/50",
    "text-blue-500": "text-[hsl(215,51%,70%)]",
    "text-cyan-400": "text-[hsl(178,100%,50%)]",
    "text-link": "text-white hover:text-[hsl(178,100%,50%)]",
  };
  return (
    <main
      className={cn(
        style["bg-blue-950"],
        style["text-blue-500"],
        "w-screen min-h-screen flex items-center justify-center font-['Outfit_Variable'] p-6",
      )}
    >
      <section
        className={cn(
          style["bg-blue-900"],
          "p-6 rounded-xl space-y-4 max-w-80 w-full mx-auto",
        )}
      >
        <a
          href="#"
          className="w-full h-70 relative rounded-md overflow-hidden group block"
        >
          <div
            className={cn(
              style["bg-cyan-400"],
              "hidden absolute z-2 w-full h-full group-hover:flex items-center justify-center",
            )}
          >
            <View />
          </div>
          <img src={equillibrium} className="w-full h-full object-cover z-1" />
        </a>
        <a
          href="#"
          className={cn(style["text-link"], "font-semibold text-lg block")}
        >
          Equilibrium #3429
        </a>
        <p className="font-light opacity-80">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex items-center justify-between">
          <p
            className={cn(
              style["text-cyan-400"],
              "flex items-center gap-2 font-medium opacity-80",
            )}
          >
            <Ethereum />
            0.041 ETH
          </p>
          <p className="flex items-center gap-2 font-medium opacity-80">
            <Clock />3 days left
          </p>
        </div>
        <div className={cn(style["bg-blue-800"], "h-px")} />
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            className="w-8 h-8 border border-white rounded-full"
          />
          <p className="font-light opacity-80">
            Creation of{" "}
            <a href="#" className={cn(style["text-link"])}>
              Jules Wyvern
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
