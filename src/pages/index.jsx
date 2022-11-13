import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer1'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - IEEE | Computational Intelligence Society</title>
        <meta
          name="description"
          content="Institute of Electrical and Electronics Engineers | CIS, RIT Bangalore"
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
