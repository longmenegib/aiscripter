import React from 'react';
import Appbar from '../components/Appbar/Appbar';

const Layout = () => {
    return (
        <div>
            <Appbar height={40} show={false}/>
            <div className="flex flex-col md:flex-row h-full w-full">
                <div className="bg-gray-100 overflow-y-scroll md:w-2/6">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                        <div className="w-full flex flex-col justify-center items-center p-2">
                            <h5 className="font-bold text-white mb-0 text-center">
                                AI Scripter Configuration
                            </h5>
                            <p className="text-white mb-6 text-center">
                                Easily generate video scripts for your social media platforms
                            </p>
                        </div>
                    </div>
                    <form>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    {/* Video title field */}
                                    <div className="col-span-6 sm:col-span-0">
                                        <label htmlFor="video_title" className="block text-sm font-medium text-gray-700">
                                            Video Title
                                        </label>
                                        <input
                                            type="text"
                                            name="video_title"
                                            id="video_title"
                                            autoComplete="video_title"
                                            className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    {/* Social media platform select field */}
                                    <div className="col-span-6 sm:col-span-0">
                                        <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
                                            Social Media Platform
                                        </label>
                                        <select
                                            id="platform"
                                            name="platform"
                                            autoComplete="platform"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Facebook</option>
                                            <option>TikTok</option>
                                            <option>YouTube</option>
                                            <option>Instagram</option>
                                        </select>
                                    </div>

                                    {/* Video type select field */}
                                    <div className="col-span-6 sm:col-span-0">
                                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                            Video Type
                                        </label>
                                        <select
                                            id="type"
                                            name="type"
                                            autoComplete="type"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Explainer Video</option>
                                            <option>Promotional Video</option>
                                            <option>Tutorial Video</option>
                                            <option>Product Review Video</option>
                                        </select>
                                    </div>
                                    {/* Video title field */}
                                    <div className="col-span-6 sm:col-span-0">
                                        <label htmlFor="video_title" className="block text-sm font-medium text-gray-700">
                                            Video Description
                                        </label>
                                        <textarea
                                            type="text"
                                            name="video_desc"
                                            id="video_desc"
                                            autoComplete="video_desc"
                                            rows={4}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-0">Language options</div>
                                    <div className="col-span-6 sm:col-span-0">
                                        <div className='flex flex-row justify-between'>
                                            <div className="flex flex-col items-start mb-4">
                                                <label htmlFor="input-language" className="block font-medium text-gray-700">Input:</label>
                                                <select id="input-language" name="input-language" className="block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                                    <option value="en">English</option>
                                                    <option value="es">Spanish</option>
                                                    <option value="fr">French</option>
                                                    <option value="de">German</option>
                                                    <option value="it">Italian</option>
                                                </select>
                                            </div>

                                            <div className="flex flex-col items-start mb-4">
                                                <label htmlFor="output-language" className="block font-medium text-gray-700">Output:</label>
                                                <select id="output-language" name="output-language" className="block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                                    <option value="en">English</option>
                                                    <option value="es">Spanish</option>
                                                    <option value="fr">French</option>
                                                    <option value="de">German</option>
                                                    <option value="it">Italian</option>
                                                </select>
                                            </div>

                                            <div className="flex flex-col items-start mb-4">
                                                <label htmlFor="output-language" className="block font-medium text-gray-700">Style:</label>
                                                <select id="output-language" name="output-language" className="block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                                    <option value="en">Normal</option>
                                                    <option value="es">Italic</option>
                                                    <option value="fr">Bold</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bg-white md:w-4/6 border-l border-gray-300" >
                    AI will generate scripts here...
                </div>
            </div>
        </div>
    );
}

export default Layout;
