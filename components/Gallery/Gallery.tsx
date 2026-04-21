/**
 * Galeria de cortes
 * - Prova social visual
 * - Impacto direto na confiança
 */

import styles from "./Gallery.module.css";

const images = [
  "/g1.jpg",
  "/g2.jpg",
  "/g3.jpg",
  "/g4.jpg",
  "/g5.jpg",
  "/g6.jpg",
];

export default function Gallery() {
  return (
    <section id="galeria" className={styles.section}>
      <h2 className={styles.title}>Galeria</h2>

      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.imageBox}>
            <img src={img} alt={`corte ${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}