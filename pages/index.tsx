import Head from "next/head";

import Header from "../components/Header";


const Home = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

    </div>
  );
};

export default Home;
