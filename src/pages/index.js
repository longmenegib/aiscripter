import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <img src='/logo.svg' width={200}/>
        <div className='flex'>
        <a href="https://www.producthunt.com/posts/aiscripter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-aiscripter" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385784&theme=neutral" alt="AIScripter - Artificial&#0032;intelligence&#0044;&#0032;chatgpt&#0044;&#0032;social&#0032;media&#0044;&#0032;videos | Product Hunt"  width="250" height="54" /></a>
          <Link href='/app' type="button" style={{ fontFamily: 'var(--font-mono)', width: 200, }} className=" flex items-center justify-center text-center bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full px-2 text-white">
            Try for free
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center w-full h-full" style={{ paddingTop: 100, height: '100%' }}>
        <div className='basis-1/2 '>
          <div className={"text-5xl font-light"}>
            <span className={styles.slideText}>
              10X faster way to write
              short video script for<br />
            </span>
            <span style={{ paddingTop: 20, height: 100 }} className={styles.slideText}>
              <span className="text-indigo-500 font-bold animate-marquee whitespace-nowrap">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString('Youtube')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('Facebook')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('Instagram')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('Tiktok')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('LinkedIn')
                      .pauseFor(1500)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </span>
          </div>
          <div className='my-4 text-indigo-600 '>
            Create short videos 30-sec to 60-sec scripts in 1 minutes!
          </div>
          <div className={styles.button}>
            <Link href='/app' style={{ fontFamily: 'var(--font-mono)', width: 200 }} id='button' type="button" className=" text-center bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full px-2 py-2 text-white">
              Try for free
            </Link>
          </div>
          <div className='flex flex-row'>
            <div className='basis-1/1 mt-4'>
              <img src={'/insta.png'} width={'50%'} height={'50%'} />
            </div>
          </div>
        </div>

        <div className='basis-1/2 h-full' style={{border: '2px solid indigo', height: '100%'}}>
          <video controls width={'100%'} height="100%">
            <source src={"/official_video.mp4"} type="video/mp4"/>
          </video>
        </div>
      </div>

      <div className='text-center mt-20 text-xl text-indigo-600 '>How it works!</div>
      <div className={styles.grid} style={{ marginTop: 30 }}>
        <div
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Enter video title
          </h2>
          <p className={inter.className}>
            Enter a title that matches your reels. Example: 'How to be a marketer'
          </p>
        </div>

        <div
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Enter the description
          </h2>
          <p className={inter.className}>Your description on how the AI will generate the scripts. Example: Let the scripts to 5 steps.</p>
        </div>

        <div
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Other setting
          </h2>
          <p className={inter.className}>
            Add Keywords, select the language in which the AI will generate the script and type (professional, Informative, declarative) of scripts
          </p>
        </div>
      </div>
      {/* <div>
        <div className='w-100 flex justify-center mt-10'>
          <button style={{fontFamily: 'var(--font-mono)', width: 200}} id='button' type="button" className="bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full px-2 py-2 text-white">
            Try for free
          </button>
        </div>
      </div> */}
      <div style={{ marginTop: 60 }} className={styles.cardbig}>
        <div className='text-2xl w-100'>
          Stop wasting time & start creating
          short video scripts for FREE!
        </div>
        <div className='w-100 flex justify-center mt-4'>
          <Link href='/app' style={{ fontFamily: 'var(--font-mono)', width: 200 }} id='button' type="button" className="text-center bg-white rounded-full px-2 py-2 text-indigo-500">
            Try for free
          </Link>
        </div>
        <div className='mt-4'>
          <ul style={{ fontSize: 11 }}>
            <li>-No credit card is required</li>
            <li>-No login is required</li>
          </ul>
        </div>
      </div>
      <div className='text-center mt-20 text-xl '>Develop by <span className='text-indigo-500'>Longmene Gibril</span></div>
    </main>
  )
}
