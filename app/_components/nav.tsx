import Link from "next/link"
import { Button } from "./ui/button"
import {
  CircleUserRoundIcon,
  HouseIcon,
  MessageSquareTextIcon,
  SearchIcon,
  SquarePlusIcon,
} from "lucide-react"

const Nav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-solid bg-background">
      <div className="flex items-center justify-between px-6 py-2">
        <Link href="/">
          <Button size="icon" variant="invisible">
            <HouseIcon />
          </Button>
        </Link>
        <Link href="/">
          <Button size="icon" variant="invisible">
            <SearchIcon />
          </Button>
        </Link>
        <Link href="/">
          <Button size="icon" variant="invisible">
            <SquarePlusIcon />
          </Button>
        </Link>
        <Link href="/">
          <Button size="icon" variant="invisible">
            <MessageSquareTextIcon />
          </Button>
        </Link>
        <Link href="/">
          <Button size="icon" variant="invisible">
            <CircleUserRoundIcon />
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
