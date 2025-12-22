import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselDots from "./CarouselDots";
import Heading from "../../ui/Heading";
import SearchDoctor from "./SearchDoctor";
import PaymentCard from "./PaymentCard";
import DateAndTime from "./DateAndTime";
import useCarouselApi from "@/hooks/useCarouselApi";
export default function HowItWorks() {
  const { api, current, count, setApi } = useCarouselApi();
  // const [api, setApi] = useState<CarouselApi>();
  // const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (!api) {
  //     console.log("no api");
  //     return;
  //   }

  //   const updateStats = () => {
  //     setCount(api.scrollSnapList().length);
  //     setCurrent(api.selectedScrollSnap());
  //   };

  //   updateStats();

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap());
  //   });

  //   api.on("reInit", () => {
  //     updateStats();
  //   });
  //   return () => {
  //     api.off("select", updateStats);
  //     api.off("reInit", updateStats);
  //   };
  // }, [api]);

  return (
    <section className="home-container flex flex-col sm:items-center sm:justify-center px-2 sm:px-0 mt-[60px] sm:mt-[200px] w-full">
      <Heading tag={"h2"} className="sm:text-[32px] text-[20px] text-center">
        How it works
      </Heading>
      {/* only in large screen */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 md:mt-[84px]">
        <SearchDoctor />
        <DateAndTime />
        <PaymentCard />
      </div>

      <div className="md:hidden w-full mt-8 md:mt-[84px]">
        <Carousel setApi={setApi} className="w-full" opts={{ watchDrag: true }}>
          <CarouselContent>
            <CarouselItem className="basis-full">
              <SearchDoctor />
            </CarouselItem>
            <CarouselItem className="basis-full">
              <DateAndTime />
            </CarouselItem>
            <CarouselItem className="basis-full">
              <PaymentCard />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <CarouselDots count={count} current={current} api={api} />
      </div>
    </section>
  );
}
