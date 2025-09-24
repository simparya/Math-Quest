"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="bg-white mt-20 lg:mt-40 mb-10 md:mb-20">
      <div className="md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-[#48DB9414] text-[#03200E] text-sm font-medium mb-6">
            VỀ CHÚNG TÔI
          </span>
          <h2 className="text-4xl md:text5xl font-bold mb-8">
            Học Vật Lý Không Còn Là Áp Lực
          </h2>
          <p className="text-[#637381] text-base md:text-xl">
            Chúng tôi tin rằng mỗi học sinh đều có thể giỏi Toán. Với phương
            pháp giảng dạy hiện đại, lấy học viên làm trung tâm, chúng tôi không
            chỉ truyền đạt kiến thức mà còn khơi dậy niềm đam mê, sự tự tin và
            tư duy logic cho mỗi em, giúp các em vững bước trên con đường học
            vấn.
          </p>
        </div>
        <div className="flex justify-center">
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
