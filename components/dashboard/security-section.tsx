import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SecuritySection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Security
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Manage your password and account security settings.
        </p>
      </div>

      <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-zinc-100">
            Change Password
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400">
            Update your password to keep your account secure.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="currentPassword"
              className="text-zinc-900 dark:text-zinc-100"
            >
              Current password
            </Label>
            <Input
              id="currentPassword"
              type="password"
              className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="newPassword"
              className="text-zinc-900 dark:text-zinc-100"
            >
              New password
            </Label>
            <Input
              id="newPassword"
              type="password"
              className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="confirmPassword"
              className="text-zinc-900 dark:text-zinc-100"
            >
              Confirm new password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t border-zinc-100 dark:border-zinc-800 px-6 py-4">
          <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200">
            Update password
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-zinc-100">
            Two-Factor Authentication
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400">
            Add an extra layer of security to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                Text Message Authentication
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Receive a code via SMS to verify your identity when signing in.
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                Authenticator App
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Use an authenticator app to generate verification codes.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-zinc-100">
            Sessions
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400">
            Manage your active sessions and devices.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-0.5">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                  Current Session
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Chrome on macOS • San Francisco, CA • Active now
                </p>
              </div>
              <div className="text-sm font-medium text-green-600 dark:text-green-500">
                Current
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="space-y-0.5">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                  Mobile App
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  iOS 16 • San Francisco, CA • Last active 2 hours ago
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Sign out
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t border-zinc-100 dark:border-zinc-800 px-6 py-4">
          <Button
            variant="outline"
            className="border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            Sign out all devices
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
