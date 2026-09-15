"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { Eye, EyeOff } from "lucide-react";

export function AuthSignUpForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const passwordInputType = isPasswordVisible ? "text" : "password";
  const confirmPasswordInputType = isConfirmPasswordVisible ? "text" : "password";
  const passwordToggleLabel = isPasswordVisible ? "Hide password" : "Show password";
  const confirmPasswordToggleLabel = isConfirmPasswordVisible
    ? "Hide re-enter password"
    : "Show re-enter password";
  const PasswordIcon = isPasswordVisible ? EyeOff : Eye;
  const ConfirmPasswordIcon = isConfirmPasswordVisible ? EyeOff : Eye;

  function handlePasswordVisibilityToggle() {
    setIsPasswordVisible((currentVisibility) => !currentVisibility);
  }

  function handleConfirmPasswordVisibilityToggle() {
    setIsConfirmPasswordVisible((currentVisibility) => !currentVisibility);
  }

  return (
    <form className="auth-sign-up-form">
      <div className="auth-form-header">
        <h2 className="auth-form-title">Sign Up</h2>
        <p className="auth-form-subtitle">
          Get started with Kelola, starting today
        </p>
      </div>

      <div className="auth-form-fields auth-sign-up-fields">
        <label className="auth-form-field" htmlFor="sign-up-email">
          <span className="auth-form-label">Email</span>
          <input
            id="sign-up-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="auth-form-input"
          />
        </label>

        <label className="auth-form-field" htmlFor="sign-up-password">
          <span className="auth-form-label">Password</span>
          <span className="auth-form-input-wrap">
            <input
              id="sign-up-password"
              name="password"
              type={passwordInputType}
              autoComplete="new-password"
              placeholder="Enter your password"
              className="auth-form-input auth-form-input-has-icon"
            />
            <button
              type="button"
              className="auth-password-toggle"
              onClick={handlePasswordVisibilityToggle}
              aria-label={passwordToggleLabel}
              aria-pressed={isPasswordVisible}
            >
              <PasswordIcon className="size-3.5" />
            </button>
          </span>
        </label>

        <label className="auth-form-field" htmlFor="sign-up-confirm-password">
          <span className="auth-form-label">Re-enter password</span>
          <span className="auth-form-input-wrap">
            <input
              id="sign-up-confirm-password"
              name="confirmPassword"
              type={confirmPasswordInputType}
              autoComplete="new-password"
              placeholder="Confirm your password"
              className="auth-form-input auth-form-input-has-icon"
            />
            <button
              type="button"
              className="auth-password-toggle"
              onClick={handleConfirmPasswordVisibilityToggle}
              aria-label={confirmPasswordToggleLabel}
              aria-pressed={isConfirmPasswordVisible}
            >
              <ConfirmPasswordIcon className="size-3.5" />
            </button>
          </span>
        </label>
      </div>

      <div className="auth-form-options auth-sign-up-options">
        <div className="auth-remember-label">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            defaultChecked
            className="auth-remember-checkbox"
            aria-describedby="terms-description"
          />
          <span id="terms-description">
            I agree to{" "}
            <Link href="#" className="auth-form-footer-link">
              Terms &amp; Conditions
            </Link>
          </span>
        </div>
      </div>

      <button className="auth-submit-button auth-sign-up-submit" type="submit">
        Sign Up
      </button>

      <div className="auth-divider-row auth-sign-up-divider">
        <span>Or continue with</span>
      </div>

      <div className="auth-social-row" role="group" aria-label="Social sign up options">
        <button className="auth-social-button" type="button" aria-label="Continue with Google">
          G
        </button>
        <button className="auth-social-button" type="button" aria-label="Continue with X">
          X
        </button>
        <button
          className="auth-social-button auth-social-button-facebook"
          type="button"
          aria-label="Continue with Facebook"
        >
          f
        </button>
      </div>

      <p className="auth-form-footer">
        Already have an account?{" "}
        <Link href={ROUTES.login} className="auth-form-footer-link">
          Login
        </Link>
      </p>
    </form>
  );
}
