export default function Marquee({ items, reverse }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marqueetrack${reverse ? " rev" : ""}`}>
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <span key={`${group}-${item.name}`}>
                  <Icon aria-hidden="true" focusable="false" />
                  {item.name}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
