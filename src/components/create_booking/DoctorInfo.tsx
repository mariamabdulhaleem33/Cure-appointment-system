import {
  Award,
  Heart,
  MessageCircleMore,
  MessageSquareText,
  Star,
  UsersRound,
} from "lucide-react";
import doc from "../../assets/doc.jpg";
import { Link } from "react-router-dom";
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
  const details = [
    { icon: <UsersRound size={25} />, number: "2,000+", title: "patient" },
    { icon: <Award size={25} />, number: "10+", title: "experience" },
    { icon: <Star size={25} />, number: "4.5", title: "rating" },
    {
      icon: <MessageSquareText size={25} />,
      number: "1872",
      title: "reviews",
    },
  ];
  return (
    <section className="w-full md:w-[45%] lg:w-[30%] h-[753px] bg-[#F5F6F7] rounded-[19px] px-4 pt-8 pb-6 flex flex-col justify-between">
      {/* header */}
      <div className="flex items-start justify-between">
        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white">
          <Heart size={24} />
        </span>
        <div className="flex flex-col items-center justify-center">
          <img
            src={doc}
            alt="doctor image"
            className="w-[113px] h-[113px] rounded-full"
          />
          <h2 className="font-normal text-[20px]">{doctorInfo.name}</h2>
          <p className="text-[14px] text-[#404448]">
            {doctorInfo.specialty.name}
          </p>
        </div>
        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white">
          <MessageCircleMore size={24} />
        </span>
      </div>
      {/* details */}
      <div className="flex items-center justify-between">
        {details.map((detail) => {
          return (
            <div
              key={detail.title}
              className="flex flex-col items-center justify-center"
            >
              <span className="flex items-center justify-center w-[56px] h-[56px] bg-white rounded-full">
                {detail.icon}
              </span>
              <h3 className="font-semibold text-[14px]">{detail.number}</h3>
              <p className="font-normal text-[14px]">{detail.title}</p>
            </div>
          );
        })}
      </div>

      {/* description */}
      <div>
        <h2 className="text-[20px] mb-1">About me</h2>
        <p className="text-[14px] text-[#404448]">
          {doctorInfo.bio}
          <Link to={"#"} className="text-[#145DB8]">
            Read more
          </Link>
        </p>
      </div>
      {/* location */}
      <div>
        <h2 className="text-[20px] mb-3">Location</h2>
        <div className="w-full h-[201px] rounded-[20px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27372.886477926775!2d31.251773810926572!3d30.9534324987143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7a2eaad480117%3A0x283ca478d01a11ff!2z2LPZhdmG2YjYr9iMINmF2K_ZitmG2Kkg2LPZhdmG2YjYr9iMINiz2YXZhtmI2K_YjCDZhdit2KfZgdi42Kkg2KfZhNi62LHYqNmK2KkgNjc4MzUwNA!5e0!3m2!1sar!2seg!4v1766132442433!5m2!1sar!2seg"
            width="100%"
            height="210"
            style={{ border: 0, borderRadius: "20px" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DoctorInfo;
