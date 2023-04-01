import { useState } from "react";

function EmailVerificationPage() {
    const [isVerified, setIsVerified] = useState(false);

    // Handle email verification process here

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <img width={150} src='/logo.svg' className='mb-6'/>
                <div>
                    <h2 className="mt-6 text-left text-3xl font-extrabold text-gray-900">
                        Verify your email
                    </h2>
                    <span className="mt-2 text-center text-xs text-gray-500">Please check your inbox for a verification code to confirm your identity.</span>
                </div>
                <form className="mt-8 space-y-6 bg-gray-50 p-4 rounded-sm" action="/unboarding" method="POST">
                    <div className="text-xs text-gray-500">
                        Code sent to <span className="text-indigo-700">example@gmail.com</span>
                    </div>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="verification-code" className="sr-only">
                                Verification Code
                            </label>
                            <input
                                id="verification-code"
                                name="verification-code"
                                type="text"
                                autoComplete="verification-code"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Verification Code"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center text-white py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* Heroicon name: lock-closed */}
                                <svg
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm3-2a1 1 0 00-1 1v2h12V4a1 1 0 00-1-1H5zM4 14a1 1 0 001 1h10a1 1 0 100-2H5a1 1 0 00-1 1zm0-4a1 1 0 001 1h10a1 1 0 100-2H5a1 1 0 00-1 1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default EmailVerificationPage;