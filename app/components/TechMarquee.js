import { skills } from "../data";

export default function TechMarquee() {
  const loop = [...skills, ...skills];
  return (
    <div className="marquee-shell" aria-label="Technology stack">
      <div className="marquee-track">
        {loop.map((skill, index) => (
          <span key={`${skill}-${index}`}><i>✦</i>{skill}</span>
        ))}
      </div>
    </div>
  );
}
