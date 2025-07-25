// components/ProgressSidebar.tsx
import { useLocation, matchPath } from "react-router-dom";
import { Step } from "@/types";
import { Mail, Rocket, UserRound, UserRoundPlus } from "lucide-react";

const steps: Step[] = [
  {
    path: "/auth/register",
    title: "Inscription",
    descrip: "Entrez vos informations personelles.",
    icon: <UserRound />,
  },
  {
    path: "/auth/verify-otp/:email",
    title: "Validation OTP",
    descrip: "Confirmez votre adresse e-mail.",
    icon: <Mail />,
  },
  {
    path: "/auth/invite",
    title: "Invitez vos amis",
    descrip: "Envoyez des invitations à vos amis.",
    icon: <UserRoundPlus />,
  },
  {
    path: "/auth/welcome",
    title: "Bienvenu à worketyamo",
    descrip: "Votre inscription est terminée.",
    icon: <Rocket />,
  },
];

const ProgressSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full flex flex-col gap-10 p-6 relative">
      {/* <div className='bg-gray-200 w-1 h-16 absolute top-[9rem] left-[3.2rem]'></div> */}
      <img src="/worketyamo.png" alt="worketyamo" className="self-start mb-6" />
      {steps.map((step, index) => {
        const isActive = !!matchPath(step.path, location.pathname);

        return (
          <div
            key={step.path}
            className={`flex gap-4 items-start transition-colors relative ${
              isActive ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {index < steps.length - 1 && (
              <div
                className="absolute left-[1.9rem] top-[4rem] w-px bg-gray-300"
                style={{ height: "2.25rem" }}
              />
            )}
            <div className="p-4 border rounded-2xl flex-center">
              <div
                className={`mt-1 ${
                  isActive ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {step.icon}
              </div>
            </div>

            <div>
              <h3
                className={`font-semibold text-lg ${
                  isActive ? "font-bold text-gray-900" : "text-gray-500"
                }`}
              >
                {step.title}
              </h3>
              <p className="text-md mt-1">{step.descrip}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSidebar;
