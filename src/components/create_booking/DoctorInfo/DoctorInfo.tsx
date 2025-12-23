import Location from "./Location";
import Description from "./Description";
import Details from "./Details";
import Header from "./Header";

const DoctorInfo = () => {
  const doctorInfo = {
    id: 1,
    name: "Doctor Ahmed",
    email: "doctor1@example.com",
    mobile: null,
    profile_photo:
      "profile-photos/C6VShUgbsDtHdhtlV5VkYJdupCO83g25K0HDlahM.jpg",
    specialty: {
      id: 1,
      name: "General Practitioner",
      image: "gp.png",
    },
    license_number: "LIC-10001",
    bio: "Experienced cardiologist with 10 years of practice.",
    session_price: 150,
    clinic_address: "Clinic 1, Cairo",
    location: {
      latitude: 30.0444,
      longitude: 31.2357,
    },
    experience_years: 10,
  };
  return (
    <section className="w-full md:w-[45%] lg:w-[37%] h-[753px] bg-[#F5F6F7] rounded-[19px] px-5 pt-8 pb-6 flex flex-col justify-between">
      {/* header */}
      <Header doctorInfo={doctorInfo} />
      {/* details */}
      <Details />
      {/* description */}
      <Description bio={doctorInfo.bio} />
      {/* location */}
      <Location />
    </section>
  );
};

export default DoctorInfo;
