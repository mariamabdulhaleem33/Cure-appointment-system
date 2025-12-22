import Heading from "@/components/ui/Heading"
import { star } from "@/assets"
import { reviews } from "@/assets"
import Description from "@/components/ui/Description"
export default function Reviews() {
  return (
    <section className="home-container mb-25 bg-white flex flex-col items-center justify-center text-center">
      <Heading tag={"h2"}>
        Reviews <br />
        That Speak for Themselves
      </Heading>
      <div className="flex gap-1 mt-6 sm:mt-11.5 mb-4 sm:mb-8 ">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <Description tag={"h3"} className="w-92 sm:mb[56px] mb[24px]">
        “Quick and easy booking! I found a great dermatologist near me and
        booked an appointment in just a few minutes.”
      </Description>
      <div className="mt-9 md:mt-14">
        <img src={reviews} alt="reviews" />
      </div>
    </section>
  )
}
