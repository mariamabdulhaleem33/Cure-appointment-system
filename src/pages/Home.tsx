import FindCare from "@/components/home/find-care/FindCare";
import HeroSection from "@/components/home/hero/HeroSection";
import HowItWorks from "@/components/home/how-it-works/HowItWorks";
import Reviews from "@/components/home/reviews/Reviews";
import TopRatedDoctors from "@/components/home/top-rated/TopRatedDoctors";

export default function Home() {
  return (
    <main>
      <div className="circle">
        <HeroSection />
        <HowItWorks />
      </div>
      <FindCare />
      <TopRatedDoctors />
      <Reviews />
    </main>
  );
}
