import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'

import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Cointainer1'
// import Event1 from '..documents/Event_Report_2020.pdf'

export default function Login() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('/documents/Newsletter2022.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Newsletter2022.pdf'
        alink.click()
      })
    })
  }
  return (
    <>
      <div className="neumorphismbg">
        <Head>
          <title>Newsletter - IEEE | Computational Intelligence Society</title>
        </Head>
        <Header />
        <section className="mt-10 py-5 sm:py-8">
          <Container>
            <div className="mx-auto max-w-2xl pb-10 sm:text-center">
              <h2 className="text-center text-3xl font-medium tracking-tight text-sky-600">
                Newsletter
              </h2>
            </div>
            <div class="flex justify-center">
              <div class="block max-w-sm rounded-lg border border-gray-100 bg-white text-center shadow-2xl">
                <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium text-gray-900">
                    News Letter 2022
                  </h5>
                  <p class="mb-4 border-t border-gray-300 pt-4 text-base text-gray-700">
                    IEEE Computational Intelligence Chapter, Bangalore Section
                    (R-10), Bangalore
                  </p>
                  <button
                    onClick={onButtonClick}
                    class="flex w-full transform items-center justify-center rounded-md bg-blue-600 px-7 py-1.5 text-base text-white shadow-lg transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-1 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-1 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                    <span class="mx-1">Download</span>
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}
import { useId } from 'react'
