import { useState } from "react";
import Header from "../components/landingpage/header";
import { Nav } from "../components/landingpage/nav";
import Profile from "../components/landingpage/profile";
import HeroSection from "../components/landingpage/herosection";
import { CardSlider } from "../components/landingpage/card";
import logo from "../assets/Logo.png";
import logoKecil from "../assets/logokecil.png";
import defaultProfile from "../assets/profile.png";
import { FaCog, FaArrowUp, FaSignOutAlt } from "react-icons/fa";
import hero from "../assets/herosection.png";
import cardImage1 from "../assets/image 233.png";
import cardImage2 from "../assets/image 223.png";
import cardImage3 from "../assets/image 224.png";
import cardImage4 from "../assets/image 219.png";
import cardImage5 from "../assets/image 208.png";
import topRating1 from "../assets/Number=14.png";
import topRating2 from "../assets/Number=25.png";
import topRating3 from "../assets/Number=29.png";
import topRating4 from "../assets/Number=9.png";
import topRating5 from "../assets/Number=12.png";
import topTranding1 from "../assets/Number=7.png";
import topTranding2 from "../assets/Number=16.png";
import topTranding3 from "../assets/Number=30.png";
import topTranding4 from "../assets/Number=10.png";
import topTranding5 from "../assets/Number=6.png";
import newReleaseCards1 from "../assets/Number=6.png";
import newReleaseCards2 from "../assets/Number=17.png";
import newReleaseCards3 from "../assets/Number=12.png";
import newReleaseCards4 from "../assets/Number=9.png";
import newReleaseCards5 from "../assets/Number=13.png";
function Index() {
  const [isMuted, setIsMuted] = useState(false);

  const navItems = [
    { label: "Series", link: "#" },
    { label: "Film", link: "#features" },
    { label: "Daftar Saya", link: "#pricing" },
  ];

  const profileData = {
    profileImage: defaultProfile,
    dropdownItems: [
      { label: "Profile", action: "#", icon: <FaCog /> },
      { label: "Upgrade ke Premium", action: "#", icon: <FaArrowUp /> },
      { label: "Keluar", action: "#", icon: <FaSignOutAlt /> },
    ],
  };

  // Card data
  const cards = [
    {
      title: "Stranger Things",
      image: cardImage1,
      alt: "Stranger Things",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      rating: "4.8 / 5",
    },
    {
      title: "Money Heist",
      image: cardImage2,
      alt: "Money Heist",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      rating: "4.7 / 5",
    },
    {
      title: "The Witcher",
      image: cardImage3,
      alt: "The Witcher",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      rating: "4.9 / 5",
    },
    {
      title: "The Witcher",
      image: cardImage4,
      alt: "The Witcher",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      rating: "4.9 / 5",
    },
    {
      title: "The Witcher",
      image: cardImage5,
      alt: "The Witcher",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      rating: "4.9 / 5",
    },
  ];
  const topRatingCards = [
    {
      image: topRating1,
      alt: "The Last of Us",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: topRating2,
      alt: "House of the Dragon",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: topRating3,
      alt: "Wednesday",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: topRating4,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: topRating5,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
  ];
  const topTrendingCard = [
    {
      image: topTranding1,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: topTranding2,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: topTranding3,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: topTranding4,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: topTranding5,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
  ];
  const newReleaseCards = [
    {
      image: newReleaseCards1,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: newReleaseCards2,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: newReleaseCards3,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: newReleaseCards4,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
    {
      image: newReleaseCards5,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-[#181A1C]">
      {/* Header Section */}
      <Header
        logo={logo}
        logoMobile={logoKecil}
        altText="Logo"
        bgColor="#181A1C"
        mobileHeight="70px"
        desktopHeight="94px"
        profileComponent={<Profile {...profileData} />}
      >
        <div className="flex items-center overflow-x-auto whitespace-nowrap mr-4 md:mr-8">
          <Nav
            items={navItems}
            textColor="text-white"
            gap="gap-4 md:gap-8"
            mobileGap="gap-2"
            className="flex items-center pl-4 md:pl-10"
          />
        </div>
      </Header>

      {/* Hero Section */}
      <HeroSection
        title="Duty After School"
        subtitle="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
        bgImage={hero}
        overlay={true}
        overlayColor="rgba(0,1,0,0.5)"
        textColor="text-white"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        subtitleSize="text-xs sm:text-sm md:text-lg lg:text-xl"
        ctaText="Mulai"
        ctaLink="#"
        ctaBgColor="bg-[#0F1E93]"
        ctaRounded="rounded-full"
        containerHeight="h-[calc(100vh-70px)] md:h-[calc(100vh-94px)]"
        bgSize="cover"
        bgPosition="center"
        contentPosition="flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-32"
        contentMaxWidth="max-w-4xl"
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
        bgExtended={true}
      />

      {/* Card Section */}
      <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#181A1C]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
          Melanjutkan Nonton Film
        </h2>
        <div className="w-full overflow-hidden">
          <CardSlider cards={cards} />
        </div>
      </section>
      {/* Top Rating Section */}
      <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#181A1C]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
          Top Rating Film dan Series Hari Ini
        </h2>
        <div className="w-full overflow-hidden">
          <CardSlider
            cards={topRatingCards}
            cardClassName="max-w-[280px]"
            showArrows={true}
          />
        </div>
      </section>
      <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#181A1C]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
          Film Trending
        </h2>
        <div className="w-full overflow-hidden">
          <CardSlider
            cards={topTrendingCard}
            cardClassName="max-w-[280px]"
            showArrows={true}
          />
        </div>
      </section>
      <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#181A1C]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
          Rilis Baru
        </h2>
        <div className="w-full overflow-hidden">
          <CardSlider
            cards={newReleaseCards}
            cardClassName="max-w-[280px]"
            showArrows={true}
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
