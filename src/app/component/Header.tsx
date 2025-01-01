import Link from "next/link"
import Image from "next/image"
const Header = () => {
  return (
    <div>
        {/* annoucement bar */}
        <div className="flex h-14 bg-[#5001ab] justify-center items-center gap-3">
          <p className=" text-[#C799F7] align">Freehand is now part of Miro           <span className="text-white underline cursor-pointer">Read the announcement.</span></p>
        </div>
        {/* Nav bar */}
        <div className="flex bg-[#f2f2f3] lg:h-16 lg-gap-7 lg:px-4">
            {/* logo */}
            <Image src={"/logoo.png"} alt={"logo"} width={100} height={200}></Image>
            <ul className="flex gap-2 lg:gap-7 text-xs lg:text-base font-[600] font-sans items-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/company">Company</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <ul className="flex gap-2 lg:gap-7 text-sm lg:text-base font-[600] font-sans items-center ml-auto">
                <li><Link href="#">Sign In</Link></li>
                <li className="bg-[#ff3366] text-white p-2 rounded-full"><Link href="#">Sign Up, free</Link></li>
            </ul> 
        </div>
    </div>
  )
}
export default Header