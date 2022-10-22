/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { TOP_BACKGROUND_IMAGE_COVER_URL } from "../constants/movie-constants";
import useAuth from "../hooks/useAuth";

import { Inputs } from "../types/user";

const Login = () => {
  const [login, setLogin] = useState(false);

  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative m-auto md:m-0 space-y-8 rounded bg-black/75 py-10 px-8 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-center text-4xl font-bold">ログイン</h1>
        <section className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Eメールを入力してください"
              className="input"
              {...register("email", { required: true })}
            />
            {/* 未入力の場合、エラーメッセージ  */}
            {errors.email && errors.email.type === "required" && (
              <p className="p-1 text-[13px] font-light text-red-500">
                ※　Eメールは必須です。
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="パスワードを入力してください"
              className="input"
              {...register("password", {
                required: true,
                minLength: 4,
                maxLength: 60,
              })}
            />
            {/* 未入力の場合、エラーメッセージ  */}
            {errors.password && errors.password.type === "required" && (
              <p className="p-1 text-[13px] font-light text-red-500">
                ※　パスワードは必須です。
              </p>
            )}
            {/* 入力が４文字以下の場合、エラーメッセージ  */}
            {errors.password && errors.password.type === "minLength" && (
              <p className="p-1 text-[13px] font-light text-red-500">
                ※　パスワードを３文字以上入力してください。
              </p>
            )}
            {/* 入力が６０文字以上の場合、エラーメッセージ  */}
            {errors.password && errors.password.type === "maxLength" && (
              <p className="p-1 text-[13px] font-light text-red-500">
                ※　パスワードを６０文字以内に入力してください。
              </p>
            )}
          </label>
        </section>
        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold border border-solid border-transparent hover:bg-black hover:text-[#e50914] hover:border-solid hover:border hover:border-[#e50914]"
          onClick={() => setLogin(true)}
        >
          NetStarへログイン
        </button>

        <section className="flex justify-between items-center text-[gray]">
          NetStarに新ユーザー？
          <button
            type="submit"
            className="text-white rounded px-8 py-3 bg-[#000000] border border-white border-solid hover:bg-white hover:text-black"
            onClick={() => setLogin(false)}
          >
            今無料で登録
          </button>
        </section>
      </form>
    </section>
  );
};

export default Login;
