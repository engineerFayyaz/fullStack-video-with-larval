import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Text, Img, RatingBar } from "components";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "redux/UserContext";

const DetailsPage = (props) => {
  const { movie_id, series_id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [seriesData, setSeriesData] = useState([]);
  const [isInWishList, setIsInWishList] = useState(false);
  const navigate = useNavigate();
  const [isFullDescriptionVisible, setFullDescriptionVisible] = useState(false);
  const { user } = useUser(); // Get the user object from the context

  useEffect(() => {
    if (movie_id) {
      // This is a movie ID, so fetch movie data
      axios
        .get(` https://ourbrandtv.com/mobile/public/api/movie/${movie_id}`)
        .then((response) => {
          // Handle movie data response
          if (response.data.status === "1" && response.data.data) {
            setMovieData(response.data.data);
          } else {
            console.error("Unexpected API response structure for movie");
          }
        })
        .catch((error) => {
          // Handle movie data error
          console.error("Error fetching movie data:", error);
        });
    } else if (series_id) {
      // Fetch series data based on series_id
      axios
        .get(` https://ourbrandtv.com/mobile/public/api/series/${series_id}`)
        .then((response) => {
          // Log the API response

          // Handle series data response
          if (Array.isArray(response.data.data)) {
            setSeriesData(response.data.data);
          } else {
            console.error("Unexpected series API response structure");
          }
        })
        .catch((error) => {
          // Handle series data error
          console.error("Error fetching series data:", error);
        });
    }
  }, [movie_id, series_id]);

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.slice(0, maxLength);
    return truncatedText.slice(0, truncatedText.lastIndexOf(" ")) + " ...";
  };

  const truncatedDescription =
    movieData && movieData.description_short
      ? truncateDescription(movieData.description_short, 50)
      : "Months ago";

  const toggleDescriptionVisibility = () => {
    setFullDescriptionVisible(!isFullDescriptionVisible);
  };

  const addToWishList = async () => {
    try {
      // Check if the user is logged in by verifying the existence of the user object
      if (!user || !user.email) {
        // This block should not be executed if the user is already logged in
        toast.error("Please log in to add to the wish list");
        return;
      }

      // Now, the user is logged in
      // You can proceed with adding to the wish list...

      const response = await axios.post(
        " https://ourbrandtv.com/mobile/public/api/wishlist",
        {
          user_id: user.id, // Use the actual user ID from your authentication system
          movie_id,
        }
      );

      if (response.data.status === "success") {
        toast.success("Added to wish list successfully");
        // You might want to update the state or perform other actions after successful addition
      } else {
        toast.error(`Failed to add to wish list: ${response.data.message}`);
      }
    } catch (error) {
      toast.error("Error adding to wish list");
    }
  };


  console.log("movieData", movieData)
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
        {seriesData && (
          <div className="bg-gray-900 p-4">
            {Object.keys(seriesData).map((seasonId) => (
              <div key={seasonId}>
                <Text
                  className="text-gray-100 text-xl"
                  size="txtPoppinsRegular20"
                >
                  <span className="text-gray-100 font-opensans text-left font-normal">
                    Season:{" "}
                  </span>
                  <span className="text-gray-100 font-opensans text-left font-bold">
                    {seriesData[seasonId].title}
                  </span>
                </Text>
                {seriesData[seasonId].episodes.map((episode) => (
                  <div key={episode.episode_id}>
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      <span className="text-gray-100 font-opensans text-left font-normal">
                        Episode:{" "}
                      </span>
                      <span className="text-gray-100 font-opensans text-left font-bold">
                        {episode.name}
                      </span>
                      {episode.url}
                    </Text>
                    {/* Add any additional information about the episode here */}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />

        <div className="h-[600px] md:h-[939px] max-w-[1421px] mt-[15px] mx-auto md:px-5 relative w-full">
          {movieData && (
            <Img
              className="h-[100%] m-auto w-full"
              src={
                movieData.poster_image
                  ? movieData.thumbnail_image
                  : `https://ourbrandtv.com/admin//assets/global/movie_thumb/${movieData.movie_id}.jpg`
              }
              alt="lucifersOne"
            />
          )}
          {movieData && (
            <div className="absolute bottom-[-10%] flex flex-col md:gap-10 gap-20 justify-start left-[4%] w-[66%]">
              <Img
                className="common-pointer h-50 md:ml-[0] ml-[523px] w-44"
                src="/images/icons8-pot-player.svg"
                alt="group163539"
                onClick={() => navigate(`/player?videoUrl=${movieData.url}`)}
              />
              <div className="flex flex-col h-[300px]  items-start justify-start w-full">
                <div className="  w-full">
                  <div className="flex flex-col  justify-start m-auto w-full">
                    <div className="flex flex-col  justify-start w-full">
                      <Text
                        className="md:text-2xl text-[30px] text-blue-100 "
                        size="txtOpenSansRomanExtraBold100"
                      >
                        {movieData.title}
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col font-poppins  justify-start left-[0] w-[100%]">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex flex-row  items-start justify-start  md:ml-[0] w-[99%] md:w-full">
                        <Text
                          className="mt-0.5 text-gray-100 text-right text-xl"
                          size="txtOpenSansRomanBold20"
                        >
                          Duration: {movieData.duration}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start w-[66%] md:w-full">
                        <div className="flex flex-row items-center justify-evenly w-[28%]">
                          <RatingBar
                            className="flex justify-between w-[190px]"
                            value={movieData.rating}
                            starCount={5}
                            activeColor="#f1c644"
                            size={30}
                          ></RatingBar>
                        </div>
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtPoppinsRegular20WhiteA700"
                        >
                          {movieData.rating}/5
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5  justify-start w-[100%] md:w-full">
                      {movieData.url && (
                        <Link to={`/player?videoUrl=${movieData.url}`}>
                          <button className="bg-blue-500 text-white text-xl py-2 px-4 rounded">
                            Watch Movie
                          </button>
                        </Link>
                      )}
                      {movieData.trailer_url && (
                        <Link to={`/player?videoUrl=${movieData.trailer_url}`}>
                          <button className="bg-green-500 text-white text-xl py-2 px-4 rounded">
                            Watch Trailer
                          </button>
                        </Link>
                      )}

                      <div
                        className="absolute right-4 top-4"
                        style={{ color: "white", marginTop: "15px" }}
                      >
                        <button
                          className="flex items-center text-white"
                          style={{
                            fontWeight: "700",
                            color: "blue",
                            marginTop: "28px",
                          }}
                        >
                          <span className="ml-2">
                            {isInWishList ? "Remove from Wish List" : ""}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col items-start justify-start max-w-[1329px] mb-10 mt-8 mx-auto md:px-5 w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32"
          >
            Desciption
          </Text>
          <Text style={{ color: "white" }}>
            {movieData && movieData.description_long
              ? movieData.description_long
              : "The film opens with Brando uttering the now-legendary line, 'I'm gonna make him an offer he can't refuse.' This phrase encapsulates the essence of the Corleone family's dealings, where negotiations often take on a sinister undertone. Brando's stoic demeanor and calculated approach to power dynamics make him an unforgettable figure in cinema history. As the story unfolds, we witness the Corleones navigating a dangerous world where allegiances are tested, and betrayals have severe consequences. The juxtaposition of the family's intimate moments with scenes of brutal violence creates a narrative tension that resonates throughout the film. Al Pacino's Michael Corleone undergoes a profound transformation from a reluctant outsider to a ruthless leader, showcasing the film's exploration of the corrupting nature of power."}
          </Text>
          <div className="flex flex-col font-poppins gap-2.5 items-start justify-start mt-[22px]">
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Seasons:
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                {movieData && movieData.title ? movieData.title : "1"}
              </span>
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Genre:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                {movieData && movieData.genre_id ? movieData.genre_id : "N/A"}
              </span>
            </Text>

            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Directed by:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                {movieData && movieData.director
                  ? movieData.director
                  : "Hwang Dong-hyuk"}
              </span>
            </Text>
            {/* <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Written by:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                Hwang Dong-hyuk
              </span>
            </Text> */}
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Starring:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                {isFullDescriptionVisible
                  ? movieData.description_short
                  : truncatedDescription}
              </span>
              {!isFullDescriptionVisible && (
                <button
                  onClick={toggleDescriptionVisibility}
                  className="read-more-button"
                >
                  Read More
                </button>
              )}
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Production Companies:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                Ourbrand tv
              </span>
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Original release:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                {movieData && movieData.year ? movieData.year : "2023"}
              </span>
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Published Date Ourbrand:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                {movieData && movieData.created_at
                  ? movieData.created_at
                  : "2023"}
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
