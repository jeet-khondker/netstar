/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Image from "next/image";

import { TOP_BACKGROUND_IMAGE_COVER_URL } from "../constants/movie-constants";

const Login = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
        <title>NetStar映画Webストア - ログイン</title>
        <meta name="description" content="NetStar動画Webストア - ログイン" />
        <link rel="icon" href="/netstar-browser.ico" />
      </Head>
      <Image
        src={TOP_BACKGROUND_IMAGE_COVER_URL}
        layout="fill"
        className="-z-10 opacity-60 sm:!inline black-rgba bg-gradient-to-t"
        objectFit="cover"
        alt="NetStar映画Webストア"
      />
      <img
        src="/netstar.png"
        alt="NetStar Logo"
        width={87}
        height={27.1}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      />
      <form className="relative m-auto md:m-0 space-y-8 rounded bg-black/75 py-10 px-8 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-center text-4xl font-bold">ログイン</h1>
        <section className="space-y-4">
          <label className="inline-block w-full">
            <input
              typeof="email"
              placeholder="Eメールを入力してください"
              className="input"
            />
          </label>
          <label className="inline-block w-full">
            <input
              typeof="password"
              placeholder="パスワードを入力してください"
              className="input"
            />
          </label>
        </section>
        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold border border-solid border-transparent hover:bg-black hover:text-[#e50914] hover:border-solid hover:border hover:border-[#e50914]"
        >
          NetStarへログイン
        </button>

        <section className="flex justify-between items-center text-[gray]">
          NetStarに新ユーザー？
          <button
            type="submit"
            className="text-white rounded px-8 py-3 bg-[#000000] border border-white border-solid hover:bg-white hover:text-black"
          >
            今無料で登録
          </button>
        </section>
      </form>
    </section>
  );
};

export default Login;
