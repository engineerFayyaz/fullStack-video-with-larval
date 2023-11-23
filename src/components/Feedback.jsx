// Feedback.js
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Feedback() {
  const handleSubmit = () => {
    // Assume your form validation is successful
    // Display toast
    toast.success("Your message received successfully. We will get in touch with you shortly.");

    // Reload the window
    setTimeout(() => {
      window.location.reload();
    }, 3000); // Reload after 3 seconds (adjust as needed)
  };
  return (
    <div
      className="absolute mt-52 ml-48 
						w-80 float-left border-2 p-2 
						rounded-xl shadow-xl text-xl"
    >
      <form>
        <p className="text-2xl">Feedback & Queries</p>
        <div>
          <label className="text-sm">Select Issue*</label>
          <br></br>
          <select
            className="bg-gray-50 border border-gray-300 
										text-gray-600 text-sm rounded-lg 
										focus:border-blue-500 w-full p-2.5"
          >
            <option value="Feedback">-- Select Your Query --</option>
            <option value="Feedback">Feedback</option>
            <option value="Feedback">Movies/series Related Queries</option>
            <option value="Feedback">Payment Related Issue</option>
            <option value="Feedback">Login Queries</option>
            <option value="Feedback">Advertise With Us</option>
          </select>
          <br></br>
          <label className="text-sm">Email Address*</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300 
										text-sm rounded-lg focus:border-blue-500 
										w-full p-2.5"
            type="email"
            placeholder="abc@geeksforgeeks.org"
          />
          <br></br>
          <label className="text-sm">Contact No.</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300 
										text-sm rounded-lg focus:border-blue-500 
										w-full p-2.5"
            type="text"
            placeholder="1324567890"
          />
          <br></br>
          <label className="text-sm">Drop Your Query</label>
          <br></br>
          <textarea
            className="bg-gray-50 border border-gray-300 
											text-sm rounded-lg 
											focus:border-blue-500 
											w-full p-2.5"
            rows="4"
            cols="25"
            maxlength="300"
            placeholder="Max Allowed Characters: 300"
          ></textarea>
          <br></br>
          <button
            className="bg-blue-500 hover:bg-blue-700 
										text-white font-bold 
										py-2 px-4 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
