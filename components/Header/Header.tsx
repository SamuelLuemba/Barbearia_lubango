/**
 * Header da landing page
 * - Navegação com scroll suave
 * - Fixo no topo (melhora conversão)
 * - CTA direto visível
 */

"use client";

import styles from "./Header.module.css";

export default function Header() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <h1 className={styles.logo}>Barbearia</h1>

        {/* Navegação */}
        <nav className={styles.nav}>
          <button onClick={() => scrollTo("servicos")}>Serviços</button>
          <button onClick={() => scrollTo("galeria")}>Galeria</button>
          <button onClick={() => scrollTo("sobre")}>Sobre</button>
          <button onClick={() => scrollTo("depoimentos")}>Depoimentos</button>
          <button onClick={() => scrollTo("localizacao")}>Localização</button>
        </nav>

        {/* CTA */}
        <button
          className={styles.cta}
          onClick={() =>
            window.open(
              "https://wa.me/244957286787?text=Olá, quero agendar um corte",
              "_blank"
            )
          }
        >
          Agendar
        </button>
      </div>
    </header>
  );
}