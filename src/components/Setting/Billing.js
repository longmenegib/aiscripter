import React from 'react'

export default function Billing() {
  return (
    <div className="w-full lg:w-2/3 px-2 mb-4">
                        <div className="bg-white rounded-lg shadow p-5">
                            <h2 className="text-xl font-bold text-indigo-800 mb-4">Billing</h2>

                            <div className="mb-4">
                                <label htmlFor="billing-name" className="block text-gray-700 font-bold mb-2">Name on Card</label>
                                <input type="text" id="billing-name" name="billing-name" placeholder="Enter name on card" className="bg-gray-100 w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="billing-card" className="block text-gray-700 font-bold mb-2">Card Number</label>
                                <input type="text" id="billing-card" name="billing-card" placeholder="Enter card number" className="bg-gray-100 w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="billing-expiry" className="block text-gray-700 font-bold mb-2">Expiration Date</label>
                                <input type="text" id="billing-expiry" name="billing-expiry" placeholder="MM / YY" className="bg-gray-100 w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="billing-cvc" className="block text-gray-700 font-bold mb-2">CVC</label>
                                <input type="text" id="billing-cvc" name="billing-cvc" placeholder="Enter CVC code" className="bg-gray-100 w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                            </div>

                            <button className="bg-indigo-600 text-white rounded-lg py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Save Changes</button>
                        </div>
                    </div>
  )
}
