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
    image: img3,
    profile: '/documents/Vijayakumar-profile.pdf',
  },
  {
    name: 'Dr. Megha. P. Arakeri',
    designation: 'Chair',
    image: img2,
    profile: '/documents/Megha-profile.pdf',
  },
  {
    name: 'Mr. A. T. Kishore',
    designation: 'Vice Chair',
    image: img5,
    profile: '/documents/Kishore-profile.pdf',
  },
  {
    name: 'Dr. Vinutha. D.C',
    designation: 'Secretary',
    image: img1,
    profile: '/documents/Vinutha-profile.pdf',
  },
  {
    name: 'Dr. Sumana. M',
    designation: 'Treasurer',
    image: img4,
    profile: '/documents/Sumana-profile.pdf',
  },
]
const ececommembers = [
  {
    name: 'Dr. Rudresh. S',
  },
  {
    name: 'Anandi Giridharan',
  },
  {
    name: 'Samyama Gunjal. G. H',
  },
  {
    name: 'Gayathri Devi. B. R',
  },
  {
    name: 'Bonson Mapilli',
  },
  {
    name: 'Mohan Gowda. V',
  },
  {
    name: 'Kusuma. S. M',
  },
  {
    name: 'Dr Manjunath R Kounte',
  },
  {
    name: 'Dr. Jagan. D',
  },
]

export default function Login() {
  return (
    <>
      <Head>
        <title>
          EXECOM Members - IEEE | Computational Intelligence Society
        </title>
      </Head>
      <Header />
      <section class="body-font text-gray-600">
        <div class="container mx-auto px-5 py-12">
          <div class="mb-10 text-center">
            <h1 class="title-font mb-4 text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
              Execom <span class="text-sky-600">Members</span>
            </h1>
            <p class="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
              The operation of the IEEE Bangalore Section is managed by the
              Section&#8217;s Executive committee.
            </p>
            <div class="container mx-auto px-5 py-12">
              <div class="mb-5 flex w-full flex-col text-center">
                <h1 class="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
                  Office <span class="text-sky-600">Bearers</span>
                </h1>
              </div>
              <div class="-m-2 flex flex-wrap justify-center">
                {members.map((member) => (
                  <div class="w-full p-2 md:w-1/2 lg:w-1/3">
                    <div class="flex h-full items-center rounded-lg border border-gray-50 p-4 shadow-md">
                      <Image
                        alt="team"
                        class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                        src={member.image}
                        height={64}
                        width={64}
                      />
                      <div class="flex-grow">
                        <h2 class="title-font font-semibold text-gray-900">
                          {member.name}
                        </h2>
                        <p class="text-gray-500">{member.designation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
            {ececommembers.map((member) => (
              <div class="w-full p-2 sm:w-1/2">
                <div class="flex h-full items-center rounded bg-gray-100 p-4">
                  <div class="-pt-1 numborder mr-4 h-6 w-6 flex-shrink-0 rounded border-sky-500 text-sky-500">
                    <p class="nummargin flex justify-center align-middle font-medium">
                      {ececommembers.indexOf(member) + 1}
                    </p>
                  </div>
                  <span class="title-font font-medium">{member.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
