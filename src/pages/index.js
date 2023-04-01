import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import TestimonialSection from '../components/Testimonial';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQ';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}>
        <img src='/logo.svg' width={200} />
        <div className='flex'>
          <a href="https://www.producthunt.com/posts/aiscripter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-aiscripter" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385784&theme=neutral" alt="AIScripter - Artificial&#0032;intelligence&#0044;&#0032;chatgpt&#0044;&#0032;social&#0032;media&#0044;&#0032;videos | Product Hunt" width="250" height="54" /></a>
          <Link href='/app' type="button" style={{ fontFamily: 'var(--font-mono)', width: 200, }} className="items-center justify-center text-center bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full px-2 text-white hidden md:flex ">
            Try for free
          </Link>
        </div>
      </div> */}

      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-16 md:py-32 text-center">
            <div className='w-100'>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
                Generate Engaging Video Scripts
              </h1>
              <p className="text-lg sm:text-xl text-white font-medium mb-8">
                AI Scripter helps you create compelling scripts for Facebook, TikTok, YouTube, Instagram and more
              </p>
              <a type='button' href='/login' className="bg-white text-purple-500 rounded-full py-3 px-8 font-medium hover:bg-gray-100">
                Try it Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Simple and Easy to Use
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Generate Videos Scripts Quickly and Efficiently
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Our user-friendly interface makes it easy to create video scripts for all your social media platforms.
                </p>
              </div>
              <div className="mt-10">
                <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-gray-900">Efficient</h4>
                        <p className="mt-2 text-base text-gray-500">
                          Our AI algorithm generates video scripts quickly and accurately, saving you time and effort.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10 md:mt-0">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-gray-900">Versatile</h4>
                        <p className="mt-2 text-base text-gray-500">
                          AIScripter supports multiple social media platforms, including Facebook, TikTok, YouTube, Instagram, and more.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10 md:mt-0">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-gray-900">Versatile</h4>
                        <p className="mt-2 text-base text-gray-500">
                          AIScripter supports multiple social media platforms, including Facebook, TikTok, YouTube, Instagram, and more.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Choose the plan that fits your needs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
              AIScripter offers three different pricing plans. Choose the one that suits your needs best.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="md:flex flex-wrap md:justify-center md:px-10 ">
              {/* Basic Plan */}
              <div className="md:w-1/3 w-full mb-3 md:mb-0">
                <div className="bg-white rounded-lg shadow-md w-11/12 px-6 py-8">
                  <h3 className="text-xl font-medium text-gray-900">Basic</h3>
                  <p className="mt-4 text-gray-600">
                  Perfect for individuals who only need a few video scripts per month.
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                      <span className="mt-2 mr-2 text-4xl font-medium">$</span>0
                    </span>
                    <span className="text-xl font-medium text-gray-500">/ month</span>
                  </div>
                  <ul className="mt-6 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">10 requests per month</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">30 seconds scripts</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">Script generation in English</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">Single type generation script</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 hidden text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-white">{' - '}</p>
                    </li>
                  </ul>
                  <a href="#" className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg text-base font-medium hover:bg-gray-800">Subscribe</a>
                </div>
              </div>

              {/* Intermediate Plan */}
              <div className="md:w-1/3 w-full mb-3 md:mb-0">
                <div className="bg-white rounded-lg shadow-md w-11/12 px-6 py-8">
                  <h3 className="text-xl font-medium text-gray-900">Intermediate</h3>
                  <p className="mt-4 text-gray-600">
                    Perfect for individuals who want to use AIScripter casually for hobbies and work
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                      <span className="mt-2 mr-2 text-4xl font-medium">$</span>10
                    </span>
                    <span className="text-xl font-medium text-gray-500">/ month</span>
                  </div>
                  <ul className="mt-6 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">20 requests per month</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">Unlimited script duration</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">Script generation in English</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">1 Image generation/request</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">Multiple size images</p>
                    </li>
                  </ul>
                  <a href="#" className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg text-base font-medium hover:bg-gray-800">Subscribe</a>
                </div>
              </div>

              {/* Ultime Plan */}
              <div className="md:w-1/3 w-full mb-3 md:mb-0">
                <div className="bg-white rounded-lg shadow-md w-11/12 px-6 py-8">
                  <h3 className="text-xl font-medium text-gray-900">Ultimate</h3>
                  <p className="mt-4 text-gray-600">
                  The most popular option for professionals who want to use automations and write long-form.
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                      <span className="mt-2 mr-2 text-4xl font-medium">$</span>25
                    </span>
                    <span className="text-xl font-medium text-gray-500">/ month</span>
                  </div>
                  <ul className="mt-6 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">50 requests per month</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">Unlimited script duration</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">Multiple language generation</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">10 Image generation/request</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-500">Multiple size images</p>
                    </li>
                  </ul>
                  <a href="#" className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg text-base font-medium hover:bg-gray-800">Subscribe</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
