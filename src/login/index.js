import { useState } from "react";
import Card from "../components/login/card";
import image from "../assets/Logo.png";
import Input from "../components/login/input";
import backgroundImage from "../assets/login.jpeg";

function Index() {
  const [inputValue, setInputValue] = useState(""); // To manage input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update state with new input value
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
        cardHeight="h-96" // Increased height to fit Input
        rounded="rounded-xl"
        className="backdrop-blur-sm bg-[#181A1C] bg-opacity-60 p-8"
      >
        {/* Input Component inside the Card */}
        <Input
          label="Username"
          bgColor=""
          inputWidth="w-96"
          inputHeight="h-12"
          placeholder="Masukan User Name" // Custom placeholder
          value={inputValue} // Bind value to state
          onChange={handleInputChange} // Handle input change
          className="text-white bg-[#181A1C] bg-opacity-60 mb-3"
        />
        <Input
          label="Password"
          inputWidth="w-96"
          placeholder="Masukan Kata Sandi"
          inputHeight="h-12"
          isPassword={true}
        />
      </Card>
    </div>
  );
}

export default Index;
