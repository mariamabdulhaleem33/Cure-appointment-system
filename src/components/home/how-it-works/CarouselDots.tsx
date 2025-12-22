import CarouselDot from "./CarouselDot";
import type { CarouselApi } from "@/components/ui/carousel";
export type CarouselDotsProps = {
  count: number;
  current: number;
  api: CarouselApi | undefined;
};

export default function CarouselDots({
  current,
  count,
  api,
}: CarouselDotsProps) {
  return (
    <div className="flex gap-2 md:hidden mt-4 justify-center">
      {Array.from({ length: count }).map((_, index) => (
        <CarouselDot
          key={index}
          index={index}
          current={current}
          count={count}
          api={api}
        />
      ))}
    </div>
  );
}
