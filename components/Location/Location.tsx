"use client";

/**
 * Location
 * - Garante confiança + presença física
 */

import styles from "./Location.module.css";

export default function Location() {
  return (
    <section id="localizacao" className={styles.section}>
      <h2>Localização</h2>

      <p>📍 Lubango, Angola - Centro da cidade</p>
      <p>⏰ Segunda a Sábado: 09h - 19h</p>

      
 <div className={styles.map}>
  <div className={styles.mapBox}>
    <iframe
      className={styles.iframe}
      src="https://www.google.com/maps/embed?..."
      loading="lazy"
    />
  </div>
</div>
    </section>
  );
}