import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormTitle from "@/components/FormTitle";
import { useNavigate } from "react-router-dom";

const Invite = () => {

  const navigate = useNavigate();
  const [phoneNumbers, setPhoneNumbers] = useState(["", "", "", ""]);


  const handlePhoneNumberChange = (index: number, value: string) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone Numbers:", phoneNumbers);
    //api call
    navigate(`/auth/welcome/`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div>
        <img src="/work.png" alt="work-logo" />
      </div>

      <div className="w-full max-w-md p-6 space-y-4">
        <FormTitle
          title="Finalisation"
          comment="Veuillez Inviter 04 amis pour finaliser l’inscription "
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <Label htmlFor="phone-numbers">Numéros de Téléphone</Label>
          {[1, 2, 3, 4].map((index) => (
            <Input
              key={index}
              id={`whatsapp-${index}`}
              type="tel"
              placeholder="Numero whatsapp"
              value={phoneNumbers[index - 1]}
              onChange={(e) =>
                handlePhoneNumberChange(index - 1, e.target.value)
              }
              className="w-full focus:ring-0 focus:border-blue-700 transition-all"
            />
          ))}

          <Button
            type="submit"
            className="w-full bg-worketblue hover:bg-blue-900 p-4 text-[1.1rem] font-semibold transition-all"
          >
            Inviter
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          By clicking continue, you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <div className=" flex items-center space-x-1 w-full pt-12">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`w-full h-1 ${
                index < 4
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
      </div>
    </div>
  );
};

export default Invite;
