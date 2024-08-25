import Image from "next/image"
import {
  BookmarkIcon,
  CircleUserRoundIcon,
  EllipsisIcon,
  HeartIcon,
  HouseIcon,
  MessageCircleIcon,
  SearchIcon,
  SendIcon,
  SquarePlayIcon,
  SquarePlusIcon,
} from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar"
import { Card, CardContent } from "@/app/_components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div>
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
        <div>
          <Button size="icon" variant="invisible">
            <HeartIcon />
          </Button>
          <Button size="icon" variant="invisible">
            <MessageCircleIcon />
          </Button>
        </div>
      </div>

      <div className="py-2">
        <div className="flex flex-row items-center justify-between px-4 pb-2">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-7 w-7">
              <AvatarImage src="/milena.jpg" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <p className="text-sm">Milena Letícia</p>
          </div>
          <Button size="icon" variant="invisible">
            <EllipsisIcon />
          </Button>
        </div>

        <div className="relative h-[469px] w-full">
          <Image
            alt="milena2"
            src="/milena2.png"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1">
              <div className="flex flex-row items-center">
                <Button size="icon" variant="invisible">
                  <HeartIcon />
                </Button>
                <p className="text-sm">666</p>
              </div>
              <div className="flex flex-row items-center">
                <Button size="icon" variant="invisible">
                  <MessageCircleIcon />
                </Button>
                <p className="text-sm">138</p>
              </div>
              <div className="flex flex-row items-center">
                <Button size="icon" variant="invisible">
                  <SendIcon />
                </Button>
                <p className="text-sm">69</p>
              </div>
            </div>
            <div>
              <Button size="icon" variant="invisible">
                <BookmarkIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-1 px-4">
          <div>
            <p className="text-sm">
              <span className="font-semibold">Milena Letícia&nbsp;</span>
              Viva cada momento como se fosse único. 🌟 Aproveitando cada
              segundo e criando memórias inesquecíveis! ✨
            </p>
          </div>
          <div className="text-sm text-yellow-500">
            <a href="#">#Gratidão&nbsp;</a>
            <a href="#">#VidaBemVivida&nbsp;</a>
            <a href="#">#Momentos</a>
          </div>
          <div>
            <a href="#" className="text-sm text-gray-400">
              View all comments
            </a>
          </div>
          <div>
            <span className="text-[12px] text-gray-400">4 days ago</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 border-y border-solid px-4 py-4">
        <div className="flex flex-row items-center justify-between">
          <p className="text-sm font-semibold">Suggested for you</p>
          <a href="#" className="text-sm font-semibold text-yellow-500">
            See all
          </a>
        </div>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          <Card className="min-w-[200px] rounded-2xl">
            <CardContent className="p-3">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="relative h-[140px] w-[140px]">
                  <Image
                    alt={"milena"}
                    fill
                    className="rounded-full object-cover"
                    src={"/milena.jpg"}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-sm font-semibold">Milena Letícia</h3>
                  <p className="text-sm text-gray-400">Popular</p>
                </div>
                <Button size="sm" className="w-full" asChild>
                  <Link href="#">Follow</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="min-w-[200px] rounded-2xl">
            <CardContent className="p-3">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="relative h-[140px] w-[140px]">
                  <Image
                    alt={"milena"}
                    fill
                    className="rounded-full object-cover"
                    src={"/milena.jpg"}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-sm font-semibold">Milena Letícia</h3>
                  <p className="text-sm text-gray-400">Popular</p>
                </div>
                <Button size="sm" className="w-full" asChild>
                  <Link href="#">Follow</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="min-w-[200px] rounded-2xl">
            <CardContent className="p-3">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="relative h-[140px] w-[140px]">
                  <Image
                    alt={"milena"}
                    fill
                    className="rounded-full object-cover"
                    src={"/milena.jpg"}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-sm font-semibold">Milena Letícia</h3>
                  <p className="text-sm text-gray-400">Popular</p>
                </div>
                <Button size="sm" className="w-full" asChild>
                  <Link href="#">Follow</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="py-2">
        <div className="flex flex-row items-center justify-between px-4 pb-2">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-7 w-7">
              <AvatarImage src="/milena.jpg" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <p className="text-sm">Milena Letícia</p>
          </div>
          <Button size="icon" variant="invisible">
            <EllipsisIcon />
          </Button>
        </div>

        <div className="relative h-[469px] w-full">
          <Image
            alt="milena2"
            src="/milena2.png"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1">
              <div className="flex flex-row items-center">
                <Button size="icon" variant="invisible">
                  <HeartIcon />
                </Button>
                <p className="text-sm">666</p>
              </div>
              <div className="flex flex-row items-center">
                <Button size="icon" variant="invisible">
                  <MessageCircleIcon />
                </Button>
                <p className="text-sm">138</p>
              </div>
              <div className="flex flex-row items-center">
                <Button size="icon" variant="invisible">
                  <SendIcon />
                </Button>
                <p className="text-sm">69</p>
              </div>
            </div>
            <div>
              <Button size="icon" variant="invisible">
                <BookmarkIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-1 px-4">
          <div>
            <p className="text-sm">
              <span className="font-semibold">Milena Letícia&nbsp;</span>
              Viva cada momento como se fosse único. 🌟 Aproveitando cada
              segundo e criando memórias inesquecíveis! ✨
            </p>
          </div>
          <div className="text-sm text-yellow-500">
            <a href="#">#Gratidão&nbsp;</a>
            <a href="#">#VidaBemVivida&nbsp;</a>
            <a href="#">#Momentos</a>
          </div>
          <div>
            <a href="#" className="text-sm text-gray-400">
              View all comments
            </a>
          </div>
          <div>
            <span className="text-[12px] text-gray-400">4 days ago</span>
          </div>
        </div>
      </div>

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
              <SquarePlayIcon />
            </Button>
          </Link>
          <Link href="/">
            <Button size="icon" variant="invisible">
              <CircleUserRoundIcon />
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
