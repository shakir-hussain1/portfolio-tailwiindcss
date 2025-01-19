import React from "react";
import Heading from "./Header";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Todo List App",
    desc: "A TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/p1.jpg",
    tags: ["Node", "Inquirer", "Typescript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A TypeScript based app to track time with an interactive countdown feature.",
    img: "/p2.jpg",
    tags: ["Node", "Inqirer", "Typescript"],
  },
  {
    id: 2,
    title: "Student Management System",
    desc: "A TypeScript based app for student data.",
    img: "/p3.jpg",
    tags: ["Node", "Inquirer", "Typescript"],
  },
  {
    id: 3,
    title: "Currency Converter",
    desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
    img: "/p4.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 4,
    title: "static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/p5.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 5,
    title: "Simple Calculator App",
    desc: "A basic HTML and TypeScript calculator for performing essential arithmetic operations.",
    img: "/p6.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="color text-blue-900 container pt-32">
      <Heading title="My Projects" />
      <div className=" color text-black grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
