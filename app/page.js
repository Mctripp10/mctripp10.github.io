"use client";

import Head from "next/head";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import NavBarHome from "@/components/NavBarHome";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-gradient-to-b from-gray-900 to-violet-950 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <NavBarHome />
          <div className="flex h-screen flex-col text-center">
            <div className="m-auto">
              <h3 className="font-mono text-2xl pb-5 pt-28 bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text md:text-3xl">
                Hi, my name is
              </h3>
              <h2 className="text-5xl text-white font-bold md:text-6xl lg:text-7xl xl:text-8xl transition-transform duration-300 hover:scale-105">
                Michael Tripp<span className="text-5xl bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text md:text-7xl">.</span>
              </h2>
              <h3 className="font-mono text-2xl pt-5 bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text md:text-3xl">
                Nice to meet you!
              </h3>
              <div className="text-4xl flex justify-center gap-16 pt-10 text-gray-400">
                <a className="transition-all duration-300 hover:scale-110 hover:text-gray-300" href="https://www.linkedin.com/in/michaelctripp/" target="_blank"><BsLinkedin /></a>
                <a className="transition-all duration-300 hover:scale-110 hover:text-gray-300" href="https://github.com/Mctripp10" target="_blank"><BsGithub /></a>
                <a className="transition-all duration-300 hover:scale-110 hover:text-gray-300" href="https://www.instagram.com/mc_tripp/" target="_blank"><BsInstagram /></a>
              </div>
          </div>
            </div>
        </section>
      </main>
    </div>
  );
}