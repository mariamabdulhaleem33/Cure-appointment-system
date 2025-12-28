import Description from "@/components/ui/Description"
import Heading from "@/components/ui/Heading"
import LocationButton from "../find-care/LocationButton"
import DoctorCard from "@/components/ui/DoctorCard"
import test from "@/assets/test.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useMediaQuery } from "@/hooks/useMatchMediaQuery"
import { useTopRatedDoctors } from "@/hooks/useTopRatedDoctors"
export default function TopRatedDoctors() {
  // const doctors = [
  //   {
  //     id: 1,
  //     name: "Robert Johnson",
  //     email: "doctor1@example.com",
  //     mobile: null,
  //     profile_photo: test,
  //     specialty: {
  //       id: 1,
  //       name: "General ",
  //       image: "gp.png",
  //     },
  //     license_number: "LIC-10001",
  //     bio: "Experienced cardiologist with 10 years of practice.",
  //     session_price: 150,
  //     clinic_address: "Clinic 1, Cairo",
  //     location: {
  //       latitude: 30.0444,
  //       longitude: 31.2357,
  //     },
  //     experience_years: 10,
  //   },
  //   {
  //     id: 2,
  //     name: "Robert Johnson",
  //     email: "doctor2@example.com",
  //     mobile: null,
  //     profile_photo: test,
  //     specialty: {
  //       id: 2,
  //       name: "Cardiologist",
  //       image: "cardio.png",
  //     },
  //     license_number: "LIC-10002",
  //     bio: "Dermatologist specializing in skin treatments.",
  //     session_price: 120,
  //     clinic_address: "Clinic 2, Cairo",
  //     location: {
  //       latitude: 30.045,
  //       longitude: 31.236,
  //     },
  //     experience_years: 8,
  //   },
  //   {
  //     id: 3,
  //     name: "Robert Johnson",
  //     email: "doctor3@example.com",
  //     mobile: null,
  //     profile_photo: test,
  //     specialty: {
  //       id: 3,
  //       name: "Dermatologist",
  //       image: "derma.png",
  //     },
  //     license_number: "LIC-10003",
  //     bio: "General surgeon with 15 years of experience.",
  //     session_price: 200,
  //     clinic_address: "Clinic 3, Cairo",
  //     location: {
  //       latitude: 30.046,
  //       longitude: 31.237,
  //     },
  //     experience_years: 15,
  //   },
  //   {
  //     id: 4,
  //     name: "Robert Johnson",
  //     email: "doctor3@example.com",
  //     mobile: null,
  //     profile_photo: test,
  //     specialty: {
  //       id: 3,
  //       name: "Dermatologist",
  //       image: "derma.png",
  //     },
  //     license_number: "LIC-10003",
  //     bio: "General surgeon with 15 years of experience.",
  //     session_price: 200,
  //     clinic_address: "Clinic 3, Cairo",
  //     location: {
  //       latitude: 30.046,
  //       longitude: 31.237,
  //     },
  //     experience_years: 15,
  //   },
  //   {
  //     id: 6,
  //     name: "Robert Johnson",
  //     email: "doctor3@example.com",
  //     mobile: null,
  //     profile_photo: test,
  //     specialty: {
  //       id: 3,
  //       name: "Dermatologist",
  //       image: "derma.png",
  //     },
  //     license_number: "LIC-10003",
  //     bio: "General surgeon with 15 years of experience.",
  //     session_price: 200,
  //     clinic_address: "Clinic 3, Cairo",
  //     location: {
  //       latitude: 30.046,
  //       longitude: 31.237,
  //     },
  //     experience_years: 15,
  //   },
  //   {
  //     id: 7,
  //     name: "Robert Johnson",
  //     email: "doctor3@example.com",
  //     mobile: null,
  //     profile_photo: test,
  //     specialty: {
  //       id: 3,
  //       name: "Dermatologist",
  //       image: "derma.png",
  //     },
  //     license_number: "LIC-10003",
  //     bio: "General surgeon with 15 years of experience.",
  //     session_price: 200,
  //     clinic_address: "Clinic 3, Cairo",
  //     location: {
  //       latitude: 30.046,
  //       longitude: 31.237,
  //     },
  //     experience_years: 15,
  //   },
  //   {
  //     id: 8,
  //     name: "Robert Johnson",
  //     email: "doctor3@example.com",
  //     mobile: null,
  //     profile_photo: test,
  //     specialty: {
  //       id: 3,
  //       name: "Dermatologist",
  //       image: "derma.png",
  //     },
  //     license_number: "LIC-10003",
  //     bio: "General surgeon with 15 years of experience.",
  //     session_price: 200,
  //     clinic_address: "Clinic 3, Cairo",
  //     location: {
  //       latitude: 30.046,
  //       longitude: 31.237,
  //     },
  //     experience_years: 15,
  //   },
  //   {
  //     id: 9,
  //     name: "Robert Johnson",
  //     email: "doctor3@example.com",
  //     mobile: null,
  //     profile_photo: test,
  //     specialty: {
  //       id: 3,
  //       name: "Dermatologist",
  //       image: "derma.png",
  //     },
  //     license_number: "LIC-10003",
  //     bio: "General surgeon with 15 years of experience.",
  //     session_price: 200,
  //     clinic_address: "Clinic 3, Cairo",
  //     location: {
  //       latitude: 30.046,
  //       longitude: 31.237,
  //     },
  //     experience_years: 15,
  //   },
  //   {
  //     id: 10,
  //     name: "Robert Johnson",
  //     email: "doctor3@example.com",
  //     mobile: null,
  //     profile_photo: test,
  //     specialty: {
  //       id: 3,
  //       name: "Dermatologist",
  //       image: "derma.png",
  //     },
  //     license_number: "LIC-10003",
  //     bio: "General surgeon with 15 years of experience.",
  //     session_price: 200,
  //     clinic_address: "Clinic 3, Cairo",
  //     location: {
  //       latitude: 30.046,
  //       longitude: 31.237,
  //     },
  //     experience_years: 15,
  //   },
  // ]
  const { data: doctors } = useTopRatedDoctors()
  console.log(doctors)
  const { isLargeScreen } = useMediaQuery("(min-width: 640px)")

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
                  imageUrl={test}
                  name={doc.user.name}
                  specialty={doc.specialization}
                  rate={3}
                  startTime={doc.availability_slots[0].from}
                  endTime={doc.availability_slots[0].to}
                  forBooking={true}
                  price={Number(doc.session_price)}
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
