import { createContext, useContext, useState, type ReactNode } from "react";

interface ProfileImageContextType {
  selectedFile: File | null;
  preview: string | null;
  setImage: (file: File | null) => void;
  clearImage: () => void;
}

const ProfileImageContext = createContext<ProfileImageContextType | undefined>(
  undefined
);

export const ProfileImageProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const setImage = (file: File | null) => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    if (file) {
      const newPreview = URL.createObjectURL(file);
      setSelectedFile(file);
      setPreview(newPreview);
    } else {
      setSelectedFile(null);
      setPreview(null);
    }
  };

  const clearImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <ProfileImageContext.Provider
      value={{ selectedFile, preview, setImage, clearImage }}
    >
      {children}
    </ProfileImageContext.Provider>
  );
};

export const useProfileImage = () => {
  const context = useContext(ProfileImageContext);
  if (!context) {
    throw new Error(
      "useProfileImage must be used within a ProfileImageProvider"
    );
  }
  return context;
};
