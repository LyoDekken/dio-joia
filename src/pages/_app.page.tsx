import React from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";
import GlobalStyles from "@/styles/global";
import HeaderHoverify from "@/components/Header";
import FooterHomeHoverify from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ProductProvider } from "@/context";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const routesWithoutHeaderFooter = ["/"];

  const shouldHideHeaderFooter = routesWithoutHeaderFooter.includes(
    router.pathname
  );

  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "",
          siteName: "Diô Joias em Prata",
        }}
      />
      <ProductProvider>
        <HeaderHoverify isVisible={!shouldHideHeaderFooter} />
        <Component {...pageProps} />
        <WhatsAppIcon />
        <FooterHomeHoverify />
      </ProductProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
