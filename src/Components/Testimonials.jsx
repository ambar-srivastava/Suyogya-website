import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit.",
  },
  {
    id: 3,
    name: "William Johns",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit.",
  },
  {
    id: 4,
    name: "James Gunn",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Ut eget erat vel nisi aliquet pellentesque vel eu elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit. Sed soluta quam, vero rem velit sequi sapiente ex saepe. Debitis modi impedit doloribus neque adipisci quaerat distinctio ullam eaque. Ut eget erat vel nisi aliquet pellentesque vel eu elit.",
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col w-full min-h-full items-center justify-center py-8">
      <h2 className="sm:text-5xl text-3xl text-primary font-medium mb-5">
        Testimonials
      </h2>
      <div className="w-[90%] lg:w-[45%]">
        <div className="relative flex flex-col">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`h-4 w-4 mx-1 rounded-full ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-full ${
                  activeIndex === index ? "block" : "hidden"
                } transition-all duration-500 ease-in-out`}
              >
                <div className="p-4 mt-10 bg-white border-none shadow-xl shadow-slate-300 rounded-md ">
                  <p className="text-gray-600 text-md">{testimonial.text}</p>
                  <p className="mt-2 font-semibold text-xl txt text-primary">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 flex gap-5">
        <button
          className="text-blue-500 font-semibold"
          onClick={prevTestimonial}
        >
          <BsFillArrowLeftCircleFill className="text-primary" size={35} />
        </button>
        <button
          className="text-blue-500 font-semibold"
          onClick={nextTestimonial}
        >
          <BsFillArrowRightCircleFill className="text-primary" size={35} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
