import Description from "@/components/ui/Description"
import Heading from "@/components/ui/Heading"
import LocationButton from "../find-care/LocationButton"
import DoctorCard from "@/components/ui/DoctorCard"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useMediaQuery } from "@/hooks/useMatchMediaQuery"
import { useTopRatedDoctors } from "@/hooks/useTopRatedDoctors"
export default function TopRatedDoctors() {
  const { data: doctors } = useTopRatedDoctors()
  const { isLargeScreen } = useMediaQuery("(min-width: 640px)")
  console.log(doctors)
  return (
    <section className="home-container flex flex-col items-center lg:block overflow-hidden">
      <div className="lg:flex items-center justify-between">
        <div className=" max-w-172.5 text-center lg:text-start mb-6 sm:mb-12 mt-2 sm:mt-4">
          <Heading tag="h2">Top-Rated Doctors Chosen by Patients</Heading>
          <Description tag="p">
            Explore our highest-rated doctors, trusted by real patients for
            their expertise, care, and service. Book with confidence today.
          </Description>
        </div>
        <LocationButton
          className="hidden lg:inline-flex px-7.5"
          text="View All"
        />
      </div>
      <div className="w-full mt-8 md:mt-21=">
        <Carousel
          className="w-full"
          opts={{ watchDrag: true, dragFree: isLargeScreen ? true : false }}
        >
          <CarouselContent>
            {doctors?.map((doc, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-auto">
                <DoctorCard
                  key={doc.id}
                  imageUrl={doc.profile_photo}
                  name={doc.name}
                  specialty={doc.specialization}
                  rate={doc.average_rating}
                  startTime={doc.availability_slots[0].from}
                  endTime={doc.availability_slots[0].to}
                  forBooking={true}
                  price={doc.session_price}
                  address={doc.clinic_location.address}
                  userId={doc.id}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <LocationButton
        className="inline-flex lg:hidden px-7.5 mt-4"
        text="View All"
      />
    </section>
  )
}
