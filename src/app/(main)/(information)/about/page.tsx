"use client";

import React from "react";
import "./index.css";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { LIST_FOUNDATION } from "@/contants/about";
import ReactPlayer from "react-player";
import HomepageFeedback from "@/components/home/HomepageFeedback";
import CallToActionSection from "@/components/home/CallToActionSection";

function AboutPage() {
  return (
      <div className="flex flex-col gap-16 lg:gap-[120px]">
        <div className="relative w-full">
          <img
              src="/images/about/banner.png"
              alt="Hero Image"
              className="w-full lg:h-auto h-[400px] object-cover"
          />
          <div
              className="absolute md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto w-full inset-0 flex flex-col items-center justify-center">
            <div className="w-full lg:w-3/4 flex flex-col items-center justify-center text-center px-4 text-white">
              <div className="text-secondary-main text-center font-bold text-base lg:text-xl">
                Tầm nhìn của chúng tôi
              </div>
              <div className="text-white text-lg lg:text-3xl font-bold text-center pt-4">
                Chúng tôi hình dung một thế giới mà bất kỳ ai, ở bất kỳ đâu cũng
                có khả năng thay đổi cuộc sống của mình thông qua việc học.
              </div>
            </div>
          </div>
        </div>

        <div className="md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto w-full flex flex-col gap-[120px]">
          <div id="section-2" className="flex gap-16">
            <div className="flex-col justify-center relative w-1/2 hidden lg:flex">
              <Image
                  src="/images/about/img.png"
                  className="absolute top-0 z-0"
                  width={250}
                  height={490}
                  alt="Đọc sách"
              />
              <Image
                  src="/images/about/img_1.png"
                  className="self-end"
                  width={300}
                  height={250}
                  alt="Đọc sách"
              />
              <Image
                  src="/images/about/img_2.png"
                  className="self-center pt-16 relative z-10"
                  width={400}
                  height={490}
                  alt="Đọc sách"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="bg-[#48DB94] bg-clip-text text-transparent w-fit text-lg font-semibold">
                Hiểu về chúng tôi
              </div>
              <div className="text-2xl leading-9 lg:text-3xl lg:leading-12 font-bold pb-2">
                Tìm hiểu về nền tảng học tập MathSlover
              </div>
              <div className="text-secondary">
                MathSlover là nền tảng học tập trực tuyến hiện đại, mang đến trải
                nghiệm giáo dục linh hoạt và hiệu quả cho học sinh ở mọi lứa tuổi.
                Với triết lý &#34;học mọi lúc, mọi nơi&#34;, MathSlover nổi bật
                với những tính năng sau:
              </div>
              <div className="grid grid-cols-1 w-5/6 pt-8 gap-8">
                {LIST_FOUNDATION.map((item) => (
                    <div className="flex gap-4" key={item.title}>
                      {item.icon}
                      <div className="text-lg flex-1">
                        <div className="font-bold">{item.title}</div>
                        <div className="pt-2 text-secondary text-justify">
                          {item.description}
                        </div>
                      </div>
                    </div>
                ))}
                <Button
                    variant="default"
                    className="text-center w-fit bg-primary-main h-12 shadow-md hover:shadow-xl hover:shadow-primary-main/20 transition-shadow duration-300 text-white px-4 py-1.5 rounded-[10px]"
                >
                <span className="mr-2 text-white font-bold">
                  Học ngay hôm nay
                </span>
                  <ArrowRight size="24" color="white"/>
                </Button>
              </div>
            </div>
          </div>

          <div
              id="selection-3"
              className="flex gap-8 lg:gap-16 lg:flex-row flex-col"
          >
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-[#F5C100] bg-clip-text text-transparent w-fit text-lg font-semibold">
                Chúng tôi làm việc thế nào
              </div>
              <div className="text-2xl leading-9 lg:text-3xl lg:leading-12 font-bold pb-2">
                Xây dựng sự nghiệp và nâng cao cuộc sống của bạn
              </div>
              <div className="text-secondary">
                Tại MathSlover, chúng tôi kết hợp công nghệ hiện đại, phương pháp
                giảng dạy tiên tiến và sự tận tâm của đội ngũ giảng viên để mang
                đến trải nghiệm học tập linh hoạt, cá nhân hóa và hiệu quả cho
                từng học viên.
              </div>
              <Button
                  variant="default"
                  className="text-center w-fit mt-8 bg-primary-main h-12 shadow-md hover:shadow-xl hover:shadow-primary-main/20 transition-shadow duration-300 text-white px-4 py-1.5 rounded-[10px]"
              >
              <span className="mr-2 text-white font-bold">
                Học ngay hôm nay
              </span>
                <ArrowRight size="24" color="white"/>
              </Button>
            </div>
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
              <ReactPlayer
                  controls
                  width="100%"
                  height="300px"
                  url="https://youtu.be/YtLx_sfJquA?si=XrL1aUfiOoxyuxXY"
              />
            </div>
          </div>
        </div>
        <div className="mt-[-80px] md:pt-[-160px]">
          <HomepageFeedback/>
          <CallToActionSection/>
        </div>
      </div>
  );
}

export default AboutPage;
