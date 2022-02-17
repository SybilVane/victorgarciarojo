import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";
import About from "./components/about";
import Work from "./components/work";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Víctor García Rojo - Artist Portfolio</title>
        <meta
          name='description'
          content='Víctor García Rojo, portfolio and personal profile'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <About />
      <Work />
    </div>
  );
}
