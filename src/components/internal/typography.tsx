interface TypographyScaleProps {
  scale: Record<string, string>;
  groupName: string;
}

export const TypographyScale = ({ scale, groupName }: TypographyScaleProps) => (
  <section className="text-grayscale-text">
    <h1 className="text-3xl font-extrabold mb-3">{groupName}</h1>
    <ul>
      {Object.entries(scale).map(([name, classes]) => (
        <li key={name} className="mb-6">
          <span className="block font-medium text-base text-grayscale-hover">
            {name}
          </span>
          <span className={classes}>Sphinx of black quartz, judge my vow.</span>
        </li>
      ))}
    </ul>
  </section>
);
