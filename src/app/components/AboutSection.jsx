"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row gap-8 ">
        <ul className="list-disc pl-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>Java Script</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>React Js</li>
          <li>Java</li>
          <li>C++</li>
          
        </ul>
        <ul className="list-disc pl-2">
          <li>Angular</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
          
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <ul className="list-disc pl-2">
          <li>Bachelor&apos;s of Computer Scince and Engineering</li>
          <p className="text-[#ADB7BE]">LNCT University</p>
        </ul>
        
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div>
        <ul className="list-disc pl-2">
          <li>Software Developer</li>
          <p className="text-[#ADB7BE]">
            LTIMindtree (April 2024 to current)
          </p>
        </ul>
        <ul className="list-disc pl-2">
          <li>Software Developer</li>
          <p className="text-[#ADB7BE]">Jio Platform Limited(October 2023 to April 2024)</p>
        </ul>
              </div>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m Dev Gupta, a passionate Full Stack Developer at LTIMindtree, building scalable and 
            secure enterprise applications using Java, Spring Boot, Angular, and Node.js.
            I specialize in designing distributed microservices, optimizing backend performance, and 
            automating CI/CD pipelines with Jenkins and Docker.
            Previously at Jio Platforms, I handled backend support and performance tuning for large-scale 
            systems, ensuring 99%+ uptime and smooth production operations.
            I’m an Oracle Certified Java SE 11 Developer who loves crafting clean, 
            test-driven code and exploring modern architectures that make software faster, smarter, and more 
            reliable. For me, development is about solving real-world problems with precision, creativity, and 
            purpose.


          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
