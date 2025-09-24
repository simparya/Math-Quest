"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes/routes";

export default function CallToActionSection() {
  const router = useRouter();

  const handleNavigateToCourse = () => {
    router.push(Routes.courses);
  };

  return (
    <section className="w-full mx-auto px-4 md:px-8 max-w-[1280px] text-center my-10 md:my-20">
      <div className="relative w-full rounded-3xl px-6 py-16 md:px-20 md:py-24 bg-[url('/images/home/bg-cta.png')] bg-cover bg-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Bạn đã sẵn sàng để bứt phá <br className="hidden md:block" />
          điểm số môn Toán chưa?
        </h2>

        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8">
          Hãy đăng ký ngay khóa học phù hợp với bạn và xem cách đội ngũ của
          chúng tôi giúp bạn yêu thích môn học này, xây dựng nền tảng vững chắc
          và đạt kết quả cao nhất.
        </p>

        <Button
          onClick={handleNavigateToCourse}
          className="px-8 py-4 text-white font-semibold bg-[#212B36] rounded-full hover:bg-gray-600 transition"
        >
          Đăng ký ngay hôm nay
        </Button>
      </div>
    </section>
  );
}
