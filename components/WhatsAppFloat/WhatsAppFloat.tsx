"use client";

/**
 * WhatsApp Flutuante Inteligente
 * - CTA fixo
 * - Tracking de cliques (conversão)
 */

import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  const handleClick = () => {
    // 📊 tracking simples (pode evoluir para analytics depois)
    console.log("WhatsApp Clicked");

    // opcional: salvar no localStorage
    const clicks = Number(localStorage.getItem("wa_clicks") || 0);
    localStorage.setItem("wa_clicks", String(clicks + 1));

    window.open(
      "https://wa.me/244957286787?text=Olá, quero agendar um corte",
      "_blank"
    );
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      WhatsApp
    </button>
  );
}