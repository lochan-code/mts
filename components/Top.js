import Link from "next/link";
import React from "react";

const Top = () => {
  return (
    <div className="flex space-y-2 lg:space-y-0 flex-col lg:flex-row bg-gray-200 text-black font-bold text-sm p-2">
      <div className="">
        <div className="inner">
          <div className="header-widget widget_text header-left-widget">
            {" "}
            <div className="textwidget">
              <p className="text-black text-sm">
                कॉल करे: <a href="tel:9983760244">+91 9983760244</a> | मदर टेरेसा उच्च माध्यमिक विद्यालय
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="lg:absolute lg:right-2">
        <ul className="flex flex-wrap justify-end space-x-2">
          <li>
            <Link href={"/career"} aria-current="page">
              नौकरी
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href={"/facilities"}>
              सुविधायें
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href={"/sitemap"}>
              साइटमेप
            </Link>
          </li>
          <li>|</li>
          {/* <li>
            <Link
              rel="noopener"
              href="https://onlineregcpsg.radicallogix.com/onlineregcpsg/Enquiries/enquiryadd"
            >
              E-Learning
            </Link>
          </li> */}
          {/* <li>|</li> */}
          <li>
            <Link href={"/contact"}>
              संपर्क करे
            </Link>
          </li>
          {/* <li>|</li> */}
          {/* <li>
            <Link href="https://www.thecreativepublicschool.com/what-parents/">
              PARENTS TESTIMONIALS
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Top;
