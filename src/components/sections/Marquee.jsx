export default function Marquee({ items, reverse }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className={"marqueetrack " + (reverse ? "rev" : "")}>
        {loop.map((x, i) => {
          const I = x.icon;
          return (
            <span key={i}>
              <I />
              {x.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
