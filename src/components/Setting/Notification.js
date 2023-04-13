import React from 'react'

export default function Notification() {
  return (
    <div className="w-full lg:w-2/3 px-2 mb-4">
    <div className="bg-white rounded-lg shadow p-5">
        <h2 className="text-xl font-bold text-indigo-800 mb-4">Notifications</h2>

        <div className="mb-4">
            <label htmlFor="email-notifications" className="block text-gray-700 font-bold mb-2">Email Notifications</label>
            <select id="email-notifications" name="email-notifications" className="form-select  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-10 rounded-md w-full">
                <option value="on">On</option>
                <option value="off">Off</option>
            </select>
        </div>

        <div className="mb-4">
            <label htmlFor="push-notifications" className="block text-gray-700 font-bold mb-2">Push Notifications</label>
            <select id="push-notifications" name="push-notifications" className="form-select  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-10 rounded-md w-full">
                <option value="on">On</option>
                <option value="off">Off</option>
            </select>
        </div>

        <div className="mb-4">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Save Changes
            </button>
        </div>
    </div>
</div>

  )
}
