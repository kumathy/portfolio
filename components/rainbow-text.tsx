export function RainbowText({ children }: { children: string }) {
  return (
    <span className="rainbow-word">
      {children.split("").map((character, index) => (
        <span key={index} style={{ animationDelay: `${index * -0.1}s` }}>
          {character}
        </span>
      ))}
    </span>
  );
}
