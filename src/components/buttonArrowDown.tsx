import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ButtonArrowDown = () => {

    const [rotated, setRotated] = useState(false);
  
    const handleRotate = () => {
      setRotated(!rotated);
    };


  return (
    <div>
            <ChevronDown style={{ transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)' }} 
            onClick={handleRotate}
            />
    </div>
  )
}

export default ButtonArrowDown
