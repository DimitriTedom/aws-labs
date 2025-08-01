import FormTitle from "@/components/FormTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // API call
  };

  return (
    <div className="flex-col w-full flex-center justify-center h-screen">
      <div>
        <img src="/work.png" alt="work-logo" />
      </div>

      <div className="w-full flex-center flex-col max-w-lg p-6 space-y-4">
        <FormTitle
          title="Connexion"
          comment="Rentrez vos infos pour vous connecter."
          snowStyle="w-full"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-worketblue hover:bg-blue-900"
          >
            Connexion
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
          {[1, 2, 3, 4].map((segment, index) => (
            <div
              key={index}
              className={`w-full h-1 ${
                index === 0 ? "bg-blue-500" : ""
              } rounded-full transition-colors duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
