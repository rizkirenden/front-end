import { useState } from "react";
import Card from "../components/login/card";
import Btn from "../components/login/btn"; // Import the Btn component
import image from "../assets/Logo.png";
import Input from "../components/login/input";
import backgroundImage from "../assets/login.jpeg";
import google from "../assets/google.png";

function Index() {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleLogin = () => {
    console.log("Login attempt with:", inputValue, passwordValue);
    // Add your login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Add your Google login logic here
  };

  return (
    <div
      className="w-screen h-screen p-4 flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        image={image}
        imagePosition="flex flex-col justify-start items-center pt-8"
        bgColor=""
        imageWidth={150}
        imageHeight={150}
        cardWidth="w-1/3"
        cardHeight="h-auto" // Changed to auto to fit content
        rounded="rounded-xl"
        className="backdrop-blur-sm bg-[#181A1C] bg-opacity-60 p-8"
      >
        <Input
          label="Username"
          bgColor=""
          inputWidth="w-96"
          inputHeight="h-12"
          placeholder="Masukan User Name"
          value={inputValue}
          onChange={handleInputChange}
          className="text-white bg-[#181A1C] bg-opacity-60 mb-3"
        />
        <Input
          label="Password"
          inputWidth="w-full"
          placeholder="Masukan Kata Sandi"
          inputHeight="h-12"
          isPassword={true}
          value={passwordValue}
          onChange={handlePasswordChange}
          className="text-white bg-[#181A1C] bg-opacity-60"
        />

        <div className="w-full flex justify-between mt-4 text-sm mb-6">
          <a href="/register" className="text-[#C1C2C4]">
            Belum punya akun?{" "}
            <span className="text-white hover:underline">Daftar</span>
          </a>

          <a href="/forgot-password" className="text-[#C1C2C4] hover:underline">
            Lupa kata sandi?
          </a>
        </div>

        <Btn
          bgColor="#3D4142"
          textColor="#FFFFFF"
          btnWidth="w-full"
          btnHeight="h-12"
          rounded="rounded-full"
          className="mb-4 transition duration-300"
          onClick={handleLogin}
        >
          Masuk
        </Btn>
        <p className="text-white justify-center items-center flex mb-4">Atau</p>
        <Btn
          bgColor="transparent"
          textColor="#FFFFFF"
          borderColor="#747775"
          btnWidth="w-full"
          btnHeight="h-12"
          rounded="rounded-full"
          className="hover:bg-gray-800 transition duration-300"
          onClick={handleGoogleLogin}
        >
          <img src={google} alt="Google logo" className="w-5 h-5 mr-2" />
          Masuk dengan Google
        </Btn>
      </Card>
    </div>
  );
}

export default Index;
