import React from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface SkillsChartProps {
  skillsData?: SkillCategory[];
}

const SkillsChart = ({ skillsData = defaultSkillsData }: SkillsChartProps) => {
  return (
    <div className="w-full bg-gray-900 border border-blue-500 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">SKILLS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Skill icons */}
        <div className="flex flex-col space-y-6">
          {skillsData.map((category, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-800 border border-blue-500 rounded-lg flex items-center justify-center mb-2">
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-xs text-white">
                          {skill.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-white text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Skill bars */}
        <div className="flex flex-col space-y-4">
          {skillsData.flatMap((category) =>
            category.skills.map((skill, idx) => (
              <div key={`${category.category}-${idx}`} className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-white">{skill.name}</span>
                  <span className="text-sm text-blue-300">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-gray-800" />
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

const defaultSkillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 98 },
      { name: "SQL", level: 97 },
      { name: "C++", level: 98 },
      { name: "Java", level: 97 },
      { name: "LaTeX", level: 98 },
      { name: "R", level: 97 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      {
        name: "Pandas",
        level: 98,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        level: 97,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      { name: "Scikit-learn", level: 98 },
      { name: "Matplotlib", level: 97 },
      {
        name: "TensorFlow",
        level: 98,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Power BI", level: 98 },
      { name: "Excel", level: 97 },
      { name: "MySQL", level: 98 },
      { name: "PowerPoint", level: 97 },
    ],
  },
  {
    category: "Platforms",
    skills: [
      { name: "PyCharm", level: 98 },
      {
        name: "Jupyter",
        level: 97,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        name: "VS Code",
        level: 98,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "IntelliJ",
        level: 97,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 98 },
      { name: "Stakeholder Management", level: 97 },
      { name: "Rapport Building", level: 98 },
      { name: "Problem Solving", level: 97 },
      { name: "Research", level: 98 },
    ],
  },
];

export default SkillsChart;
