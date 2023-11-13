import Header1 from "components/Header1";
import React from "react";

const Notification = () => {
  // Assume this state represents the notification message from the server
  const notificationMessage = null; // Set to a string if there's a notification

  return (
    <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
      <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="notification-page" style={{ color: "white" }}>
        {notificationMessage ? (
          <div className="notification">
            <p>{notificationMessage}</p>
          </div>
        ) : (
          <p>
            No notifications right now. Please wait for admin notifications.
          </p>
        )}
      </div>
    </div>
  );
};

export default Notification;
