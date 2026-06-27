import { motion } from "motion/react";
import {
  BookOpen,
  GraduationCap,
  Users,
  Target,
  Award,
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

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

        <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="text-center"
>
  <img
    src="/vijay.png"
    alt="Managing Director"
    className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
  />

  <h3 className="text-2xl font-bold text-blue-900 mt-6">
    Sri Bokinala Vijay Kumar
  </h3>

 <p className="text-lg text-orange-500 font-semibold mt-2">
    Managing Director
  </p>
  <p className="text-gray-500 text-sm mt-1">
    Sathvika Coaching Academy
  </p>
</motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Message from the Managing Director
            </h3>

            <p className="text-gray-700 leading-8 mb-5">
             At Sathvika Coaching Academy, we believe that every student has the
  potential to achieve excellence with the right guidance, dedication,
  and consistent effort. Our goal is to inspire confidence, build strong
  fundamentals, and prepare students to face every academic challenge
  with determination.
            </p>

            <p className="text-gray-700 leading-8">
              With a team of highly experienced faculty members, modern teaching
  methodologies, regular assessments, and individual mentoring, we are
  committed to helping every student excel in IIT-JEE, NEET, Foundation,
  Olympiads, and Board Examinations. I warmly welcome you to the
  Sathvika family and wish you every success in your academic journey.
            </p>
          </motion.div>

        </div>

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
