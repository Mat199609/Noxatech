import React from 'react';

const team = [
  { name: 'Sebastian Zapata', role: 'QA Lead', img: 'https://randomuser.me/api/portraits/men/45.jpg', desc: 'Líder en estrategias de automatización y calidad. 12+ años en la industria.' },
  { name: 'Julian Mateo Castro', role: 'Automation Engineer', img: 'https://randomuser.me/api/portraits/men/32.jpg', desc: 'Especialista en scripts y pipelines de CI/CD, con foco en escalabilidad.' },
  { name: 'Claudia Gil', role: 'QA Consultant', img: 'https://randomuser.me/api/portraits/women/68.jpg', desc: 'Consultora en testing funcional y accesibilidad, formadora de equipos.' }
];

const TeamSection = () => (
  <section className="team-section">
    <h2>Nuestro Equipo</h2>
    <div className="team-grid">
      {team.map((m, i) => (
        <div className="team-card" key={i}>
          <img src={m.img} alt={m.name} className="team-photo" />
          <h3>{m.name}</h3>
          <span>{m.role}</span>
          <p>{m.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
