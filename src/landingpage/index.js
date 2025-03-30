import Header from "../components/landingpage/header";
import { Nav } from "../components/landingpage/nav";
import Profile from "../components/landingpage/profile";
import logo from "../assets/Logo.png";
import defaultProfile from "../assets/profile.png";
import { FaCog, FaArrowUp, FaSignOutAlt } from "react-icons/fa"; // Example import
function Index() {
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
    <Header
      logo={logo}
      logoPosition="flex justify-start items-center"
      altText="Logo"
      bgColor="#181A1C"
      mobileHeight="70px"
      desktopHeight="94px"
      profileComponent={<Profile {...profileData} />} // Pass Profile sebagai prop
    >
      <Nav
        items={navItems}
        textColor="text-white"
        gap="gap-8"
        mobileGap="gap-4"
        className="flex items-center space-x-6 pl-10 justify-center"
      />
    </Header>
  );
}

export default Index;
