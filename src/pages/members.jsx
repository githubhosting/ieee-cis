import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'
import img1 from '@/images/members/vinutha.png'
import img2 from '@/images/members/megha.png'
import img3 from '@/images/members/vijayakumar.png'
import img4 from '@/images/members/sumana.png'
import img5 from '@/images/members/kishore.png'

const members = [
  {
    name: 'Dr. Vijaya Kumar B. P',
    designation: 'Advisor',
    description:
      'Dr. Vijay Kumar is a Professor with research experience of 20+ Yrs in the areas of Cognitive and Mobile Computing. Technical Advisor for Heart Rescue India & Road Traffic Injuries, National Task force project, Advisor, IEEE CIS, Bangalore section.',
    image: img3,
    profile: '/documents/Vijaya Kumar-profile.pdf',
  },
  {
    name: 'Dr. Megha. P. Arakeri',
    designation: 'Chair',
    description:
      'Dr. Megha Arakeri has a Ph.D from NITK, Surathkal. Working as Associate Professor in MSRIT with 18 years of teaching and research experience in the areas of Computer Vision.',
    image: img2,
    profile: '/documents/Megha-profile.pdf',
  },
  {
    name: 'Mr. A. T. Kishore',
    designation: 'Vice Chair',
    description:
      'Flight lieutenant AT Kishore is currently serving as an  COO of Paramount Exhibitors. He is interested in subjects related to Optical Fiber Technologies, UAV Industries and  CDMA technologies. He is senior professional member of IEEE and on the smart city advisory committee of IEEE',
    image: img5,
    profile: '/documents/Kishore-profile.pdf',
  },
  {
    name: 'Dr. Vinutha. D.C',
    designation: 'Secretary',
    description:
      'Dr. Vinutha DC is a Ph. D degree holder from VTU and is currently serving as an  professor and head in CSE AI/ML at VVCE. She is interested in subjects related to Data Analytics, Machine Learning, Big Data and Computer Networks',
    image: img1,
    profile: '/documents/Vinutha-profile.pdf',
  },
  {
    name: 'Dr. Sumana. M',
    designation: 'Treasurer',
    description:
      'Dr. Sumana Maradithaya is a Ph. D degree holder from Manipal University and is currently serving as an associate professor in IS&E department of MSRIT. She is interested in subjects related to Data Mining , Data Science and Analytics, Machine Learning and Deep Learning',
    image: img4,
    profile: '/documents/Sumana-profile.pdf',
  },
]

export default function Login() {
  return (
    <>
      <Head>
        <title>
          Office Bearers - IEEE | Computational Intelligence Society
        </title>
      </Head>
      <Header />
      <section>
        <div class="container mx-auto px-6 py-10">
          <h1 class="text-center text-3xl font-semibold capitalize text-gray-800">
            Our <span class="text-sky-600">Executive Team</span>
          </h1>

          <p class="mx-auto my-6 max-w-2xl text-center text-gray-500"></p>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-2">
            {members.map((member) => (
              <div class="transform cursor-pointer rounded-xl border px-12 py-8 transition-colors duration-300">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                  <div>
                    <Image
                      class="flex-shrink-0 rounded-lg object-cover  sm:mx-4"
                      src={member.image}
                      alt=""
                      width="270px"
                      height="270px"
                    />
                  </div>
                  <div class="mt-4 sm:mx-4 sm:mt-0">
                    <h1 class="text-xl font-semibold capitalize text-gray-700 group-hover:text-white ">
                      {member.name}
                    </h1>
                    <h3 class="mb-3 text-gray-500">{member.designation}</h3>
                  </div>
                </div>
                <p class="mt-4 text-gray-500">{member.description}</p>
                <a
                  class="text-md group mt-10 inline-flex items-center  justify-center rounded bg-sky-600  py-2 px-4  text-sm font-semibold text-white hover:bg-slate-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-800 active:text-slate-300"
                  href={member.profile}
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
