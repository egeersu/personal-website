import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";


import perlegoLogo from "public/work/perlego.png"
import kuisLogo from "public/work/kuis.jpeg"
import miletosLogo from "public/work/miletos.png"
import ediLogo from "public/work/edi.png"
import kocLogo from "public/work/koc.jpeg"

import meLily from "public/gallery/me-lily.jpg";
import colorado from "public/gallery/colorado.jpg";

export const metadata: Metadata = {
  title: "About | Ege Ersü",
  description:
    "About page for Ege",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p
          className="text-secondary animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
        
        </p>
      </div>
      {/* <div className="lg:hidden mb-8">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={meLily}
            alt={"me and lily"}
            width={324}
            height={139}
            className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={colorado}
            alt={"me and lily"}
            width={220}
            height={260}
            className="absolute w-48 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl rotate-6 left-[45%] md:left-[60%] md:w-56 -top-48"
            priority
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Gallery />
      </div> */}
      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        {/* <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6"> */}
            {/* <p>Heya, it's Ege!!</p> */}

            {/* <p>
              I'm a Data Engineer 
            </p> */}
            {/* <p>
              In addition to coding, I also make{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/channel/@brianruizy"
              >
                YouTube
              </Link>{" "}
              videos, where I focus on tech gear, creative vlogs, and a bit of
              personal development.
            </p>
            <p>
              When I&apos;m not at my desk I am probably lifting weights,
              playing soccer, or at a coffee shop :)
            </p> */}
          {/* </div>
        </Section> */}


        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            {/* <p>
             ~3 years of professional development experience.
            </p> */}
            <p>
              Currently I&apos;m working as a Data Engineer at{" "}
              <Link
                className="underline"
                href="https://www.perlego.com/"

              >
                Perlego
              </Link>
              , an online library with a subscription-based service providing access to textbooks with built-in learning tools.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>

        <Section heading="Degrees" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <Workplaces items={schools} />
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              Have a question or just want to chat?
            </p>
            <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
              {ConnectLinks.map((link) => (
                <li className="transition-opacity col-span-1" key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-auto text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>


      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Data Engineer",
    company: "Perlego",
    time: "2022 -",
    imageSrc: perlegoLogo,
    link: "https://www.perlego.com/",
  },
  {
    title: "Research Assistant",
    company: "KUIS AI",
    time: "2019",
    imageSrc: kuisLogo,
    link: "https://ai.ku.edu.tr/",
  },
  {
    title: "Machine Learning Intern",
    company: "Miletos",
    time: "2018",
    imageSrc: miletosLogo,
    link: "https://miletos.co/en",
  },
];

const schools = [
  {
    title: "The University of Edinburgh",
    company: "Informatics (MSc)",
    time: "2021",
    imageSrc: ediLogo,
    link: "https://github.com/egeersu/Multihop-GNN",
  },
  {
    title: "Koc University",
    company: "Computer Engineering (BEng)",
    time: "2020",
    imageSrc: kocLogo,
    link: "https://github.com/egeersu/KnetOnnx.jl",
  },
  // {
  //   title: "Machine Learning Intern",
  //   company: "Miletos",
  //   time: "2018",
  //   imageSrc: miletosLogo,
  //   link: "https://miletos.co/en",
  // },
];