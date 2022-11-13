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
    fetch('/documents/Event_Report_2020.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Event_Report_2020.pdf'
        alink.click()
      })
    })
  }
  const onButtonClick2 = () => {
    // using Java Script method to get PDF file
    fetch('/documents/Event_Report_2021.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Event_Report_2021.pdf'
        alink.click()
      })
    })
  }
  return (
    <>
      <div className="neumorphismbg">
        <Head>
          <title>Events - IEEE | Computational Intelligence Society</title>
        </Head>
        <Header />
        <section className="mt-10 py-5 sm:py-8">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-center text-3xl font-semibold tracking-tight text-sky-600">
                Events :
              </h2>
              <p className="text-centre mt-2 px-3 text-sm text-gray-600 lg:text-base">
                Following activities are conducted to enhance the technical
                knowledge in the areas of computational intelligence, machine
                learning, Artificial Intelligence, Soft Computing for
                professionals, faculty and students of engineering courses.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-10 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
            >
              <li className="neumorphism mb-10 rounded-2xl border border-gray-200 p-5">
                <h3 className="text-center text-3xl font-semibold text-gray-900">
                  Events 2020
                </h3>
                <p className="mt-2 text-center text-gray-700">
                  Activities conducted for the year 2019-2020 under IEEE CIS
                </p>
                <div class="flex justify-center overflow-hidden p-2 ">
                  <div class="space-y-2 rounded-lg border border-gray-200 p-4 sm:-mx-1 sm:flex sm:space-y-0">
                    <button
                      onClick={onButtonClick}
                      class="flex w-full transform items-center justify-center rounded-md bg-blue-600 px-7 py-1.5 text-base text-white shadow-lg transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-1 sm:w-auto"
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

                    <a
                      href="/documents/Event_Report_2020.pdf"
                      target="_blank"
                      rel="noreferrer"
                      class="flex w-full transform items-center justify-center rounded-md bg-blue-600 px-7 py-1.5 text-base text-white shadow-lg transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-1 sm:w-auto"
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span class="mx-1">View</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="neumorphism mb-10 rounded-2xl border border-gray-200 p-5">
                <h3 className="text-center text-3xl font-semibold text-gray-900">
                  Events 2021
                </h3>
                <p className="mt-2 text-center text-gray-700">
                  Activities conducted for the year 2021 under IEEE CIS.
                </p>
                <div class="flex justify-center overflow-hidden p-2 ">
                  <div class="space-y-2 rounded-lg border border-gray-200 p-4 sm:-mx-1 sm:flex sm:space-y-0">
                    <button
                      onClick={onButtonClick2}
                      class="flex w-full transform items-center justify-center rounded-md bg-blue-600 px-7 py-1.5 text-base text-white shadow-lg transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-1 sm:w-auto"
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

                    <a
                      href="/documents/Event_Report_2021.pdf"
                      target="_blank"
                      rel="noreferrer"
                      class="flex w-full transform items-center justify-center rounded-md bg-blue-600 px-7 py-1.5 text-base text-white shadow-lg transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-1 sm:w-auto"
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span class="mx-1">View</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}
import { useId } from 'react'
