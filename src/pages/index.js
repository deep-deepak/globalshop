
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
          title={"Global Shop Front and Shutters - Premium Commercial Solutions"}
          description={"Global Shop Front and Shutters provides high-quality aluminium windows, doors, shopfronts, curtain walling, and fire-rated solutions worldwide, delivering exceptional designs and expert installations for commercial properties."}
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
