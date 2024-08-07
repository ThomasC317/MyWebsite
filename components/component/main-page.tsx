"use client"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Contact from "./contact"
import { motion, useScroll } from "framer-motion"
import React, { useState } from 'react';

export function MainPage() {
  const { scrollYProgress } = useScroll();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
  <nav className="header">
  <div className="container mx-auto flex flex-col md:flex-row items-center md:items-end justify-between pr-6">
    <div className="flex justify-between w-full md:w-auto">
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <ul
      className={`${
        showMenu ? "block" : "hidden"
      } md:flex space-x-4 mt-4 md:mt-0`}
    >
      <li>
        <Link className="hover:text-gray-400 text-white" href="#about">
          À propos
        </Link>
      </li>
      <li>
        <Link className="hover:text-gray-400 text-white" href="#skills">
          Compétences
        </Link>
      </li>
      <li>
        <Link className="hover:text-gray-400 text-white" href="#experiences">
          Expériences
        </Link>
      </li>
      <li>
        <Link className="hover:text-gray-400 text-white" href="#projects">
          Projets persos
        </Link>
      </li>
      <li>
        <Link className="hover:text-gray-400 text-white" href="#contact">
          Me contacter
        </Link>
      </li>
    </ul>
  </div>
  <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
</nav>
      <main className="flex-1">
        <section className="test">
          <div className="full-screen-background">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start px-8 ">
          <motion.div whileInView={{ x:0,opacity:1 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1 }} initial={{x:50, opacity:0}}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl main-title">Bonjour, je m'appelle Thomas CERDERA</h1>
            <p className="text-white main-title mt-6">Je suis un développeur Full-Stack !</p>
            </motion.div>
          </div>
        </div>
        </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 h-auto mx-auto" id="about">
  <div className="mx-auto">
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 1 }}
      initial={{ x: 100, opacity: 0 }}
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A propos de moi</h2>
      <p className="text-gray-600 mt-12">
        Je suis un développeur Full-Stack qui travaille maintenant depuis 5 ans dans le domaine du Web. <br />
        En dehors du développement, j'adore la musique, le cinéma, les séries, les jeux-vidéos, les voyages, et la photographie...<br /><br />
        Comme vous pouvez le voir, je suis quelqu'un de très créatif. J'ai de plus une bonne maîtrise de l'anglais (920 au toeic), j'apprécie particulièrement 
        le travail en équipe mais je sais aussi travailler en autonomie quand il le faut. Je suis minutieux, je sais gérer mon stress, 
        et j'ai beaucoup travaillé mon esprit critique.<br /><br />
        Fort de mes expériences, je saurais devenir un atout pour votre équipe.
      </p>
    </motion.div>
  </div>
</section>
        <section className="bg-gray-100 py-12 px-4 md:px-8" id="skills">
          <div className="space-y-4 container mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Compétences</h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl">
                Voici une liste exhaustive des technologies que j'ai appris à maitriser au fur et à mesure des années.
              </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="flex flex-col items-center">
                <CodepenIcon className="w-12 h-12 mb-2" />
                <p className="text-gray-700">React</p>
              </div>
              <div className="flex flex-col items-center">
                <CodepenIcon className="w-12 h-12 mb-2" />
                <p className="text-gray-700">.NET</p>
              </div>
              <div className="flex flex-col items-center">
                <DatabaseIcon className="w-12 h-12 mb-2" />
                <p className="text-gray-700">SQL Server</p>
              </div>
              <div className="flex flex-col items-center">
                <DatabaseIcon className="w-12 h-12 mb-2" />
                <p className="text-gray-700">Azure Devops</p>
              </div>
              <div className="flex flex-col items-center">
                <TypeIcon className="w-12 h-12 mb-2" />
                <p className="text-gray-700">Angular</p>
              </div>
              <div className="flex flex-col items-center">
                <DockIcon className="w-12 h-12 mb-2" />
                <p className="text-gray-700">Docker</p>
              </div>
              <div className="flex flex-col items-center">
                <CloudIcon className="w-12 h-12 mb-2" />
                <p className="text-gray-700">AWS</p>
              </div>
              <div className="flex flex-col items-center">
                <GitGraphIcon className="w-12 h-12 mb-2" />
                <p className="text-gray-700">Git</p>
              </div>
            </div>
        </section>
        <section id="experiences" className="w-full py-12 bg-white">
  <div className="container px-4 md:px-6 mx-auto">
    <div className="space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expériences professionelles</h2>
      <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl">
        Voici un résumé exhaustif de mes dernières expériences. Vous pouvez trouver un détail complet ici :
      </p>
    </div>
    <div className="mt-12 relative">
      <div className="hidden md:block absolute inset-0 w-px bg-gray-300 ml-6 md:ml-0 md:left-1/2 md:-translate-x-1/2" />
      <div className="grid gap-8">
        <div className="grid md:grid-cols-2 gap-4 relative">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
            initial={{ x: 100, opacity: 0 }}
          >
            <div className="bg-gray-100 rounded-lg p-6 space-y-2 md:ml-12">
              <h3 className="text-xl font-bold">Ingénieur Développeur Full-Stack</h3>
              <p className="text-gray-500">Infotel Blagnac</p>
              <p className="text-gray-600">Septembre 2023 - Maintenant</p>
              <p className="text-gray-500">
                • <span className="font-bold">ASN/AOG</span> : Maintenance / développement d'une nouvelle section permettant le suivi d'incidents + un système d'abonnement permettant de filtrer la quantité d'informations affichées à l'utilisateur.<br />
                • <span className="font-bold">Airframe Services</span> : Création d'une application permettant un suivi grâce à la mise en place de KPI.<br />
                • <span className="font-bold">Madness</span> : Etude d'un projet pour la rédaction d'une documentation et de spec projets.<br />
                • <span className="font-bold">Athenaa</span> : Création d'un back retournant les moyennes d'heures / cycles de vol selon un algorithme spécifié par le client.<br />
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">React</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">Angular</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">.NET</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">Pyspark</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">Git</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">JIRA</span>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:flex absolute -left-6 md:left-1/2 md:-translate-x-1/2 bg-blue-400 rounded-full w-6 h-6 items-center justify-center"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 relative">
        <motion.div whileInView={{ x:710,opacity:1 }} viewport={{ once: true }} transition={{ ease: "easeOut", duration: 1 }} initial={{x:610, opacity:0}}>
            <div className="bg-gray-100 rounded-lg p-6 space-y-2 md:ml-12 md:col-start-1">
              <h3 className="text-xl font-bold">Ingénieur Développeur Full-Stack</h3>
              <p className="text-gray-500">LP Promotion</p>
              <p className="text-gray-600">Août 2021 - Mai 2023</p>
              <p className="text-gray-500">
                • <span className="font-bold">Workplace</span> : Mise en place d'un outil regroupant les process métiers, le langage technique et un organigramme.<br />
                • <span className="font-bold">ADV</span> : Transformation du module de gestion des étapes d'un dossier en application Web.<br />
                • <span className="font-bold">LP.Comm</span> : Maintenance de l'application monolithique.<br />
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">.NET</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">Blazor</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">SQL Server</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">Git</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">Azure AD</span>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:flex absolute -left-6 md:left-1/2 md:-translate-x-1/2 bg-blue-400 rounded-full w-6 h-6 items-center justify-center"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 relative">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
            initial={{ x: 100, opacity: 0 }}
          >
            <div className="bg-gray-100 rounded-lg p-6 space-y-2 md:ml-12">
              <h3 className="text-xl font-bold">Alternant Chef de projet/ Ingénieur logiciel</h3>
              <p className="text-gray-500">LP Promotion</p>
              <p className="text-gray-600">Octobre 2019 - Juillet 2021</p>
              <p className="text-gray-500">
                • <span className="font-bold">FluxPartenaire</span> : Nouvelle version d'une application de génération de flux partenaires au format XML.<br />
                • <span className="font-bold">LP Inside</span> : Transformation d'une application monolithique comportant un grand nombre de module en plateforme web.<br />
                • <span className="font-bold">UI.Framework</span> : Création d'une bibliothèque de composants utilisés sur les autres projets en cours et à venir.<br />
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">.NET</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">Blazor</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">SQL Server</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">Git</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-xs font-medium text-gray-200">Azure AD</span>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:flex absolute -left-6 md:left-1/2 md:-translate-x-1/2 bg-blue-400 rounded-full w-6 h-6 items-center justify-center"></div>
        </div>
      </div>
    </div>
  </div>
</section>
        <section className="bg-gray-100 py-12 px-4 md:px-8" id="projects">
          <div className="space-y-4 container mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projets personnels</h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl py-1">
                Voici une liste de mes projets personnels
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              <Card>
                <div
                  className="rounded-t-lg cv-site-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Mon site web</h3>
                  <p className="text-gray-700">
                    Ce site a été réalisé en utilisant <a href="https://nextjs.org/">NextJS</a>, framework de <a href="https://fr.legacy.reactjs.org/">React</a>.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div
                  className="rounded-t-lg tom-archer-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">(WIP)Tom Archer Website</h3>
                  <p className="text-gray-700">
                    Ce site, pour mon projet musical, est en train d'être réalisé grâce à <a href="https://nextjs.org/">NextJS</a>, framework de <a href="https://fr.legacy.reactjs.org/">React</a>.
                  </p>
                </CardContent>
              </Card>
            </div>
        </section>
        <section className="py-12 px-4 md:px-8" id="contact">
          <div className="space-y-4 container mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl">
                N'hésitez pas à me contacter pour toute demande, offre...
              </p>
          </div>
          <Contact></Contact>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2024 Thomas CERDERA. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link className="hover:text-gray-400" href="https://github.com/ThomasC317">
              <GithubIcon className="w-6 h-6" />
            </Link>
            <Link className="hover:text-gray-400" href="https://www.linkedin.com/in/thomas-cerdera-305ab3153/">
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function DockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>
  )
}


function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}
