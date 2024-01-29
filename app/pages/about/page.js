"use client";

import Head from "next/head";
import { useState } from "react";
import NavBarGeneral from "@/app/components/NavBarGeneral";

export default function About() {
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
                About Me
            </h1>
            <div className="mx-60 mb-20 rounded-3xl bg-gray-900">
              <div className="mx-16 my-12">
                <p className="text-2xl font-light text-left mt-8">
                  Hello and welcome to my website! I'm Michael Tripp, a data & systems analyst by day and a software developer by night (or early morning).
                  Regardless of the task, problem-solving is key to everything I do. I find it very rewarding to be able to collaborate on solving 
                  real-world problems every day. There is always something interesting to work on! <br /><br />

                  Prior to my work as a data analyst, I worked as desktop support student tech for Westminster College's ITS department for almost the entirety of my college career,
                  another job centered around problem-solving. I graduated from Westminster College in May 2023 with a BS in Computer Science and Mathematics, allowing me to 
                  transition into my current role in data. <br /><br />

                  In my free time, I enjoy playing board and video games as well as many rec sports (rock climbing, snowboarding, volleyball, & pickleball, to name a few).
                  I also enjoy origami, learning new technologies, and binge-watching series!

                  <br /><br />
                  My goal is to not only use this website to showcase some of my projects and skills as a developer, but also provide myself with a platform for 
                  continual learning and development. If any of that sounds interesting to you, feel free to browse my website and reach out if you have any questions!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    );
}