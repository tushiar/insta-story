import axios from "axios";
import React from "react";
import Stories from "react-insta-stories";
import LoadingSpinner from "../components/Loader";

const onboarding = ({ stories }) => {
  
  return (
    <div className="outer">

      {stories && (
        <Stories
          loader={<LoadingSpinner/>}
          stories={stories}
          defaultInterval={1500}
          // isPaused={true}
          width={432}
          height={640}
        />
      )}
    </div>
  );
};

onboarding.getInitialProps = async ({ req }) => {
  const response = await axios.post("http://localhost:3000/api/getvideos");
  console.log("response", response);
  return { stories: response.data.movies };
};

export default onboarding;
