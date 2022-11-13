import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - IEEE | Computational Intelligence Society</title>
      </Head>
      <Header />
      <section class="body-font py-16 text-gray-600">
        <div class="mb-10 text-center">
          <h1 class="title-font mb-4 text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
            List of <span class="text-sky-600">Projects</span>
          </h1>
          <p className="text-center">
            Following are the list of funded projects <br></br>of IEEE CIS
            members
          </p>
        </div>
        <div class="flex flex-col lg:overflow-x-hidden ">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="ml-3 min-w-full border-2">
                  <thead class="border-b-2 border-t-2">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 text-left text-sm font-bold text-gray-900"
                      >
                        S.NO
                      </th>
                      <th
                        scope="col"
                        class="w-64 border-r px-6 py-4 text-left text-sm font-bold text-gray-900"
                      >
                        Project title
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 text-left text-sm font-bold text-gray-900"
                      >
                        Funding Organization
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 text-left text-sm font-bold text-gray-900"
                      >
                        Coordinators
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 text-left text-sm font-bold text-gray-900"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 text-left text-sm font-bold text-gray-900"
                      >
                        Year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b-2 bg-white">
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        Development of Solar Powered Information Kiosk for Rural
                        <br></br>
                        Community Empowerment in South Karnataka
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        IEEE
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        Dr. Megha.P.Arakeri
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        $4796
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        2022
                      </td>
                    </tr>
                    <tr class="border-b-2 font-semibold">
                      <td class="whitespace-nowrap border-r border-l px-6 py-4 text-sm font-medium text-gray-900">
                        2
                      </td>
                      <td class="whitespace-normal border-r px-6 py-4 text-sm font-semibold text-gray-900 ">
                        Design and Development of Head-Mounted Assistive Device
                        for the Blind Using Computer Vision
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        EPICS in IEEE
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        Dr. Megha.P.Arakeri<br></br> Dr.Vijaya Kumar B.P
                        <br></br> Dr. Sumana. M
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        $4,400.29
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        2022
                      </td>
                    </tr>
                    <tr class="border-b-2 bg-white">
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-medium text-gray-900">
                        3
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        Local Industry Interactions
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        IEEE CIS
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        Dr.Vijaya Kumar B.P<br></br> Dr. Sumana. M<br></br> Dr.
                        Megha.P.Arakeri
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        $3988.66
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        2021
                      </td>
                    </tr>
                    <tr class="border-b-2 bg-white">
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-medium text-gray-900">
                        4
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        High School Outreach Program
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        IEEE CIS
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        Dr. Megha.P.Arakeri<br></br> Dr. Vijaya Kumar B. P
                        <br></br> Dr. Sumana. M
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        $1500
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        2021
                      </td>
                    </tr>
                    <tr class="border-b-2 bg-white">
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-medium text-gray-900">
                        5
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        Local Industry Interactions
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        IEEE CIS
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        Dr.Vijaya Kumar B.P<br></br>Dr. Megha.P.Arakeri
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        $1570.85
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        2020
                      </td>
                    </tr>
                    <tr class="border-b-2 bg-white">
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-medium text-gray-900">
                        6
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        High School Outreach Program
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        IEEE CIS
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        Dr. Megha.P.Arakeri<br></br> Dr. Vijaya Kumar B. P
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        $2000
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 text-sm font-semibold text-gray-900">
                        2020
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
