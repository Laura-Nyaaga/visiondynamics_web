"use client";
import React from 'react';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
         <Navbar/>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At Vision Dynamics, LLC (“Vision Dynamics”, “we,” “us,” or “our”) we know you care about protecting your personal data, and we take your privacy seriously. This policy (“Privacy Policy”) describes how we collect, use, and share the information of individuals who access or use Vision Dynamic’s website.
        </p>
        <p className="mb-4">
          Remember that your use of our website is at all times subject to the Terms of Use, which incorporates this Privacy Policy.
        </p>
        <p className="mb-4">
          This Privacy Policy applies only to our data collection and processing activities and is valid for visitors to our website with regards to the information that they share with Vision Dynamics or that Vision Dynamics collects through our website. By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Information We Collect</h2>
        <p className="mb-4">
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide such information.
        </p>
        <p className="mb-4">
          If you contact us directly, we may receive information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you request a free consultation, we may ask for your contact information, including your name, company name, address, email address, and telephone number.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect in various ways, including to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Communicate with you, either directly or through one of our partners, including for customer service</li>
          <li>Provide you with updates and other information relating to our website and our services, and for marketing and promotional purposes</li>
          <li>Provide, operate, and maintain our services</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Identify and prevent fraud</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">Log Files</h2>
        <p className="mb-4">
          Vision Dynamics follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Cookies and Web Beacons</h2>
        <p className="mb-4">
          Like any other website, Vision Dynamics uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on our website that the visitor accessed or visited. The information is used to optimize our users’ experience by customizing our web page content based on visitors’ browser type and/or other information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Advertising Partners Privacy Policies</h2>
        <p className="mb-4">
          Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that may appear on our website, which are sent directly to users’ browsers. They automatically receive your IP address when this occurs.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Third Party Privacy Policies</h2>
        <p className="mb-4">
          Vision Dynamics’ Privacy Policy does not apply to advertisers or links to third-party websites that may appear on our website. Thus, we advise you to consult the applicable privacy policies of these third-parties for information on how such parties handle your personal data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Sharing of Information Collected with Third Parties</h2>
        <p className="mb-4">
          We may share your information with certain third parties in other circumstances, including to comply with law, prevent fraud or imminent harm, and/or ensure the security of our network and services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Data Security and Retention</h2>
        <p className="mb-4">
          We have taken certain physical, organizational, administrative, and technical measures to safeguard the data and information we collect. While we endeavor to protect the integrity and security of our network and systems, we cannot guarantee the absolute security of your information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Information for Users in Europe</h2>
        <p className="mb-4">
          If you are located in the European Economic Area (“EEA”), the United Kingdom, or Switzerland (collectively, “Europe”), please review these additional privacy disclosures.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Your Comments and Concerns</h2>
        <p className="mb-4">
          All feedback, comments, requests for technical support, notices, and other communications relating to this Privacy Policy should be directed to Vision Dynamics via email.
        </p>
      </div>
      < Footer />
    </div>
  );
};

export default PrivacyPolicy;
