import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

import requests from "../api/requests";

import type { PropsTypes } from "../types/movie";
import type { GetServerSideProps } from "next";
import Row from "../components/Row";
import useAuth from "../hooks/useAuth";

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
  const { loading } = useAuth();

  if (loading) return null;

  return (
    <section className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>NetStar - 映画Webストア</title>
        <meta name="description" content="NetStar - 動画Webストア" />
        <link rel="icon" href="/netstar-browser.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Main Contents */}
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        {/* Banner */}
        <Banner originals={originals} />
        <section className="md:space-y-24">
          <Row title="今のトレンド" movies={trendingNow} />
          <Row title="最高評価" movies={topRated} />
          <Row title="アクションスリラー" movies={actionMovies} />
          <Row title="コメディ" movies={comedyMovies} />
          <Row title="ホラー映画" movies={horrorMovies} />
          <Row title="ロマンス映画" movies={romanceMovies} />
          <Row title="ドキュメンタリー" movies={documentaries} />
          {/* My List Component */}
        </section>
      </main>
      {/* Popup Dialog */}
    </section>
  );
};

export default Home;
