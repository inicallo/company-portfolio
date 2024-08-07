import React from 'react'
import AboutUs from './about-us'
import GetConnected from './GetConnected'
import { Metadata } from 'next';
import CompanyHistory from './CompanyHistory';
import Timeline from './timeline';

export const metadata: Metadata = {
  title: "CA Studio | About Us",
  description: "Discover CA Studio, a global leader in B2B photography services, offering tailored visual content through our network of professional photographers and videographers in over 500 cities worldwide.",
};


const page
 = () => {
  return (
    <div>
      <AboutUs />
      <CompanyHistory />
      <Timeline />
      <GetConnected />
    </div>
  )
}

export default page
