"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="bg-white mt-20 lg:mt-40 mb-10 md:mb-20">
      <div className="w-full mx-auto px-4 md:px-8 max-w-[1280px] grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-[#48DB9414] text-[#03200E] text-sm font-medium mb-6">
            VỀ CHÚNG TÔI
          </span>
          <h2 className="text-4xl md:text5xl font-bold mb-8">
            Sứ mệnh của chúng tôi
          </h2>
          <p className="text-[#637381] text-base md:text-xl">
            Chúng tôi tin rằng mỗi học sinh đều có thể giỏi Toán. Với phương
            pháp giảng dạy hiện đại, lấy học viên làm trung tâm, chúng tôi không
            chỉ truyền đạt kiến thức mà còn khơi dậy niềm đam mê, sự tự tin và
            tư duy logic cho mỗi em, giúp các em vững bước trên con đường học
            vấn.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/home/intro.png"
            alt="Học toán không còn áp lực"
            width={436}
            height={436}
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
