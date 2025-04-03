import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import WhatsAppModal from "@/common/WhatsAppModal";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const router = useRouter()

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease", // Default easing for animations
    });

    // Show the scroll button when user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true); // Show button after scrolling 300px
      } else {
        setShowScrollButton(false); // Hide button when scroll is at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle phone call
  const handleCall = () => {
    window.location.href = "tel:+447735559454";
  };

  // Function to open WhatsApp chat
  const openWhatsApp = () => {
    window.open("https://wa.me/447735559454", "_blank");
  };

  useEffect(() => {
    if (router.pathname !== '/') {
      router.push('/');
    }
  }, [router.pathname]);

  return (
    <>
      <WhatsAppModal />
      <Head>
        <meta name="robots" content="index,follow" />
        <meta
          name="google-site-verification"
          content="pDXrhOKbmr95EG4Rbtns71Q0xQx0SdWCKwhuMjICydw"
        />
        <link rel="canonical" href="https://kdshopfrontandshutters.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "kdshopfrontandshutters",
              "alternateName": "kdshopfrontandshutters",
              "url": "https://kdshopfrontandshutters.com/",
              "logo": "",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 7407057984",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "GB",
                "availableLanguage": "en"
              }
            }
          `}
        </script>
      </Head>

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-058SP393MP"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-058SP393MP');
          `,
        }}
      />

      {/* Fixed WhatsApp Button (Right Side) */}
      <Button
        onClick={openWhatsApp}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25d366",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          animation: "pulse 1.5s infinite",
        }}
      >
        <BsWhatsapp size={30} />
      </Button>

      {/* Fixed Call Button (Left Side) */}
      <Button
        onClick={handleCall}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          animation: "pulse 1.5s infinite",
        }}
      >
        <BsTelephone size={28} />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "100px", // Positioned above the WhatsApp button
            right: "20px",
            backgroundColor: "#6c757d", // Different color to distinguish from others
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            fontSize: "24px",
            height: "50px",
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ↑
        </button>
      )}

      {/* CSS for pulse animation */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}