import {
  ArrowUpRight,
  Link,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react'
import colors from 'tailwindcss/colors'

import bgStars from '../assets/bg-stars.svg'
import profileImg from '../assets/profile.jpg'

export function CtaSection() {
  return (
    <section className="flex-col items-center overflow-hidden desktop:px-16">
      <div className="bg-radial-gradient destop:px-10 relative flex w-full flex-col items-center overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-400 to-indigo-500 py-[100px] mobile:px-4">
        <img
          src={bgStars}
          alt=""
          className="animate-float absolute top-0 -z-10 h-full w-full"
        />
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          className="bg-gradient-to-r text-white from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center font-semibold leading-10 tracking-tighter text-transparent mobile:text-3xl desktop:max-w-[40%] desktop:text-5xl dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400"
        >
          Sinta-se a vontade para entrar em contato.
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
          className="mt-4 text-center text-lg text-slate-400 mobile:max-w-[90%] desktop:max-w-[30%]"
        >
          Será um prazer compartilhar ideias, experiências e estabelecer
          conexões significativas
        </p>
        <div className="relative mt-20 flex items-center justify-center gap-3">
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-once="true"
            className="w-fit overflow-hidden rounded-full border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border transition-all hover:bg-indigo-500 active:scale-95"
          >
            <a
              href="https://linkedin.com/in/francisco-cauan-victor/"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 text-slate-300 transition-all hover:bg-indigo-500"
              rel="noreferrer"
            >
              <LinkedinLogo size={24} color={colors.indigo[200]} />
              <span className="text-slate-100 mobile:hidden desktop:block">
                LinkedIn
              </span>
              <ArrowUpRight
                size={16}
                color={colors.indigo[400]}
                className="mobile:hidden desktop:block"
              />
            </a>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-once="true"
            className="w-fit overflow-hidden rounded-full border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border transition-all hover:bg-indigo-500 active:scale-95"
          >
            <a
              href="https://github.com/CauanDZN"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 text-slate-300 transition-all hover:bg-indigo-500"
              rel="noreferrer"
            >
              <GithubLogo size={24} color={colors.indigo[200]} />
              <span className="text-slate-100 mobile:hidden desktop:block">
                GitHub
              </span>
              <ArrowUpRight
                size={16}
                color={colors.indigo[400]}
                className="mobile:hidden desktop:block"
              />
            </a>
          </div>
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            src={profileImg}
            alt=""
            width={64}
            height={64}
            className="animate-ripple rounded-full"
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true"
            className="w-fit cursor-pointer overflow-hidden rounded-full border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border transition-all hover:bg-indigo-500 active:scale-95"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5585987673952&text=Ol%C3%A1,%20Cauan!%20Vim%20pelo%20seu%20portf%C3%B3lio."
              target="_blank"
              className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 text-slate-300 transition-all hover:bg-indigo-500"
              rel="noreferrer"
            >
              <WhatsappLogo size={24} color={colors.indigo[200]} />
              <span className="text-slate-100 mobile:hidden desktop:block">
                WhatsApp
              </span>
              <ArrowUpRight
                size={16}
                color={colors.indigo[400]}
                className="mobile:hidden desktop:block"
              />
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true"
            className="w-fit cursor-pointer overflow-hidden rounded-full border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border transition-all hover:bg-indigo-500 active:scale-95"
          >
            <a
              href="https://linktr.ee/cauandzn"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 p-4 text-slate-300 transition-all hover:bg-indigo-500"
              rel="noreferrer"
            >
              <Link size={24} color={colors.indigo[200]} />
              <span className="text-slate-100 mobile:hidden desktop:block">
                Linktree
              </span>
              <ArrowUpRight
                size={16}
                color={colors.indigo[400]}
                className="mobile:hidden desktop:block"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
