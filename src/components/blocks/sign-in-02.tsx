import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M15.68 8.18c0-.57-.05-1.12-.14-1.64H8v3.1h4.3a3.68 3.68 0 0 1-1.59 2.41v2h2.58c1.5-1.38 2.4-3.42 2.4-5.87z" fill="#4285F4" />
      <path d="M8 16c2.16 0 3.97-.71 5.3-1.94l-2.58-2a4.77 4.77 0 0 1-7.1-2.5H1v2.06A8 8 0 0 0 8 16z" fill="#34A853" />
      <path d="M3.62 9.56A4.8 4.8 0 0 1 3.37 8c0-.54.1-1.07.25-1.56V4.38H1A8 8 0 0 0 0 8c0 1.29.31 2.51.86 3.6l2.76-2.04z" fill="#FBBC05" />
      <path d="M8 3.18c1.22 0 2.3.42 3.16 1.24l2.36-2.36A8 8 0 0 0 1 4.38l2.76 2.06A4.77 4.77 0 0 1 8 3.18z" fill="#EA4335" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M11.182 0a4.24 4.24 0 0 1-1.019 2.795 3.41 3.41 0 0 1-2.865 1.359 3.79 3.79 0 0 1 .953-2.728A4.01 4.01 0 0 1 11.182 0zM14 11.476c-.307.95-.766 1.84-1.369 2.647-.827 1.113-1.687 2.228-2.928 2.25-1.214.022-1.609-.694-2.997-.694-1.389 0-1.826.673-2.972.716-1.196.04-2.1-1.173-2.93-2.283C-.4 11.36-.903 7.26 1.04 4.59A4.47 4.47 0 0 1 4.823 2.5c1.2-.022 2.332.741 3.062.741.73 0 2.104-.914 3.542-.782A4.27 4.27 0 0 1 14.85 4.07c-3.237 1.927-2.71 6.198.15 7.406z" />
    </svg>
  )
}

export function SignIn02() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      {/* Left panel */}
      <div className="flex flex-col items-center justify-center bg-background px-6 py-24">
        <div className="flex w-full max-w-[384px] flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
            <p className="text-sm text-muted-foreground">
              Log in to unlock tailored content and stay connected with your community.
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-center gap-2">
              <GoogleIcon />
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full justify-center gap-2">
              <AppleIcon />
              Sign in with Apple
            </Button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-02">Email</Label>
              </div>
              <Input id="email-02" type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password-02">Password</Label>
                <a href="#" className="text-sm text-foreground underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <Input id="password-02" type="password" placeholder="Password" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember-02" />
              <Label htmlFor="remember-02" className="font-normal text-muted-foreground">
                Remember me
              </Label>
            </div>
          </div>

          {/* Submit */}
          <Button className="w-full">
            Sign in
            <ArrowRight />
          </Button>

          {/* Sign up link */}
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-foreground underline-offset-4 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="hidden bg-muted lg:block" />
    </div>
  )
}
