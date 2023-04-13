import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { FaCheckCircle, FaClock, FaPlus } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import TestimonialSection from '../components/Testimonial';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQ';

import tron from './../assets/testz.png';
import map from './../assets/map.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const usecases = [
        { title: 'How Will AI Change the world', tag: 'Informative', desc: 'A short video explaining how artificial intelligence has affected the world already, and predictions of how it will continue to influence the world.', time: '3 mins', pic: false },
        { title: 'How Will AI Change the world', tag: 'Educational', desc: 'A short video explaining how artificial intelligence has affected the world already, and predictions of how it will continue to influence the world.', time: '3 mins', pic: false },
        { title: 'How Will AI Change the world', tag: 'Persuasive', desc: 'A short video explaining how artificial intelligence has affected the world already, and predictions of how it will continue to influence the world.', time: '3 mins', pic: false },
        { title: 'How Will AI Change the world', tag: 'Entertaining', desc: 'A short video explaining how artificial intelligence has affected the world already, and predictions of how it will continue to influence the world.', time: '3 mins', pic: false },
        { title: 'How Will AI Change the world', tag: 'Persuasive', desc: 'A short video explaining how artificial intelligence has affected the world already, and predictions of how it will continue to influence the world.', time: '3 mins', pic: false },
        { title: 'How Will AI Change the world', tag: 'Informative', desc: 'A short video explaining how artificial intelligence has affected the world already, and predictions of how it will continue to influence the world.', time: '3 mins', pic: false },
        { title: 'How Will AI Change the world', tag: 'Educational', desc: 'A short video explaining how artificial intelligence has affected the world already, and predictions of how it will continue to influence the world.', time: '3 mins', pic: false },
        { title: 'How Will AI Change the world', tag: 'Entertaining', desc: 'A short video explaining how artificial intelligence has affected the world already, and predictions of how it will continue to influence the world.', time: '3 mins', pic: false },
    ]

    const putTag = (tag) => {
        if(tag === "Informative"){
            return(
                <div className={styles.tag} style={{ backgroundColor: 'rgba(0,0,250,0.05)' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: '#1568f5' }} />
                    <span style={{ margin: '0px 7px' }}>{tag}</span>
                </div>
            )
        }else if(tag === "Persuasive"){
            return(
                <div className={styles.tag} style={{ backgroundColor: '#fff4cd' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: '#ffcb05' }} />
                    <span style={{ margin: '0px 7px' }}>{tag}</span>
                </div>
            )
        }else if(tag === "Entertaining"){
            return(
                <div className={styles.tag} style={{ backgroundColor: '#fff2f4' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: 'deeppink' }} />
                    <span style={{ margin: '0px 7px' }}>{tag}</span>
                </div>
            )
        }else{
            return(
                <div className={styles.tag} style={{ backgroundColor: '#e0cbea' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: '#660099' }} />
                    <span style={{ margin: '0px 7px' }}>{tag}</span>
                </div>
            )
        }
    }

  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.description}>
            <img src='/logo.svg' width={200} style={{ marginTop: 3 }} />
            <div className='d-none d-md-flex'>
              <a href="https://www.producthunt.com/posts/aiscripter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-aiscripter" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385784&theme=neutral" alt="AIScripter - Artificial&#0032;intelligence&#0044;&#0032;chatgpt&#0044;&#0032;social&#0032;media&#0044;&#0032;videos | Product Hunt" width="180" height="40" /></a>
              <Link href='/registration' type="button" style={{ fontFamily: 'var(--font-mono)' }} className={styles.btnheader}>
                Start For Free
              </Link>
            </div>
          </div>
        </div>
      </div>

    <section className={styles.section1}>
      <Container>
        <Row className={styles.frow}>
            <Col md="6" className={styles.headtxt}>
              <h1 className={styles.heading}>Generate Engaging Video Scripts For Your
                <Typewriter
                  options={{
                    strings: ['<font color="#4267B2">Facebook</font>', '<font color="#00f2ea">TikTok</font>', '<font color="#4f5bd5">Instagram</font>', '<font color="#FF0000">YouTube</font>'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p style={{ marginTop: 30 }}>AI Scripter helps you create compelling, fun and engaging videos for Facebook, TikTok, YouTube, and Instagram. It saves you time by generating fully customizable video script in minutes.</p>
              <div className={styles.acbtn} style={{ display: 'flex', marginTop: 25 }}>
                <Link href="/registration" className={styles.getbtn}>Try For Free</Link>
                <Link href="/login" className={styles.secbtn}>Sign In</Link>
              </div>
            </Col>
            <Col className="d-flex" style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} md="6">
              {/* <FontAwesomeIcon icon={faBtc} className="intro" /> */}
              <Image
                src={tron}
                alt="Picture of the author"
                layout="responsive"
                className={styles.intro}
              />
            </Col>
          </Row>
        </Container>
    </section>

    <section style={{ paddingTop: 10, paddingBottom: 60 }}>
        <Container>
          <Row className='info'>
            <Col style={{ paddingLeft: 0 }} className="info_cola" md="4">
              <h5 className="subhead">You Think It, We <font color="#0356e4">Create</font> It.</h5>
              <p className="sub">Need help converting your creative ideas to executable video scripts? Let the robots do it for you. Our AI model generates your video scripts in just 3 steps.</p>
            </Col>
            <Col className="info_colb" md="8">
              <div className="my_block">
                <div className="index">
                  <span className="subhead">1</span>
                </div>
                <div className="block_body">
                  <h6 className="block_head">Add A Title</h6>
                  <span className="block_text">Input a title for your video and some descriptive text to let our AI model know what topics to cover.</span>
                </div>
              </div>
              <div className="my_block" style={{ backgroundColor: '#424242', color: 'white' }}>
                <div className="index" style={{ backgroundColor: '#7a42f4' }}>
                  <span className="subhead" style={{ color: 'white' }}>2</span>
                </div>
                <div className="block_body">
                  <h6 className="block_head" style={{ color: 'white' }}>Select A Tone</h6>
                  <span className="block_text">Select a tone to flow through the video based on your audience. Tones can be persuasive, informative, or entertaining.</span>
                </div>
              </div>
              <div className="my_block">
                <div className="index">
                  <span className="subhead">3</span>
                </div>
                <div className="block_body">
                  <h6 className="block_head">Customize & Optimize</h6>
                  <span className="block_text">Refine your parameters to improve results until you get the perfect video scripts.</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
    <section className="world">
        <div className="overlay">
            <h2 className={styles.heading}>Multilingual <font color="#0356e4">&</font> Multi-niche</h2>
            <Container>
                <p>Since AIScripter has been educated on data from practically every industry, it can respond to every prompt with accurate information. English, French, Spanish, and German translations of video scripts are all available.</p>
                <Image src={map} style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }} />
            </Container>
        </div>
    </section>
    <section style={{ backgroundColor: '#fbfbfb', padding: '20px 0px' }}>
        <Container>
        <Row style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Col sm="12" md="6">
                <h1 className={styles.heading}>Built For Everyone</h1>
                <p style={{ marginTop: -17 }}>SAMPLE USE CASES</p>
            </Col>
            <Col sm="12" md="6">
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Link href="#" className={styles.secbtn}>Try for free</Link>
                </div>
            </Col>
        </Row>
        <div className={styles.casearea}>
            {usecases.map((i, j) => (
                <div key={j} className={styles.casecard}>
                    {putTag(i.tag)}
                    <h6>{i.title}</h6>
                    <div style={{ display: 'flex' }}>
                        <span className={styles.sett}><FaClock style={{ marginRight: 5 }} /> {i.time}</span>
                        <span className={styles.sett}><FaCheckCircle style={{ marginRight: 5 }} /> Thumbnail Image</span>
                    </div>
                    <div style={{ marginTop: 15 }}>
                        <span>{i.desc}</span>
                    </div>
                </div>
            ))}
            <div className={styles.casecard} style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Link href="/registration" className={styles.plusbtn}><FaPlus /></Link>
                <span style={{ fontSize: 11 }}>Create New Scripts</span>
            </div>
        </div>
        </Container>
    </section>

      {/* 
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
      </div> */}

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
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-16 md:py-32 text-center">
            <div className='w-100'>
              <h1 className="text-5xl sm:text-5xl font-bold text-white mb-4">
                Get Started With AIScripter Now
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
      <Footer />
    </main>
  )
}
