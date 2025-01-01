import Link from "next/link"
import BlogPage from "./blog/page";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-[450px] bg-cover bg-center" style={{backgroundImage:"url('/banner.png')"}}>
        <h1 className="text-5xl font-semibold">NEXT JS-15</h1>
        <p className="lg:px-72 py-4 text-lg text-center">Next.js 15 is officially stable and ready for production. This release builds on the updates from both RC1 and RC2. We've focused heavily on stability while adding some exciting updates we think you'll love. Try Next.js 15 today:</p>
        <button className="bg-[#ff3366] text-white px-8 py-4 rounded-full">Explore, Free</button>
      </div>
      <h1>Welcome to My Website</h1>
      <Link href="/blog">Go to Blog</Link>
      <div className="flex flex-col gap-4  m-6 px-10 lg:m-20 py-12 lg:px-20 items-center justify-center  bg-[#f8f8f9]">
        <h2 className="text-4xl font-[600]">Using Next.js 15 feels like a breath of fresh air in modern web development. It's as if all the best practices, performance optimizations, and ease of use have been distilled into one seamless experience. Building applications with Next.js isn’t just about writing code; it’s about creating something that feels intuitive, responsive, and scalable.</h2>
        <h4 className="">Kirti Bansal</h4>
        <p className="">Sr. Product Designer, AdvisorEngine</p>
      </div>


      <div className="flex flex-col pt-20 py-9 gap-4 pl-3 h-[min-450px]">
      <h2 className="text-5xl font-bold py-7">See how the world's smartest teams use Next Js</h2>
      </div>

    <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-7 mx-3 mb-14 text-center items-center">
      <div className="flex flex-col w-full bg-[#2ea3e3] md:w-[48%] lg:w-[31%] float-left  min-h-64 justify-center p-10 md:p-6 text-white gap-3">
      <h3 className="text-4xl">Advisor Engine</h3>
      </div>

      <div className="flex flex-col w-full bg-[#4624e3] md:w-[48%] lg:w-[31%] float-left  min-h-64 justify-center p-10 md:p-6 text-white gap-3">
      <h3 className="text-4xl">Credit SuSSie</h3>
      </div>

      <div className="flex flex-col w-full bg-[#002de8] md:w-[48%] lg:w-[31%] float-left  min-h-64 justify-center p-10 md:p-6 text-white gap-3">
      <h3 className="text-4xl">IBM</h3>
      </div>
    </div>
    <BlogPage/>

    <div className="flex flex-col gap-4 items-center mt-32 justify-center h-[450px] bg-[#5001ab]">
        <h2 className="text-5xl font-semibold text-white lg:px-32 text-center">
        Accelerate your team's collaborative potential with Next.js 15. It’s more than just a framework—Next.js 5</h2>
      </div>
      </>
  );
}
