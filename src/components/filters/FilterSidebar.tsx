import { motion, AnimatePresence } from "framer-motion"

interface Props {
  open: boolean
  onClose: () => void
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

type Filters = {
  availableDate: "today" | "tomorrow" | null
  consultationType: "in_clinic" | "home_visit" | null
  gender: string[]
  sort: "recommended" | "price_low" | "price_high" | null
}

export default function FilterSidebar({ open, onClose, filters, setFilters }: Props) {
  // Handlers
  const toggleGender = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      gender: prev.gender.includes(value)
        ? prev.gender.filter((g) => g !== value)
        : [...prev.gender, value],
    }))
  }

  const toggleAvailableDate = (value: "today" | "tomorrow") => {
    setFilters((prev) => ({
      ...prev,
      availableDate: prev.availableDate === value ? null : value,
    }))
  }

  const toggleConsultationType = (value: "in_clinic" | "home_visit") => {
    setFilters((prev) => ({
      ...prev,
      consultationType: prev.consultationType === value ? null : value,
    }))
  }

  const toggleSort = (value: "recommended" | "price_low" | "price_high") => {
    setFilters((prev) => ({
      ...prev,
      sort: prev.sort === value ? null : value,
    }))
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="
            absolute
            left-0
            top-full
            mt-2
            w-[156px]
            max-h-[771px]
            bg-white
            p-3
            flex
            flex-col
            gap-4
            z-50
          "
        >
          {/* Available Date */}
          <div
            className="flex flex-col"
            style={{ width: 107, height: 93, gap: 16, opacity: 1 }}
          >
            <span className="text-xs font-medium text-gray-600 mb-2">
              Available Date
            </span>

            <label className="flex items-center gap-2 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={filters.availableDate === "today"}
                onChange={() => toggleAvailableDate("today")}
              />
              Today
            </label>

            <label className="flex items-center gap-2 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={filters.availableDate === "tomorrow"}
                onChange={() => toggleAvailableDate("tomorrow")}
              />
              Tomorrow
            </label>
          </div>

          {/* Consultation Type */}
          <div
            className="flex flex-col"
            style={{ width: 127, height: 93, gap: 16, opacity: 1 }}
          >
            <span className="text-xs font-medium text-gray-600 mb-2">
              Consultation Type
            </span>

            <label className="flex items-center gap-2 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={filters.consultationType === "in_clinic"}
                onChange={() => toggleConsultationType("in_clinic")}
              />
              In-clinic
            </label>

            <label className="flex items-center gap-2 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={filters.consultationType === "home_visit"}
                onChange={() => toggleConsultationType("home_visit")}
              />
              Home Visit
            </label>
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-gray-600">
              Gender
            </span>

            <label className="flex items-center gap-2 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={filters.gender.includes("male")}
                onChange={() => toggleGender("male")}
              />
              Male
            </label>

            <label className="flex items-center gap-2 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={filters.gender.includes("female")}
                onChange={() => toggleGender("female")}
              />
              Female
            </label>
          </div>

          {/* Sort */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-gray-600">
              Sort by price
            </span>

            <label className="flex items-center gap-2 text-xs cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                checked={filters.sort === "recommended"}
                onChange={() => toggleSort("recommended")}
              />
              Most recommended
            </label>

            <label className="flex items-center gap-2 text-xs cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                checked={filters.sort === "price_low"}
                onChange={() => toggleSort("price_low")}
              />
              Price Low to High
            </label>

            <label className="flex items-center gap-2 text-xs cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                checked={filters.sort === "price_high"}
                onChange={() => toggleSort("price_high")}
              />
              Price High to Low
            </label>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}