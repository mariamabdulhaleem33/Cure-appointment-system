import type { CarouselDotsProps } from "./CarouselDots"

type CarouselDotProps = CarouselDotsProps & {
  index: number
}
export default function CarouselDot({ current, index, api }: CarouselDotProps) {
  // console.log(index)
  return (
    <span
      onClick={() => api?.scrollTo(index)}
      className={`${
        current === index ? "bg-[#145DB8]" : "bg-[#99A2AB]"
      } w-[10px] h-[10px] rounded-3xl`}
    ></span>
  )
}
