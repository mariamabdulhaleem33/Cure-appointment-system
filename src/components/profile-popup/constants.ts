
export const MOBILE_DROPDOWN = {
  width: 428,
  height: 926,
  paddingTop: 32,
  paddingRight: 16,
  paddingBottom: 32,
  paddingLeft: 16,
  gap: 16,
  backgroundColor: "#FFFFFF",
} as const;

export const MOBILE_MENU = {
  width: 396,
  height: 714,
  gap: 8,
} as const;

export const DESKTOP_DROPDOWN = {
  width: 358,
  minHeight: 396,
  padding: 16,
  backgroundColor: "#F5F6F7",
  borderRadius: 20,
} as const;

export const DESKTOP_MENU = {
  gap: 16,
} as const;

export const CLOSE_BUTTON = {
  width: 40,
  height: 40,
  borderRadius: 10,
  padding: 6,
  backgroundColor: "#F5F6F7",
  gap: 8,
} as const;

export const ICON_SIZES = {
  header: { width: 20, height: 20 },
  menu: { width: 24, height: 24 },
  location: { width: 14, height: 14 },
} as const;

export const TYPOGRAPHY = {
  menu: "font-montserrat text-button text-text-secondary font-normal",
  username: "font-georgia text-subheading text-text-secondary font-normal",
  address:
    "font-montserrat text-small-caption text-text-neutral-darker font-normal",
} as const;

