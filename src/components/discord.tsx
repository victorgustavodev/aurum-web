import { FaDiscord } from "react-icons/fa";
import "../index.css";

function Discord() {
  return (
    <div className="fixed bottom-7 right-7 animate-float bg-black p-2 rounded-full ">
      <a href="https://discord.gg/aAqTB4pkxd" target="_blank">
        <FaDiscord size={40} color="white" />
      </a>
    </div>
  );
}

export default Discord;
