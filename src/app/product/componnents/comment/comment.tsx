import React from "react";

const testimonials = [
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "/guillermo.jpeg.png", // Thay bằng URL avatar
    comment:
      "The @mintlify team absolutely nailed combining docs search and AI Q&A in a delightful experience.",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "/guillermo.jpeg.png",
    comment:
      "Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "/guillermo.jpeg.png",
    comment:
      "Mintlify is amazing for us! Even as a small team we struggled to keep up with dev and update the docs on changes.",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "/guillermo.jpeg.png",
    comment:
      "Why spend a week coding your own documentation when Mintlify brings you the best in docs?",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "/guillermo.jpeg.png",
    comment:
      "Why spend a week coding your own documentation when Mintlify brings you the best in docs?",
  },
  {
    name: "Guillermo Rauch",
    title: "CEO, Vercel",
    avatar: "/guillermo.jpeg.png",
    comment:
      "Why spend a week coding your own documentation when Mintlify brings you the best in docs?",
  },
];


const Testimonials = () => {
    return (
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="lg:text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
            Nhận xét của khách hàng
          </h2>
  
          {/* Container cuộn ngang trên màn hình nhỏ */}
          <div className="flex overflow-x-auto gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 shrink-0 w-[300px] md:w-auto"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-blue-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Testimonials;


