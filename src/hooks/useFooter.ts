import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import type { RootState, AppDispatch } from '@/store/index';
import {
  addQuickLink,
  removeQuickLink,
  clearError,
  addSocialMedia,
  removeSocialMedia,
  updateSocialMedia,
} from '@/store/slices/footerSlice';
import type { 
  FooterLink,
  SocialMedia,
  AddSocialMediaPayload,
  RemoveSocialMediaPayload
} from '../Types/footer.types';

export const useFooter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Selectors
  const companyInfo = useSelector((state: RootState) => state.footer.companyInfo);
  const quickLinks = useSelector((state: RootState) => state.footer.quickLinks);
  const services = useSelector((state: RootState) => state.footer.services);
  const isLoading = useSelector((state: RootState) => state.footer.isLoading);
  const error = useSelector((state: RootState) => state.footer.error);
  
  // Navigation handler
  const handleNavigation = (path: string, isExternal?: boolean) => {
    if (isExternal) {
      window.open(path, '_blank', 'noopener noreferrer');
    } else {
      navigate(path);
    }
  };
  
  // Check if link is active
  const isActiveLink = (path: string): boolean => {
    return location.pathname === path;
  };
  
  // Actions
  const handleAddQuickLink = (link: FooterLink) => {
    dispatch(addQuickLink(link));
  };
  
  const handleRemoveQuickLink = (id: string) => {
    dispatch(removeQuickLink(id));
  };
  
  const handleClearError = () => {
    dispatch(clearError());
  };
  
  const handleAddSocialMedia = (socialMedia: SocialMedia) => {
    dispatch(addSocialMedia({ socialMedia }));
  };
  
  const handleRemoveSocialMedia = (id: string) => {
    dispatch(removeSocialMedia({ id }));
  };
  
  const handleUpdateSocialMedia = (socialMedia: SocialMedia) => {
    dispatch(updateSocialMedia(socialMedia));
  };
  
  return {
    // State
    companyInfo,
    quickLinks,
    services,
    socialMedia: companyInfo.socialMedia,
    isLoading,
    error,
    
    // Navigation
    navigate,
    location,
    handleNavigation,
    isActiveLink,
    
    // Actions
    handleAddQuickLink,
    handleRemoveQuickLink,
    handleClearError,
    handleAddSocialMedia,
    handleRemoveSocialMedia,
    handleUpdateSocialMedia,
    
    // Computed
    currentYear: new Date().getFullYear()
  };
};