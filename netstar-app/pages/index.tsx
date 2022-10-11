import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>NetStar - 動画Webストア</title>
        <meta name="description" content="NetStar - 動画Webストア" />
        <link rel="icon" href="/netstar-browser.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Main Contents */}
      <main>
        {/* Banner */}
        <section>
          {/* Row 1 */}
          {/* Row 2 */}
          {/* Row 3 */}
          {/* Row n */}
        </section>
      </main>
      {/* Popup Dialog */}
    </div>
  );
};

export default Home;
