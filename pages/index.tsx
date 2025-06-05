import ButtonLink from "components/atoms/Button/ButtonLink";
import LineDivider from "components/atoms/LineDivider";
import FeatureCard from "components/molecules/Card/FeatureCard";
import PageSentence from "components/molecules/PageSentence";
import PricingCard from "components/molecules/Card/PricingCard";
import ProjectCard from "components/molecules/Card/ProjectCard";
import SectionSentence from "components/molecules/SectionSentence";
import LogoList from "components/organisms/LogoList";
import TestimonialList from "components/organisms/TestimonialList";
import PageTemplate from "components/templates/PageTemplate";
import Image from "next/image";
import React from "react";
import { FiSettings, FiClock, FiMonitor } from "react-icons/fi";
const Home = () => {
  return (
    <>
      <PageTemplate title="Home - DjokiCoding">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Don't Stress About IT Tasks, DjokiCoding is Here to Help!"
              description="We prioritize speed, ensuring clients don't wait. We'll deliver your work as quickly as possible, even by the end of the day, all while maintaining our high quality standards."
              badge="Ready to Assist You"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Send Quote" href="/quote" />
            <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Expert in Coding & IT Solutions"
              description="We provide expert-level coding and IT solutions tailored to your needs."
              icon={<FiMonitor />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Custom Projects | General Tasks Made Easy"
              description="Simplify your projects and tasks with our custom solutions and tools."
              icon={<FiSettings />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Real-time Quiz Assistance"
              description="Get instant help and support for your quizzes in real-time."
              icon={<FiClock />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-3/4 h-[500px] relative" data-aos="fade-right">
            <Image
              src={"/images/innovation.png"}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Bringing Your Unique Vision to Life: Our Custom Project Approach"
              paragraph="We specialize in crafting bespoke digital solutions that align perfectly with your unique requirements. From concept to launch, we meticulously plan, design, and develop every custom project with passion and precision, ensuring it exceeds your expectations."
              badge="PROJECT INNOVATION"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="We're a team of designers, engineers and analysts"
                paragraph="Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results."
                badge="OUR TEAM"
              />
              <ButtonLink
                value="See Our Teams"
                href="/teams"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={"/images/team-illustration.svg"}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="We have completed many amazing projects that you will not believe"
              badge="PROJECTS"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="The Desktop App Landing Page"
                description="A landing page for desktop app"
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="The Mobile App Landing Page"
                description="A landing page for mobile app"
                bottomSquareSize="big"
              />
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  );
};

export default Home;
