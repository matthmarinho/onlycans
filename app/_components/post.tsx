import Image from "next/image"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  BookmarkIcon,
  EllipsisIcon,
  HeartIcon,
  MessageCircleIcon,
  SendIcon,
} from "lucide-react"

interface PorstProps {
  feed: {
    name: string
    imageUrl: string
    likes: number
    comments: number
    shares: number
    caption: string
    handle: string
  }
}

const Post = ({ feed }: PorstProps) => {
  return (
    <div className="border-t border-solid pt-5">
      <div className="space-y-3 px-4 pb-3">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src={feed.imageUrl} />
              {/* <AvatarFallback>{}</AvatarFallback> */}
            </Avatar>
            <div>
              <p className="font-semibold">{feed.name}</p>
              <p className="text-sm text-gray-400">{feed.handle}</p>
            </div>
          </div>
          <Button size="sm" variant="invisible">
            <EllipsisIcon />
          </Button>
        </div>

        <p>{feed.caption}</p>
      </div>

      <div className="relative h-[210px] w-full">
        <Image
          alt={feed.name}
          src={feed.imageUrl}
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
              <p className="text-sm">{feed.likes}</p>
            </div>
            <div className="flex flex-row items-center">
              <Button size="icon" variant="invisible">
                <MessageCircleIcon />
              </Button>
              <p className="text-sm">{feed.comments}</p>
            </div>
            <div className="flex flex-row items-center">
              <Button size="icon" variant="invisible">
                <SendIcon />
              </Button>
              <p className="text-sm">{feed.shares}</p>
            </div>
          </div>
          <div>
            <Button size="icon" variant="invisible">
              <BookmarkIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
