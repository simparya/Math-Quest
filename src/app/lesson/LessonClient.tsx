"use client";

import AIHelperModal from "@/app/lesson/ModalChatbot";
import LessonSidebar from "@/components/courses/lesson-sidebar";
import ContentTab from "@/components/lesson/ContentTab";
import DocumentLesson from "@/components/lesson/DocumentLesson";
import ExerciseLesson from "@/components/lesson/ExerciseLesson";
import QuizLesson from "@/components/lesson/QuizLesson";
import StudyCode, { defaultJavaExercise } from "@/components/lesson/StudyCode";
import VideoPlayer from "@/components/ui/video-player";
import {
  useCourseBySlug,
  useModuleForUser,
} from "@/hooks/queries/course/useCourses";
import { useGetLessonById } from "@/hooks/queries/course/useLessonCourse";
import { useQuizStore } from "@/store/slices/lesson.slice";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import IconToggleSidebar from "../../../public/icons/lessson/IconToggleSidebar";
import IconToggleSidebarActive from "../../../public/icons/lessson/IconToggleSidebarActive";

// Interface compatible with LessonSidebar
interface SidebarLesson {
  id: string;
  title: string;
  duration: string;
  type: string;
  active?: boolean;
}

interface SidebarSection {
  id: string;
  title: string;
  expanded: boolean;
  lessons: SidebarLesson[];
  progress?: string;
}

// Extended interface for internal use
interface ExtendedLesson extends SidebarLesson {
  moduleId: string;
  order: number;
  status: string;
  isPreviewable: boolean;
  description: string;
  attachmentUrl: string | null;
  sampleImageUrl: string;
  isCompleted: boolean;
}

export function LessonClient() {
  const isQuizStarted = useQuizStore((state) => state.isQuizStarted);

  const searchParams = useSearchParams();
  const slug = searchParams.get("course");
  const moduleId = searchParams.get("module");
  const lessonId = searchParams.get("lesson");

  const { data: courseDetail } = useCourseBySlug(slug as string);
  const { data: moduleData } = useModuleForUser(courseDetail?.id || "");
  const { data: initValue } = useGetLessonById(
    courseDetail?.id as string,
    moduleId as string,
    lessonId as string,
  );

  const [sections, setSections] = useState<SidebarSection[]>([]);
  const [lessonsData, setLessonsData] = useState<ExtendedLesson[]>([]); // Store extended lesson data
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<ExtendedLesson | null>(
    null,
  );
  const [isAIHelperOpen, setIsAIHelperOpen] = useState(false);
  const [showChatbotTooltip, setShowChatbotTooltip] = useState(false);

  // Map lesson type from BE to frontend
  const mapLessonType = (type: string) => {
    switch (type) {
      case "VIDEO":
        return "video";
      case "ARTICLE":
        return "doc";
      case "QUIZ":
        return "quiz";
      case "PRACTICE":
        return "exercise";
      default:
        return "video";
    }
  };

  // Format duration to display string
  const formatDuration = (duration: number) => {
    if (duration === 0) return "00:00";
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Transform BE data to frontend sections
  useEffect(() => {
    if (moduleData?.data) {
      const allLessonsData: ExtendedLesson[] = [];

      const transformedSections = moduleData.data
        .filter((module: any) => module.status === "PUBLISHED")
        .sort((a: any, b: any) => a.order - b.order)
        .map((module: any) => {
          const publishedLessons = module.lessons
            .filter((lesson: any) => lesson.status === "PUBLISHED")
            .sort((a: any, b: any) => a.order - b.order)
            .map((lesson: any) => {
              const extendedLesson: ExtendedLesson = {
                id: lesson.id,
                title: lesson.title,
                duration: formatDuration(lesson.duration),
                type: mapLessonType(lesson.type),
                moduleId: lesson.moduleId,
                order: lesson.order,
                status: lesson.status,
                isPreviewable: lesson.isPreviewable,
                description: lesson.description,
                attachmentUrl: lesson.attachmentUrl,
                sampleImageUrl: lesson?.sampleImageUrl,
                active: false,
                isCompleted: lesson?.isCompleted,
              };

              allLessonsData.push(extendedLesson);

              // Return sidebar-compatible lesson
              return {
                id: lesson.id,
                title: lesson.title,
                duration: formatDuration(lesson.duration),
                type: mapLessonType(lesson.type),
                active: false,
                isCompleted: lesson?.isCompleted,
              };
            });

          return {
            id: module.id,
            title: module.title,
            expanded: module.id === moduleId, // Expand section if it matches URL moduleId
            lessons: publishedLessons,
            progress: `0/${publishedLessons.length}`,
          };
        });

      setLessonsData(allLessonsData);
      setSections(transformedSections);

      // Set current lesson based on URL params or first lesson of active module
      if (allLessonsData.length > 0) {
        let lessonToSelect = null;

        if (lessonId) {
          // Find lesson by lessonId
          lessonToSelect = allLessonsData.find(
            (lesson: ExtendedLesson) => lesson.id === lessonId,
          );
        }

        if (!lessonToSelect && moduleId) {
          // Find first lesson in the specified module
          lessonToSelect = allLessonsData.find(
            (lesson: ExtendedLesson) => lesson.moduleId === moduleId,
          );
        }

        if (!lessonToSelect) {
          // Fallback to first lesson
          lessonToSelect = allLessonsData[0];
        }

        if (lessonToSelect) {
          setCurrentLesson(lessonToSelect);
          // Update sections to mark the selected lesson as active
          setSections((prevSections) =>
            prevSections.map((section) => ({
              ...section,
              lessons: section.lessons.map((lesson) => ({
                ...lesson,
                active: lesson.id === lessonToSelect!.id,
              })),
            })),
          );
        }
      }
    }
  }, [moduleData, moduleId, lessonId]);

  // Handle responsive sidebar visibility
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobileView(mobile);
      setIsSidebarVisible(!mobile);
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Show chatbot tooltip on page load
  useEffect(() => {
    // Delay showing tooltip to ensure page is fully loaded
    const timer = setTimeout(() => {
      setShowChatbotTooltip(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Hide tooltip
  const hideChatbotTooltip = () => {
    setShowChatbotTooltip(false);
  };

  const toggleSection = (sectionId: string) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, expanded: !section.expanded }
          : section,
      ),
    );
  };


  const selectLesson = (lesson: SidebarLesson) => {
    // Find the extended lesson data
    const extendedLesson = lessonsData.find((l) => l.id === lesson.id);
    if (!extendedLesson) return;

    // Create a new sections array with the active lesson updated
    const newSections = sections.map((section) => ({
      ...section,
      lessons: section.lessons.map((l) => ({
        ...l,
        active: l.id === lesson.id,
      })),
    }));

    // Set the updated sections
    setSections(newSections);

    // Update current lesson
    setCurrentLesson(extendedLesson);

    // Hide sidebar on mobile after selecting a lesson
    if (isMobileView) {
      setIsSidebarVisible(false);
    }

    // Update URL params to reflect current lesson
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("lesson", lesson.id);
    newSearchParams.set("module", extendedLesson.moduleId);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newSearchParams}`,
    );
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const renderLessonBody = (type: string) => {
    switch (type) {
      case "video":
        return (
          <VideoPlayer
            src={initValue?.videoUrl || "/videos/lesson.mp4"}
            poster="/images/lesson-thumbnail.jpg"
          />
        );
      case "doc":
        return <DocumentLesson data={initValue} />;
      case "quiz":
        return <QuizLesson dataLesson={initValue} dataCourse={courseDetail} />;
      case "exercise":
        return (
          <ExerciseLesson dataLesson={initValue} dataCourse={courseDetail} />
        );
      default:
        return null;
    }
  };

  if (!courseDetail || !currentLesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Đang tải...</div>
      </div>
    );
  }

  return (
    <div className="flex relative">
      {/* Chatbot Icon with Tooltip */}
      <div className="fixed bottom-10 right-20 z-50">
        <div
          className="relative cursor-pointer"
          onClick={() => {
            setIsAIHelperOpen(true);
            hideChatbotTooltip();
          }}
        >
          <Image
            src="/chatbot.svg"
            alt="AI Assistant"
            className="m-2 hover:scale-105 transition-transform duration-200"
            width={88}
            height={88}
          />
          
          {/* Tooltip */}
          {showChatbotTooltip && (
            <div className="absolute bottom-full right-0 mb-3 w-72 p-4 bg-white rounded-xl shadow-2xl border border-gray-200 animate-fade-in">
              <div className="relative">
                {/* Arrow pointing down to chatbot icon */}
                <div className="absolute top-full right-12 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white"></div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm mb-2">
                      🤖 AI Assistant
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed mb-3">
                      Hãy sử dụng AI Assistant để hỏi đáp về bài học, giải đáp thắc mắc và nhận hỗ trợ học tập!
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      hideChatbotTooltip();
                    }}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Left Sidebar - luôn hiện ở desktop, toggle ở mobile */}
      {isSidebarVisible && (
        <div
          className={`
          ${isMobileView ? "fixed z-20 top-0 left-0 h-full transition-transform duration-300 ease-in-out" : "relative z-10"}
          ${isSidebarVisible ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isMobileView ? "w-max sm:w-[350px] bg-white shadow-xl" : "w-0 lg:w-[350px] bg-white"}
        `}
          style={{ minHeight: "100vh" }}
        >
          <LessonSidebar
            sections={sections}
            onToggleSection={toggleSection}
            onSelectLesson={selectLesson}
          />
        </div>
      )}
      {/* Overlay cho mobile khi sidebar mở */}
      {isMobileView && isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-white min-w-0">
        {/* Header with back button */}
        <div className="items-center justify-between md:flex p-4 bg-white text-primary">
          <div className="flex items-center gap-3">
            <button
              className="mr-3 bg-[#919EAB14] h-[36px] w-[36px] flex items-center justify-center rounded"
              onClick={toggleSidebar}
            >
              {isSidebarVisible ? (
                <IconToggleSidebar />
              ) : (
                <IconToggleSidebarActive />
              )}
            </button>
            <h1 className="text-lg font-medium truncate">
              {courseDetail?.title}
            </h1>
          </div>
          {/*<div className="flex items-center gap-6 mt-2 md:mt-0">*/}
          {/*  <div className="font-bold cursor-pointer flex items-center gap-1">*/}
          {/*    <ArrowLeft2 size="20" color="#212B36" />*/}
          {/*    Trước*/}
          {/*  </div>*/}
          {/*  <div className="font-bold cursor-pointer flex items-center gap-1">*/}
          {/*    Tiếp theo*/}
          {/*    <ArrowRight2 size="20" color="#212B36" />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

        {initValue?.practiceType === "coding" ? (
          <StudyCode
            exercise={defaultJavaExercise}
            course={courseDetail}
            initValue={initValue}
          />
        ) : (
          <>
            {renderLessonBody(currentLesson.type)}

            {!isQuizStarted && (
              <ContentTab
                courseTitle={courseDetail?.title}
                currentLesson={courseDetail}
                lessonId={lessonId as string}
                courseId={courseDetail?.id}
                dataLesson={initValue}
              />
            )}
          </>
        )}
      </div>
      <AIHelperModal open={isAIHelperOpen} setOpen={setIsAIHelperOpen} />
    </div>
  );
}

export default LessonClient;
