"use client";

/**
 * Testimonials
 * - Prova social (fundamental para conversão)
 */

import styles from "./Testimonials.module.css";

const data = [
  {
    name: "Carlos",
    text: "Melhor barbearia de Luanda. Atendimento top e corte impecável.",
  },
  {
    name: "Miguel",
    text: "Sempre saio daqui com confiança. Profissionais de verdade.",
  },
  {
    name: "João",
    text: "Ambiente limpo, rápido e corte perfeito.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className={styles.section}>
      <h2>Depoimentos</h2>

      <div className={styles.grid}>
        {data.map((item, i) => (
          <div key={i} className={styles.card}>
            <p> {item.text}</p>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
            <strong>- {item.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}