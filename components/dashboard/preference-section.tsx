"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export function PreferencesSection() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Preferences
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Customize your account settings and notification preferences.
        </p>
      </div>

      <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-zinc-100">
            Language & Region
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400">
            Set your language and regional preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="language"
              className="text-zinc-900 dark:text-zinc-100"
            >
              Language
            </Label>
            <Select defaultValue="en">
              <SelectTrigger
                id="language"
                className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
              >
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="pt">Portuguese</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="timezone"
              className="text-zinc-900 dark:text-zinc-100"
            >
              Time zone
            </Label>
            <Select defaultValue="pst">
              <SelectTrigger
                id="timezone"
                className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
              >
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                <SelectItem value="mst">
                  Mountain Standard Time (MST)
                </SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-zinc-100">
            Notifications
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400">
            Configure how you receive notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                Email Notifications
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Receive notifications about account activity via email.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                Push Notifications
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Receive notifications on your device when you're signed in.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                Marketing Emails
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Receive emails about new features, products, and offers.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-zinc-100">
            Appearance
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400">
            Customize how the interface looks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={theme}
            onValueChange={setTheme}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="light" />
              <Label
                htmlFor="light"
                className="font-normal text-zinc-900 dark:text-zinc-100"
              >
                Light
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" />
              <Label
                htmlFor="dark"
                className="font-normal text-zinc-900 dark:text-zinc-100"
              >
                Dark
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="system" />
              <Label
                htmlFor="system"
                className="font-normal text-zinc-900 dark:text-zinc-100"
              >
                System
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-end border-t border-zinc-100 dark:border-zinc-800 px-6 py-4">
          <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200">
            Save preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
