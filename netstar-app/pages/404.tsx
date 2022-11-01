// Page Not Found
import Head from "next/head";
import Link from "next/link";

const FourZeroFour = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
        <title>NetStar映画Webストア - 検索結果が見つかりませんでした</title>
        <meta
          name="description"
          content="NetStar動画Webストア - 検索結果が見つかりませんでした"
        />
        <link rel="icon" href="/netstar-browser.ico" />
      </Head>
      <section className="relative m-auto md:m-0 space-y-8 rounded py-10 px-8 md:mt-0 md:px-14">
        <h1 className="text-center text-xl font-bold md:text-4xl">
          大変申し訳ございませんですが、
          <br />
          検索結果が見つかりませんでした！
          <br />
          NetStarのトップページへ
        </h1>
        <Link href="/">
          <img
            src="/netstar.png"
            alt="NetStar Logo"
            width={87}
            height={27.1}
            className="border cursor-pointer px-2 py-2 m-auto hover:bg-[#fff]"
          />
        </Link>
      </section>
    </section>
  );
};

export default FourZeroFour;
