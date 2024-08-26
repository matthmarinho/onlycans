import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { BellIcon } from "lucide-react"

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between px-5 py-2">
      {/* <h1 className="pl-2">OnlyCans</h1> */}
      <Link href="/">
        <Image
          alt="FSW Barber"
          src="/logo_onlycans.png"
          height={18}
          width={120}
        />
      </Link>
      <Button size="icon" variant="invisible">
        <BellIcon />
      </Button>
    </div>
  )
}

export default Header
