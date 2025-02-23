import React from 'react'
import Card from '../lib/ui/about/Card'

function page() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-20 m-10">
      <h1 className='text-6xl font-bold text-gray-800 dark:text-white'>About me</h1>
      <Card
        title={"Introduction"}
        description={
          "I'm a self-taught developer passionate about building modern, high-performance applications. I focus on creating fast, optimized projects with clean UI/UX. I'm also exploring AI development as I expand my skill set."
        } 
      />

      <Card
        title={"Experience"}
        description={
          "I have hands-on experience with REST APIs and CRUD operations. My portfolio includes full-stack projects featuring clean UI designs and optimized performance. Most of my work involves Next.js, TypeScript, and Tailwind CSS, with some experience in Node.js for backend development."
        }
      />

      <Card
        title={"Skills"}
        description={
          "Proficient in Next.js, TypeScript, Tailwind CSS, and modern frontend development. Experienced with RESTful APIs, database integration, and state management. Familiar with backend technologies like Node.js and Prisma."
        }
      />

      <Card
        title={"Learning & Future Goals"}
        description={
          "Currently diving deeper into AI development, backend scalability, and advanced database management. My goal is to build AI-driven applications and scalable full-stack solutions."
        }
      />

      <Card
        title={"Contact / Get in Touch"}
        description={
          "I'm always open to new opportunities and collaborations. Feel free to connect with me via email or LinkedIn to discuss projects or ideas!"
        }
      />
    </div>
  );
}

export default page
