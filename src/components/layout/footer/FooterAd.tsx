// src/components/layout/footer/FooterAd.tsx
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import { SiGoogleplay } from 'react-icons/si';
import iphoneImage from '../../../assets/iphone-12.png';

interface FooterAdProps {
  className?: string;
}

const FooterAd: React.FC<FooterAdProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`w-full px-4 ${className}`}>
      <div className="mx-auto max-w-[1240px]">
        <div
          className="
            relative w-full overflow-hidden rounded-2xl
            bg-gradient-to-r from-[#6292CF] to-[#4A7DC8]
            border border-[#6292CF]
            px-4 py-6
            shadow-2xl
          "
        >
        

          {/* تأثيرات الخلفية */}
          <div className="absolute inset-0">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/5" />
          </div>

          {/* المحتوى */}
          <div
            className="
              relative z-10
              flex flex-col items-center gap-8 text-center
              md:flex-row md:justify-between md:text-left
            "
          >
            {/* النصوص + الأزرار */}
            <div className="flex max-w-xl flex-col items-center gap-6 md:items-start">

              {/* العنوان */}
              <h1
                className="
                  order-1
                  font-serif text-[28px] leading-none text-white
                  md:order-none md:text-[32px]
                "
              >
                Your Health, One Tap Away
              </h1>

              {/* الوصف */}
              <p
                className="
                  order-2
                  font-montserrat text-sm leading-[140%]
                  text-white
                  md:order-none
                "
              >
                Book appointments, chat with doctors, and manage your health anytime—right
                from your phone. Download the app now and stay connected wherever you are.
              </p>

              {/* الصورة (Mobile بعد الوصف) */}
              <div
                className="
                  order-3
                  relative h-[210px] w-[280px]
                  md:order-none md:hidden
                "
              >
                <img
                  src={iphoneImage}
                  alt="Health App"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* أيقونات المتاجر */}
              <div
                className="
                  order-4
                  flex gap-5
                  md:order-none
                "
              >
                {/* Google Play */}
                <div
                  className="
                    flex h-[55px] w-[160px] items-center gap-2
                    rounded-lg border border-white/20
                    bg-[#05162C] px-4
                  "
                >
                  <SiGoogleplay className="h-[27px] w-[24px] text-white" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Google Play</h3>
                    <p className="text-xs text-white/80">Got it on</p>
                  </div>
                </div>

                {/* App Store */}
                <div
                  className="
                    flex h-[55px] w-[160px] items-center gap-2
                    rounded-lg border border-white/20
                    bg-[#05162C] px-4
                  "
                >
                  <DiApple className="h-8 w-8 text-white" />
                  <div>
                    <h3 className="text-sm font-bold text-white">App Store</h3>
                    <p className="text-xs text-white/80">Download on the</p>
                  </div>
                </div>
              </div>
            </div>

            {/* الصورة (Desktop فقط) */}
            <div
              className="
                relative hidden
                h-[260px] w-[340px]
                md:block
              "
            >
              <img
                src={iphoneImage}
                alt="Health App"
                className="h-full w-full object-contain"
              />

              {/* تأثيرات الصورة */}
              <div
                className="
                  absolute -right-4 -top-4
                  h-32 w-32 rounded-full
                  bg-gradient-to-br from-white/20 to-transparent
                  blur-xl
                "
              />
              <div
                className="
                  absolute -bottom-4 -left-4
                  h-24 w-24 rounded-full
                  bg-gradient-to-tr from-white/10 to-transparent
                  blur-xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAd;