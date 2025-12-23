export type UserProfile = {
  name: string;
  address: string;
  avatarUrl: string;
};

export type DropdownProps = {
  user: UserProfile;
  onLogout: () => void;
  onClose?: () => void;
};

export type DropdownItemProps = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

