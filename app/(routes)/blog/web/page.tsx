import Link from "next/link";

export default function WebPage() {
  return (
    <div className="p-16 selection:text-yellow-500 selection:bg-[#76624a]">
      <div className="text-md ml-5 mr-5 justify-center">
        <h1 className="text-2xl font-bold">This is a learning guide for those interested in web development</h1>
        <p className="pt-3">
          I have received many questions about how to get started with web development, so I decided to write this guide.
          Those who reached out have experience with software engineering, so this guide is tailored for both beginners and those with a background in software engineering.
          This is my first time writing a blog post. If there are any feedback or suggestions, please let me know!
        </p>
        <h2 className="text-2xl pt-10">Core Foundations</h2>
        <p className="pt-3">
            Your first step is to master the three fundamental languages of the web. Those with a background in software engineering may find JavaScript familiar, but don&apos;t underestimate CSS—it&apos;s often the biggest hurdle for those used to pure logic.
        </p>
        <p className="pt-3">
            HTML (The Structure): This is the skeleton of a webpage. It&apos;s not a programming language but a markup language. Focus on semantic HTML. Using the correct tags for the right purpose (e.g., &lt;nav&gt;, &lt;main&gt;, &lt;button&gt;). This is crucial for accessibility and SEO.
        </p>
        <p className="pt-3">
            CSS (The Style): This is how you make a webpage look good. It controls colors, fonts, layouts, and animations. This will feel very different from backend development.

Key Concepts: The box model, specificity, Flexbox, and CSS Grid. Flexbox and Grid are non-negotiable for modern layout design.
        </p>
        <p className="pt-3">
            JavaScript (The Interactivity): This is where your backend skills shine. JavaScript is the programming language of the browser. You&apos;ll use it to handle user interactions, manipulate the page, and communicate with your backend.
            Key Concepts: The DOM (Document Object Model) is the most important concept. It&apos;s the API for the HTML document. You also need to master asynchronous JavaScript (async/await, Promises) for fetching data.
        </p>
        <h2 className="text-2xl pt-10">Frameworks and Libraries</h2>
        <p className="pt-3">
            Once you have a solid grasp of the basics, you&apos;ll need to learn a modern framework. These tools provide structure, manage application &quot;state&quot; (data), and make building complex UIs much more efficient.
            Start with React. It has the largest market share, a massive community, and tons of resources. Your understanding of functions and data flow from the backend will map nicely to React&apos;s component-based model.
        </p>
        <h2 className="text-2xl pt-10">Resources</h2>
        <p className="pt-3">
            <Link href="https://developer.mozilla.org/" className="text-blue-800 hover:underline">MDN Web Docs</Link> is the absolute best reference for HTML, CSS, and JavaScript. It&apos;s your bible.
        </p>
        <p>
            <Link href="https://www.freecodecamp.org" className="text-blue-800 hover:underline">freeCodeCamp</Link> has excellent, interactive certifications on &quot;Responsive Web Design&quot; and &quot;JavaScript Algorithms and Data Structures.&quot;
        </p>
        <p>
            <Link href="https://react.dev" className="text-blue-800 hover:underline">The Official React Docs</Link> is fantastic, with interactive examples and tutorials. Start here.
        </p>
      </div>
    </div>
  )
}
