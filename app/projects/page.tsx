import Card from "../lib/ui/projects/Card";
import LandingPage1 from "@/public/Landing page 1.png";
import ClothingStore from "@/public/Clothing store.png";
import M2HQ from "@/public/M2HQ.png";
import WeatherApp from "@/public/Simple weather app.png";
import NextCent from "@/public/Landing page NextCent.png";
import { NextjsIcon, TailwindIcon, TypeScriptIcon } from "../lib/svg";

function Projects() {
  return (
    <main className="flex flex-col items-center justify-center space-y-48 mx-auto">
      <h1>Projects</h1>
      <Card
        title={"Landing Page"}
        description={
          "A fully responsive landing page built using Tailwind CSS, recreated from a Figma design. Focused on clean UI and accessibility."
        }
        imageSrc={LandingPage1}
        imageAlt={"Landing page preview"}
        icons={[TailwindIcon, NextjsIcon, TypeScriptIcon]}
        iconCss={[""]}
        link={"https://landing-page-1-mock.vercel.app/"}
      />

      <Card
        title={"E-commerce Store"}
        description={
          "A modern e-commerce store layout built with Next.js and Tailwind CSS. Designed from a Figma concept, featuring optimized layouts for mobile and desktop."
        }
        imageSrc={ClothingStore}
        imageAlt={"Clothing store design preview"}
        icons={[NextjsIcon, TailwindIcon, TypeScriptIcon]}
        iconCss={[""]}
        link={"https://clothingstore-phi.vercel.app/"}
      />

      <Card
        title={"Agency Website"}
        description={
          "One of my first full-stack projects using Next.js and Node.js. Built to showcase client reviews with a custom CMS. Currently planning a redesign."
        }
        imageSrc={M2HQ}
        imageAlt={"Agency website preview"}
        icons={[NextjsIcon, TailwindIcon, TypeScriptIcon]}
        iconCss={[""]}
        link={""}
      />

      <Card
        title={"NextCent Landing Page"}
        description={
          "A fully responsive landing page built using Tailwind CSS, recreated from a Figma design. Focused on clean UI and accessibility."
        }
        imageSrc={NextCent}
        imageAlt={"SaaS website preview"}
        icons={[NextjsIcon, TailwindIcon, TypeScriptIcon]}
        iconCss={[""]}
        link={"https://landing-page-2-phi.vercel.app/"}
      />

      <Card
        title={"Weather App"}
        description={
          "A real-time weather app that fetches and displays weather data using an API. One of my first API integration projects, with a planned redesign."
        }
        imageSrc={WeatherApp}
        imageAlt={"Weather app preview"}
        icons={[NextjsIcon, TailwindIcon, TypeScriptIcon]}
        iconCss={[""]}
        link={"https://weather-app-self-xi-68.vercel.app/"}
      />
    </main>
  );
}

export default Projects;
