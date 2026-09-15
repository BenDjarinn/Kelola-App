"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { Eye, EyeOff } from "lucide-react";

export function AuthSignInForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordInputType = isPasswordVisible ? "text" : "password";
  const passwordToggleLabel = isPasswordVisible ? "Hide password" : "Show password";
  const PasswordIcon = isPasswordVisible ? EyeOff : Eye;

  function handlePasswordVisibilityToggle() {
    setIsPasswordVisible((currentVisibility) => !currentVisibility);
  }

  return (
    <form className="auth-sign-in-form">
      <div className="auth-form-header">
        <h2 className="auth-form-title">Sign In</h2>
        <p className="auth-form-subtitle">
          Enter your email and password to access your account
        </p>
      </div>

      <div className="auth-form-fields">
        <label className="auth-form-field" htmlFor="email">
          <span className="auth-form-label">Email</span>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="auth-form-input"
          />
        </label>

        <label className="auth-form-field" htmlFor="password">
          <span className="auth-form-label">Password</span>
          <span className="auth-form-input-wrap">
            <input
              id="password"
              name="password"
              type={passwordInputType}
              autoComplete="current-password"
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
      </div>

      <div className="auth-form-options">
        <label className="auth-remember-label" htmlFor="remember">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            defaultChecked
            className="auth-remember-checkbox"
          />
          <span>Remember me</span>
        </label>
        <Link href="#" className="auth-forgot-link">
          Forgot Password?
        </Link>
      </div>

      <button className="auth-submit-button" type="submit">
        Login
      </button>

      <div className="auth-divider-row">
        <span>Or continue with</span>
      </div>

      <div className="auth-social-row" role="group" aria-label="Social sign in options">
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
        Don&apos;t have an account?{" "}
        <Link href={ROUTES.signUp} className="auth-form-footer-link">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
