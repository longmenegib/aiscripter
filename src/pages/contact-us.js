import {  FaEnvelope, FaMedal, FaPhone } from "react-icons/fa";

function Contact() {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="w-full lg:w-2/5 bg-gray-50 p-8 lg:p-16">
                <h1 className="text-3xl font-bold text-indigo-700 mb-4">Contact Us</h1>
                <p className="text-gray-600 mb-6">
                    If you have any questions, comments or feedback, please feel free to get in touch with us using the form below.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div className="bg-white rounded-lg shadow p-5 flex items-center">
                        <FaPhone className="text-xl text-gray-600 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                Call Us
                            </h3>
                            <p className="text-gray-700">(123) 456-7890</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-5 flex items-center">
                        <FaEnvelope className="text-xl text-gray-600 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                Email Us
                            </h3>
                            <p className="text-gray-700">support@aiscripter.com</p>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="mb-4 mt-12">
                        <label htmlFor="name" className="block font-bold text-gray-700 mb-2">Name</label>
                        <input type="text" name="name" id="name" className="w-full px-3 py-2 border rounded-lg shadow-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold text-gray-700 mb-2">Email</label>
                        <input type="email" name="email" id="email" className="w-full px-3 py-2 border rounded-lg shadow-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-bold text-gray-700 mb-2">Message</label>
                        <textarea name="message" id="message" rows="5" className="w-full px-3 py-2 border rounded-lg shadow-sm"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full lg:w-3/5 h-64 lg:h-auto">
                <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.044812659724!2d-122.39555604867718!3d37.78949197977583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807553a3d22f%3A0x4f6f943ed6c0fc63!2s555%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094111%2C%20USA!5e0!3m2!1sen!2sca!4v1618241234495!5m2!1sen!2sca" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </div>
    );
}

export default Contact;