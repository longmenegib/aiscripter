import React from 'react'

export default function Account() {
    return (
        <>
            <div className="w-full lg:w-1/2 px-2 mb-4">
                <div className="bg-white rounded-lg shadow p-5">
                    <h2 className="text-xl font-bold text-indigo-800 mb-4">Account</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" className="form-input  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-100 rounded-md h-10 w-full" placeholder="Enter name" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="form-input  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-100 rounded-md h-10 w-full" placeholder="Enter email address" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="form-input  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-100 rounded-md h-10 w-full" placeholder="Enter password" />
                    </div>

                    <div className="mb-4">
                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 px-2 mb-4">
                <div className="bg-white rounded-lg shadow p-5">
                    <h2 className="text-xl font-bold text-indigo-800 mb-4">Additionnal infos</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">LinkedIn</label>
                        <input type="text" id="name" name="name" className="form-input  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-100 rounded-md h-10 w-full" placeholder="Enter name" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Instagram</label>
                        <input type="email" id="email" name="email" className="form-input  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-100 rounded-md h-10 w-full" placeholder="Enter email address" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Facebook</label>
                        <input type="password" id="password" name="password" className="form-input  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-100 rounded-md h-10 w-full" placeholder="Enter password" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Twitter</label>
                        <input type="password" id="password" name="password" className="form-input  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-100 rounded-md h-10 w-full" placeholder="Enter password" />
                    </div>

                    <div className="mb-4">
                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
