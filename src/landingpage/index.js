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
import Footer from "../components/landingpage/footer";
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
import newReleaseCards1 from "../assets/Number=26.png";
import newReleaseCards2 from "../assets/Number=31.png";
import newReleaseCards3 from "../assets/Number=23.png";
import newReleaseCards4 from "../assets/Number=27.png";
import newReleaseCards5 from "../assets/Number=13.png";
import cardImageHover1 from "../assets/Type=11.png";
import cardImageHover2 from "../assets/Type=21.png";
import cardImageHover3 from "../assets/image 242.png";
import cardImageHover4 from "../assets/image 223.png";
import cardImageHover5 from "../assets/image 226.png";
import cardImageHover7 from "../assets/Type=7.png";
import cardImageHover8 from "../assets/image 230.png";
import cardImageHover9 from "../assets/image 243.png";
import cardImageHover10 from "../assets/image 224.png";
import cardImageHover11 from "../assets/Type=6.png";
import cardImageHover12 from "../assets/Type=14.png";
import cardImageHover13 from "../assets/Type=24.png";
import cardImageHover14 from "../assets/Type=30.png";
import cardImageHover15 from "../assets/Type=22.png";
import cardImageHover16 from "../assets/image 227.png";

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
      newEpisode: true,
      top10: false,
    },
    {
      title: "Money Heist",
      image: cardImage2,
      alt: "Money Heist",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      rating: "4.7 / 5",
      newEpisode: false,
      top10: true,
    },
    {
      title: "The Witcher",
      image: cardImage3,
      alt: "The Witcher",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      rating: "4.9 / 5",
      newEpisode: true,
      top10: true,
    },
    {
      title: "The Witcher",
      image: cardImage4,
      alt: "The Witcher",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      rating: "4.9 / 5",
      newEpisode: false,
      top10: false,
    },
    {
      title: "The Witcher",
      image: cardImage5,
      alt: "The Witcher",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      rating: "4.9 / 5",
      newEpisode: true,
      top10: false,
    },
  ];

  const topRatingCards = [
    {
      image: topRating1,
      hoverImage: cardImageHover1,
      alt: "The Last of Us",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: false,
      top10: true,
    },
    {
      image: topRating2,
      hoverImage: cardImageHover2,
      alt: "House of the Dragon",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: true,
      top10: true,
    },
    {
      image: topRating3,
      hoverImage: cardImageHover3,
      alt: "Wednesday",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: false,
      top10: false,
    },
    {
      image: topRating4,
      hoverImage: cardImageHover4,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: true,
      top10: false,
    },
    {
      image: topRating5,
      hoverImage: cardImageHover5,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: false,
      top10: true,
    },
  ];

  const topTrendingCard = [
    {
      image: topTranding1,
      hoverImage: cardImageHover7,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: true,
      top10: true,
    },
    {
      image: topTranding2,
      hoverImage: cardImageHover8,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: false,
      top10: true,
    },
    {
      image: topTranding3,
      hoverImage: cardImageHover9,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: true,
      top10: false,
    },
    {
      image: topTranding4,
      hoverImage: cardImageHover10,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: false,
      top10: false,
    },
    {
      image: topTranding5,
      hoverImage: cardImageHover11,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: true,
      top10: true,
    },
  ];

  const newReleaseCards = [
    {
      image: newReleaseCards1,
      hoverImage: cardImageHover12,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: true,
      top10: false,
    },
    {
      image: newReleaseCards2,
      hoverImage: cardImageHover13,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: true,
      top10: false,
    },
    {
      image: newReleaseCards3,
      hoverImage: cardImageHover14,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: false,
      top10: true,
    },
    {
      image: newReleaseCards4,
      hoverImage: cardImageHover15,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: true,
      top10: true,
    },
    {
      image: newReleaseCards5,
      hoverImage: cardImageHover16,
      alt: "The Mandalorian",
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
      imageWidth: "250px",
      imageHeight: "400px",
      newEpisode: false,
      top10: true,
    },
  ];

  const footerData = {
    logo,
    genres: [
      { name: "Aksi", link: "#" },
      { name: "Anak-anak", link: "#" },
      { name: "Anime", link: "#" },
      { name: "Britania", link: "#" },
      { name: "Drama", link: "#" },
      { name: "Fantasi Ilmiah & Fantasi", link: "#" },
      { name: "Kejahatan", link: "#" },
      { name: "KDrama", link: "#" },
      { name: "Komedi", link: "#" },
      { name: "Petualangan", link: "#" },
      { name: "Perang", link: "#" },
      { name: "Romantis", link: "#" },
      { name: "Sains & Alam", link: "#" },
      { name: "Thriller", link: "#" },
    ],
    helpLinks: [
      { title: "FAQ", url: "#" },
      { title: "Kontak Kami", url: "#" },
      { title: "Privasi", url: "#" },
      { title: "Syarat & Ketentuan", url: "#" },
    ],
  };

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
          <CardSlider
            cards={cards}
            showBadges={true}
            isContinueWatching={true}
            progress={65}
            timeRemaining="1h 22m"
          />
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
            showBadges={true}
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
            showBadges={true}
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
            showBadges={true}
          />
        </div>
      </section>

      <Footer
        logo={footerData.logo}
        genres={footerData.genres}
        helpLinks={footerData.helpLinks}
      />
    </div>
  );
}

export default Index;
