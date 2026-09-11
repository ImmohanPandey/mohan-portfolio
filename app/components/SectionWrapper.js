export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      {children}
    </section>
  );
}
