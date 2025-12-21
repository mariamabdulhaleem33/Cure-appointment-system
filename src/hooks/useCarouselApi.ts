import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function useCarouselApi() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      console.log("no api");
      return;
    }

    const updateStats = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    updateStats();

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    api.on("reInit", () => {
      updateStats();
    });
    return () => {
      api.off("select", updateStats);
      api.off("reInit", updateStats);
    };
  }, [api]);

  return {
    api,
    current,
    count,
    setApi,
  };
}
