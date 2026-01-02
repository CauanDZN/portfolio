import { Book, Briefcase } from 'phosphor-react'
import { calcularIdade } from '../utils/age'
import colors from 'tailwindcss/colors'

import ProfileImage from '../assets/profile.jpg'

export function AboutMeSection() {
  const dataNascimentoUsuario = new Date(2005, 9, 3)
  const idadeUsuario = calcularIdade(dataNascimentoUsuario)

  const bulletItemClass = 'flex items-start gap-2 text-slate-400 leading-relaxed'
  const bulletDotClass =
    'mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500/80'

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      className="relative w-full items-start pb-20 pt-20 mobile:flex mobile:flex-col mobile:gap-6 mobile:px-4 desktop:grid desktop:grid-cols-2 desktop:gap-16 desktop:px-16"
    >
      <img
        src={ProfileImage}
        alt="Foto de Perfil - Cauan Victor"
        className="sticky rounded-2xl desktop:top-10"
      />

      <div className="flex w-full flex-col items-start justify-start mobile:mt-10 mobile:gap-6">
        <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-5xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 mobile:text-white">
          Sobre mim
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
          className="text-lg text-slate-400"
        >
          Olá! Meu nome é <strong className="text-slate-100">Cauan Victor</strong>,
          tenho <strong className="text-slate-100"> {idadeUsuario} anos</strong> e sou
          um desenvolvedor brasileiro de{' '}
          <strong className="text-slate-100">Fortaleza/CE</strong>.
          <br />
          Atualmente atuo como{' '}
          <strong className="text-slate-100">
            Assistente de Desenvolvimento de Sistemas
          </strong>{' '}
          na <strong className="text-slate-100">Engaja Comunicação</strong> (atuando
          também em projetos da Digital College).
          <br />
          Meu foco é desenvolvimento full stack e automações, principalmente com{' '}
          <strong className="text-slate-100">
            TypeScript/Node, React/Next e Python
          </strong>
          . Inglês avançado (EF English Live).
          <br />
          Formação:{' '}
          <strong className="text-slate-100">Ciência da Computação</strong> (formando),
          <strong className="text-slate-100"> ADS</strong> (formando) e{' '}
          <strong className="text-slate-100">Técnico em Redes</strong>.
        </p>

        <div className="mt-10 w-full">
          <h1 className="text-2xl font-medium leading-tight text-zinc-100">
            Experiência
          </h1>

          <div className="mt-6 flex flex-col gap-8">
            {/* Engaja */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-3 shadow-[0px_10px_80px_4px_rgba(99,102,241,.35)]">
                <Briefcase size={22} color={colors.slate['100']} weight="bold" />
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-xl leading-tight text-slate-100">
                    Assistente de Desenvolvimento de Sistemas
                  </h2>
                  <p className="mt-1 text-slate-400 mobile:text-base desktop:text-lg">
                    Engaja Comunicação · Tempo integral · Híbrido · Fortaleza, CE
                  </p>
                  <p className="mt-1 text-sm text-slate-500">nov de 2024 — o momento</p>
                </div>

                <div className="mt-3 flex flex-col gap-2 sm:gap-3">
                  <div className={bulletItemClass}>
                    <span className={bulletDotClass} />
                    <span>Scrum/Kanban para entrega consistente.</span>
                  </div>
                  <div className={bulletItemClass}>
                    <span className={bulletDotClass} />
                    <span>
                      Liderança do time de TI/Desenvolvimento (Engaja e Digital College).
                    </span>
                  </div>
                  <div className={bulletItemClass}>
                    <span className={bulletDotClass} />
                    <span>
                      Automações e integrações (Python, Selenium/Playwright) + CI/CD
                      (GitHub Actions) e Docker.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital College - Programador Jr */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-3 shadow-[0px_10px_80px_4px_rgba(99,102,241,.35)]">
                <Briefcase size={22} color={colors.slate['100']} weight="bold" />
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-xl leading-tight text-slate-100">
                    Programador Júnior
                  </h2>
                  <p className="mt-1 text-slate-400 mobile:text-base desktop:text-lg">
                    Digital College Brasil · Tempo integral · Presencial · Fortaleza, CE
                  </p>
                  <p className="mt-1 text-sm text-slate-500">mai de 2024 — nov de 2024</p>
                </div>

                <div className="mt-3 flex flex-col gap-2 sm:gap-3">
                  <div className={bulletItemClass}>
                    <span className={bulletDotClass} />
                    <span>Manutenção e desenvolvimento de soluções internas.</span>
                  </div>
                  <div className={bulletItemClass}>
                    <span className={bulletDotClass} />
                    <span>
                      Integrações e relatórios (Pagar.me / Zoop) e automações.
                    </span>
                  </div>
                  <div className={bulletItemClass}>
                    <span className={bulletDotClass} />
                    <span>Docker e pipelines CI/CD (GitHub Actions).</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital College - Estágio */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-3 shadow-[0px_10px_80px_4px_rgba(99,102,241,.35)]">
                <Briefcase size={22} color={colors.slate['100']} weight="bold" />
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-xl leading-tight text-slate-100">
                    Estagiário de Suporte de Informática
                  </h2>
                  <p className="mt-1 text-slate-400 mobile:text-base desktop:text-lg">
                    Digital College Brasil · Estágio · Fortaleza, CE
                  </p>
                  <p className="mt-1 text-sm text-slate-500">jan de 2024 — abr de 2024</p>
                </div>

                <div className="mt-3 flex flex-col gap-2 sm:gap-3">
                  <div className={bulletItemClass}>
                    <span className={bulletDotClass} />
                    <span>Suporte técnico ao cliente interno.</span>
                  </div>
                  <div className={bulletItemClass}>
                    <span className={bulletDotClass} />
                    <span>Criação de scripts para automação e produtividade.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="mt-14 text-2xl font-medium leading-tight text-zinc-100">
            Formação
          </h1>

          <div className="mt-6 flex flex-col gap-8">
            {/* Estácio */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-3 shadow-[0px_10px_80px_4px_rgba(99,102,241,.35)]">
                <Book size={22} color={colors.slate['100']} weight="bold" />
              </div>

              <div>
                <h2 className="text-xl leading-tight text-slate-100">
                  Bacharelado em Ciência da Computação (formando)
                </h2>
                <p className="mt-1 text-slate-400 mobile:text-base desktop:text-lg">
                  Estácio
                </p>
                <p className="mt-1 text-sm text-slate-500">jan de 2026 — dez de 2027</p>
              </div>
            </div>

            {/* UniFanor */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-3 shadow-[0px_10px_80px_4px_rgba(99,102,241,.35)]">
                <Book size={22} color={colors.slate['100']} weight="bold" />
              </div>

              <div>
                <h2 className="text-xl leading-tight text-slate-100">
                  Tecnólogo em Análise e Desenvolvimento de Sistemas (formando)
                </h2>
                <p className="mt-1 text-slate-400 mobile:text-base desktop:text-lg">
                  UniFanor Wyden
                </p>
                <p className="mt-1 text-sm text-slate-500">jan de 2024 — jul de 2026</p>
              </div>
            </div>

            {/* EEEP */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-3 shadow-[0px_10px_80px_4px_rgba(99,102,241,.35)]">
                <Book size={22} color={colors.slate['100']} weight="bold" />
              </div>

              <div>
                <h2 className="text-xl leading-tight text-slate-100">
                  Técnico em Redes de Computadores
                </h2>
                <p className="mt-1 text-slate-400 mobile:text-base desktop:text-lg">
                  EEEP Leonel de Moura Brizola
                </p>
                <p className="mt-1 text-sm text-slate-500">jan de 2021 — dez de 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
