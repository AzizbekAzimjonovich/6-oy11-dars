import { useSignup } from "../Hooks/useSignup";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const { signupWithGoogle, user, error } = useSignup();
  return (
    <div className="min-h-screen grid place-items-center">
      <button onClick={signupWithGoogle} className="btn btn-primary">
        <FcGoogle className="text-2xl" />
        <span className="text-2xl">google</span>
      </button>
    </div>
  );
}

export default Signup;
