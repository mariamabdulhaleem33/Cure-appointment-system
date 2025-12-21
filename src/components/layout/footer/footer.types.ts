export interface FooterLink {
id: string;
label: string;
path: string;
isExternal?: boolean;
}

export interface SocialMedia {
id: string;
name: string;
icon: string;
url: string;
color: string;
}

export interface CompanyInfo {
name: string;
description: string;
socialMedia: SocialMedia[];
}

export interface FooterState {
companyInfo: CompanyInfo;
quickLinks: FooterLink[];
services: FooterLink[];
isLoading: boolean;
error: string | null;
}

export interface AddSocialMediaPayload {
socialMedia: SocialMedia;
}

export interface RemoveSocialMediaPayload {
id: string;
}