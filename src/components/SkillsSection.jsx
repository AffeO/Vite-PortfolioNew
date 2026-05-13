import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
    //Frontend
    {name: "HTML5/CSS3", level: "Stark", category: "frontend"},
    {name: "Javascript", level: "Stark", category: "frontend"},
    {name: "React", level: "Stark", category: "frontend"},
    {name: "Tailwind CSS", level: "Van", category: "frontend"},
    {name: "Typescript", level: "Stark", category: "frontend"},

    //Backend
    {name: "Node.js", level: "Van", category: "backend"},
    {name: "C# .NET", level: "Stark", category: "backend"},
    {name: "REST APIs", level: "Stark", category: "backend"},
    {name: "SQL", level: "Stark", category: "backend"},
    {name: "Entity Framework Core", level: "Stark", category: "backend"},
    {name: "ASP.NET Core", level: "Stark", category: "backend"},
    {name: "Java", level: "Van", category: "backend"},


    //Tools
    {name: "Git/Github", level: "Stark", category: "tools"},
    {name: "Figma", level: "Bekant", category: "tools"},
    {name: "Azure DevOps", level: "Stark", category: "tools"},
    {name: "Azure Functions", level: "Van", category: "tools"},
    {name: "Visual Studio", level: "Stark", category: "tools"},
    {name: "NUnit/Moq", level: "Van", category: "tools"},

];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all")

    const filterdSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory
);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
     <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Mina <span className="text-primary"> Färdigheter</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                <button 
                 key={key}
                 onClick={() => setActiveCategory(category)}
                 className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forefround hover:bd-secondary"
                 )}
                >
                 {category}
                 </button>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterdSkills.map((skill, key) =>(
                <div className="flex justify-between items-center">
  <h3 className="font-semibold">{skill.name}</h3>
  <span
    className={cn(
      "px-2 py-1 text-xs rounded-full",
      skill.level === "Stark" && "bg-green-100 text-green-700",
      skill.level === "Van" && "bg-yellow-100 text-yellow-700",
      skill.level === "Bekant" && "bg-gray-100 text-gray-700"
    )}
  >
    {skill.level}
  </span>
</div>

            ))}
        </div>
     </div>
    </section>
}; 