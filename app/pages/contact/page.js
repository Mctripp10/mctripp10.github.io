"use client";

import Head from "next/head";
import { useState } from "react";
import NavBarGeneral from "@/app/components/NavBarGeneral";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";


export default function Contact() {
    const [darkMode, setDarkMode] = useState(true);

    return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-white to-violet-700 px-10 dark:bg-gradient-to-b dark:from-gray-900 dark:to-violet-950 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <NavBarGeneral />
          <div className="flex flex-col text-center">
            <h1 className="mt-52 mb-8 text-3xl md:text-6xl font-bold bg-gradient-to-br from-pink-500 to-violet-600 text-transparent bg-clip-text">
                Let's Get Connected
            </h1>
            <div className="text-5xl flex justify-center gap-16 pt-10 text-gray-600 dark:text-gray-400">
                <a className="transition-all duration-300 hover:scale-110 hover:text-gray-300" href="https://www.linkedin.com/in/michaelctripp/" target="_blank"><BsLinkedin /></a>
                <a className="transition-all duration-300 hover:scale-110 hover:text-gray-300" href="https://github.com/Mctripp10" target="_blank"><BsGithub /></a>
                <a className="transition-all duration-300 hover:scale-110 hover:text-gray-300" href="https://www.instagram.com/mc_tripp/" target="_blank"><BsInstagram /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
    );
}