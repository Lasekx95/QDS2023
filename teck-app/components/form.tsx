import { useState } from 'react'

const Form1 = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Submit the form data here
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={formData.name || ''}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email || ''}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleid">
          vehicle ID#000
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="vehicleid"
          type="text"
          placeholder="000"
          name="vehicleid"
          onChange={handleChange}
          value={formData.vehicleid || ''}
          required
        />
      </div>
      <div>
        <label for="about" class="block text-gray-700 text-sm font-bold mb-2">Report</label>
            <div className="mt-1">
                <textarea id="about" name="about" rows="3" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Any relevant information inregards to maintenance"></textarea>
            </div>
                <p className="mt-2 text-sm text-gray-500">Vehicle reports must be submitted by 3pm each day</p>
            </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form1
