import React from "react";
import Head from "next/head";

const Addmission = () => {
  return (
    <div>
      <Head>
        <title>प्रवेश - MTS स्कूल</title>
        <meta
          name="description"
          content="mts स्कूल में आपका स्वागत है, मदर टेरेसा सीनियर सेकेंडरी स्कूल बहरावनडा कलां, बहरावनडा कलां, प्रवेश फॉर्म, अभी संपर्क करें, तुलसीराम जांगिड़, mts स्कूल तुलसीराम जांगिड़, शिक्षा, अंग्रेजी, हिंदी, प्रवेश, छात्र, छात्रा, शिक्षक, अध्ययन, स्कूल, अच्छा स्कूल"
        />
        <link rel="icon" href="/logo/favicon.png" />
      </Head>
      <div className="addmission_form flex flex-col justify-center items-center">
        <div className="title-font  text-center font-medium text-3xl text-gray-900">
          <h1 className="text-gray-900">MTS स्कूल पंजीकरण फ़ॉर्म</h1>
        </div>
        <form
          action="https://script.google.com/macros/s/AKfycbwbPWYUMHruAVto9vPYVLFNKLvKMZ-md3tROzyRkYEisnmRinCBGQ6tqRCCXLzmS5Nr/exec"
          method="POST"
          id="addmissionForm"
          name="addmissionForm"
          className="bg-white m-2 rounded-lg p-8 flex flex-col cursor-default"
        >
          <span className="help-block alert-success" />
          <h4 className="text-gray-900 text-lg font-medium title-font mb-5">
            शैक्षणिक सत्र 2023-24
          </h4>
          <span className="flex items-start bg-red-600 p-2 flex-col leading-none">
            <span className="title-font text-white font-medium">
              ध्यान दें: सभी एंट्री कैपिटल लेटर में होनी चाहिए।
            </span>
          </span>
        <div className="flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 w-full items-center sm:items-start">
              <div className="flex md:m-2 m-1 justify-center items-center flex-col sm:flex-row">
                <div className="">
                  <label className="text-black" htmlFor="name">
                  छात्र का नाम *
                  </label>
                </div>
                <div className="">
                  <div className="input-group">
                    <input autoComplete="true"
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="st"
                      id="name"
                      required="required"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center flex-col sm:flex-row">
                <div className="">
                  <label className="text-black" htmlFor="fname">
                  पिता का नाम *
                  </label>
                </div>
                <div className="">
                  <div className="input-group">
                    <input autoComplete="true"
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="father"
                      id="fname"
                      required="required"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center flex-col sm:flex-row">
                <div className="">
                  <label className="text-black" htmlFor="mname">
                  माता का नाम
                  </label>
                </div>
                <div className="">
                  <input autoComplete="true"
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="mother"
                    id="mname"
                     required="required"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center flex-col sm:flex-row">
                <div className="">
                  <label className="text-black" htmlFor="adcl">
                  प्रवेश कक्षा *
                  </label>
                </div>
                <div className="">
                  <div className="input-group">
                    <select autoComplete="true" className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-2.5 md:px-1 py-1 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="class"
                      id="adcl"
                      required="required"
                    >
                      <option value="">कक्षा चुनें</option>
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
                      {/* <option value="XI - COMMERCE">XI - COMMERCE</option> */}
                      {/* <option value="XI - ICCP">XI - ICCP</option> */}
                      {/* <option value="XI - SCIENCE">XI - SCIENCE</option> */}
                      {/* <option value="XII - SCIENCE">XII - SCIENCE</option> */}
                      {/* <option value="XII - ICCP">XII - ICCP</option> */}
                      <option value="XII - ARTS">XII - ARTS</option>
                      {/* <option value="XII - COMMERCE">XII - COMMERCE</option> */}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center flex-col sm:flex-row">
                <div className="">
                  <label className="text-black" htmlFor="medium">
                  मीडियम
                  </label>
                </div>
                <div className="input-group">
                  <select autoComplete="true" className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-2.5 md:px-1 py-1 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="medium"
                    id="medium"
                    required="required"
                  >
                    <option value="">मीडियम चुनें</option>
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी</option>
                  </select>
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center flex-col sm:flex-row">
                <div className="">
                  <label className="text-black" htmlFor="dob">
                  जन्मतिथि
                    <br />
                    <span style={{ fontSize: 10 }}>
                      <b>(आवश्यक दस्तावेज़ों के अनुसार)</b>
                    </span>
                  </label>
                </div>
                <div className="">
                  <input autoComplete="true"
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="date_of_birth"
                    id="dob"
                    placeholder="Select Date"
                    required="required"
                    type="date"
                  />
                </div>
              
              </div> 
               <div className="flex md:m-2 m-1 justify-center items-center flex-col sm:flex-row"> 
                <div className="">
                  <label className="text-black" htmlFor="gender">
                  लिंग
                  </label>
                </div>
                <div className="">
                  <select autoComplete="true" className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-2.5 md:px-1 py-1 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="gender"
                    id="gender"
                    required="required"
                  >
                    <option value="">लिंग चुनें</option>
                    <option value="Male">बालक</option>
                    <option value="Female">बालिका</option>
                  </select>{" "}
                </div>
                </div>
              <div className="flex md:m-2 m-1 justify-center items-center flex-col sm:flex-row">
                <div className="">
                  <label className="text-black" htmlFor="number">
                  पिता का मोबाइल नंबर *<br />
                    <span style={{ fontSize: 10 }}>
                      (हम इस नंबर पर कॉल करेंगे)
                    </span>
                  </label>
                </div>
                <div className="">
                  <div className="input-group">
                    <input autoComplete="true"
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                      name="phone_1"
                      id="number"
                      required="required"
                      minLength={1}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:m-2 m-1 justify-center items-center flex-col sm:flex-row">
                <div className="">
                  <label className="text-black" htmlFor="address">
                  पता *
                  </label>
                </div>
                <div className="">
                  <input autoComplete="true"
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 md:py-1 md:px-1 py-1/2 px-1/2 leading-8 transition-colors duration-200 ease-in-out m-1'
                    name="address"
                    id="address"
                    type="text" 
                    required="required"
                  />
                </div>
              </div>
              <br />
              </div>
                <div className="col-xs-12">
                  <input type="checkbox" required />
                  <label className="text-black ml-3">
                  घोषणा: मैं यहाँ घोषणा करता हूँ कि ऊपर भरी गई जानकारी सही है और मैं प्रवेश के समय संबंधित दस्तावेज़ सबमिट करूंगा।
                  </label>
                </div>
              <input
                type="submit"
                className="text-white bg-indigo-500 relative border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                data-loading-text="Sending..."
                style={{ display: "block", marginTop: 10 }}
                value={'भेजे'}
             />
              <br/>
              <br/>
            </form>
            <div/>
            </div>
            </div>
  );
};

export default Addmission;
