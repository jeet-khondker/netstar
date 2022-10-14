import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

import requests from "../api/requests";

import type { PropsTypes } from "../types/movie";
import type { GetServerSideProps } from "next";

// Server Side Rendering (SSR)

export const getServerSideProps: GetServerSideProps = async () => {
  const [
    originals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchOriginals).then((response) => response.json()),
    fetch(requests.fetchTrending).then((response) => response.json()),
    fetch(requests.fetchTopRated).then((response) => response.json()),
    fetch(requests.fetchActionMovies).then((response) => response.json()),
    fetch(requests.fetchComedyMovies).then((response) => response.json()),
    fetch(requests.fetchHorrorMovies).then((response) => response.json()),
    fetch(requests.fetchRomanceMovies).then((response) => response.json()),
    fetch(requests.fetchDocumentaries).then((response) => response.json()),
  ]);
  return {
    props: {
      originals: originals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};

const Home = ({
  originals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: PropsTypes) => {
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
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        {/* Banner */}
        <Banner originals={originals} />
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
