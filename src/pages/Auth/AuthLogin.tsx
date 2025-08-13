import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormTitle from "@/components/FormTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AiFillGoogleCircle } from "react-icons/ai";
import axios from "axios";
import { Label } from "@/components/ui/label";

// const apiUrl = import.meta.env.VITE_API_URL;

const AuthLogin = () => {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      // Envoyer la requête POST avec Axios
      const response = await axios.post('http://localhost:3000/api/auth/register', formData);
      console.log('Réponse du serveur:', response.data);
      // Réinitialiser le formulaire ou rediriger l'utilisateur
      setFormData({ name: '', email: '', password: '' });
      alert('Inscription réussie !');
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      alert('Erreur lors de l\'inscription. Vérifiez les données ou le serveur.');
    }finally{
      // navigate("")
    }
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
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="snowdev"
              className="w-full focus:ring-0 focus:border-blue-700 transition-all"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@example.com"
              className="w-full focus:ring-0 focus:border-blue-700 transition-all"
            />
          </div>

          <div>
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
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

        <div className="flex items-center space-x-1 w-full pt-12">
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
