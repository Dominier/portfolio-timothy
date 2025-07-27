import Link from "next/link";

export default function WebPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8 lg:p-12 selection:text-yellow-400 selection:bg-[#76624a]">
      
      {/* Card */}
      <div className="max-w-4xl mx-auto rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
        
        {/* Page Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Frontend Engineering: A Comprehensive Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Frontend engineering focuses on building the <strong className="font-semibold text-gray-800">user interface</strong> and <strong className="font-semibold text-gray-800">user experience</strong> of websites and web applications. It&apos;s the part you directly interact with, from buttons and forms to layouts and animations. This guide will explore the key aspects of this dynamic field.
        </p>

        <div className="border-t my-12"></div>

        {/* Core Technologies Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Core Technologies
        </h2>
        <p className="mt-4 mb-6 text-gray-700 text-base md:text-lg">
          At its heart, frontend development relies on three fundamental languages:
        </p>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 text-base md:text-lg">
          <li>
            <strong className="font-semibold text-gray-900">HTML (HyperText Markup Language):</strong> Provides the <strong className="font-semibold">structure</strong> and content of a web page. Think of it as the skeleton.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">CSS (Cascading Style Sheets):</strong> Handles the <strong className="font-semibold">presentation</strong> and styling of the HTML. This is where you define colors, fonts, layouts, and responsiveness.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">JavaScript (JS):</strong> Adds <strong className="font-semibold">interactivity</strong> and dynamic behavior to the web page. It allows you to manipulate the HTML and CSS, handle events, and make asynchronous requests.
          </li>
        </ul>
        <p className="mt-6 text-gray-700 text-base md:text-lg">
            These three work together to create a functional and visually appealing web experience.
        </p>

        <div className="border-t my-12"></div>
        
        {/* Essential Skills Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Essential Skills
        </h2>
        <p className="mt-4 mb-6 text-gray-700 text-base md:text-lg">
            Beyond the core technologies, successful frontend engineers possess a range of skills:
        </p>
        <ul className="list-disc pl-5 space-y-4 text-gray-700 text-base md:text-lg">
          <li><strong>Responsive Design:</strong> Creating websites that adapt seamlessly to different screen sizes and devices.</li>
          <li><strong>UI/UX Principles:</strong> Understanding user interface and user experience principles to design intuitive interfaces.</li>
          <li><strong>Frontend Frameworks and Libraries:</strong> Using tools like React, Angular, or Vue.js to build complex applications efficiently.</li>
          <li><strong>Performance Optimization:</strong> Ensuring the website loads quickly and runs smoothly.</li>
          <li><strong>Browser Developer Tools:</strong> Proficiently using browser tools for debugging, inspecting, and analysis.</li>
          <li><strong>Accessibility (A11y):</strong> Building websites that are usable by people with disabilities.</li>
        </ul>

        <div className="border-t my-12"></div>

        {/* Workflow Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          The Frontend Development Workflow
        </h2>
        <p className="mt-4 mb-6 text-gray-700 text-base md:text-lg">
          A typical frontend development workflow might involve these steps:
        </p>
        <ol className="list-decimal pl-5 space-y-4 text-gray-700 text-base md:text-lg">
          <li><strong>Understanding Requirements:</strong> Collaborating with designers, product managers, and backend developers.</li>
          <li><strong>Planning and Architecture:</strong> Designing the structure and organization of the frontend codebase.</li>
          <li><strong>Building the UI:</strong> Writing HTML, CSS, and JavaScript code to create the user interface.</li>
          <li><strong>Adding Functionality:</strong> Implementing the interactive elements and business logic.</li>
          <li><strong>Deployment:</strong> Deploying the frontend application to a web server.</li>
          <li><strong>Maintenance and Updates:</strong> Addressing bugs, adding new features, and keeping the codebase up to date.</li>
        </ol>
        
        <div className="border-t my-12"></div>
        
        {/* Getting Started Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Getting Started
        </h2>
        <p className="mt-4 mb-6 text-gray-700 text-base md:text-lg">
          If you&apos;re interested in becoming a frontend engineer, here are some steps you can take:
        </p>
        <ol className="list-decimal pl-5 space-y-4 text-gray-700 text-base md:text-lg">
            <li><strong>Learn the Basics:</strong> Start with HTML, CSS, and JavaScript. Numerous online resources, tutorials, and courses are available.</li>
            <li><strong>Practice Regularly:</strong> Build small projects to apply what you learn and solidify your understanding.</li>
            <li><strong>Explore Frameworks and Libraries:</strong> Once you have a good grasp of the fundamentals, start learning a popular framework like React, Angular, or Vue.js.</li>
            <li><strong>Contribute to Open Source:</strong> Contributing to open source projects is a great way to learn from experienced developers and build your portfolio.</li>
            <li><strong>Build a Portfolio:</strong> Showcase your projects and skills through a personal website or online portfolio.</li>
            <li><strong>Network:</strong> Connect with other developers through online communities, meetups, and conferences.</li>
        </ol>
        <p className="mt-8 text-gray-700 text-base md:text-lg">
          Frontend engineering is a rewarding and challenging field that offers many opportunities. By mastering the core technologies, developing essential skills, and staying curious, you can build compelling and engaging web experiences for users around the world.
        </p>

        <div className="border-t my-12"></div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Helpful Resources
        </h2>
        <p className="mt-4 mb-6 text-gray-700 text-base md:text-lg">
          Here are some of the best places to learn and reference information on your journey:
        </p>

        <ul className="list-disc pl-5 space-y-4 text-gray-700 text-base md:text-lg">
          <li>
            <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-800 hover:underline">
              MDN Web Docs
            </a>
            : The ultimate resource for HTML, CSS, and JavaScript. Consider this your primary reference.
          </li>
          <li>
            <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-800 hover:underline">
              freeCodeCamp
            </a>
            : Offers excellent, free, and interactive certifications covering everything from responsive design to advanced JS concepts.
          </li>
          <li>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-800 hover:underline">
              The Official React Docs
            </a>
            : The new documentation is fantastic, with interactive examples and clear tutorials. The best place to learn React.
          </li>
        </ul>
      </div>
    </main>
  );
}
