import React from "react";
import "./index.css";
import { Banner } from "@/components/home/Banner";
import CallToActionSection from "@/components/home/CallToActionSection";
import CourseTabHomeComponent from "@/components/home/CourseTabHome";
import HomepageFeedback from "@/components/home/HomepageFeedback";
import IntroSection from "@/components/home/IntroSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

function HomePage() {
  return (
    <div>
      <Banner />
      <IntroSection />
      <WhyChooseUsSection />
      <CourseTabHomeComponent />
      <HomepageFeedback />
      <CallToActionSection />
    </div>
  );
}

export default HomePage;
