"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Job Processing System",
    description:
      "Developed a job processing system with job scheduling, queue management, and worker processing. Technologies Used: Java, Spring Boot, MySQL",
    image: "/images/projects/shopping-website.jpeg",
    gitUrl: "https://github.com/DevGup/job-processing-system",
  },
  {
    id: 2,
    title: "V-FBasket Backend",
    description:
      "Developed backend APIs for product management, authentication, and order processing. Technologies Used: Java, Spring Boot, MySQL",
    image: "/images/projects/V-FBasket-Backend.png",
    gitUrl: "https://github.com/Chandan0080/V-FBasket",
  },
  {
    id: 3,
    title: "Just For Fun",
    description:
      "Interactive web application created for experimentation. Technologies Used: JavaScript, HTML, CSS",
    image: "/images/projects/E-Learning.jpg",
    gitUrl: "https://github.com/DevGup/Some-time-pass-Project",
  },
  {
    id: 4,
    title: "VnFBasket UI",
    description:
      "Responsive frontend UI for e-commerce application. Technologies Used: Angular, JavaScript, HTML, CSS",
    image: "/images/projects/VnFBasketUI.png",
    gitUrl: "https://github.com/Chandan0080/VnFBasketUI",
  },
];

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectSection;