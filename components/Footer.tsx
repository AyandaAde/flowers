import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <div className="text-center pb-8 text-white">
        <Separator className="mb-8" />
        <p>© Made by <Link href={"https://ayanda.vercel.app/"} className="underline">Ayanda Kinyambo</Link></p>
    </div>
  )
}