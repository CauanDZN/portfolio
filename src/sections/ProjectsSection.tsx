import { ArrowUpRight, GithubLogo } from 'phosphor-react'
import {
  Css3PlainIcon,
  Html5PlainIcon,
  JavascriptPlainIcon,
  NodejsPlainIcon,
  ReactOriginalIcon,
  TailwindcssPlainIcon,
} from 'react-devicons'
import colors from 'tailwindcss/colors'

import prismaIcon from '../assets/icons/prisma.svg'
import radixIcon from '../assets/icons/radix-ui.svg'
import styledComponentsIcon from '../assets/icons/styled-components.svg'

export function ProjectsSection() {
  return (
    <section className="flex flex-col items-center overflow-hidden mobile:px-4 mobile:py-16 desktop:px-16 desktop:py-[100px]">
      <div className="flex w-full flex-col items-center gap-6">
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          className="inline-flex bg-gradient-to-r text-white from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-5xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400"
        >
          Projetos Recentes
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
          className="text-center text-lg text-slate-400 mobile:max-w-[90%] desktop:max-w-[50%]"
        >
          Alguns projetos selecionados que mostram minha paixão por criar sistemas
          e o desejo de levar o desenvolvimento de aplicações a um novo nível.
        </p>
      </div>

      <div className="mt-16 flex w-full flex-col mobile:gap-10 desktop:gap-24">
        {/* Portfólio - Pedro Yuri */}
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-once="true"
          className="flex w-full items-center gap-10 mobile:flex-col desktop:flex-row"
        >
          <div className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/30 p-8">
            <div className="mb-4 flex flex-wrap items-center justify-start gap-3">
              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <ReactOriginalIcon
                    className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                    color={colors.indigo['300']}
                  />
                  <span className="text-sm text-indigo-200">ReactJS</span>
                </div>
              </div>

              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <img
                    src={styledComponentsIcon}
                    alt="Ícone da biblioteca styled components"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-indigo-200">Styled C.</span>
                </div>
              </div>
            </div>

            <h2 className="inline-flex bg-gradient-to-r text-white from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              Portfólio - Pedro Yuri
            </h2>

            <p className="mt-2 text-left text-lg text-slate-400">
              Portfólio desenvolvido em ReactJS e Styled Components para um profissional
              da área de cibersegurança.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://pedroyuri.vercel.app/"
                target="_blank"
                className="flex w-fit items-center justify-center gap-3 rounded-md bg-gradient-to-br from-indigo-400 to-indigo-600 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-95"
                rel="noreferrer"
              >
                Visitar <ArrowUpRight weight="bold" size={18} />
              </a>
              <a
                href="https://github.com/CauanDZN/pedro-portfolio"
                target="_blank"
                className="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-md bg-slate-800 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:bg-slate-700 active:scale-95"
                rel="noreferrer"
              >
                <GithubLogo weight="bold" size={18} /> Código fonte
              </a>
            </div>
          </div>
        </div>

        {/* Habits */}
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-once="true"
          className="flex w-full items-center gap-10 mobile:mt-10 mobile:flex-col desktop:flex-row-reverse"
        >
          <div className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/30 p-8">
            <div className="mb-4 flex flex-wrap items-center justify-start gap-3">
              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <ReactOriginalIcon
                    className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                    color={colors.indigo['300']}
                  />
                  <span className="text-sm text-indigo-200">
                    ReactJS/React Native
                  </span>
                </div>
              </div>

              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <NodejsPlainIcon
                    className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                    color={colors.indigo['300']}
                  />
                  <span className="text-sm text-indigo-200">NodeJS</span>
                </div>
              </div>

              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <img src={prismaIcon} alt="Ícone do Prisma" width={20} height={20} />
                  <span className="text-sm text-indigo-200">Prisma</span>
                </div>
              </div>

              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <TailwindcssPlainIcon
                    className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                    color={colors.indigo['300']}
                  />
                  <span className="text-sm text-indigo-200">TailwindCSS</span>
                </div>
              </div>

              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <img src={radixIcon} alt="Ícone do Radix UI" width={20} height={20} />
                  <span className="text-sm text-indigo-200">Radix UI</span>
                </div>
              </div>
            </div>

            <h2 className="inline-flex bg-gradient-to-r text-white from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              Habits
            </h2>

            <p className="mt-2 text-left text-lg text-slate-400">
              Aplicação para cadastrar e acompanhar hábitos diários, desenvolvida durante
              o NLW Setup da Rocketseat.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/CauanDZN/habits"
                target="_blank"
                className="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-md bg-slate-800 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:bg-slate-700 active:scale-95"
                rel="noreferrer"
              >
                <GithubLogo weight="bold" size={18} /> Código fonte
              </a>
            </div>
          </div>
        </div>

        {/* Site da EEEP LMB */}
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-once="true"
          className="flex w-full items-center gap-10 mobile:mt-10 mobile:flex-col desktop:flex-row"
        >
          <div className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/30 p-8">
            <div className="mb-4 flex flex-wrap items-center justify-start gap-3">
              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <Html5PlainIcon
                    className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                    color={colors.indigo['300']}
                  />
                  <span className="text-sm text-indigo-200">HTML</span>
                </div>
              </div>

              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <Css3PlainIcon
                    className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                    color={colors.indigo['300']}
                  />
                  <span className="text-sm text-indigo-200">CSS</span>
                </div>
              </div>

              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <JavascriptPlainIcon
                    className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                    color={colors.indigo['300']}
                  />
                  <span className="text-sm text-indigo-200">JS</span>
                </div>
              </div>
            </div>

            <h2 className="inline-flex bg-gradient-to-r text-white from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              Site da EEEP Leonel de Moura Brizola
            </h2>

            <p className="mt-2 text-left text-lg text-slate-400">
              Site desenvolvido para a escola EEEP Leonel de Moura Brizola para divulgar
              informações institucionais e atividades.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://eeep-lmb.vercel.app/"
                target="_blank"
                className="flex w-fit items-center justify-center gap-3 rounded-md bg-gradient-to-br from-indigo-400 to-indigo-600 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-95"
                rel="noreferrer"
              >
                Visitar <ArrowUpRight weight="bold" size={18} />
              </a>

              <a
                href="https://github.com/CauanDZN/eeep-lmb"
                target="_blank"
                className="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-md bg-slate-800 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:bg-slate-700 active:scale-95"
                rel="noreferrer"
              >
                <GithubLogo weight="bold" size={18} /> Código fonte
              </a>
            </div>
          </div>
        </div>

        {/* Dashgo */}
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-once="true"
          className="flex w-full items-center gap-10 mobile:mt-10 mobile:flex-col desktop:flex-row-reverse"
        >
          <div className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/30 p-8">
            <div className="mb-4 flex flex-wrap items-center justify-start gap-3">
              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <ReactOriginalIcon
                    className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                    color={colors.indigo['300']}
                  />
                  <span className="text-sm text-indigo-200">ReactJS</span>
                </div>
              </div>

              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <img
                    src={styledComponentsIcon}
                    alt="Ícone da biblioteca styled components"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm text-indigo-200">Styled C.</span>
                </div>
              </div>
            </div>

            <h2 className="inline-flex bg-gradient-to-r text-white from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              Dashgo
            </h2>

            <p className="mt-2 text-left text-lg text-slate-400">
              Dashboard administrativo desenvolvido durante o Ignite da Rocketseat para
              aprimorar habilidades em ReactJS e Styled Components.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://dashgo-cauandzn.vercel.app/dashboard"
                target="_blank"
                className="flex w-fit items-center justify-center gap-3 rounded-md bg-gradient-to-br from-indigo-400 to-indigo-600 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-95"
                rel="noreferrer"
              >
                Visitar <ArrowUpRight weight="bold" size={18} />
              </a>
              <a
                href="https://github.com/CauanDZN/dashgo"
                target="_blank"
                className="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-md bg-slate-800 px-8 py-3 text-sm font-semibold tracking-tight text-slate-100 transition ease-in hover:bg-slate-700 active:scale-95"
                rel="noreferrer"
              >
                <GithubLogo weight="bold" size={18} /> Código fonte
              </a>
            </div>
          </div>
        </div>

        {/* CONABOM */}
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-once="true"
          className="flex w-full items-center gap-10 mobile:mt-10 mobile:flex-col desktop:flex-row"
        >
          <div className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/30 p-8">
            <div className="mb-4 flex flex-wrap items-center justify-start gap-3">
              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <img
                    src={styledComponentsIcon}
                    alt="Ícone"
                    width={20}
                    height={20}
                    className="opacity-0"
                  />
                  <span className="text-sm text-indigo-200">WordPress</span>
                </div>
              </div>

              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <span className="text-sm text-indigo-200">PHP</span>
                </div>
              </div>
            </div>

            <h2 className="inline-flex bg-gradient-to-r text-white from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              CONABOM
            </h2>

            <p className="mt-2 text-left text-lg text-slate-400">
              Site do Congresso Nacional do Corpo de Bombeiros (WordPress + PHP), com
              portal de acesso à página de inscrição. Mais de{' '}
              <strong className="text-slate-200">15.000 acessos</strong>.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex w-fit items-center justify-center gap-2 rounded-md bg-slate-800 px-6 py-3 text-sm font-semibold tracking-tight text-slate-100">
                Projeto privado / institucional
              </div>
            </div>
          </div>
        </div>

        {/* Geração Tech */}
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-once="true"
          className="flex w-full items-center gap-10 mobile:mt-10 mobile:flex-col desktop:flex-row-reverse"
        >
          <div className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/30 p-8">
            <div className="mb-4 flex flex-wrap items-center justify-start gap-3">
              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <span className="text-sm text-indigo-200">PHP</span>
                </div>
              </div>
            </div>

            <h2 className="inline-flex bg-gradient-to-r text-white from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              Geração Tech — Portal de Inscrição
            </h2>

            <p className="mt-2 text-left text-lg text-slate-400">
              Portal de inscrição desenvolvido em PHP. Cerca de{' '}
              <strong className="text-slate-200">20.000 candidatos</strong> passaram
              pelo portal.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex w-fit items-center justify-center gap-2 rounded-md bg-slate-800 px-6 py-3 text-sm font-semibold tracking-tight text-slate-100">
                Projeto privado / institucional
              </div>
            </div>
          </div>
        </div>

        {/* Controllac */}
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-once="true"
          className="flex w-full items-center gap-10 mobile:mt-10 mobile:flex-col desktop:flex-row"
        >
          <div className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/30 p-8">
            <div className="mb-4 flex flex-wrap items-center justify-start gap-3">
              <div className="w-fit overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
                <div className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 px-6 py-2 text-slate-300">
                  <ReactOriginalIcon
                    className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10"
                    color={colors.indigo['300']}
                  />
                  <span className="text-sm text-indigo-200">React Native</span>
                </div>
              </div>
            </div>

            <h2 className="inline-flex bg-gradient-to-r text-white from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-3xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              Controllac
            </h2>

            <p className="mt-2 text-left text-lg text-slate-400">
              Aplicativo em React Native para controle e gestão de laticínios.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex w-fit items-center justify-center gap-2 rounded-md bg-slate-800 px-6 py-3 text-sm font-semibold tracking-tight text-slate-100">
                Projeto privado / app
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
