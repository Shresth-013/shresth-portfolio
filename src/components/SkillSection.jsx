import { useState } from "react";
import { cn } from "@/lib/utils";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiNextdotjs, SiNodedotjs, SiFigma, SiGithub, SiOpenai } from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";


const skills = [
    // Development
    { name: "HTML/CSS", category: "Development", icon: (<span className="flex items-center gap-1"> <SiHtml5 className="text-orange-500 w-5 h-5" /> <SiCss3 className="text-blue-500 w-5 h-5" /></span>) },
    { name: "JavaScript", category: "Development", icon: <SiJavascript className="text-yellow-400 w-5 h-5" /> },
    { name: "React", category: "Development", icon: <SiReact className="text-blue-400 w-5 h-5" /> },
    { name: "Generative AI", category: "Development", icon: <AiOutlineRobot className="text-purple-400 w-5 h-5" /> },
    { name: "TypeScript", category: "Development", icon: <SiTypescript className="text-blue-500 w-5 h-5" /> },
    { name: "Tailwind CSS", category: "Development", icon: <SiTailwindcss className="text-cyan-400 w-5 h-5" /> },
    { name: "Next.js", category: "Development", icon: <SiNextdotjs style={{ fill: 'grey' }} className="dark:fill-white w-5 h-5" /> },
    { name: "Node.js", category: "Development", icon: <SiNodedotjs className="text-green-500 w-5 h-5" /> },

    // Tools
    { name: "Git/GitHub", category: "tools", icon: <SiGithub className="text-gray-300 w-5 h-5" /> },
    { name: "Figma", category: "tools", icon: <SiFigma className="text-pink-400 w-5 h-5" /> },

];
const categories = ["all", "Development", "tools"];


export const SkillSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory

    );

    return (<section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-forefround hover:bd-secondary"
                        )}
                    >
                        {category} </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-2 rounded-lg shadow-xs card-hover ">
                        <div className="text-right mt-1 mb-4">
                            <span className="text-sm text-muted-foreground">
                                {skill.icon}
                            </span>
                        </div>
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-base">
                                {skill.name} </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};