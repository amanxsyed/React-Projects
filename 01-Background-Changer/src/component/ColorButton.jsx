function ColorButton({ color, setColor, textColor }) {
    // This component represents a button that changes the background color of the app
    // It receives the color, setColor function, and textColor as props
    return (
      <button
        onClick={() => setColor(color)}
        className="px-4 py-1 rounded-full shadow-lg outline-none"
        style={{ backgroundColor: color, color: textColor }}
      >
        {/* The button's text is the color name */}
        {/* {color} */}
        
      </button>
    );
  }
  
  export default ColorButton;
  