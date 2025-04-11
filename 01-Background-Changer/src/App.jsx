import { useState } from "react"
import ColorButton from "./component/ColorButton.jsx";


function App() {
  // State to manage the background color
  // The initial color is set to gray
  // This state will be updated when a button is clicked
  // The useState hook is used to create state variables in functional components
  // The useState function returns an array with two elements: the current state and a function to update it

  const [color, setColor] = useState("brown");

  // Function to set the background color
  const colors = [
    { name: "red", text: "white" },
    { name: "green", text: "white" },
    { name: "yellow", text: "black" },
    { name: "blue", text: "white" },
    { name: "pink", text: "black" },
    { name: "purple", text: "white" },
    { name: "orange", text: "white" },
    { name: "black", text: "white" },
  ];

  return (
    // Main container
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Map through the colors array and create a button for each color */}
          {/* The key prop is used to give each element a unique identifier */}
          {/* The color name is capitalized for better readability */}
          {colors.map((color) => (
            <ColorButton
              key={color.name}
              color={color.name.charAt(0).toUpperCase() + color.name.slice(1)}
              setColor={setColor}
              // textColor={color.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App