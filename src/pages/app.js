import React, { useState } from 'react'
import styles from './page.module.css'
import Typewriter from 'typewriter-effect';
import { authorization } from '../../helpers';
import Link from 'next/link';

const jwt_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdpYnJpbGxvbmdtZW5lQGdtYWlsLmNvbSIsInJvbGUiOiJjZW9haXNyaXB0ZXIiLCJpYXQiOjE2Nzk3NDI0NzJ9.M3aaydwkof28JhCBaq7ziXD_vDxcqadpruAc3uwolpw';


const requestFormat = (title, desc, dur, lan, keywords, type) => {
  let time = dur;
  if (dur > 60) {
    time = 'more than 60'
  }
  let text = `Can you act as a generator and generate a full script for my video respecting the informations below. 
  Title: ${title};
  Description: ${desc};
  Video duration: ${time} seconds;
  Language: ${lan};
  Keywords: ${keywords};
  Type of script: ${type} video;
  `

  return text;
}

export default function Application() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [language, setLanguage] = useState("English");
  const [duration, setDuration] = useState(30);
  const [type, setType] = useState("Informative");

  const [generatedAnswer, setGeneratedAnswer] = useState("");
  const [status, setStatus] = useState(true);

  const generateScript = async () => {
    if (!title || !description || !keywords || !language || !duration || !type) return;

    let formatText = requestFormat(title, description, duration, language, keywords, type);
    // console.log(formatText);
    // return
    setLoading(true)
    const response = await fetch("/api/hello/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": 'Bearer '+ jwt_token,
      },
      body: JSON.stringify({ prompt: formatText }),
    });
    const data = await response.json();
    setLoading(false);
    if (data.success) {
      setGeneratedAnswer(data.text);
      setStatus(true);
    } else {
      setStatus(false)
    }
  }

  return (
    <main className={styles.main} style={{ padding: 0 }}>
      <div className={styles.description} style={{ borderBottom: '1px solid gray' }}>
        <p className="text-3xl font-bold text-indigo-500" style={{ cursor: 'pointer' }}>
          <Link href='/'>
            <img src='/logo.svg' width={200}/>
          </Link>
        </p>
        <div className='flex'>
        {/* <a href="https://www.producthunt.com/posts/aiscripter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-aiscripter" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385784&theme=neutral" alt="AIScripter - Artificial&#0032;intelligence&#0044;&#0032;chatgpt&#0044;&#0032;social&#0032;media&#0044;&#0032;videos | Product Hunt"  width="250" height="54" /></a> */}
          <button type="button" style={{ fontFamily: 'var(--font-mono)', width: 160 }} className="bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full px-2 py-2 text-white">
            Upgrade to plus
          </button>
        </div>
      </div>
      <div className="md:columns lg:flex text-indigo-700 " style={{ padding: 10 }}>
        <div className="md:basis-1/1 lg:basis-1/4 shadow-lg h-full">
          <div className='row mb-5'>
            <div className="columns-1  px-2">
              <label className='w-full'>
                Video title *
              </label>
              <div className="form-group icon_form w-full" >
                <input
                  type="text"
                  className="shadow-lg require w-full rounded-2 px-2 text-indigo-500 bg-white-200"
                  name="google_maps_links"
                  placeholder="Insert video title"
                  style={{ height: 40, outline: 'none' }}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='row my-5'>
            <div className="columns-1  px-2">
              <label className='w-full'>
                Short video description *
              </label>
              <div className="form-group icon_form w-full" >
                <textarea
                  type="text"
                  className="shadow-lg require w-full rounded-2 px-2 text-indigo-500  bg-white-200"
                  name="google_maps_links"
                  placeholder="Provide a brief description of the video's content"
                  style={{ outline: 'none' }}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='row my-5'>
            <div className="columns-1  px-2">
              <label className='w-full'>
                Keywords, tags *
              </label>
              <div className="form-group icon_form w-full" >
                <textarea
                  type="text"
                  className="form-control shadow-lg require w-full rounded-2 px-2 text-indigo-500 bg-white-200"
                  name="google_maps_links"
                  placeholder="List any keywords or topics that you want the script to cover."
                  style={{ outline: 'none' }}
                  onChange={(e) => setKeywords(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='row px-2 text-indigo-500'>
            <span>Advanced setting</span>
          </div>
          <div className='flex mb-4 mt-2'>
            <div className="basis-1/2  px-2">
              <label>Language *</label>
              <div className="form-group">
                <select defaultValue={'English'} onChange={(e) => setLanguage(e.target.value)} className="w-full shadow-lg bg-indigo-500 text-white" required name="language" style={{ border: '1px solid gray', outline: 'none' }}>
                  <option value="English">
                    English
                  </option>
                  <option value="French">
                    French
                  </option>
                  <option value="Spanish">
                    Spanish
                  </option>
                  <option value="Deutch">
                    Deutch
                  </option>
                </select>
              </div>
            </div>
            <div className="basis-1/2  px-2">
              <label>Type of script*</label>
              <div className="w-full">
                <select defaultValue={'Informative'} onChange={(e) => setType(e.target.value)} className="w-full shadow-lg bg-indigo-500 text-white" style={{ border: '1px solid gray', outline: 'none' }}>
                  <option value="Persuasive">
                    Persuasive
                  </option>
                  <option value="Informative">
                    Informative
                  </option>
                  <option value="Entertaining">
                    Entertaining
                  </option>
                  <option value="Educational">
                    Educational
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="columns-1  px-2">
            <label>Duration of the video *</label>
            <div className="form-group">
              <select defaultValue={30} onChange={(e) => setDuration(e.target.value)} className="w-full shadow-lg bg-indigo-500 text-white" required name="language" style={{ border: '1px solid gray', outline: 'none' }}>
                <option value={30}>
                  Less than 30 seconds
                </option>
                <option value={45}>
                  Less than 45 seconds
                </option>
                <option value={60}>
                  Less than 60 seconds
                </option>
                <option value={75}>
                  More than 60 seconds
                </option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <button disabled={loading} onClick={generateScript} type="button" style={{ fontFamily: 'var(--font-mono)', width: '100%' }} className="bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full px-2 py-2 text-white">
              Generate script
            </button>
          </div>
        </div>
        <div className="md:basis-1/1 lg:basis-3/4 lg:h-full" style={{ minHeight: 500, backgroundColor: 'white', padding: 10 }}>
          <div className={styles.generate} style={{ minHeight: 500, width: '100%', padding: 10 }}>
            {!loading ?
              <div>
                {status ?
                  <>
                    {generatedAnswer ?
                      <div className='' style={{whiteSpace: 'pre-wrap'}}>
                        <Typewriter
                        
                        options={{
                          autoStart: true,
                          loop: false,
                          delay: 20
                        }}
                        onInit={(typewriter) => {
                          typewriter.typeString(generatedAnswer)
                            .start();
                        }}
                        />
                      </div>
                      :
                      <div style={{whiteSpace: 'pre-wrap'}}>
                        AI will generate your script here...
                      </div>}
                  </>
                  :
                  <div className='text-red-700'>Error generating script... Please try again</div>
                }
              </div>
              :
              <div className="flex items-center justify-center">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status">
                  <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span>
                </div>
              </div>}
          </div>
        </div>
      </div>
      <div style={{width: '100%', textAlign: 'center'}}>
            <span className='text-indigo-600 w-full text-xl p-2'>Version 1.0.0</span>
        </div>
    </main>
  )
}
