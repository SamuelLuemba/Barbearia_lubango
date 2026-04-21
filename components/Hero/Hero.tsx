"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* IMAGEM DE FUNDO */}
      <Image
        src="/barber-hero.jpg"
        alt="Barbearia premium Luanda"
        fill
        priority
        quality={85}
        className={styles.bgImage}
        sizes="100vw"
      />

      {/* OVERLAY ESCURO */}
      <div className={styles.overlay} />

      {/* CONTEÚDO */}
      <div className={styles.content}>
        <h1>
          Corte de Alto Nível no <span>Lubango</span>
        </h1>

        <p>Estilo, presença e confiança em cada corte.</p>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/244957286787?text=Quero agendar um corte",
              "_blank"
            )
          }
        >
          Agendar no WhatsApp
        </button>
      </div>
    </section>
  );
}