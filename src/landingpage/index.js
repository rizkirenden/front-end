import { useState } from "react";
import Header from "../components/landingpage/header";
import { Nav } from "../components/landingpage/nav";
import Profile from "../components/landingpage/profile";
import HeroSection from "../components/landingpage/herosection";
import logo from "../assets/Logo.png";
import logoKecil from "../assets/logokecil.png";
import defaultProfile from "../assets/profile.png";
import { FaCog, FaArrowUp, FaSignOutAlt } from "react-icons/fa";
import hero from "../assets/herosection.png";

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
          {" "}
          {/* Tambahkan margin kanan */}
          <Nav
            items={navItems}
            textColor="text-white"
            gap="gap-4 md:gap-8"
            mobileGap="gap-2" // Gap lebih kecil di mobile
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
        bgSize="cover" // Pastikan background image mencakup seluruh container
        bgPosition="center" // Posisi background di tengah
        contentPosition="flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-32"
        contentMaxWidth="max-w-4xl"
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
      />
    </div>
  );
}

export default Index;
