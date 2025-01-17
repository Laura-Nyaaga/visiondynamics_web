"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    image: "/image/client_one.png",
    quote:
      "Their dedication to patient care is unmatched. The 24/7 support and personalized services have been a game-changer for our practice especially when it comes to managing medical records and sending timely reminders to patients. Automate your work with Vision Dynamics.",
    name: "Dr.Barry Norton",
    company: "Greenleaf Rehab",
  },
  {
    id: 2,
    image: "/image/client_two.png",
    quote:
      "As cardiologist, I was overwhelmed by the demands of managing patient data and scheduling. Vision Dynamics' automated these tasks, freeing up my time to focus on patient care. All thanks to Vision Dynamics I can now have my dream work-life balance.",
    name: "Dr. Kawa Brandy",
    company: "Better Health & Wellness",
  },
  {
    id: 3,
    image: "/image/client_three.png",
    quote:
      "Vision Dynamics has revolutinized my workflow through tackling time-consuming tasks like data cleaning and extraction. I would highly recommend them to medical reseachers",
    name: "Melinda Willis",
    company: "Medical Reseacher",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1b2450] py-16 px-4 min-h-[600px] flex flex-col items-center justify-center mx-16 rounded-lg">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-white  text-4xl md:text-5xl font-bold text-center mb-2">
          Testimonials
        </h2>
        <p className="text-white text-xl md:text-2xl italic text-center mb-12">
          "What Our Customers Have To Say"
        </p>

        <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg mx-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  height={200}
                  width={200}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 text-left">
              <p className="text-black text-lg md:text-2xl mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <h4 className="text-black font-bold text-lg">
                {testimonials[currentTestimonial].name} -{" "}
                {testimonials[currentTestimonial].company}
              </h4>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentTestimonial ? "bg-teal-400" : "bg-white"
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
