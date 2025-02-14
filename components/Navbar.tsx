import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="absolute w-full flex justify-between px-5">
     <Image src={"/msm.png"} width={100} height={100} alt="logo" />
     <button className="border-2 border-white rounded-md py-2 px-4 font-bold self-center">Contact</button>
    </nav>
  )
}
