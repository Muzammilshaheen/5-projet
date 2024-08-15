import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div><figure className="md:flex bg-red-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/rehan.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Maria Ghafoor – Science Teacher

Maria Ghafoor is a passionate and dedicated science teacher with a strong commitment to fostering a love for learning in her students. With a background in [insert specific field of science, e.g., Biology, Chemistry, Physics], she brings a wealth of knowledge and experience to the classroom. Maria excels at making complex scientific concepts accessible and engaging through hands-on experiments, interactive lessons, and the integration of technology.

She emphasizes critical thinking, problem-solving, and the application of scientific principles to real-world scenarios, encouraging students to explore and question the world around them. Her teaching philosophy is rooted in creating an inclusive and supportive learning environment where every student feels valued and motivated to achieve their best.

”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Maria Ghafoor
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Science Teacher
      </div>
    </figcaption>
  </div>
</figure>
</div>
         </main>
  );
}
