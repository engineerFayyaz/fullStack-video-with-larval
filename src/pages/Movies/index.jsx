import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";
import Banners from "components/Banners";
import Header1 from "components/Header1";
function Movies(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = location.state ? location.state.email : null;

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://mobile.codegifted.com/api/movie";

    // Make the API request
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data); // Log the response data

        if (Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          console.error("Unexpected API response structure");
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const createRows = () => {
    const rows = [];
    const itemsPerRow = 6;
    
    for (let i = 0; i < data.length; i += itemsPerRow) {
      const row = data.slice(i, i + itemsPerRow);
      rows.push(row);
    }

    return rows;
  };

  return (
    <>
    <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
    <Header1 className=" flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full"/>

        <Banners/>
   
    <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full">
   
      <Text className="text-white-A700 text-xl w-auto" size="txtOpenSansRomanBold20WhiteA700">
        All Movies
      </Text>
      <div className="flex flex-col items-center justify-start w-full">
        {loading ? (
          <p>Loading...</p>
        ) : (
          createRows().map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row gap-5 items-center justify-between w-full">
              {row.map((movie) => {
                // Store movie_id in a variable
                const movieId = movie.movie_id;

                return (
                  <div key={movie.movie_id}>
                    <Link to={`/details/${movie.movie_id}`}>
                      <img
                        src={`https://ourbrandtv.com/assets/global/movie_thumb/${movie.movie_id}.jpg`}
                        alt={movie.title}
                        className="common-pointer h-[300px] md:h-auto object-cover w-full"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
    </div>
    </>
    
  );
}

export default Movies;
