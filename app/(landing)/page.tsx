import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-16 selection:text-yellow-500 selection:bg-[#76624a]">
      <div className="text-md ml-5 mr-5 justify-center">
        <h1 className="text-2xl">Hello! I am Timothy (Feel free to call me Tim)</h1>
        <p className="pt-3">
          I am a software engineering student at the <Link href="https://uci.edu/" className="text-blue-800 hover:underline">University of California, Irvine.</Link> I 
          have strong web development skills, but my passion lies in backend engineering.
          I originally transferred from De Anza College with an Associate&apos;s Degree in Computer Science and Mathematics.
          You might find me at your local cafe or library studying or working on a project.
          Feel free to reach out to me if you have any questions or just want to chat! 
        </p>
        <p className="pt-3">
          Always open to new opporunities and challenges. Feel free to contact me at my <Link href="mailto: tleprojectcs@gmail.com" className="text-blue-800 hover:underline">email.</Link>
        </p>
        <p className="pt-3">
          I like to take photos, write code, eat, drink coffee & matcha, and go to the gym in my free time. I will be making a <Link href="./blog" className="text-blue-800 hover:underline">blog</Link> in the future where I share my
          life and career experiences. Stay tuned!
        </p>
      </div>
      
      <div className="pt-12 ml-5 mr-5 space-y-5">
        <h1 className="text-2xl">Experience</h1>
        <div className="flex justify-between">
          <span>Software Engineering Intern at Uber</span>
          <span>Jun 2025 to Sep 2025</span>
        </div>
        <div className="flex justify-between">
          <span>Software Engineering Intern at Uber</span>
          <span>Jun 2024 to Sep 2024</span>
        </div>
        <div className="flex justify-between">
          <span>Undergraduate Researcher at UC Berkeley</span>
          <span>Aug 2023 to Present</span>
        </div>
        <div className="flex justify-between">
          <span>Software Engineering Intern at Open Energy Dashboard</span>
          <span>Nov 2023 to Dec 2023</span>
        </div>
        <div className="flex justify-between">
          <span>President at Google Developer Student Club</span>
          <span>Aug 2023 to Jun 2024</span>
        </div>
        <div className="flex justify-between">
          <span>Software Engineering Intern at Refer Me</span>
          <span>May 2023 to Aug 2023</span>
        </div>
      </div>

      <div className="pt-12 ml-5 mr-5 space-y-5">
        <h1 className="text-2xl">Education & Organizations</h1>
        <div className="flex justify-between">
          <span>University of California, Irvine</span>
          <span>Sep 2024 to Present</span>
        </div>
        <div className="flex justify-between">
          <span>De Anza College</span>
          <span>Sep 2022 to Jun 2024</span>
        </div>
        <div className="flex justify-between">
          <span>SHPE Member</span>
          <span>Oct 2024 to Present</span>
        </div>
        <div className="flex justify-between">
          <span>CodePath - Advanced Technical Interview Prep</span>
          <span>Issued Aug 2024</span>
        </div>
        <div className="flex justify-between">
          <span>Computing Talent Initative</span>
          <span>Mar 2023 to Dec 2023</span>
        </div>
      </div>

    </div>
  )
}
