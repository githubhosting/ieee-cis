import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'

export default function Execom() {
  return (
    <>
      <Head>
        <title>EXECOM - IEEE | Computational Intelligence Society</title>
      </Head>
      <Header />
      <section class="body-font text-gray-600">
        <div class="col-md-8 content-area" id="primary">
          <div class="card mb-4">
            <div class="card-body">
              <main class="site-main" id="main">
                <article
                  class="post-2020 page type-page status-publish hentry"
                  id="post-2020"
                >
                  <header class="entry-header">
                    <h1 className='font-medium font-sans text-xl '>EXECOM</h1>
                  </header>
                  <div class="entry-content">
                    <div class="common">
                      <h3 align="center">IEEE Madras Section</h3>
                      <h3 align="center">
                        <u>2007 Executive Committee</u>
                      </h3>
                      <hr />
                      <p class="text-center justify-centre">
                        The operation of the IEEE Bangalore Section is managed by
                        the Section&#8217;s Executive committee. Listed below is
                        the contact information for the committee members. If
                        you have any questions about the committee or would like
                        to volunteer help, please feel free to contact one of
                        the Executive Committee or the Core Team members.
                      </p>
                      <hr />
                      <p class="text-center">
                        <b>Executive Committee</b>
                        <br />
                        <u>Chairperson:</u> Mr.V.Sampath Kumar <br />
                        <u>Secretary</u>: Mr. Hemata Kumar Sahoo <br />
                        <u>Treasurer:</u> Ms. R. Maheswari
                      </p>
                      <p className='ml-3'>
                        <span>
                          <b>Core Team</b>
                        </span>
                      </p>
                      <ul className='text-left ml-10'>
                        <li>
                          <span>Ms. Krishnan, Smruthi</span>
                        </li>
                        <li>
                          <span>Mr. Subbarao</span>
                        </li>
                        <li>
                          <span>Mr. Saravanan</span>
                        </li>
                        <li>
                          <span>Ms. Seshadri, Swetha</span>
                        </li>
                        <li>
                          <span>Ms. Abirami</span>
                        </li>
                        <li>
                          <span>Ms. Sindhu</span>
                        </li>
                        <li>
                          <span>Ms. Ann Cheeran</span>
                        </li>
                      </ul>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
