
import Seo from "@/common/Seo";
import Layout from "@/layout/Layout";
import HeroSection from "@/landingpage/HeroSection";
import AboutSection from "@/landingpage/About";
import ExpertiseSection from "@/landingpage/Experties";
import ProductsSection from "@/landingpage/ProductSection";
import ServiceSection from "@/landingpage/ServiceSection";
import RollerShutterFeatures from "@/landingpage/RollerShutterFeatures";
import RollerShutterGallery from '@/landingpage/RollerShutterGallery';
import GoogleReviewsSlider from '@/landingpage/GoogleReviewsSlider';
import ServiceFeatures from '../landingpage/ServiceFeatures';
import Work from '../landingpage/Work';
import FAQContactSection from '../landingpage/FAQContactSection';


// ScrollToTop Component

export default function Home() {
  return (
    <>
      <Layout>
        <Seo
          title={"Global Shopfronts & Shutters - Expert Roller Shutter "}
          description={"Global Shopfronts offers premium roller shutter installation, maintenance, and repair services across the UK. Enhance security and aesthetics for your commercial."}
        />

        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <RollerShutterFeatures />
        <ExpertiseSection />
        <ProductsSection />
        <RollerShutterGallery />
        <GoogleReviewsSlider />
        <ServiceFeatures />
        <Work />
        <FAQContactSection />
      </Layout>

    </>
  );
}
