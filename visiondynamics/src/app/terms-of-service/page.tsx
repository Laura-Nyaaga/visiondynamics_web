"use client";
import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <Navbar />
        {/* <div></div> */}
      <div className="w-full mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Terms of Use</h1>

        <div className="space-y-4">
          <section>
            <h2 className="text-lg font-semibold">1. Agreement</h2>
            <p>
              These Terms of Use specify the terms and conditions for access to and use of  <Link
            href="/privacy-policies"
            className="text-[#3C5CA4] font-bold hover:text-teal-400 transition-colors"
          >
            https://visiondynamics.com
          </Link> and is a legal agreement between you and Vision Dynamics. By accessing or using the Site, you accept and agree to be bound by these Terms of Use and our Privacy Policy, incorporated herein by reference. If you do not want to agree to these Terms of Use or the Privacy Policy, you must cease using the Site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Privacy</h2>
            <p>
              Your visit to our Site is also governed by our Privacy Policy. Please review our Privacy Policy at <Link
            href="/privacy-policies"
            className="text-[#3C5CA4] font-bold hover:text-teal-400 transition-colors"
          >
            Privacy & Policies
          </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. Ownership</h2>
            <p>
              All content included on the Site is and shall continue to be the property of Vision Dynamics or its content suppliers and is protected under applicable copyright, patent, trademark, and other proprietary rights. Any copying, redistribution, use or publication by you of any such content or any part of the Site is prohibited, except as expressly permitted in these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">4. Intended Audience</h2>
            <p>
              This Site is intended for adults only. This Site is not intended for any children under the age of 13.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">5. Site Use</h2>
            <p>
              Vision Dynamics grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Site and is subject at all times to compliance with these Terms of Use.
            </p>
            <p>
              You may be asked to provide certain registration details or other information. It is a condition of your use of the Site that all the information you provide is correct, current, and complete.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">6. Prohibited Uses; Compliance with Laws</h2>
            <p>
              You may use the Site only for lawful purposes and in accordance with these Terms of Use.
            </p>
            <p>
              You agree not to use the Site in any way that violates applicable laws or regulations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">7. Monitoring and Enforcement</h2>
            <p>
              We may monitor use of the Site to confirm compliance with these Terms of Use and any other applicable Vision Dynamics policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">8. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless VISION DYNAMICS and its affiliates from any action or claim arising out of your violation of these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">9. Disclaimer</h2>
            <p>
              YOUR USE OF OUR SITE IS AT YOUR OWN RISK. THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">10. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL VISION DYNAMICS BE LIABLE FOR ANY DIRECT OR INDIRECT LOSS OR DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">11. Use of Information</h2>
            <p>
              VISION DYNAMICS reserves the right to use all information regarding the Site used by you in any manner consistent with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">12. Reliance on Information</h2>
            <p>
              The information presented on or through the Site is made available solely for general information purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">13. Copyrights and Copyright Agent</h2>
            <p>
              If you believe your work has been copied in a way that constitutes copyright infringement, please provide a notice containing the required information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">14. Severability</h2>
            <p>
              If any provision of these Terms of Use is held to be unenforceable, the remaining provisions will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">15. Waiver</h2>
            <p>
              The failure of VISION DYNAMICS to exercise any right or provision of these Terms of Use shall not operate as a waiver of such right or provision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">16. Termination</h2>
            <p>
              VISION DYNAMICS may terminate these Terms of Use at any time, with or without notice, for any reason.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">17. Jurisdiction</h2>
            <p>
              These Terms of Use are governed by the laws of Kenya. Any dispute arising from these Terms of Use shall be brought before the local courts in Nairobi, Kenya.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">18. Entire Agreement; Changes to Terms</h2>
            <p>
              These Terms of Use constitute the entire agreement between you and VISION DYNAMICS and supersede all prior communications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">19. Your Comments and Concerns</h2>
            <p>
              All feedback, comments, or requests should be directed to VISION DYNAMICS via email at   <Link
              href="visiondynamics@gmail.com"
              className="text-[#3C5CA4] font-semibold  hover:text-teal-400 transition-colors"
            >
              visiondynamics@gmail.com
            </Link>.
            </p>
          </section>
        </div>
       
      </div>
      < Footer />
    </div>
  );
};

export default TermsOfService;
