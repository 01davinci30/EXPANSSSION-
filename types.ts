// Fix: Import React to make React.ElementType available.
import React from 'react';

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
}

export interface Service {
  title: string;
  items: string[];
  icon: React.ElementType;
  imageUrl: string;
}

export interface Product {
    name: string;
    icon: React.ElementType;
}

export interface ContactInfo {
    type: 'location' | 'hours' | 'whatsapp' | 'email';
    value: string;
    href?: string;
    icon: React.ElementType;
}

export interface SocialLink {
    name: string;
    href: string;
    icon: React.ElementType;
}