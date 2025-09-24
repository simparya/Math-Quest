"use client";

import CourseCard from "@/components/courses/course-card";
import React from "react";
import { Course, CourseLabel } from "@/api/types/course.type";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes/routes";

interface CourseTabProps {
  courses?: Course[];
  isLoading?: boolean;
  error?: any;
  onCourseClick?: (courseId: string) => void;
  onLabelChange?: (label: string | null) => void;
  activeLabel?: string | null;
}

const listTab = [
  {
    id: 1,
    name: "Tất cả",
    numberLesson: 0, // Will be updated dynamically
    label: null,
  },
  {
    id: 2,
    name: "Nổi bật",
    numberLesson: 0,
    label: CourseLabel.FEATURED,
  },
  {
    id: 3,
    name: "Phổ biến",
    numberLesson: 0,
    label: CourseLabel.BEST_SELLER,
  },
  {
    id: 4,
    name: "Xu hướng",
    numberLesson: 0,
    label: CourseLabel.HOT,
  },
  {
    id: 5,
    name: "Mới nhất",
    numberLesson: 0,
    label: CourseLabel.NEW,
  },
];

export function CourseTab({
  courses = [],
  isLoading = false,
  error = null,
  onCourseClick,
  onLabelChange,
  activeLabel,
}: CourseTabProps) {
  const router = useRouter();
  // Get active tab ID based on activeLabel
  const getActiveTabId = () => {
    const matchingTab = listTab.find((tab) => tab.label === activeLabel);
    return matchingTab?.id || 1; // Default to "Tất cả" if no match
  };

  const handleNavigateToCourse = () => {
    router.push(Routes.courses);
  };

  // Update tabs with actual course counts
  const updatedTabs = listTab.map((tab) => {
    if (tab.id === 1) {
      // "Tất cả" tab shows total courses available
      return { ...tab, numberLesson: courses.length };
    } else {
      // Other tabs show estimated counts (you can make these dynamic based on actual filters if needed)
      return {
        ...tab,
        numberLesson: Math.floor(courses.length * 0.7), // Estimated 70% for other categories
      };
    }
  });

  const handleTabClick = (tab: any) => {
    onLabelChange?.(tab.label);
  };

  const handleCourseClick = (courseId: string) => {
    if (onCourseClick) {
      onCourseClick(courseId);
    }
  };

  // Get courses to display (limit to 8 for preview)
  const displayCourses = courses.slice(0, 8);

  return (
    <section
      className="py-20 md:py-40"
      style={{
        background:
          "linear-gradient(268.9deg, #E6F3EB 1.92%, #E7F4E6 26.97%, #FEFBF0 92.72%)",
      }}
    >
      <div className="md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-[#48DB9429] text-[#03200E] text-sm font-medium">
            Khóa học
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Khóa học nổi bật</h2>
          <p className="text-[#637381] max-w-2xl mx-auto text-base md:text-xl">
            Khám phá các khóa học được học viên yêu thích và đánh giá cao nhất.
            Những lộ trình này được thiết kế để mang lại hiệu quả vượt trội,
            giúp học sinh bứt phá thành công trong học tập.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {updatedTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`cursor-pointer relative flex flex-col items-center justify-center min-w-[120px] px-8 py-4 rounded-full transition-all ${
                getActiveTabId() === tab.id
                  ? "bg-[#48DB94] text-white"
                  : "text-[#48DB94] bg-white border-[#48DB94] hover:bg-[#48DB94] hover:text-white"
              }`}
            >
              {/*<span className="text-[10px] right-2.5 top-2 absolute text-[#919EABCC]">*/}
              {/*  {tab.numberLesson}*/}
              {/*</span>*/}
              <span
                className={`text-sm font-medium ${getActiveTabId() === tab.id ? "text-white" : "text-gray-700"}`}
              >
                {tab.name}
              </span>
            </button>
          ))}
        </div>

        {/* Courses Display */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading ? (
            <div className="col-span-4 flex justify-center items-center py-20">
              <Loader2 className="animate-spin text-gray-400" size={32} />
              <span className="ml-2 text-gray-500">Đang tải khóa học...</span>
            </div>
          ) : error ? (
            <div className="col-span-4 flex justify-center items-center py-20">
              <div className="text-center">
                <p className="text-red-500 mb-2">
                  Có lỗi xảy ra khi tải dữ liệu
                </p>
                <p className="text-gray-500 text-sm">
                  {error?.message || "Vui lòng thử lại sau"}
                </p>
              </div>
            </div>
          ) : displayCourses.length > 0 ? (
            displayCourses.map((course) => (
              <div
                key={course.id}
                className="cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => handleCourseClick(course.slug)}
              >
                <CourseCard
                  slug={course.slug}
                  badge={course.label}
                  title={course.title}
                  imageUrl={course.thumbnail}
                  category="Khóa học"
                  courseName={course.title}
                  instructor={`Giảng viên: ${course?.owner.fullName}`}
                  lessonCount={course.totalLesson}
                  studentCount={course.enrollmentCnt}
                  currentPrice={
                    course.pricing.discounted
                      ? course.pricing.discounted.toLocaleString()
                      : course.pricing.regular.toLocaleString()
                  }
                  originalPrice={
                    course.pricing.discounted
                      ? course.pricing.regular.toLocaleString()
                      : ""
                  }
                />
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center py-20">
              <p className="text-gray-500">Chưa có khóa học nào</p>
            </div>
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleNavigateToCourse}
            size="lg"
            className="text-white rounded-full"
          >
            Xem tất cả
          </Button>
        </div>
      </div>
    </section>
  );
}
