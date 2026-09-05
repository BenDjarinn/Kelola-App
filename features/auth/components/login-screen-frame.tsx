import { AuthSignInForm } from "./auth-sign-in-form";
import { AuthScreenFrame } from "./auth-screen-frame";

export function LoginScreenFrame() {

  return (
    <AuthScreenFrame>
      <AuthSignInForm />
    </AuthScreenFrame>
  );
}
