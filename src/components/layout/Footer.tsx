import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/lib/routes/routes";
import { Input } from "antd";
import { Facebook, Instagram } from "iconsax-reactjs";

function Footer() {
  return (
    <footer className="footer bg-white border-[1px] border-[#919EAB3D]">
      <div className="md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto pt-16 pb-8 px-6 text-white">
        <div className="grid lg:grid-cols-8 gap-2 grid-cols-1 md:grid-cols-3 gap-y-6">
          <div className="col-span-1 md:col-span-4 lg:max-w-3/4">
            <div className="flex items-center gap-12 mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Logo"
                width={192}
                height={40}
              />
              <div className="flex gap-3">
                <Link href="#" className="flex items-center justify-center">
                  <Facebook size="24" color="#212B36" variant="Bold" />
                </Link>
                <Link href="#" className="flex items-center justify-center">
                  <Instagram size="24" color="#212B36" variant="Bold" />
                </Link>
                <Link href="#" className="flex items-center justify-center">
                  <Image
                    src="/images/home/linkedln.png"
                    alt="Linkedln"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
            <div className="mt-8 text-[#637381] text-base">
              Hãy cùng chúng tôi biến những con số khô khan thành niềm vui khám
              phá, và mỗi bài toán khó trở thành một thử thách thú vị mà bạn có
              thể vượt qua.
            </div>
            <h3 className="font-semibold text-lg md:text-xl mb-4 mt-8">
              Đăng ký nhận bản tin
            </h3>
            <div className="">
              <div className="flex items-center bg-white rounded-full px-4 py-2 border border-[#6B728052] max-w-[340px]">
                <Input
                  placeholder="Email của bạn"
                  className="!border-none !shadow-none focus:ring-0 focus:outline-none text-sm"
                  style={{ flex: 1 }}
                />
                <button className="bg-[#212B36] text-white px-6 py-3 rounded-full flex items-center justify-center gap-1 hover:bg-[#0C8355] transition text-sm whitespace-nowrap w-auto mx-auto sm:mx-0">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:col-span-2 gap-2 text-sm">
            <div className="text-xl font-semibold">Chúng tôi</div>
            <Link
              href={Routes.home}
              className="md:mt-6 cursor-pointer hover:text-primary-main hover:underline text-zinc-400"
            >
              Trang chủ
            </Link>
            <Link
              href={Routes.abouts}
              className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400"
            >
              Giới thiệu
            </Link>
            <Link
              href={Routes.home}
              className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400"
            >
              Giỏ hàng
            </Link>
            <Link
              href={Routes.home}
              className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400"
            >
              Yêu thích
            </Link>
          </div>
          <div className="flex flex-col lg:col-span-2 gap-2 text-sm">
            <div className="text-xl font-semibold">Hỗ trợ</div>
            <Link
              href={Routes.contact}
              className="md:mt-6 cursor-pointer hover:text-primary-main hover:underline text-zinc-400"
            >
              Liên hệ
            </Link>
            <Link
              href={Routes.instructors}
              className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400"
            >
              Giảng viên
            </Link>
            <Link
              href={Routes.faq}
              className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400"
            >
              FAQs
            </Link>
          </div>
        </div>
        <div className="my-8 w-full h-[1px] bg-[#919EAB3D]"></div>
        <div className="lg:flex items-center justify-between">
          <div className="text-sm">
            © 2025 <span className="font-semibold">MathSolver</span>
          </div>
          <div className="text-zinc-400 text-sm">
            <Link
              href={Routes.termOfUse}
              className="hover:text-primary-main hover:underline"
            >
              Điều khoản & Điền kiện
            </Link>
            <Link
              href={Routes.policy}
              className="ml-8 hover:text-primary-main hover:underline"
            >
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
