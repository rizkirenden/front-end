import Card from "../components/login/card";
import image from "../assets/Logo.png";
import backgroundImage from "../assets/login.jpeg";

function Index() {
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
        imagePosition="flex flex-col justify-start items-center pt-8" // Modified
        bgColor=""
        imageWidth={150}
        imageHeight={150}
        cardWidth="w-1/3"
        cardHeight="h-64"
        rounded="rounded-xl"
        className="backdrop-blur-sm bg-[#181A1C] bg-opacity-50"
      />
    </div>
  );
}

export default Index;
