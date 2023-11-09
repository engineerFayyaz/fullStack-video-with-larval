import React from "react";
import "../../components/Avatar/avatar.css"
function Avatar({ name }) {
  // Get the first letter of the name
  const firstLetter = name ? name.charAt(0).toUpperCase() : "A"; // Use "A" if name is not available

  
  return (
    <div className="avatar-container">
      <div className="avatar-circle">
        {firstLetter}
      </div>
    </div>
  );
}

export default Avatar;
