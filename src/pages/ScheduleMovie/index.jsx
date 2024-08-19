import React, { useState, useEffect } from "react";
import { Button, Text } from "components";
import Header1 from "components/Header1";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from "redux/UserContext";
import { format } from "date-fns";

const ScheduleMovie = () => {
  const { user_id } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    genre_id: "",
    location: "",
    proof: "",
    movie_id: "",
    user_id: user_id || "",
    upcoming_datetime: new Date(),
  });

  const [genreList, setGenreList] = useState([]);

  const handleGenreChange = (e) => {
    const selectedGenreId = e.target.value;
    setFormData({ ...formData, genre_id: selectedGenreId });
  };

  const handleUpload = async () => {
    try {
      const allowedUserIds = [1, 2, 3, 4, 67];
      const userIdAsNumber = parseInt(formData.user_id, 10);

      if (!allowedUserIds.includes(userIdAsNumber)) {
        toast.error("Sorry, You are not authorized. Please buy the plan first.");
        return;
      }

      if (formData.upcoming_datetime) {
        const formattedDateTime = format(
          formData.upcoming_datetime,
          "yyyy-MM-dd HH:mm:ss"
        );

        await axios.post(
          "https://ourbrandtv.com/mobile/public/api/storeschedule",
          { ...formData, upcoming_datetime: formattedDateTime }
        );

        toast.success("Movie Scheduled Successfully");
      } else {
        toast.error("Upcoming datetime is undefined");
      }
    } catch (error) {
      toast.error("Failed to upload data");
    }
  };

  useEffect(() => {
    axios
      .get("https://ourbrandtv.com/mobile/public/api/genre")
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
    <div className="bg-gray-900 flex flex-col justify-start mx-auto p-4 w-full min-h-screen">
      <div className="flex flex-col items-center max-w-[1370px] mx-auto w-full">
        <Header1 className="flex md:flex-col flex-row items-center justify-center w-full mb-10" />
        <Text className="text-3xl text-white-A700 mb-8" size="txtCatamaranRomanBold32">
          Schedule a Movie or Show
        </Text>
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Text className="text-sm text-white-A700 mb-2" size="txtNunitoSansSemiBold14">
                Title
              </Text>
              <input
                name="name"
                placeholder="Title"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Text className="text-sm text-white-A700 mb-2" size="txtNunitoSansSemiBold14">
                Genre
              </Text>
              <select
                name="genre_id"
                value={formData.genre_id}
                onChange={handleGenreChange}
                className="bg-gray-700 text-white p-2 rounded-md w-full"
              >
                <option value="">Select a Genre</option>
                {genreList.map((genre) => (
                  <option key={genre.genre_id} value={genre.genre_id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Text className="text-sm text-white-A700 mb-2" size="txtNunitoSansSemiBold14">
                Location
              </Text>
              <input
                name="location"
                placeholder="Location"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
            <div>
              <Text className="text-sm text-white-A700 mb-2" size="txtNunitoSansSemiBold14">
                Email
              </Text>
              <input
                name="email"
                placeholder="Email"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <Text className="text-sm text-white-A700 mb-2" size="txtNunitoSansSemiBold14">
                Description
              </Text>
              <textarea
                name="description"
                placeholder="Short Description"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div>
              <Text className="text-sm text-white-A700 mb-2" size="txtNunitoSansSemiBold14">
                Upcoming Date and Time
              </Text>
              <DatePicker
                selected={new Date(formData.upcoming_datetime)}
                onChange={handleDateTimeChange}
                showTimeSelect
                dateFormat="Pp"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
              />
            </div>
            <div>
              <Text className="text-sm text-white-A700 mb-2" size="txtNunitoSansSemiBold14">
                Movie ID
              </Text>
              <input
                name="movie_id"
                placeholder="Movie ID"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                type="text"
                value={formData.movie_id}
                onChange={(e) => setFormData({ ...formData, movie_id: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <Text className="text-sm text-white-A700 mb-2" size="txtNunitoSansSemiBold14">
                Proof
              </Text>
              <input
                name="proof"
                placeholder="Upload Proof"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                type="file"
                onChange={(e) => setFormData({ ...formData, proof: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <Text className="text-sm text-white-A700 mb-2" size="txtNunitoSansSemiBold14">
                User ID
              </Text>
              <input
                name="user_id"
                placeholder="User ID"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
                type="text"
                value={formData.user_id}
                onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              className="font-bold text-base text-center w-[220px] bg-pink-500 text-white rounded-md p-3"
              onClick={handleUpload}
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMovie;
