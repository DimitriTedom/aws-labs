import FormTitle from "@/components/FormTitle";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div>
        <img src="/work.png" alt="work-logo" />
      </div>

      <FormTitle
        title="Bienvenue"
        comment="Plus que 3 petites minutes ………"
        snowStyle="w-full"
      />

      <div className="mt-8 max-w-[18rem] lg:max-w-max">
        <img
          src="/images 1.svg"
          alt="Welcome Image"
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>

      <Link to={"/"}>
        <Button
          type="button"
          className="mt-8 w-64 bg-worketblue hover:bg-blue-900 p-4 text-[1.1rem] font-semibold transition-all"
        >
          Inviter
        </Button>
      </Link>

      <p className="text-sm text-gray-500 mt-6 text-center px-12 lg:px-0">
        By clicking continue, you agree to our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
        <div className=" flex items-center space-x-1 w-full pt-12 px-12 lg:px-0">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`w-full h-1 ${
                index < 5
                  ? index === 0
                    ? "bg-red-500"
                    : index === 1
                    ? "bg-orange-500"
                    : index === 2
                    ? "bg-yellow-500"
                    : index === 3
                    ? "bg-green-500"
                    : "bg-blue-500"
                  : "bg-gray-300"
              } rounded-full transition-colors duration-300`}
            ></div>
          ))}
        </div>
      </p>
    </div>
  );
};

export default Welcome;
