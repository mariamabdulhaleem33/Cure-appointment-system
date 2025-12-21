import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  FooterState,
  FooterLink,
  SocialMedia,
  CompanyInfo,
  AddSocialMediaPayload,
  RemoveSocialMediaPayload
} from '@/components/layout/footer/footer.types';

const initialState: FooterState = {
  companyInfo: {
    name: 'Cure',
    description: 'Cure helps you find trusted doctors,book appointments,and manage your health-quickly and easily.',
    socialMedia: [
      { id: '1', name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com', color: 'hover:text-blue-400' },
      { id: '2', name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com', color: 'hover:text-sky-400' },
      { id: '3', name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com', color: 'hover:text-pink-400' },
      { id: '4', name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com', color: 'hover:text-blue-500' }
    ]
  },
  quickLinks: [
    { id: '1', label: 'Home', path: '/' },
    { id: '2', label: 'Doctors', path: '/doctors' },
    { id: '3', label: 'FAQs', path: '/faqs' },
    { id: '6', label: 'Contact us', path: '/contact' }
  ],
  services: [
    { id: '1', label: 'Help Center', path: '/services/helpCenter' },
    { id: '2', label: 'How it works', path: '/services/howItWorks' },
    { id: '3', label: 'Privacy Policy', path: '/services/privacyPolicy' },
    { id: '4', label: 'Terms & Conditions', path: '/services/termsAndConditions' },
  ],
  isLoading: false,
  error: null
};

export const fetchFooterData = createAsyncThunk(
  'footer/fetchFooterData',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));

      // Return initial state as mock data
      return initialState;
    } catch (error) {
      return rejectWithValue('Failed to fetch footer data');
    }
  }
);

const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    addQuickLink: (state, action: PayloadAction<FooterLink>) => {
      state.quickLinks.push(action.payload);
    },
    removeQuickLink: (state, action: PayloadAction<string>) => {
      state.quickLinks = state.quickLinks.filter(link => link.id !== action.payload);
    },
    addSocialMedia: (state, action: PayloadAction<AddSocialMediaPayload>) => {
      state.companyInfo.socialMedia.push(action.payload.socialMedia);
    },
    removeSocialMedia: (state, action: PayloadAction<RemoveSocialMediaPayload>) => {
      state.companyInfo.socialMedia = state.companyInfo.socialMedia.filter(
        social => social.id !== action.payload.id
      );
    },
    updateSocialMedia: (state, action: PayloadAction<SocialMedia>) => {
      const index = state.companyInfo.socialMedia.findIndex(
        social => social.id === action.payload.id
      );
      if (index !== -1) {
        state.companyInfo.socialMedia[index] = action.payload;
      }
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFooterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companyInfo = action.payload.companyInfo;
        state.quickLinks = action.payload.quickLinks;
        state.services = action.payload.services;
      })
      .addCase(fetchFooterData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export const {
  addQuickLink,
  removeQuickLink,
  addSocialMedia,
  removeSocialMedia,
  updateSocialMedia,
  clearError
} = footerSlice.actions;

export default footerSlice.reducer;
