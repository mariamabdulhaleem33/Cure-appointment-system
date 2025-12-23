import React, { useCallback } from "react"
import { Link, NavLink } from "react-router-dom"
import { useFooter } from "./useFooter"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaBuilding,
  FaHeadphones,
  FaHeartbeat,
  FaHeart,
} from "react-icons/fa"
import { MdHealthAndSafety } from "react-icons/md"

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FaFacebookF,
  Linkedin: FaLinkedinIn,
  YouTube: FaYoutube,
  WhatsApp: FaWhatsapp,
  Mail: FaEnvelope,
  Phone: FaPhone,
  MapPin: FaMapMarkerAlt,
  ExternalLink: FaExternalLinkAlt,
  Building: FaBuilding,
  Headphones: FaHeadphones,
  HeartPulse: FaHeartbeat,
  Heart: FaHeart,
  Health: MdHealthAndSafety,
}

const Footer: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { companyInfo, quickLinks, services, currentYear } = useFooter()

  const renderIcon = useCallback((iconName: string, className = "") => {
    const Icon = iconComponents[iconName]
    return Icon ? <Icon className={className} /> : null
  }, [])

  const contactInfo = {
    phone: "+1 (555) 123-4567",
    email: "support@cure.com",
    address: "123 Medical Street, Health City, HC 12345",
  }

  const updatedSocialMedia = companyInfo.socialMedia
    .filter(s => s.name !== 'Twitter' && s.name !== 'Instagram');

  const additionalSocialMedia = [
    {
      id: "youtube",
      name: "YouTube",
      url: "https://youtube.com/c/yourchannel",
      icon: "YouTube",
      color: "#FF0000",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      url: "https://wa.me/15551234567",
      icon: "WhatsApp",
      color: "#25D366",
    },
  ]

  const allSocialMedia = [...updatedSocialMedia, ...additionalSocialMedia]

  return (
    <footer className={`w-full bg-[#05162C] text-white font-serif ${className}`}>
      {/* القسم العلوي - للشاشات الصغيرة فقط العنوان والوصف */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-6 sm:py-8 lg:py-12">
        {/* للشاشات الصغيرة والمتوسطة: فقط العنوان والوصف */}
        <div className="lg:hidden">
          {/* العنوان والأيقونة يبقون على اليسار */}
          <div className="flex items-center gap-2 mb-3">
            {/* Icon - حجم محدد للشاشات الصغيرة */}
            <div className="w-8 h-8 shrink-0">
              {renderIcon('HeartPulse', 'w-full h-full')}
            </div>
            {/* Title - حجم محدد للشاشات الصغيرة */}
            <Link 
              to="/" 
              className="text-xl font-bold hover:text-blue-400 transition whitespace-nowrap"
            >
              {companyInfo.name}
            </Link>
          </div>
          
          {/* الوصف فقط في المنتصف */}
          <p className="text-xs opacity-80 leading-relaxed text-center mx-auto max-w-[293px]">
            {companyInfo.description}
          </p>
        </div>

        {/* للشاشات الكبيرة: التخطيط الكامل */}
        <div className="hidden lg:grid grid-cols-4 gap-40">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0">
                {renderIcon("HeartPulse", "w-full h-full")}
              </div>
              <Link
                to="/"
                className="text-4xl font-bold hover:text-blue-400 transition"
              >
                {companyInfo.name}
              </Link>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {companyInfo.description}
            </p>

            <div className="flex items-center gap-3">
              <span className="text-sm opacity-80">Follow us:</span>
              <div className="flex gap-3">
                {allSocialMedia.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-80 hover:opacity-100 transform hover:-translate-y-1 transition"
                    style={{ color: s.color }}
                  >
                    {renderIcon(s.icon, "w-5 h-5")}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm transition ${
                        isActive
                          ? "opacity-100 font-medium"
                          : "opacity-80 hover:opacity-100"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <NavLink
                    to={service.path}
                    className={({ isActive }) =>
                      `text-sm transition ${
                        isActive
                          ? "opacity-100 font-medium"
                          : "opacity-80 hover:opacity-100"
                      }`
                    }
                  >
                    {service.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-white/10">
                  {renderIcon("Phone", "w-5 h-5")}
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm opacity-80 hover:opacity-100"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-white/10">
                  {renderIcon("Mail", "w-5 h-5")}
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm opacity-80 hover:opacity-100"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-white/10">
                  {renderIcon("MapPin", "w-5 h-5")}
                </div>
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm opacity-80">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* القسم السفلي */}
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12 lg:px-0">
          {/* للشاشات الصغيرة والمتوسطة */}
          <div className="lg:hidden flex justify-between items-center">
            {/* على اليسار: حقوق النشر */}
            <div className="text-xs">
              <span className="font-bold">{companyInfo.name}</span> - All rights reserved
            </div>
            
            {/* على اليمين: أيقونات السوشيال ميديا */}
            <div className="flex gap-3">
              {allSocialMedia.map(s => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transform hover:-translate-y-1 transition"
                  style={{ color: s.color }}
                >
                  {renderIcon(s.icon, 'w-4 h-4')}
                </a>
              ))}
            </div>
          </div>

          {/* للشاشات الكبيرة */}
          <div className="hidden lg:flex flex-row justify-between items-center gap-3 text-sm opacity-100">
            <p className="text-sm text-left">© {currentYear} {companyInfo.name}. All rights reserved.</p>
            <nav className="flex gap-6">
              <NavLink 
                to="/services/termsAndConditions" 
                className="text-sm hover:opacity-100 whitespace-nowrap"
              >
                Terms & Conditions
              </NavLink>
              <span className="font-bold">|</span>
              <NavLink 
                to="/services/privacyPolicy" 
                className="text-sm hover:opacity-100 whitespace-nowrap"
              >
                Privacy Policy
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
