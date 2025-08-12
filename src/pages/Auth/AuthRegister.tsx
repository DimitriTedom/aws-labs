import FormTitle from "@/components/FormTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;
const getPasswordStrength = (password: string) => {
  let score = 0;

  if (password.length >= 8) score += 1;

  if (/[A-Z]/.test(password)) score += 1;

  if (/[a-z]/.test(password)) score += 1;

  if (/\d/.test(password)) score += 1;

  if (/[^a-zA-Z\d]/.test(password)) score += 1;

  return Math.min(score, 5);
};

const AuthRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email:", email);
    console.log("Password:", password);

    //API call
    try {
      const res = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
    navigate(`/auth/verify-otp/${email}`);
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="flex-col flex-center justify-center h-screen px--10">
      <div>
        <img src="/work.png" alt="work-logo" />
      </div>

      <div className="w-full flex-center flex-col max-w-lg p-6 space-y-4">
        <FormTitle
          title="Creation de compte"
          comment="Rentrez vos infos pour creer votre compte ."
          snowStyle="w-full"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="snowdev"
              className="w-full focus:ring-0 focus:border-blue-700 transition-all"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@example.com"
              className="w-full focus:ring-0 focus:border-blue-700 transition-all"
            />
          </div>

          <div>
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="************"
              className="w-full focus:ring-0 focus:border-blue-700 transition-all"
            />

            <div className="mt-2 flex items-center space-x-1 w-full">
              {[1, 2, 3, 4, 5].map((segment, index) => (
                <div
                  key={index}
                  className={`w-full h-1 ${
                    index < strength
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

          <div className="flex items-center justify-center space-x-2">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              OU AVEC
            </span>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>

          <div className="space-y-2">
            <Button variant="outline" className="w-full space-x-2">
              <GitHubLogoIcon />
              <h1>GitHub</h1>
            </Button>
            <Button variant="outline" className="w-full space-x-2">
              <AiFillGoogleCircle />
              <h1>Google</h1>
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full bg-worketblue hover:bg-blue-900 mt-4"
          >
            Créer le compte
          </Button>

          <p className="text-sm text-gray-500 mt-4">
            En cliquant sur continuer, vous acceptez nos{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Conditions d'utilisation
            </a>{" "}
            et{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Politique de confidentialité
            </a>
            .
          </p>
        </form>
        <div className=" flex items-center space-x-1 w-full pt-12">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`w-full h-1 ${
                index < 2
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

export default AuthRegister;
