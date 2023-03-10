import React from "react";
import Head from "next/head";
import Image from "next/image";


const Addmission = () => {
  return (
    <>
      <Head>
        <title>Addmission - MTS School</title>
        <meta
          name="description"
          content="mtsschool.com we provide better education"
        />
        <link rel="icon" href="/logo/favicon.png" />
      </Head>
      <div className="title-font text-center font-medium text-3xl text-gray-900">
                <h4>MTS SCHOOL Registration Form</h4>
      </div>
            <form
              action="https://script.google.com/macros/s/AKfycbzGtNg0Z7pkOAYWWoCStfGpR2xfJ90A8-XefTQvSz4gAvHXX-Z6wAZ56tYxSSedU6cb/exec"
              method="POST"
              className=" glass m-10 rounded-lg p-8 flex flex-col md:ml-auto w-[95vw] mt-10 md:mt-0 cursor-default"
            >
              <div style={{ display: "none" }}>
                <input
                className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1' type="hidden" name="_method" defaultValue="POST" />
              </div>
              <span className="help-block alert-success" />
              <h4 className="text-gray-900 text-lg font-medium title-font mb-5">Academic Session 2021-2022</h4>
              <span class="flex items-start bg-red-600 p-2 flex-col leading-none">
          <span class="title-font text-white font-medium">Note: All the entries must be in CAPITAL LETTERS.</span>
        </span>
        <div className="flex flex-wrap">
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="name">
                    Student's Name *
                  </label>
                </div>
                <div className="col-xs-3">
                  <div className="input-group">
                    <input
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="[st][first_name]"
                      placeholder="First Name"
                      required="required"
                      type="text"
                      id="EnquiryFirstName"
                    />{" "}
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                    </span>
                  </div>
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="[st][middle_name]"
                    placeholder="Middle Name"
                    type="text"
                    id="EnquiryMiddleName"
                  />{" "}
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="[st][last_name]"
                    placeholder="Last Name"
                    type="text"
                    id="EnquiryLastName"
                  />{" "}
                </div>
              </div>
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="dob">
                    Admission Class *
                  </label>
                </div>
                <div className="col-xs-3">
                  <div className="input-group">
                    <select className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
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
                    </select>{" "}
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                    </span>
                  </div>
                </div>
                <div
                  className="col-xs-3"
                  id="streamlabel"
                  style={{ display: "none" }}
                >
                  <label className="label" htmlFor="dob">
                    Select Stream *
                  </label>
                </div>
                <div
                  className="col-xs-3"
                  id="streamselect"
                  style={{ display: "none" }}
                >
                  <div className="input-group">
                    <select className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="data[Enquiry][stream]"
                      id="streamlist"
                    >
                      <option value="">Select Stream</option>
                    </select>{" "}
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="name">
                    Medium
                  </label>
                </div>
                <div className="col-xs-3">
                  <select className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="medium"
                    id="EnquiryMedium"
                  >
                    <option value="">Select Medium</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>{" "}
                </div>
              </div>
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="dob">
                    Date of Birth
                    <br />
                    <span style={{ fontSize: 10 }}>
                      <b>(As per Required Documents)</b>
                    </span>
                  </label>
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="date_of_birth"
                    placeholder="Select Date"
                    type="text"
                    id="EnquiryDateOfBirth"
                  />{" "}
                </div>
                <div className="col-xs-3">
                  <label className="label" htmlFor="dob">
                    Gender
                  </label>
                </div>
                <div className="col-xs-3">
                  <select className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="gender"
                    id="EnquiryGender"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>{" "}
                </div>
              </div>
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="dob">
                    Previous Class Percentage
                  </label>
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="previous_marks"
                    max={100}
                    type="number"
                    id="EnquiryPreviousMarks"
                  />{" "}
                </div>
                <div className="col-xs-3">
                  <label className="label" htmlFor="name">
                    Previous School Name
                  </label>
                </div>
                <div className="col-xs-3">
                  <div className="input-group">
                    <input
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="previous_school"
                      placeholder="Current School"
                      required="required"
                      type="text"
                      id="EnquiryPreviousSchool"
                    />{" "}
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="name">
                    Father's Name *
                  </label>
                </div>
                <div className="col-xs-3">
                  <div className="input-group">
                    <input
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="father_first_name"
                      placeholder="First Name"
                      required="required"
                      type="text"
                      id="EnquiryFatherFirstName"
                    />{" "}
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                    </span>
                  </div>
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="father_middle_name"
                    placeholder="Middle Name"
                    type="text"
                    id="EnquiryFatherMiddleName"
                  />{" "}
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="father_last_name"
                    placeholder="Last Name"
                    type="text"
                    id="EnquiryFatherLastName"
                  />{" "}
                </div>
              </div>
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="dob">
                    Father's Mobile No *<br />
                    <span style={{ fontSize: 10 }}>
                      (SMS will be sent on this number)
                    </span>
                  </label>
                </div>
                <div className="col-xs-3">
                  <div className="input-group">
                    <input
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="phone_1"
                      placeholder="Enter Mobile No."
                      required="required"
                      minLength={1}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      type="text"
                      id="EnquiryPhone1"
                    />{" "}
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                    </span>
                  </div>
                </div>
                <div className="col-xs-3">
                  <label className="label" htmlFor="dob">
                    Father's Whatsapp No *
                  </label>
                </div>
                <div className="col-xs-3">
                  <div className="input-group">
                    <input
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="phone_2"
                      placeholder="Enter Mobile No."
                      required="required"
                      minLength={1}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      type="text"
                      id="EnquiryPhone2"
                    />{" "}
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="name">
                    Mother's Name
                  </label>
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="mother_first_name"
                    placeholder="First Name"
                    type="text"
                    id="EnquiryMotherFirstName"
                  />{" "}
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="mother_middle_name"
                    placeholder="Middle Name"
                    type="text"
                    id="EnquiryMotherMiddleName"
                  />{" "}
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="mother_last_name"
                    placeholder="Last Name"
                    type="text"
                    id="EnquiryMotherLastName"
                  />{" "}
                </div>
              </div>
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="name">
                    Address *
                  </label>
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="address"
                    type="text"
                    id="EnquiryEmail"
                  />{" "}
                </div>
              </div>
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-3">
                  <label className="label" htmlFor="name">
                    Email ID
                  </label>
                </div>
                <div className="col-xs-3">
                  <input
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="email"
                    type="email"
                    id="EnquiryEmail"
                  />{" "}
                </div>
              </div>
              <br />
              <div className="flex m-2 justify-center items-center">
                <div className="col-xs-12">
                  <label className="label">
                    Declaration : I HEREBY DECLARE THAT THE DETAILS FILLED ABOVE
                    IS CORRECT AND I SHALL BE SUBMITTING RELEVANT DOCUMENTS AT
                    THE TIME OF ADMISSION.
                  </label>
                </div>
              </div>
              </div>
              <br />
              <br />
              <button
                type="submit"
                id="feedbackSubmit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-10"
                data-loading-text="Sending..."
                style={{ display: "block", marginTop: 10 }}
              >
                Save
              </button>
              <span>.</span>
            </form>
            </>
  );
};

export default Addmission;
