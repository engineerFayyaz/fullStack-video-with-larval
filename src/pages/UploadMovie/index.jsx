import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Text, TextArea } from "components";
import Header1 from "components/Header1";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

const UploadMoviePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description_short: "",
    description_long: "",
    genre_id: "", // Genre ID will be selected from dropdown
    url: "",
    trailer_url: "",
    user_id: "", // Assuming you have a way to determine the user's ID
    thumbnail_image: null,
    poster_image: null,
    proof_ownership: null,
  });

  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    axios
      .get("http://mobile.codegifted.com/api/genre")
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setGenreList(response.data.data);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleFileChange = (e) => {
    const fieldName = e.target.name;
    const file = e.target.files[0];
    setFormData({ ...formData, [fieldName]: file });
  };

  const handleSubmit = () => {
    const apiUrl = "http://mobile.codegifted.com/api/store_movie";

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description_short", formData.description_short);
    formDataToSend.append("description_long", formData.description_long);
    formDataToSend.append("genre_id", formData.genre_id); // Use the selected genre ID
    formDataToSend.append("url", formData.url);
    formDataToSend.append("trailer_url", formData.trailer_url);
    formDataToSend.append("user_id", formData.user_id);
    formDataToSend.append("thumbnail_image", formData.thumbnail_image);
    formDataToSend.append("poster_image", formData.poster_image);
    formDataToSend.append("proof_ownership", formData.proof_ownership);

    // if (formData.thumbnail_image) {
      
    // }

    // if (formData.poster_image) {
      
    // }

    // if (formData.proof_ownership) {
      
    // }

    axios
      .post(apiUrl, formDataToSend)
      .then((response) => {
        if (response.data.data && response.data.data) {
          toast.success("Movie uploaded successfully!");
          console.log("API Response:", response.data.data);
          navigate("/MyChannels");
        } else {
          toast.error("API response is empty or missing data.");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("API Error Response Data:", error.response.data);
        }
        toast.error("Failed to upload the movie. Please try again.");
      });
  };

  const handleGenreChange = (e) => {
    const selectedGenreId = e.target.value;
    setFormData({ ...formData, genre_id: selectedGenreId });
  };

  return (
    <div className="bg-gray-900 flex flex-col justify-start mx-auto p-2 w-full">
      <div className="flex flex-col font-opensans items-center max-w-[1370px] mx-auto pl-3 md:px-5 w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
      </div>
      <Text
        className="ml-3 md:ml-[0] mt-10 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
        size="txtCatamaranRomanBold32"
      >
        Upload a Movie or Show
      </Text>
      <div className="flex flex-col font-nunitosans items-center justify-start mb-[257px] md:ml-[0] ml-[30px] mt-[38px] md:px-5 w-[87%] md:w-full">
        <div className="flex flex-col gap-8 items-end justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="bg-white-A700 flex flex-col h-[150px] items-center justify-start mb-[25px] p-[63px] md:px-10 sm:px-5 rounded-[50%] w-[150px]">
              <Img
                className="h-6 w-6"
                src="images/img_antdesigncamerafilled.svg"
                alt="antdesigncamera"
              />
            </div>

            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-1.5 w-[82%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtNunitoSansSemiBold14"
                  >
                    Title
                  </Text>
                  <input
                    name="title"
                    placeholder="Title"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                    wrapClassName="w-full"
                    type="text"
                    shape="round"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  ></input>
                </div>
                <div
                  className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full"
                  style={{ marginLeft: "60px" }}
                >
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtNunitoSansSemiBold14"
                  >
                    Genre
                  </Text>
                  <div>
  <h2>Genre Information</h2>
  <select>
    {genreList.map((genre) => (
      <option key={genre.genre_id} value={genre.genre_id}>
        {genre.name} - {genre.genre_id}
      </option>
    ))}
  </select>
</div>
                </div>

                <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
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
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtNunitoSansSemiBold14"
                  >
                    Short Description
                  </Text>
                  <textArea
                    name="description_short"
                    placeholder="Short Description"
                    className="bg-transparent border border-solid border-white-A700 text-sm placeholder:text-white-A700 text-white-A700 w-[420px]"
                    value={formData.description_short}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description_short: e.target.value,
                      })
                    }
                  ></textArea>
                </div>
                <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtNunitoSansSemiBold14"
                  >
                    Long Description
                  </Text>
                  <textArea
                    name="description_long"
                    placeholder="Long Description"
                    className="bg-transparent border border-solid border-white-A700 text-sm placeholder:text-white-A700 text-white-A700 w-[420px]"
                    value={formData.description_long}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description_long: e.target.value,
                      })
                    }
                  ></textArea>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[82%] md:w-full">
            <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtNunitoSansSemiBold14"
              >
                Trailer URL
              </Text>
              <input
                name="trailer_url"
                placeholder="Trailer URL"
                className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                wrapClassName="w-full"
                type="text"
                shape="round"
                value={formData.trailer_url}
                onChange={(e) =>
                  setFormData({ ...formData, trailer_url: e.target.value })
                }
              ></input>
            </div>
            <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtNunitoSansSemiBold14"
              >
                URL
              </Text>
              <input
                name="url"
                placeholder="URL"
                className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                wrapClassName="w-full"
                type="text"
                shape="round"
                value={formData.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[82%] md:w-full">
            <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[100%] sm:w-full">
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtNunitoSansSemiBold14"
              >
                Proof of Ownership
              </Text>
              <input
                name="proof_ownership"
                placeholder="Proof of Ownership"
                className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                wrapClassName="w-full"
                type="file"
                shape="round"
                onChange={handleFileChange}
              ></input>
            </div>
            <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[100%] sm:w-full">
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtNunitoSansSemiBold14"
              >
                Thumbnail Image
              </Text>
              <input
                name="thumbnail_image"
                placeholder="Thumbnail Image"
                className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                wrapClassName="w-full"
                type="file"
                shape="round"
                onChange={handleFileChange}
              ></input>
            </div>
            <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[100%] sm:w-full">
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtNunitoSansSemiBold14"
              >
                poster image
              </Text>
              <input
                name="poster image"
                placeholder="select poster image"
                className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                wrapClassName="w-full"
                type="file"
                shape="round"
                onChange={handleFileChange}
              ></input>
            </div>
          </div>

          <Button
            className="common-pointer cursor-pointer font-bold font-catamaran rounded-br-[3px] rounded-tr-[3px] text-base text-center w-[220px]"
            onClick={handleSubmit}
            color="pink_500"
            size="md"
            variant="fill"
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadMoviePage;
