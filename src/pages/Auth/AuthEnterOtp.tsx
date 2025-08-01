import FormTitle from "@/components/FormTitle";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OTPVerification = () => {
  const navigate = useNavigate();
  const { email } = useParams<{ email: string }>();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    //  API call
    setTimeout(() => {
      setLoading(false);
      if (otp.length === 4) {
        console.log("OTP:", otp);
        // API call

        navigate(`/auth/invite/`);
      } else {
        setError("Veuillez entrer un code OTP valide");
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <img src="/work.png" alt="work-logo" />
      </div>

      <div className="w-full max-w-md p-6 space-y-4">
        <FormTitle
          title="Verification"
          comment={`Rentrez le code OTP envoyé à ${email}.`}
          snowStyle="w-full"
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <Label htmlFor="otp" className="mb-3 text-left w-full">
              Code OTP
            </Label>
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={setOtp}
              disabled={loading}
            >
              <InputOTPGroup className="space-x-3">
                <InputOTPSlot
                  index={0}
                  className="w-12 h-12 text-xl border-2 rounded-lg focus:border-blue-700 focus:ring-0 transition-al bg-gray-50"
                />
                <InputOTPSlot
                  index={1}
                  className="w-12 h-12 text-xl border-2 rounded-lg focus:border-blue-700 focus:ring-0 transition-all bg-gray-50"
                />
                <InputOTPSlot
                  index={2}
                  className="w-12 h-12 text-xl border-2 rounded-lg focus:border-blue-700 focus:ring-0 transition-all bg-gray-50"
                />
                <InputOTPSlot
                  index={3}
                  className="w-12 h-12 text-xl border-2 rounded-lg focus:border-blue-700 focus:ring-0 transition-all bg-gray-50"
                />
              </InputOTPGroup>
            </InputOTP>

            <div className="mt-4 text-sm text-gray-600">
              Vous n'avez pas reçu de code ?{" "}
              <button
                type="button"
                className="text-blue-500 hover:underline font-medium"
                onClick={() => {
                  // resend logic
                  console.log("Resend OTP");
                }}
              >
                Renvoyer
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-900 p-6 text-[1.1rem] font-semibold transition-all"
            disabled={loading || otp.length !== 4}
          >
            {loading ? "Vérification..." : "Vérifier le code OTP"}
          </Button>
        </form>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        {loading && (
          <div className="flex justify-center mt-4">
            <svg
              className="animate-spin h-6 w-6 text-worketblue"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 6.627 5.373 12 12 12a7.963 7.963 0 01-7.717-2.709z"
              ></path>
            </svg>
          </div>
        )}

        <p className="text-sm text-gray-500 mt-6 text-center">
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
                  : "bg-gray-300"
              } rounded-full transition-colors duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
