import React from "react";
import HeroSection from "./HeroSection";
import ProjectsGallery from "./ProjectsGallery";
import SkillsChart from "./SkillsChart";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar } from "./ui/avatar";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-10 lg:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            ABOUT ME
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-blue-900/30 backdrop-blur-sm">
                <img
                  src="https://i.imgur.com/NkPwcDf.jpg"
                  alt="Md. Jamil Khan"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-6 text-blue-300">
                I’m Jamil, an aspiring Data Scientist and Machine Learning
                enthusiast with a strong foundation in computer science and a
                passion for solving real-world problems through data. I have
                contributed to impactful projects such as heart disease
                prediction, sentiment analysis, and brain tumor classification,
                with some work published in peer-reviewed journals. I have
                worked as a Research and Interview Leader at biggani.org,
                contributing to science communication by creating
                research-driven content and conducting interviews with
                scientists. My technical toolkit includes Python, C, C++, Java,
                SQL, TensorFlow, Scikit-learn, Pandas, NumPy, Matplotlib, Power
                BI, MySQL, Excel, and development environments like Jupyter
                Notebook, PyCharm, and VS Code. I’m skilled in problem solving,
                feature engineering, data visualization, communication, and
                teamwork, with a growing interest in big data analysis and image
                processing. I am also the author of “Learn C Programming: Part
                One” and co-author of a research paper published in CMC –
                Computers, Materials & Continua (Q2, SCI, Scopus-indexed).
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  className="border-green-500 hover:bg-green-900/30 text-green-400"
                >
                  DATA SCIENCE
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 hover:bg-green-900/30 text-green-400"
                >
                  MACHINE LEARNING
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 hover:bg-green-900/30 text-green-400"
                >
                  RESEARCH
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 hover:bg-green-900/30 text-green-400"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/189NEy0DEJ4P2tTSuvhE1GJ8rL4qLc0he/view?usp=drivesdk",
                      "_blank",
                    )
                  }
                >
                  PDF RESUME
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 md:px-10 lg:px-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            SERVICES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <ServiceCard
              icon="⚙️"
              title="Data Analysis"
              description="Transforming raw data into actionable insights"
            />
            <ServiceCard
              icon="🧠"
              title="Deep Learning Models"
              description="Building advanced neural networks for complex problems"
            />
            <ServiceCard
              icon="📝"
              title="Research Paper Writing"
              description="Publishing academic research in reputable journals"
            />
            <ServiceCard
              icon="🤖"
              title="AI/ML Model Development"
              description="Creating custom machine learning solutions"
            />
            <ServiceCard
              icon="📊"
              title="Sentiment & Image Analysis"
              description="Extracting insights from text and visual data"
            />
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="education" className="py-20 px-4 md:px-10 lg:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                EDUCATION
              </h2>
              <Card className="bg-gray-900 border-blue-500 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Metropolitan University, Sylhet, Bangladesh
                  </h3>
                  <p className="text-blue-400 mb-2">
                    B.Sc. in Computer Science and Engineering
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                    May 2021 – April 2025
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                EXPERIENCE
              </h2>
              <Card className="bg-gray-900 border-blue-500 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Interview Leader & Research Contributor
                  </h3>
                  <a
                    href="https://biggani.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 mb-2 hover:text-blue-300 underline cursor-pointer"
                  >
                    biggani.org
                  </a>
                  <p className="text-sm text-gray-300 mb-4">
                    May 2024 – April 2025
                  </p>
                  <p className="text-sm">
                    Conducted interviews with scientists, contributed to science
                    outreach and communication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-10 lg:px-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              <SkillCategory
                title="Languages"
                skills={["Python", "SQL", "C++", "Java", "LaTeX", "R"]}
              />
              <SkillCategory
                title="Frameworks"
                skills={[
                  "Pandas",
                  "NumPy",
                  "Scikit-learn",
                  "Matplotlib",
                  "TensorFlow",
                ]}
              />
              <SkillCategory
                title="Tools"
                skills={["Power BI", "Excel", "MySQL", "PowerPoint"]}
              />
              <SkillCategory
                title="Platforms"
                skills={["PyCharm", "Jupyter", "VS Code", "IntelliJ"]}
              />
              <SkillCategory
                title="Soft Skills"
                skills={[
                  "Communication",
                  "Stakeholder Management",
                  "Rapport Building",
                ]}
              />
            </div>
            <div>
              <SkillsChart />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-4 md:px-10 lg:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <ProjectsGallery />
        </div>
      </section>

      {/* Publications Section */}
      <section
        id="publications"
        className="py-20 px-4 md:px-10 lg:px-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            PUBLICATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#050e2d] border-blue-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Learn C Programming: Part One
                </h3>
                <p className="text-blue-400 mb-2">Eliva Press</p>
                <p className="text-sm text-gray-300 mb-4">
                  ISBN: 978-9994983711
                </p>
                <a
                  href="https://www.elivapress.com/en/book/book-5799919985/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  View Book
                </a>
              </CardContent>
            </Card>
            <Card className="bg-[#050e2d] border-blue-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Harmonization of Heart Disease Dataset...
                </h3>
                <p className="text-blue-400 mb-2">
                  CMC Journal (Q2, SCI, Scopus)
                </p>
                <Badge className="mb-4 bg-blue-900">Published Research</Badge>
                <a
                  href="https://www.techscience.com/cmc/online/detail/22560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  View Paper
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-10 lg:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            CONTACT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 mr-4 text-blue-400" />
                <a
                  href="mailto:jamil.mu.cse@gmail.com"
                  className="hover:text-blue-400"
                >
                  jamil.mu.cse@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 mr-4 text-blue-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 mr-4 text-blue-400" />
                <a href="tel:+8801760413449" className="hover:text-blue-400">
                  +880-1760413449
                </a>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/mdjamilkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-900 rounded-full hover:bg-blue-800"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/jamilEmon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-900 rounded-full hover:bg-blue-800"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Contact via WhatsApp</h3>
              <div className="flex justify-center">
                <img
                  src="https://i.imgur.com/pCIEmNi.png"
                  alt="WhatsApp QR Code"
                  className="w-48 h-48 rounded-lg border border-blue-500"
                />
              </div>
              <p className="text-sm text-gray-300 mt-4">
                Scan the QR code to start a WhatsApp conversation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Variations */}
      <section className="py-10 px-4 md:px-10 lg:px-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">
            COLOR VARIATIONS
          </h2>
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-32 bg-black rounded"></div>
            <div className="w-16 h-32 bg-blue-900 rounded"></div>
            <div className="w-16 h-32 bg-white rounded"></div>
            <div className="w-16 h-32 bg-gray-800 rounded"></div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 px-4 md:px-10 lg:px-20 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-wider">
          THANK YOU
        </h2>
        <p className="mt-10 text-xl"></p>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-10 lg:px-20 bg-gray-900 border-t border-blue-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center font-bold text-lg mr-2">
              JK
            </div>
            <span>Md. Jamil Khan</span>
          </div>
          <div>
            <p className="text-sm text-gray-400">© 2025 | Md. Jamil Khan</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-blue-900/30 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-blue-400">{title}</h3>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="text-sm">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
