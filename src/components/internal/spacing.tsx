interface SpacingScaleProps {
  scale: Record<string, string>[];
}

export const SpacingScale = ({ scale }: SpacingScaleProps) => (
  <section className="text-grayscale-text">
    <h1 className="mb-3">Spacing</h1>
    <ul>
      {scale.map((scaleItem) => {
        const [name, classes] = Object.entries(scaleItem)[0];

        return (
          <li key={name} className="mb-4">
            <span className="block text-base font-medium text-grayscale-hover">
              {name}
            </span>
            <div className="w-full h-7 relative bg-primary">
              <div className={`w-full h-full ${classes}`}>
                <div className="w-full h-full bg-primary-background" />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);
