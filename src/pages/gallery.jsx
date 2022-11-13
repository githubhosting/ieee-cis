import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Cointainer1'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'
import img1 from '@/images/gallery/1 (1).jpeg'
import img2 from '@/images/gallery/1 (2).jpeg'
import img3 from '@/images/gallery/1 (3).jpeg'
import img4 from '@/images/gallery/1 (4).jpeg'
import img5 from '@/images/gallery/1 (5).jpeg'
import img6 from '@/images/gallery/1 (6).jpeg'
import img7 from '@/images/gallery/1 (7).jpeg'

const resources = [
  {
    image: () => {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={img1} alt="" />
        </div>
      )
    },
  },
  {
    image: () => {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={img2} alt="" />
        </div>
      )
    },
  },
  {
    image: () => {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={img3} alt="" />
        </div>
      )
    },
  },
  {
    image: () => {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={img4} alt="" />
        </div>
      )
    },
  },
  {
    image: () => {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={img5} alt="" />
        </div>
      )
    },
  },
  {
    image: () => {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={img6} alt="" />
        </div>
      )
    },
  },
  {
    image: () => {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={img7} alt="" />
        </div>
      )
    },
  },
]

export default function Login() {
  return (
    <>
      <Head>
        <title>Gallery - IEEE | Computational Intelligence Society</title>
      </Head>
      <Header />

      <section
        id="resources"
        aria-labelledby="resources-title"
        className="scroll-mt-8 py-8 sm:scroll-mt-32 sm:py-5 lg:py-8"
      >
        <Container>
          {/* <SectionHeading number="" id="resources-title">
            Gallery
          </SectionHeading> */}
          <p className="mt-2 flex justify-center font-display text-4xl font-medium tracking-tight text-slate-800">
            Event <span className="ml-2 text-sky-600"> Photos</span>
          </p>
          {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
            Sample Text
          </p> */}
        </Container>
        <Container size="lg" className="mt-16">
          <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
            {resources.map((resource) => (
              <li
                key={resource.title}
                className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
              >
                <div className="sm:h- lg:h- relative h-48 overflow-hidden rounded-2xl shadow-lg">
                  <resource.image />
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <Footer />
    </>
  )
}
