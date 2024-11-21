import React from 'react'

const Personal = ({formData, setFormData}) => {
  // name: "",
  //   email: "",
  //   phone: "",
  //   linkedin: "",
  //   github: "",
  //   skills: [],
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Form</h2>
        <h3 className="text-lg font-semibold mb-6 text-center">Personal Details</h3>
        <form>
          {/* Using Grid layout for two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name" value={formData.name} onChange={(e)=>{
                  setFormData({... formData, name: e.target.value})
                }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email" 
                value={formData.email} onChange={(e)=>{
                  setFormData({... formData, email: e.target.value})
                }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
                value={formData.phone} onChange={(e)=>{
                  setFormData({... formData, phone : e.target.value})
                }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                Github
              </label>
              <input
                type="url"
                id="github"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://github.com/YOURUSERNAME"
                value={formData.github} onChange={(e)=>{
                  setFormData({... formData, github: e.target.value})
                }}
                
              />
            </div>
            <div className="mb-4">
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                LinkedIn
              </label>
              <input
                type="url"
                id="linkedin"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://linkedin.com/YOURUSERNAME"
                value={formData.linkedin} onChange={(e)=>{
                  setFormData({... formData, linkedin : e.target.value})
                }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                Skills
              </label>
              <input
                type="text"
                id="skills"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter skills and separate each with a comma"
                value={formData.skills} onChange={(e)=>{
                  setFormData({... formData, skills : e.target.value})
                }}
              />
            </div>
          </div>
  
          
        </form>
      </div>
    </div>
  );
  
}

export default Personal
