import Header from "./_components/header"
import { feedOptions } from "./_constants/feedOptions"
import Post from "./_components/post"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex gap-4 overflow-auto p-4 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-[70px] flex-col items-center justify-center space-y-2">
          <div className="relative h-[70px] w-[70px]">
            <Image
              alt={"milena"}
              fill
              className="rounded-full object-cover"
              src={"/milena.jpg"}
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <p className="w-full truncate text-center text-sm">You</p>
          </div>
        </div>
        {feedOptions.map((feed) => (
          <div
            key={feed.name}
            className="flex w-[70px] flex-col items-center justify-center space-y-2"
          >
            <div className="relative h-[70px] w-[70px]">
              <Image
                alt={feed.name}
                fill
                className="rounded-full object-cover"
                src={feed.imageUrl}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <p className="w-full truncate text-center text-sm">
                {feed.handle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="py-2 pb-14">
        {feedOptions.map((feed) => (
          <Post key={feed.name} feed={feed} />
        ))}
      </div>

      {/* <div className="space-y-2 border-y border-solid px-4 py-4">
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
      </div> */}

      {/* <div className="py-2">
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
      </div> */}
    </div>
  )
}
