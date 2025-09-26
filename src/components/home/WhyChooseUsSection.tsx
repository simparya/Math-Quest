"use client";

import React from "react";
import Image from "next/image";
import { Video, User, Book, Heart } from "iconsax-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <Video size="64" variant="Bold" color="#48DB94" />,
      value: "50k+",
      label: "Khóa học",
    },
    {
      icon: <User size="64" variant="Bold" color="#48DB94" />,
      value: "40+",
      label: "Giáo viên giỏi",
    },
    {
      icon: <Book size="64" variant="Bold" color="#48DB94" />,
      value: "300k+",
      label: "Lượt học",
    },
    {
      icon: <Heart size="64" variant="Bold" color="#48DB94" />,
      value: "99%",
      label: "Học viên hài lòng",
    },
  ];

  return (
    <section className="relative bg-white mb-20 lg:mb-40 mt-10 md:mt-20">
      <div className="hidden md:block absolute lg:right-20 xl:right-50 2xl:right-120">
        <Image
          src="/images/home/star.png"
          alt="Decorative star"
          width={80}
          height={80}
          className="opacity-70"
        />
      </div>

      <div className="w-full mx-auto px-4 md:px-8 max-w-[1280px] text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-[#48DB9429] text-[#03200E] text-sm font-medium mb-6">
          TẠI SAO CHỌN CHÚNG TÔI
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tại sao nên chọn MathSolver
        </h2>
        <p className="text-[#637381] text-base md:text-xl max-w-2xl mx-auto">
          Chúng tôi áp dụng các phương pháp giảng dạy trực quan, sinh động, kết
          hợp với các bài tập thực hành đa dạng giúp học sinh nắm vững kiến thức
          một cách tự nhiên và hiệu quả.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#F4F6F8] rounded-3xl p-8"
            >
              {item.icon}
              <h3 className="text-3xl font-bold mt-8 mb-1">{item.value}</h3>
              <p className="text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
