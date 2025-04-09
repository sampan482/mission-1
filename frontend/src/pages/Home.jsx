import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Dark />
      <div>
        <Link to="/signin" className="text-blue-600 hover:underline underline-offset-[3px] ">
          NO ACCOUNT ? Sign up
        </Link>
      </div>
    </div>
  );
}

export default Home;
