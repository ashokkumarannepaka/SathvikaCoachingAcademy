import { motion } from "motion/react";
import {
  BookOpen,
  GraduationCap,
  Users,
  Target,
  Award,
  CheckCircle2,
} from "lucide-react";

const faculty = [
  {
    name: "Doddi Harsha Vardhan",
    designation: "Head of Department",
    subject: "Physics",
    experience: "12+ Years Experience",
    image: "/staff/Harsha.png",
  },
  {
    name: "Kurakula Jacob",
    designation: "Head of Department",
    subject: "English",
    experience: "14+ Years Experience",
    image: "/staff/Jacob.png",
  },
  {
    name: "Kolliparla Mohan Babu",
    designation: "Head of Department",
    subject: "Mathematics",
    experience: "16+ Years Experience",
    image: "/staff/Mohan.png",
  },
  {
    name: "Devasetty Jyothsna",
    designation: "Head of Department",
    subject: "Social Sciences",
    experience: "13+ Years Experience",
    image: "/staff/Jyotsna.png",
  },
  {
    name: "Midthuri Ravi",
    designation: "Head of Department",
    subject: "Biology",
    experience: "15+ Years Experience",
    image: "/staff/Ravi.png",
  },
  {
    name: "Baddula Saidulu",
    designation: "Head of Department",
    subject: "Chemistry",
    experience: "11+ Years Experience",
    image: "/staff/Saidulu.png",
  },
];

const highlights = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: "Experienced Faculty",
    description:
      "Highly qualified faculty members with extensive teaching experience.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    title: "Concept-Based Learning",
    description:
      "Strong focus on conceptual understanding and problem-solving skills.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Personal Mentoring",
    description:
      "Individual attention with continuous progress monitoring.",
  },
  {
    icon: <Target className="w-8 h-8 text-purple-600" />,
    title: "Result-Oriented Training",
    description:
      "Focused preparation for IIT-JEE, NEET, Olympiads and Board Exams.",
  },
];

const advantages = [
  {
    title: "Structured Study Plan",
    description: "Comprehensive curriculum designed by IITians and top educators",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Daily Practice Problems",
    description: "Carefully curated problems to strengthen concepts daily",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Doubt Solving Sessions",
    description: "Dedicated doubt clearing sessions with expert faculty",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Mock Tests",
    description: "Regular full-length mock tests simulating actual exams",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Revision Strategy",
    description: "Systematic revision schedules for better retention",
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Exam Readiness Program",
    description: "Final preparation phase with tips and strategies",
    color: "from-indigo-500 to-indigo-600"
  },
];

export function AcademyAdvantages() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            About Sathvika Coaching Academy
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students with quality education, experienced faculty,
            and result-oriented coaching for IIT-JEE, NEET, Foundation,
            Olympiads and Board Examinations.
          </p>
        </motion.div>  

       <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
  Meet Our Expert Faculty
</h2>

<p className="text-center text-gray-600 mb-12">
  Our experienced faculty members are committed to nurturing academic excellence and guiding every student toward success.
</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
  {faculty.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
    >
  <div className="flex justify-center pt-6">
  <img
    src={member.image}
    alt={member.name}
    className="w-40 h-40 rounded-xl object-cover border-4 border-blue-100 shadow-md"
  />
</div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-blue-900 mt-5">
          {member.name}
        </h3>

  <span className="inline-block mt-3 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
  {member.designation}
</span>

        <p className="text-gray-700 mt-3">
          <strong>Subject:</strong> {member.subject}
        </p>

        <p className="text-gray-600 mt-2">
          <strong>Experience:</strong> {member.experience}
        </p>
      </div>
    </motion.div>
  ))}
</div>

        
{/* Academy Advantages */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <h2 className="text-4xl font-bold text-blue-900 mb-4">
    Our Academic Excellence
  </h2>

  <p className="text-xl text-gray-600">
    Our systematic approach to excellence
  </p>
</motion.div>

        <div className="relative">
  {/* Timeline Line */}
  <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden md:block"></div>
          

  {/* Timeline Items */}
  <div className="space-y-12">
    {advantages.map((advantage, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`flex items-center gap-8 ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Content */}
        <div
          className={`flex-1 ${
            index % 2 === 0 ? "md:text-right" : "md:text-left"
          }`}
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div
              className="flex items-start gap-4 md:justify-end"
              style={{
                flexDirection:
                  index % 2 === 0 ? "row-reverse" : "row",
              }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center flex-shrink-0`}
              >
<CheckCircle2 className="w-6 h-6 text-white" />
              </div>

              <div
                className={
                  index % 2 === 0 ? "text-right" : "text-left"
                }
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>

                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Dot */}
        <div className="hidden md:block">
          <div
            className={`w-6 h-6 bg-gradient-to-br ${advantage.color} rounded-full border-4 border-white shadow-lg`}
          ></div>
        </div>

        {/* Spacer */}
        <div className="hidden md:block flex-1"></div>
      </motion.div>
    ))}
  </div>
</div>
<div className="mt-20"></div>
{/* Why Choose Sathvika */}

<h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
  Why Choose Sathvika Coaching Academy?
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
  {highlights.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center"
    >
      <div className="flex justify-center mb-4">
        {item.icon}
      </div>

      <h3 className="text-xl font-bold mb-3">
        {item.title}
      </h3>

      <p className="text-gray-600">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>
              </div>
    </section>
  );
}
