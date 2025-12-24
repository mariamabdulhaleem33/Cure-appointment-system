const Location = () => {
  return (
    <>
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
    </>
  );
};

export default Location;
