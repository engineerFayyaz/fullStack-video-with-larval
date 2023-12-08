import React, { useState, useEffect } from "react";
import { Button, Text } from "components";
import Header1 from "components/Header1";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from "redux/UserContext";
import { format } from 'date-fns';


const ScheduleMovie = () => {
  const { user_id } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    genre_id: "", // Use genre_id instead of genre
    location: "",
    proof: "",
    movie_id: "",
    user_id: user_id || "",
    upcoming_datetime: new Date(), // Corrected property name
  });

  const [genreList, setGenreList] = useState([]);

  const handleGenreChange = (e) => {
    const selectedGenreId = e.target.value;
    setFormData({ ...formData, genre_id: selectedGenreId });
  };

  
  const handleUpload = async () => {
    try {
      // Log the formData to check the user_id value

      // Check if the user is authorized based on user_id
      const allowedUserIds = [1, 2, 3, 4, 67];
      
      // Convert user_id to a number before checking
      const userIdAsNumber = parseInt(formData.user_id, 10);

      if (!allowedUserIds.includes(userIdAsNumber)) {
        console.error("User is not authorized");
        toast.error("Sorry, You are not authorized. Please buy the plan first.");
        return;
      }

      // Check if upcoming_datetime is defined before formatting
      if (formData.upcoming_datetime) {
        // Format the date to the desired format
        const formattedDateTime = format(formData.upcoming_datetime, 'yyyy-MM-dd HH:mm:ss');
        
        const response = await axios.post(
          " https://ourbrandtv.com/mobile/public/api/storeschedule",
          { ...formData, upcoming_datetime: formattedDateTime }
        );

        toast.success("Movie Scheduled Successfully");
      } else {
        console.error("Upcoming datetime is undefined");
        toast.error("Upcoming datetime is undefined");
      }
    } catch (error) {
      console.error("Failed to upload data", error);
      toast.error("Failed to upload data");
    }
  };
  
  
  
  useEffect(() => {
    axios
      .get(" https://ourbrandtv.com/mobile/public/api/genre")
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setGenreList(response.data.data);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleDateTimeChange = (date) => {
    setFormData({ ...formData, upcoming_datetime: date });
  };

  return (
    <>
      <div className="bg-gray-900 flex flex-col justify-start mx-auto p-2 w-full">
        <div className="flex flex-col font-opensans items-center max-w-[1370px] mx-auto pl-3 md:px-5 w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
        </div>
        <Text
          className="ml-3 md:ml-[0] mt-10 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
          size="txtCatamaranRomanBold32"
        >
          Schedule a Movie or Show
        </Text>
        <div className="flex flex-col font-nunitosans items-center justify-start mb-[257px] md:ml-[0] ml-[30px] mt-[38px] md:px-5 w-[87%] md:w-full">
          <div className="flex flex-col gap-8 items-end justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtNunitoSansSemiBold14"
                >
                  Title
                </Text>
                <input
                  name="name"
                  placeholder="Title"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                  wrapClassName="w-full"
                  type="text"
                  shape="round"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                ></input>
              </div>
              <div
                className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full"
                style={{ marginLeft: "30px" }}
              >
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtNunitoSansSemiBold14"
                >
                  Genre
                </Text>
                <select
                  name="genre_id"
                  value={formData.genre_id}
                  onChange={handleGenreChange}
                >
                  <option value="">Select a Genre</option>
                  {genreList.map((genre) => (
                    <option key={genre.genre_id} value={genre.genre_id}>
                      {genre.genre_id}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full"
                style={{ marginLeft: "10px" }}
              >
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtNunitoSansSemiBold14"
                >
                  Location
                </Text>
                <input
                  name="location"
                  placeholder="Location"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                  wrapClassName="w-full"
                  type="text"
                  shape="round"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                ></input>
              </div>
              <div
                className="flex sm:flex-3 flex-col gap-1 items-start justify-start w-[40%] sm:w-full"
                style={{ marginLeft: "20px" }}
              >
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtNunitoSansSemiBold14"
                >
                  Email
                </Text>
                <input
                  name="email"
                  placeholder="email"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                  wrapClassName="w-full"
                  type="email"
                  shape="round"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtNunitoSansSemiBold14"
                >
                  Description
                </Text>
                <textarea
                  name="description"
                  placeholder="Short Description"
                  className="bg-transparent border border-solid border-white-A700 text-sm placeholder:text-white-A700 text-white-A700 w-[420px]"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[30%] sm:w-full">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtNunitoSansSemiBold14"
                >
                  Upcoming Date and Time
                </Text>
                <DatePicker
                  selected={new Date(formData.upcoming_datetime)} // Convert the string to a Date object
                  onChange={handleDateTimeChange}
                  showTimeSelect
                  dateFormat="Pp"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                  style={{ color: "white" }}
                />
              </div>
              <div
                className="flex sm:flex-3 flex-col gap-1 items-start justify-start w-[30%] sm:w-full"
                style={{ marginLeft: "20px" }}
              >
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtNunitoSansSemiBold14"
                >
                  movie_id
                </Text>
                <input
                  name="movie_id"
                  placeholder="movie_id"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                  wrapClassName="w-full"
                  type="movie_id"
                  shape="round"
                  value={formData.movie_id}
                  onChange={(e) =>
                    setFormData({ ...formData, movie_id: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div
              className="flex sm:flex-3 flex-col-2 gap-1 items-start justify-start w-[65%] sm:w-full"
              style={{ marginLeft: "20px" }}
            >
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtNunitoSansSemiBold14"
              >
                Proof
              </Text>
              <input
                name="proof"
                placeholder="proof"
                className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                wrapClassName="w-full"
                type="file"
                shape="round"
                value={formData.proof}
                onChange={(e) =>
                  setFormData({ ...formData, proof: e.target.value })
                }
              ></input>
            </div>
            <div
              className="flex sm:flex-3 flex-col-2 gap-1 items-start justify-start w-[30%] sm:w-full"
              style={{ marginLeft: "20px" }}
            >
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtNunitoSansSemiBold14"
              >
                User id
              </Text>
              <input
                name="user_id"
                placeholder="user_id"
                className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                wrapClassName="w-full"
                type="input"
                shape="round"
                value={formData.user_id}
                onChange={(e) =>
                  setFormData({ ...formData, user_id: e.target.value })
                }
              ></input>
            </div>
            <Button
              className="common-pointer cursor-pointer font-bold font-catamaran rounded-br-[3px] rounded-tr-[3px] text-base text-center w-[220px]"
              onClick={handleUpload}
              color="pink_500"
              size="md"
              variant="fill"
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMovie;
