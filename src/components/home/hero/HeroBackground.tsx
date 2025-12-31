import { heroBackground } from "@/assets";

const HeroBackground: React.FC = () => {
  return (
    <img
      src={heroBackground}
      alt="Hero background"
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-230
        origin/main
        max-w-none
        opacity-70
        pointer-events-none
        -z-20
      "
    />
  );
};

export default HeroBackground;
