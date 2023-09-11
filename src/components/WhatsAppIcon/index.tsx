import React from "react";
import { IconWhatsApp } from "./styles";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppIcon() {
  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <IconWhatsApp>
      <a
        href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <WhatsappLogo size={30} />
      </a>
    </IconWhatsApp>
  );
}
