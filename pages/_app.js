// pages/_app.js
import "./globals.css"; // ajuste o caminho se mover o CSS

const components = {
  // Exemplo: mapear <pre> para <code> se quiser
  // pre: (props) => <pre {...props} />
};

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
