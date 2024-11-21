import React from 'react'

const Education = ({formData, setFormData}) => {
  // edu1_school: "",
  // edu1_year: "",
  // edu1_qualification: "",
  // edu1_desc: "",
  // edu2_school: "",
  // edu2_year: "",
  // edu2_qualification: "",
  // edu2_desc: "",
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Form</h2>
        <h3 className="text-lg font-semibold mb-6 text-center">Educational Details</h3>
        <form>
          {/* Using Grid layout for two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="edu1_school" className="block text-sm font-medium text-gray-700">
                Primary education
              </label>
              <input
                type="text"
                id="edu1_school"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your primary school name" 
                value={formData.edu1_school} 
                onChange={(e) => {
                  setFormData({ ...formData, edu1_school: e.target.value });
                }}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="edu1_year" className="block text-sm font-medium text-gray-700">
                Year of Completion
              </label>
              <input
                type="text"
                id="edu1_year"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter year of completion"
                value={formData.edu1_year} 
                onChange={(e) => {
                  setFormData({ ...formData, edu1_year: e.target.value });
                }}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="edu1_qualification" className="block text-sm font-medium text-gray-700">
                Qualification
              </label>
              <input
                type="text"
                id="edu1_qualification"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your qualification"
                value={formData.edu1_qualification} 
                onChange={(e) => {
                  setFormData({ ...formData, edu1_qualification: e.target.value });
                }}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="edu1_desc" className="block text-sm font-medium text-gray-700">
                Course Description
              </label>
              <input
                type="text"
                id="edu1_desc"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write about your course"
                value={formData.edu1_desc} 
                onChange={(e) => {
                  setFormData({ ...formData, edu1_desc: e.target.value });
                }}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="edu2_school" className="block text-sm font-medium text-gray-700">
                Secondary Education
              </label>
              <input
                type="text"
                id="edu2_school"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your secondary school name"
                value={formData.edu2_school} 
                onChange={(e) => {
                  setFormData({ ...formData, edu2_school: e.target.value });
                }}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="edu2_year" className="block text-sm font-medium text-gray-700">
                Year of Completion
              </label>
              <input
                type="text"
                id="edu2_year"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter year of completion"
                value={formData.edu2_year} 
                onChange={(e) => {
                  setFormData({ ...formData, edu2_year: e.target.value });
                }}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="edu2_qualification" className="block text-sm font-medium text-gray-700">
                Qualification
              </label>
              <input
                type="text"
                id="edu2_qualification"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your qualification"
                value={formData.edu2_qualification} 
                onChange={(e) => {
                  setFormData({ ...formData, edu2_qualification: e.target.value });
                }}
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="edu2_desc" className="block text-sm font-medium text-gray-700">
                Course Description
              </label>
              <input
                type="text"
                id="edu2_desc"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write about your course"
                value={formData.edu2_desc} 
                onChange={(e) => {
                  setFormData({ ...formData, edu2_desc: e.target.value });
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default Education
