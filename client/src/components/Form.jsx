// import React, { useState } from "react";
// import Personal from "./Personal";
// import Education from "./Education";
// import Experience from "./Experience";
// import Projects from "./Projects";
// import Extra from "./Extra";

// import axios from 'axios';
// import { saveAs } from 'file-saver';
// import Success from "./Success";

// const Form = () => {
//   const [success, setSuccess] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     linkedin: "",
//     github: "",
//     skills: [],

//     exp1_org: "",
//     exp1_pos: "",
//     exp1_desc: "",
//     exp1_dur: "",
//     exp2_org: "",
//     exp2_pos: "",
//     exp2_desc: "",
//     exp2_dur: "",

//     proj1_title: "",
//     proj1_link: "",
//     proj1_desc: "",
//     proj2_title: "",
//     proj2_link: "",
//     proj2_desc: "",

//     edu1_school: "",
//     edu1_year: "",
//     edu1_qualification: "",
//     edu1_desc: "",
//     edu2_school: "",
//     edu2_year: "",
//     edu2_qualification: "",
//     edu2_desc: "",

//     extra_1: "",
//     extra_2: "",
//     extra_3: "",
//     extra_4: "",
//     extra_5: "",
//   });

//   const [page, setPage] = useState(0);

//   // Titles for each page
//   const FormTitle = [
//     "Personal Details",
//     "Education",
//     "Experience",
//     "Projects",
//     "Extras",
//   ];

//   // Function to display the appropriate page
//   const PageDisplay = () => {
//     if (page === 0) {
//       return <Personal formData={formData} setFormData={setFormData} />;
//     } else if (page === 1) {
//       return <Education formData={formData} setFormData={setFormData} />;
//     } else if (page === 2) {
//       return <Experience formData={formData} setFormData={setFormData} />;
//     } else if (page === 3) {
//       return <Projects formData={formData} setFormData={setFormData} />;
//     } else {
//       return <Extra formData={formData} setFormData={setFormData} />;
//     }
//   };

//   return (
//     <>
//       <h1 className="text-center text-2xl font-bold">Form</h1>
//       <div className="container mx-auto mt-8">
//         <h1 className="text-center text-red-500 text-lg font-semibold">
//           {FormTitle[page]}
//         </h1>

//         {/* Progress Bar */}
//         <div className="progressbar w-[600px] h-[10px] bg-gray-200 mb-6 mx-auto rounded-full">
//           <div
//             style={{
//               width: `${((page + 1) / FormTitle.length) * 100}%`,
//             }}
//             className="h-full bg-[#0d76fd] rounded-full transition-all duration-300"
//           ></div>
//         </div>

//         {/* Page Content */}
//         <div className="flex justify-center">{PageDisplay()}</div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-center items-center gap-10 mt-10">
//           <button
//             className="bg-red-500 p-3 text-white rounded"
//             disabled={page === 0}
//             onClick={() => setPage((currPage) => currPage - 1)}
//           >
//             Prev
//           </button>
//           <button
//             className="bg-blue-500 p-3 text-white rounded"
//             disabled={page === FormTitle.length - 1}
//             onClick={()=>{
//                 if(page === FormTitle.length -1){
//                     axios
//                     .post("http://localhost:4000/create-pdf", formData)
//                     .then(()=>
//                         axios.get("http://localhost:4000/fetch-pdf", {responseType : "blob",

//                         })
//                     )
//                     .then((res)=>{
//                         const pdfBlob = new Blob([res.data], {
//                             type : "application/pdf",
//                         });
//                         setSuccess(true && res.status === 200);
//                         saveAs(pdfBlob, "Resume.pdf");
//                     })

//                 }else{
//                     setPage ((currPage)=>{
//                         currPage + 1
//                     })
//                 }
//             }}
//           >
//             {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
//           </button>
//         </div>
//         {success && <Success/>}
//       </div>
//     </>
//   );
// };

// export default Form;




import React, { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Extra from "./Extra";

import axios from "axios";
import { saveAs } from "file-saver";
import Success from "./Success";

const Form = () => {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: [],

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
    extra_3: "",
    extra_4: "",
    extra_5: "",
  });

  const [page, setPage] = useState(0);

  // Titles for each page
  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  // Function to display the appropriate page
  const PageDisplay = () => {
    if (page === 0) {
      return <Personal formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Projects formData={formData} setFormData={setFormData} />;
    } else {
      return <Extra formData={formData} setFormData={setFormData} />;
    }
  };

  // Function to handle the Next/Download PDF button click
  const handleNextClick = () => {
    if (page === FormTitle.length - 1) {
      // Generate PDF and download it
      axios
        .post("http://localhost:4000/create-pdf", formData)
        .then(() =>
          axios.get("http://localhost:4000/fetch-pdf", { responseType: "blob" })
        )
        .then((res) => {
          const pdfBlob = new Blob([res.data], {
            type: "application/pdf",
          });
          setSuccess(true && res.status === 200);
          saveAs(pdfBlob, "Resume.pdf");
        })
        .catch((err) => console.error("Error generating PDF: ", err));
    } else {
      // Move to the next page
      setPage((currPage) => currPage + 1);
    }
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold">Form</h1>
      <div className="container mx-auto mt-8">
        <h1 className="text-center text-red-500 text-lg font-semibold">
          {FormTitle[page]}
        </h1>

        {/* Progress Bar */}
        <div className="progressbar w-[600px] h-[10px] bg-gray-200 mb-6 mx-auto rounded-full">
          <div
            style={{
              width: `${((page + 1) / FormTitle.length) * 100}%`,
            }}
            className="h-full bg-[#0d76fd] rounded-full transition-all duration-300"
          ></div>
        </div>

        {/* Page Content */}
        <div className="flex justify-center">{PageDisplay()}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-10 mt-10">
          <button
            className="bg-red-500 p-3 text-white rounded"
            disabled={page === 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Prev
          </button>
          <button
            className="bg-blue-500 p-3 text-white rounded"
            onClick={handleNextClick}
          >
            {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
          </button>
        </div>

        {/* Success Message */}
        {success && <Success />}
      </div>
    </>
  );
};

export default Form;
