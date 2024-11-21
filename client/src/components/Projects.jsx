import React from 'react'

const Projects = ({formData, setFormData}) => {
  // proj1_title: "",
    // proj1_link: "",
    // proj1_desc: "",
    // proj2_title: "",
    // proj2_link: "",
    // proj2_desc: "",
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Form</h2>
          <h3 className="text-lg font-semibold mb-6 text-center">Project Details</h3>
          <form>
            {/* Using Grid layout for two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="proj1_title" className="block text-sm font-medium text-gray-700">
                  Project 1 Title
                </label>
                <input
                  type="text"
                  id="proj1_title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter project 1 title"
                  value={formData.proj1_title} 
                  onChange={(e) => {
                    setFormData({ ...formData, proj1_title: e.target.value });
                  }}
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="proj1_link" className="block text-sm font-medium text-gray-700">
                  Project 1 Link
                </label>
                <input
                  type="url"
                  id="proj1_link"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the project 1 URL"
                  value={formData.proj1_link} 
                  onChange={(e) => {
                    setFormData({ ...formData, proj1_link: e.target.value });
                  }}
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="proj1_desc" className="block text-sm font-medium text-gray-700">
                  Project 1 Description
                </label>
                <input
                  type="text"
                  id="proj1_desc"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter project 1 description"
                  value={formData.proj1_desc} 
                  onChange={(e) => {
                    setFormData({ ...formData, proj1_desc: e.target.value });
                  }}
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="proj2_title" className="block text-sm font-medium text-gray-700">
                  Project 2 Title
                </label>
                <input
                  type="text"
                  id="proj2_title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter project 2 title"
                  value={formData.proj2_title} 
                  onChange={(e) => {
                    setFormData({ ...formData, proj2_title: e.target.value });
                  }}
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="proj2_link" className="block text-sm font-medium text-gray-700">
                  Project 2 Link
                </label>
                <input
                  type="url"
                  id="proj2_link"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the project 2 URL"
                  value={formData.proj2_link} 
                  onChange={(e) => {
                    setFormData({ ...formData, proj2_link: e.target.value });
                  }}
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="proj2_desc" className="block text-sm font-medium text-gray-700">
                  Project 2 Description
                </label>
                <input
                  type="text"
                  id="proj2_desc"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter project 2 description"
                  value={formData.proj2_desc} 
                  onChange={(e) => {
                    setFormData({ ...formData, proj2_desc: e.target.value });
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
    
}

export default Projects
