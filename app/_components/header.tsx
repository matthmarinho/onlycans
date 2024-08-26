import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { BellIcon } from "lucide-react"

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between p-2">
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
