import type { PropsWithChildren } from "react";
import React from "react";

export type ColorPaletteProps = PropsWithChildren;
export const ColorPalette = ({ children }: ColorPaletteProps) => (
  <section className="text-slate-800 px-4">
    <h1 className="text-3xl font-extrabold mb-3">Colors</h1>
    {children}
  </section>
);

export type ColorScaleProps = {
  scale: Record<string, string>;
  groupName: string;
};

export const ColorScale = ({ scale, groupName }: ColorScaleProps) => (
  <>
    <h2 className="text-xl font-bold mb-4">{groupName}</h2>
    <ul className="grid grid-cols-11 gap-8 mb-5">
      {Object.entries(scale).map(([name, color]) => (
        <li key={name} className="">
          <div
            className="w-full aspect-square rounded-md shadow-lg mb-3"
            style={{ backgroundColor: color }}
          />
          <span className="font-bold block">{name}</span>
          <span className="text-slate-700">{color}</span>
        </li>
      ))}
    </ul>
  </>
);

export const ColorsExample = () => (
  <>
    <div className="container px-4 py-6 border-2 mb-4 rounded-lg bg-primary-background border-primary-border text-primary-text">
      <span className="text-2xl font-bold">Example with primary</span>
      <p className="text-lg mb-3">
        Quis reprehenderit commodo ipsum.Commodo sint velit consequat proident
        et non consequat sit reprehenderit nisi consectetur non. Exercitation do
        sint veniam voluptate eu ad do mollit sit aute Lorem ut.
      </p>

      <div className="flex flex-row space-x-4">
        <button className="px-4 py-2 bg-primary-base border-primary-base text-white font-semibold text-lg  border-2 rounded-xl hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active active:border-primary-active">
          Press me
        </button>
        <button className="px-4 py-2  border-primary-base text-primary-base font-semibold text-lg  border-2 rounded-xl hover:text-primary-hover hover:border-primary-hover active:text-primary-active active:border-primary-active">
          Press me
        </button>
      </div>
    </div>
  </>
);
