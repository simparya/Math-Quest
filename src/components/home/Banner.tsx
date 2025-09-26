"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Row, Col } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes/routes";

export function Banner() {
  const router = useRouter();

  const handleNavigateToCourse = () => {
    router.push(Routes.courses);
  };

  const handleNavigateToLogin = () => {
    router.push(Routes.login);
  };

  return (
    <section
      className="pt-10 md:pt-18 mt-16"
      style={{
        background: "linear-gradient(269.63deg, #EAFBF3 0.07%, #FFFCF0 99.68%)",
      }}
    >
      <div className="w-full mx-auto px-4 md:px-8 max-w-[1536px]">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} xl={13} className="relative">
            <Image
                src="/images/home/star-bold.png"
                alt="Star"
                width={80}
                height={80}
                className="absolute -top-6 right-6 hidden md:block"
            />
            <h1 className="font-bold text-4xl md:text-7xl text-left mb-6">
              Chinh Phục <br />
              Mọi Thử Thách <br />
              Toán Học!
            </h1>

            <p className="text-base md:text-xl max-w-150 text-left mb-12">
              Từ những bài toán cơ bản đến các dạng bài nâng cao, chúng tôi cung
              cấp tất cả những gì bạn cần để nắm vững kiến thức.
            </p>

            <div className="flex mx-auto md:mx-0 justify-start gap-4 flex-wrap mb-12">
              <Button
                onClick={handleNavigateToLogin}
                className="text-white bg-[#212B36] px-6 py-4 rounded-full"
              >
                Bắt đầu ngay
              </Button>
              <Button
                onClick={handleNavigateToCourse}
                className="rounded-full bg-transparent text-base font-semibold p-1 hover:bg-transparent transition-all flex items-center gap-2 shadow-none"
              >
                <Image
                  src="/images/home/play-icon.png"
                  alt="Play"
                  width={48}
                  height={48}
                />
                Xem khóa học
              </Button>
            </div>

            <div className="flex items-center gap-3 justify-start">
              <Image
                src="/images/home/img_1.png"
                alt="300k+ Học viên"
                width={136}
                height={36}
                className="object-contain"
              />
              <h2 className="text-xl">
                <span className="font-bold">300+</span> Học viên
              </h2>
            </div>
          </Col>

          <Col xs={24} xl={11}>
            <div className="flex justify-center xl:justify-end">
              <Image
                src="/images/home/banner-math.png"
                alt="Banner Toán Học"
                width={607}
                height={750}
                className="object-contain"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
