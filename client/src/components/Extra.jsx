import React from 'react'

const Extra = ({formData, setFormData}) => {
  // extra_1: "",
  //   extra_2: "",
  


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Form</h2>
        <h3 className="text-lg font-semibold mb-6 text-center">Extra Curricular Activity Details</h3>
        <form>
          {/* Using Grid layout for two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="mb-6">
            <label
              htmlFor="extra_1"
              className="block text-sm font-medium text-gray-700"
            >
              Languages you can speak:
            </label>
            <input
              type="text"
              id="extra_1"
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Languages"
              value={formData.extra_1} // Assuming extra_1 is used for languages
              onChange={(e) =>
                setFormData({ ...formData, extra_1: e.target.value })
              }
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="extra_2"
              className="block text-sm font-medium text-gray-700"
            >
              Things you like to do:
            </label>
            <input
              type="text"
              id="extra_2"
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Hobbies"
              value={formData.extra_2} // Assuming extra_2 is used for hobbies
              onChange={(e) =>
                setFormData({ ...formData, extra_2: e.target.value })
              }
            />
          </div>

  
            {/* <div className="mb-4">
              <label htmlFor="extra_3" className="block text-sm font-medium text-gray-700">
                Extra Activity 3
              </label>
              <input
                type="text"
                id="extra_3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the name of your third extracurricular activity"
                value={formData.extra_3}
                onChange={(e) => {
                  setFormData({ ...formData, extra_3: e.target.value });
                }}
              />
            </div> */}
  
            {/* <div className="mb-4">
              <label htmlFor="extra_4" className="block text-sm font-medium text-gray-700">
                Extra Activity 4 
              </label>
              <input
                type="text"
                id="extra_4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the description for your fourth extracurricular activity (e.g., GitHub)"
                value={formData.extra_4}
                onChange={(e) => {
                  setFormData({ ...formData, extra_4: e.target.value });
                }}
              />
            </div> */}
  
            {/* <div className="mb-4">
              <label htmlFor="extra_5" className="block text-sm font-medium text-gray-700">
                Extra Activity 5 
              </label>
              <input
                type="text"
                id="extra_5"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the description for your fifth extracurricular activity (e.g., LinkedIn)"
                value={formData.extra_5}
                onChange={(e) => {
                  setFormData({ ...formData, extra_5: e.target.value });
                }}
              />
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default Extra
