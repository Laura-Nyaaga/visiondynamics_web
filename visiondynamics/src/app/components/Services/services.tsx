"use client";
import React, { useState } from "react";
import {
  IoMdAnalytics,
  IoMdCalendar,
  IoMdChatboxes,
  IoMdDesktop,
  IoMdHelpCircle,
  IoMdTime,
} from "react-icons/io";
import {
  MdOutlineRequestQuote,
  MdOutlineHealthAndSafety,
  MdEmail,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { HiMicrophone } from "react-icons/hi";
import { FaKeyboard } from "react-icons/fa";

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}


const ServicesSection: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: IoMdAnalytics,
      title: "Medical Research",
      description:
        "Contribute to groundbreaking studies by providing reliable data collection and analysis services.",
    },
    {
      icon: IoMdCalendar,
      title: "Appointment Scheduling",
      description:
        "Reduce missed appointments with effective scheduling and reminder systems for patients and staff.",
    },
    {
      icon: IoMdChatboxes,
      title: "Social Media Management",
      description:
        "Build a strong digital presence with engaging content and professional management of healthcare-focused social channels.",
    },
    {
      icon: IoMdDesktop,
      title: "Administrative Support",
      description:
        "Handle everyday tasks like scheduling, record management, and correspondence to keep operations running smoothly.",
    },
    {
      icon: IoMdHelpCircle,
      title: "24/7 Availability",
      description:
        "Offer around-the-clock support to ensure patients and healthcare professionals are never left without assistance.",
    },
    {
      icon: IoMdTime,
      title: "Patient Engagement",
      description:
        "Keep patients informed and engaged through seamless appointment scheduling, prescription reminders, and updates.",
    },
    {
      icon: HiMicrophone,
      title: "Medical Transcription",
      description:
        "Transform audio recordings into accurate, well-formatted medical documents efficiently.",
    },
    {
      icon: MdOutlineRequestQuote,
      title: "Billing and Coding",
      description:
        "Ensure accurate and timely billing with expert handling of medical codes and insurance claims.",
    },
    {
      icon: FaKeyboard,
      title: "Data Entry",
      description:
        "Maintain organized and error-free patient records and healthcare data with meticulous data entry.",
    },
    {
      icon: MdEmail,
      title: "Email Management",
      description:
        "Streamline communication with efficient handling of emails, scheduling, and follow-ups.",
    },
    {
      icon: MdOutlineHealthAndSafety,
      title: "Telemedicine Support",
      description:
        "Enhance remote patient care by providing technical and administrative assistance for telemedicine platforms.",
    },
    {
      icon: MdOutlineNotificationsActive,
      title: "Prescription Reminders",
      description:
        "Boost medication adherence with timely prescription refill alerts and notifications.",
    },
  ];

  const handleServiceExpand = (index: number) => {
    console.log(`Current Expanded Service: ${expandedService}`);
    setExpandedService(index === expandedService ? null : index);
    console.log(
      `New Expanded Service: ${index === expandedService ? null : index}`
    );
  };

  return (
    <section className="bg-white my-24 px-4 md:px-8 lg:px-16" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-black text-xl md:text-2xl italic text-center mb-12">
          We Offer Reliable Assistance with an Outstanding Value.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className={`bg-transparent border-[#71C3DA] rounded-lg p-6 transition-transform duration-300 ${
                expandedService === index
                  ? "bg-[#1b2450] text-black text-lg mb-4 transform scale-105 !important"
                  : "hover:bg-[#1b2450] hover:text-white text-lg mb-4 bg-white text-black "
              }`}
              onClick={() => handleServiceExpand(index)}
            >
              <div className="flex items-center mb-4">
                <service.icon className="text-[#71C3DA] w-8 h-8 mr-4" />
                <h3 className="text-black text-2xl font-bold mb-4">{service.title}</h3>
              </div>
              <p>
                {expandedService === index
                  ? service.description
                  : service.description.slice(0, 55)}
                {service.description.length > 55 && (
                  <span>
                    {expandedService === index ? " " : "... "}
                    <button
                      className="text-blue-500 text-lg mb-4 hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceExpand(index);
                      }}
                    >
                      {expandedService === index ? "Show Less" : "Read More"}
                    </button>
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
