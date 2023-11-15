import type { PropsWithChildren } from "react";

export type ColorPaletteProps = PropsWithChildren;
export const ColorPalette = ({ children }: ColorPaletteProps) => (
  <section className="text-foreground px-4">
    <h1 className="mb-3">Colors</h1>
    {children}
  </section>
);

export type ColorScaleProps = {
  scale: Record<string, string>;
  groupName: string;
};

export const ColorScale = ({ scale, groupName }: ColorScaleProps) => (
  <>
    <h2 className="heading4 mb-4">{groupName}</h2>
    <ul className="grid grid-cols-8 gap-8 mb-5">
      {Object.entries(scale).map(([name, color]) => (
        <li key={name} className="">
          <div
            className={`w-full aspect-square rounded-md shadow-lg mb-3 ${color}`}
          />
          <span className="font-bold block">{name}</span>
          {/* <span className="text-foreground/80">.{color}</span> */}
        </li>
      ))}
    </ul>
  </>
);
