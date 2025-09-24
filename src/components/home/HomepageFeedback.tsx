"use client";

import React from "react";
import { Rate, Avatar } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

interface Feedback {
  name: string;
  username: string;
  avatar: string;
  rating: number;
  content: string;
}

const feedbacks: Feedback[] = [
  {
    name: "Quang Huy, 12 tuổi",
    username: "@quanghuy",
    avatar: "/images/home/feedback-boy.png",
    rating: 5,
    content:
      "Thầy cô ở MathSolver giảng bài siêu dễ hiểu, lại còn vui tính nữa. Con đã tự tin hơn nhiều khi học toán!",
  },
  {
    name: "Thảo Chi, 8 tuổi",
    username: "@thaochi",
    avatar: "/images/home/feedback-girl.png",
    rating: 4,
    content:
      "Mấy trò chơi toán học trên web hay lắm ạ! Con vừa học vừa chơi mà lại nhớ bài lâu hơn. Cảm ơn MathSolver!",
  },
  {
    name: "Gia Bảo, 13 tuổi",
    username: "@giabao",
    avatar: "/images/home/feedback-boy.png",
    rating: 5,
    content:
      "Trước đây con ghét học toán, nhưng từ khi học ở đây, con thấy toán học thật diệu kỳ. Con ước gì được học toán ở đây sớm hơn!",
  },
  {
    name: "Lan Hương, 11 tuổi",
    username: "@lanhuong",
    avatar: "/images/home/feedback-girl-2.png",
    rating: 5,
    content:
      "Phần mềm thực hành thí nghiệm ảo siêu đỉnh! Con có thể làm lại thí nghiệm bao nhiêu lần cũng được mà không sợ hỏng.",
  },
  {
    name: "Đức Hùng, 10 tuổi",
    username: "@duchung",
    avatar: "/images/home/feedback-boy-2.png",
    rating: 5,
    content:
      "Con thích nhất là được tự tay làm các phản ứng. Cảm giác như một nhà khoa học thực thụ vậy!",
  },
  {
    name: "Quang Huy, 12 tuổi",
    username: "@quanghuy",
    avatar: "/images/home/feedback-boy.png",
    rating: 5,
    content:
      "Thầy cô ở MathSolver giảng bài siêu dễ hiểu, lại còn vui tính nữa. Con đã tự tin hơn nhiều khi học toán!",
  },
  {
    name: "Thảo Chi, 8 tuổi",
    username: "@thaochi",
    avatar: "/images/home/feedback-girl.png",
    rating: 5,
    content:
      "Mấy trò chơi toán học trên web hay lắm ạ! Con vừa học vừa chơi mà lại nhớ bài lâu hơn. Cảm ơn MathSolver!",
  },
  {
    name: "Gia Bảo, 13 tuổi",
    username: "@giabao",
    avatar: "/images/home/feedback-boy.png",
    rating: 5,
    content:
      "Trước đây con ghét học toán, nhưng từ khi học ở đây, con thấy toán học thật diệu kỳ. Con ước gì được học toán ở đây sớm hơn!",
  },
  {
    name: "Lan Hương, 11 tuổi",
    username: "@lanhuong",
    avatar: "/images/home/feedback-girl-2.png",
    rating: 5,
    content:
      "Phần mềm thực hành thí nghiệm ảo siêu đỉnh! Con có thể làm lại thí nghiệm bao nhiêu lần cũng được mà không sợ hỏng.",
  },
  {
    name: "Đức Hùng, 10 tuổi",
    username: "@duchung",
    avatar: "/images/home/feedback-boy-2.png",
    rating: 5,
    content:
      "Con thích nhất là được tự tay làm các phản ứng. Cảm giác như một nhà khoa học thực thụ vậy!",
  },
  {
    name: "Quang Huy, 12 tuổi",
    username: "@quanghuy",
    avatar: "/images/home/feedback-boy.png",
    rating: 5,
    content:
      "Thầy cô ở MathSolver giảng bài siêu dễ hiểu, lại còn vui tính nữa. Con đã tự tin hơn nhiều khi học toán!",
  },
  {
    name: "Thảo Chi, 8 tuổi",
    username: "@thaochi",
    avatar: "/images/home/feedback-girl.png",
    rating: 5,
    content:
      "Mấy trò chơi toán học trên web hay lắm ạ! Con vừa học vừa chơi mà lại nhớ bài lâu hơn. Cảm ơn MathSolver!",
  },
  {
    name: "Gia Bảo, 13 tuổi",
    username: "@giabao",
    avatar: "/images/home/feedback-boy.png",
    rating: 5,
    content:
      "Trước đây con ghét học toán, nhưng từ khi học ở đây, con thấy toán học thật diệu kỳ. Con ước gì được học toán ở đây sớm hơn!",
  },
  {
    name: "Lan Hương, 11 tuổi",
    username: "@lanhuong",
    avatar: "/images/home/feedback-girl-2.png",
    rating: 5,
    content:
      "Phần mềm thực hành thí nghiệm ảo siêu đỉnh! Con có thể làm lại thí nghiệm bao nhiêu lần cũng được mà không sợ hỏng.",
  },
  {
    name: "Đức Hùng, 10 tuổi",
    username: "@duchung",
    avatar: "/images/home/feedback-boy-2.png",
    rating: 5,
    content:
      "Con thích nhất là được tự tay làm các phản ứng. Cảm giác như một nhà khoa học thực thụ vậy!",
  },
];

export default function HomepageFeedback() {
  return (
    <section className="bg-white pt-20 md:pt-40 pb-10 md:pb-20">
      <div className="relative mx-auto text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-[#48DB9429] text-[#03200E] text-sm font-medium mb-4">
          LỜI CHỨNG THỰC
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Học viên nói gì về chúng tôi
        </h2>

        <p className="text-[#637381] mx-auto text-base md:text-xl mb-16">
          Lắng nghe những chia sẻ chân thực từ học viên và phụ huynh.
        </p>

        <div className="relative">
          <div className="pointer-events-none absolute top-0 left-0 w-0 md:w-50 xl:w-100 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute top-0 right-0 w-0 md:w-50 xl:w-100 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            className="!pb-[50px]"
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
              1536: { slidesPerView: 5 },
            }}
          >
            {feedbacks.map((fb, idx) => (
              <SwiperSlide key={idx}>
                <div className="p-8 rounded-4xl bg-[#F4F6F8] h-full flex flex-col justify-between text-left">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      style={{ color: "#facc15 !important" }}
                      className="custom-rate"
                    >
                      <Rate disabled defaultValue={fb.rating} />
                    </div>
                  </div>
                  <p className="mb-8">{fb.content}</p>

                  <div className="flex items-center gap-3 mt-auto">
                    <Avatar src={fb.avatar} size={48} />
                    <div>
                      <p className="font-semibol text-sm">{fb.name}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
