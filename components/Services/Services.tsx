"use client";

/**
 * Serviços da barbearia
 * - Interativo (onClick → WhatsApp)
 */

import styles from "./Services.module.css";

const services = [
  {
    title: "Corte Simples",
    price: "2.500 Kz",
    time: "30 min",
  },
  {
    title: "Corte + Barba",
    price: "4.000 Kz",
    time: "45 min",
  },
  {
    title: "Degradê Premium",
    price: "5.000 Kz",
    time: "50 min",
  },
  {
    title: "Combo Completo",
    price: "6.500 Kz",
    time: "60 min",
  },
];

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <h2 className={styles.title}>Serviços</h2>

      <div className={styles.grid}>
        {services.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title}</h3>
            <p className={styles.price}>{item.price}</p>
            <span>{item.time}</span>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/244900000000?text=Quero ${item.title}`,
                  "_blank"
                )
              }
            >
              Agendar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}