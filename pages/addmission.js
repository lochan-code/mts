import React from "react";
import Head from "next/head";
import Image from "next/image";



const Addmission = () => {
  if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", (event) => {
  const scriptURL = ''
  const form = document.forms['formName']
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })
 })
}
  return (
    <div>
      <Head>
        <title>Addmission - MTS School</title>
        <meta name="description" content="welcome to mts school, mother teressa senior secondary school baharawanda kalan, baharawanada kalan, addmission form, contact now, tulsiram jangid, mts school tulsiram jangid, education, english, hindi, admission, students, student, teacher, study, school, good school" />
        <link rel="icon" href="/logo/favicon.png" />
      </Head>
      <div className="addmission_form flex flex-col justify-center items-center">
      <div className="title-font  text-center font-medium text-3xl text-gray-100">
                <h4>MTS SCHOOL Registration Form</h4>
      </div>
            <form
              action="https://script.google.com/macros/s/AKfycbyut6ioKCNm0-qPxplDIex2GAyJfRdka54MIW9AsUEwftC6rQ1bqdFO-g8J3f4YrMn2/exec"
              method="POST"
              className="bg-white m-10 rounded-lg p-8 flex flex-col md:ml-auto w-[95vw] mt-10 md:mt-0 cursor-default"
            >
              <div style={{ display: "none" }}>
                <input
                className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1' type="hidden" name="_method" defaultValue="POST" />
              </div>
              <span className="help-block alert-success" />
              <h4 className="text-gray-900 text-lg font-medium title-font mb-5">Academic Session 2021-2022</h4>
              <span className="flex items-start bg-red-600 p-2 flex-col leading-none">
          <span className="title-font text-white font-medium">Note: All the entries must be in CAPITAL LETTERS.</span>
        </span>
        <div className="flex flex-wrap items-center">
              <div className="flex md:m-2 m-1 justify-center items-center">
                <div className="">
                  <label className="label" htmlFor="name">
                    Student Name *
                  </label>
                </div>
                <div className="">
                  <div className="input-group">
                    <input
                    className='bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2  transition-colors duration-200 ease-in-out m-1'
                      name="[st][first_name]"
                      placeholder="First Name"
                      required="required"
                      type="text"
                      id="EnquiryFirstName"
                    />
                  </div>
                </div>
                <div className="">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="[st][last_name]"
                    required="required"
                    placeholder="Last Name"
                    type="text"
                    id="EnquiryLastName"
                  />{" "}
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center">
                <div className="">
                  <label className="label" htmlFor="dob">
                    Admission Class *
                  </label>
                </div>
                <div className="">
                  <div className="input-group">
                    <select className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="class"
                      required="required"
                      id="classname"
                    >
                      <option value="">Select Class</option>
                      <option value="Pre-Nursery">Pre-Nursery</option>
                      <option value="Nursery">Nursery</option>
                      <option value="KG">KG</option>
                      <option value="I">I</option>
                      <option value="II">II</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                      <option value="V">V</option>
                      <option value="VI">VI</option>
                      <option value="VII">VII</option>
                      <option value="VIII">VIII</option>
                      <option value="IX">IX</option>
                      <option value="X">X</option>
                      <option value="XI - ARTS">XI - ARTS</option>
                      <option value="XI - COMMERCE">XI - COMMERCE</option>
                      <option value="XI - ICCP">XI - ICCP</option>
                      <option value="XI - SCIENCE">XI - SCIENCE</option>
                      <option value="XII - SCIENCE">XII - SCIENCE</option>
                      <option value="XII - ICCP">XII - ICCP</option>
                      <option value="XII - ARTS">XII - ARTS</option>
                      <option value="XII - COMMERCE">XII - COMMERCE</option>
                    </select>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex md:m-2 m-1 justify-center items-center">
                <div className="">
                  <label className="label" htmlFor="name">
                    Medium
                  </label>
                </div>
                <div className="">
                  <select className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="medium"
                    required="required"
                    id="EnquiryMedium"
                  >
                    <option value="">Select Medium</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center">
                <div className="">
                  <label className="label" htmlFor="dob">
                    Date of Birth
                    <br />
                    <span style={{ fontSize: 10 }}>
                      <b>(As per Required Documents)</b>
                    </span>
                  </label>
                </div>
                <div className="">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="date_of_birth"
                    placeholder="Select Date"
                    required="required"
                    type="date"
                    id="EnquiryDateOfBirth"
                  />
                </div>
              
              </div>  <div className="flex md:m-2 m-1 justify-center items-center">  <div className="">
                  <label className="label" htmlFor="dob">
                    Gender
                  </label>
                </div>
                <div className="">
                  <select className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="gender"
                    required="required"
                    id="EnquiryGender"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>{" "}
                </div>
                </div>
              <div className="flex md:m-2 m-1 justify-center items-center">
                <div className="">
                  <label className="label" htmlFor="name">
                    Father Name *
                  </label>
                </div>
                <div className="">
                  <div className="input-group">
                    <input
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="father_first_name"
                      placeholder="First Name"
                      required="required"
                      type="text"
                      id="EnquiryFatherFirstName"
                    />
                  </div>
                </div>
                <div className="">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="father_last_name"
                    placeholder="Last Name"
                    type="text"
                    required="required"
                    id="EnquiryFatherLastName"
                  />{" "}
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center">
                <div className="">
                  <label className="label" htmlFor="dob">
                    Father Mobile No *<br />
                    <span style={{ fontSize: 10 }}>
                      (We will call on this number)
                    </span>
                  </label>
                </div>
                <div className="">
                  <div className="input-group">
                    <input
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="phone_1"
                      placeholder="Enter Mobile No."
                      required="required"
                      minLength={1}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      type="text"
                      id="EnquiryPhone1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center">
                <div className="">
                  <label className="label" htmlFor="name">
                    Mother Name
                  </label>
                </div>
                <div className="">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="mother_first_name"
                    placeholder="First Name"
                     required="required"
                    type="text"
                    id="EnquiryMotherFirstName"
                  />
                </div>
                
                <div className="">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="mother_last_name"
                    placeholder="Last Name" 
                    required="required"
                    type="text"
                    id="EnquiryMotherLastName"
                  />
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center">
                <div className="">
                  <label className="label" htmlFor="name">
                    Address *
                  </label>
                </div>
                <div className="">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="address"
                    type="text" 
                    required="required"
                    id="EnquiryEmail"
                  />
                </div>
              </div>
              <br />
              <div className="flex md:m-2 m-1 justify-center items-center">
                <div className="col-xs-12">
                  <label className="label">
                    Declaration : I HEREBY DECLARE THAT THE DETAILS FILLED ABOVE
                    IS CORRECT AND I SHALL BE SUBMITTING RELEVANT DOCUMENTS AT
                    THE TIME OF ADMISSION.
                  </label>
                </div>
              </div>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 relative border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                data-loading-text="Sending..."
                style={{ display: "block", marginTop: 10 }}
              >
                Save
              </button>
              <br/>
              <br/>
            </form>
            <div/>
            </div>
            </div>
  );
};

export default Addmission;
