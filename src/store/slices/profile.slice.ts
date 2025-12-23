import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  previewImage: string | null;
  selectedFile: File | null;
}

const initialState: ProfileState = {
  previewImage: null,
  selectedFile: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileImage: (
      state,
      action: PayloadAction<{ file: File; preview: string }>
    ) => {
      state.selectedFile = action.payload.file;
      state.previewImage = action.payload.preview;
    },
    clearProfileImage: (state) => {
      state.selectedFile = null;
      state.previewImage = null;
    },
  },
});

export const { setProfileImage, clearProfileImage } = profileSlice.actions;
export default profileSlice.reducer;
