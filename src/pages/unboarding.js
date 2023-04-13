import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaBlog, FaVideo, FaAd, FaGift, FaProductHunt, FaEnvelope, FaIndustry, FaArrowRight } from 'react-icons/fa';

const OnboardingPage = () => {
    const router = useRouter();
    const [selectedType, setSelectedType] = useState('');

    const handleTypeSelection = (type) => {
        setSelectedType(type);
    };

    const handleNext = () => {
        if (selectedType !== '') {
            router.push('/next-screen'); // replace with your desired next screen
        }
    };

    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center mb-4 text-indigo-700">
                How do you plan to use AIScripter ?
            </h1>
            <h2 className="text-lg text-center mb-8">
                You can change this later at any time.
            </h2>
            <div className="grid grid-cols-2 gap-4 md:w-3/5">
                <div
                    className={`border border-gray-300 shadow rounded p-4 text-center cursor-pointer ${selectedType === 'blog' ? 'border-indigo-700' : ''
                        }`}
                    onClick={() => handleTypeSelection('blog')}
                >
                    <div className="mb-4">
                        <FaBlog className="inline-block  text-indigo-500 text-4xl mr-2" />
                        <h3 className="inline-block  text-indigo-500">Blog Post</h3>
                    </div>
                    <p className="text-gray-700">
                        Use AIScripter to generate blog post ideas and outlines quickly and easily.
                    </p>
                </div>
                <div
                    className={`border border-gray-300 shadow rounded p-4 text-center cursor-pointer ${selectedType === 'video' ? 'border-indigo-700' : ''
                        }`}
                    onClick={() => handleTypeSelection('video')}
                >
                    <div className="mb-4">
                        <FaVideo className="inline-block  text-indigo-500 text-4xl mr-2" />
                        <h3 className="inline-block  text-indigo-500">Video Script</h3>
                    </div>
                    <p className="text-gray-700">
                        Use AIScripter to create video scripts for your YouTube channel, marketing videos, and more.
                    </p>
                </div>
                <div
                    className={`border border-gray-300 shadow rounded p-4 text-center cursor-pointer ${selectedType === 'ad' ? 'border-indigo-700' : ''
                        }`}
                    onClick={() => handleTypeSelection('ad')}
                >
                    <div className="mb-4">
                        <FaIndustry className="inline-block  text-indigo-500 text-4xl mr-2" />
                        <h3 className="inline-block  text-indigo-500">Others</h3>
                    </div>
                    <p className="text-gray-700">
                        Use AIScripter to generate ad copy for social media, Google Ads, and more.
                    </p>
                </div>
                <div
                    className={`border border-gray-300 shadow rounded p-4 text-center cursor-pointer ${selectedType === 'promotion' ? 'border-indigo-700' : ''
                        }`}
                    onClick={() => handleTypeSelection('promotion')}
                >
                    <div className="mb-4">
                        <FaEnvelope className="inline-block  text-indigo-500 text-4xl mr-2" />
                        <h3 className="inline-block  text-indigo-500">Email</h3>
                    </div>
                    <p className="text-gray-700">
                        Use AIScripter to generate email templates.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10">
                <a href='/dashbaord' type='button' className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded justify-between flex items-center">
                    Next
                    <FaArrowRight className="inline-block  text-white text-lg ml-2" />
                </a>
            </div>
        </div>
    )
}

export default OnboardingPage;