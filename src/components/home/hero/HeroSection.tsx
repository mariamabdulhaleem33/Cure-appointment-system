import React from "react"
import HeroContent from "./HeroContent"

const HeroSection: React.FC = () => {
  return (
    <section className=" flex items-center justify-center min-h-[80vh]">
      {/* HeroContent */}
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <HeroContent />
      </div>
    </section>
  )
}

export default HeroSection
