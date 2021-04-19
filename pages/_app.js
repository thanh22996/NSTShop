import { wrapper } from "../store";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import MenuShop from "../components/menu-shop";

function App({ Component, pageProps }) {
  return (
    <div className="root-next">
      <Head>
        <title>Login Portal</title>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link href="/assets/fontawesome/css/all.css" rel="stylesheet" />
      </Head>
      <MenuShop />
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(App);
