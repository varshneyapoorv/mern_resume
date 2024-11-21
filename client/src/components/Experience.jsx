import React from 'react'

const Experience = ({formData, setFormData}) => {

  // exp1_org: "",
  // exp1_pos: "",
  // exp1_desc: "",
  // exp1_dur: "",
  // exp2_org: "",
  // exp2_pos: "",
  // exp2_desc: "",
  // exp2_dur: "",


  return (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Form</h2>
      <h3 className="text-lg font-semibold mb-6 text-center">Experience Details</h3>
      <form>
        {/* Using Grid layout for two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="exp1_org" className="block text-sm font-medium text-gray-700">
              Organization 1
            </label>
            <input
              type="text"
              id="exp1_org"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your first organization name"
              value={formData.exp1_org} 
              onChange={(e) => {
                setFormData({ ...formData, exp1_org: e.target.value });
              }}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="exp1_pos" className="block text-sm font-medium text-gray-700">
              Position at Organization 1
            </label>
            <input
              type="text"
              id="exp1_pos"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your position in the organization"
              value={formData.exp1_pos} 
              onChange={(e) => {
                setFormData({ ...formData, exp1_pos: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exp1_desc" className="block text-sm font-medium text-gray-700">
              Description of Role at Organization 1
            </label>
            <input
              type="text"
              id="exp1_desc"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your role description"
              value={formData.exp1_desc} 
              onChange={(e) => {
                setFormData({ ...formData, exp1_desc: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exp1_dur" className="block text-sm font-medium text-gray-700">
              Duration at Organization 1
            </label>
            <input
              type="text"
              id="exp1_dur"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter duration of your experience"
              value={formData.exp1_dur} 
              onChange={(e) => {
                setFormData({ ...formData, exp1_dur: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exp2_org" className="block text-sm font-medium text-gray-700">
              Organization 2
            </label>
            <input
              type="text"
              id="exp2_org"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your second organization name"
              value={formData.exp2_org} 
              onChange={(e) => {
                setFormData({ ...formData, exp2_org: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exp2_pos" className="block text-sm font-medium text-gray-700">
              Position at Organization 2
            </label>
            <input
              type="text"
              id="exp2_pos"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your position in the organization"
              value={formData.exp2_pos} 
              onChange={(e) => {
                setFormData({ ...formData, exp2_pos: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exp2_desc" className="block text-sm font-medium text-gray-700">
              Description of Role at Organization 2
            </label>
            <input
              type="text"
              id="exp2_desc"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your role description"
              value={formData.exp2_desc} 
              onChange={(e) => {
                setFormData({ ...formData, exp2_desc: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exp2_dur" className="block text-sm font-medium text-gray-700">
              Duration at Organization 2
            </label>
            <input
              type="text"
              id="exp2_dur"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter duration of your experience"
              value={formData.exp2_dur} 
              onChange={(e) => {
                setFormData({ ...formData, exp2_dur: e.target.value });
              }}
            />
          </div>
        </div>
      </form>
    </div>
  </div>
);

}

export default Experience
