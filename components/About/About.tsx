"use client";

/**
 * About Section
 * - Cria autoridade e confiança
 * - Mostra profissionalismo da barbearia
 */

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={styles.section} >
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/barber-owner.jpg" alt="Barbeiro profissional" />
        </div>

        <div className={styles.content}>
          <h2>Sobre Nós</h2>

          <p>
            Somos uma barbearia premium no Lubango focada em estilo,
            precisão e experiência. Mais do que cortes, entregamos presença.
          </p>

          <p>
            Cada cliente recebe atenção individual e um resultado pensado
            para elevar sua imagem.
          </p>
        </div>
      </div>
    </section>
  );
}