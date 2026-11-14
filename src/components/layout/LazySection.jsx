/**
 * Keeps section content in the server-rendered HTML for accessibility and SEO,
 * while allowing the browser to skip off-screen painting/layout work.
 * `content-visibility` is a rendering optimization, not a content-mount gate.
 */
export default function LazySection({
  children,
  id,
  minHeight = 320,
  className = "",
}) {
  return (
    <div
      id={id}
      className={`lazy-section ${className}`.trim()}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: `auto ${minHeight}px`,
      }}
    >
      {children}
    </div>
  );
}
