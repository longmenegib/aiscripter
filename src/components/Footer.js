import React from 'react'
import { FaFacebookF, FaEnvelope, FaPhone, FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiFacebookBoxFill, RiLinkedinBoxFill } from 'react-icons/ri';

export default function Footer() {
    return (
        <footer className="bg-white pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 px-4">
                        {/* <h5 className="text-xl font-bold mb-6 text-indigo-500">AIScripter</h5> */}
                        <img width={150} src='/logo.svg' className='mb-6'/>
                        <p className="text-gray leading-loose">
                        AI Scripter helps you create compelling scripts for Facebook, TikTok, YouTube, Instagram and more
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <h5 className="text-xl font-bold mb-6 text-gray">Contact Us</h5>
                        <ul className="list-none">
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <FaEnvelope className="h-6 w-6" />
                                    </div>
                                    <a href="mailto:contact@aiscripter.com" className="text-gray">contact@aiscripter.com</a>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <FaPhone className="h-6 w-6" />
                                    </div>
                                    <a href="tel:+1234567890" className="text-gray">+1234567890</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <h5 className="text-xl font-bold mb-6 text-gray">Follow Us</h5>
                        <ul className="list-none">
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <RiFacebookBoxFill className="h-6 w-6 text-blue" />
                                    </div>
                                    <a href="#" className="text-gray">Facebook</a>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <AiFillTwitterCircle className="h-6 w-6" />
                                    </div>
                                    <a href="#" className="text-gray">Twitter</a>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <FaInstagramSquare className="h-6 w-6" />
                                    </div>
                                    <a href="#" className="text-gray">Instagram</a>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <RiLinkedinBoxFill className="h-6 w-6" />
                                    </div>
                                    <a href="#" className="text-gray">LinkedIn</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <p className="text-gray">
                        &copy; {new Date().getFullYear()} AIScripter - All rights reserved
                    </p>
                </div>
            </div>
        </footer>

    )
}
