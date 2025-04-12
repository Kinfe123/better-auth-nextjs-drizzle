"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Upload } from "lucide-react";
import { Session, User } from "better-auth";

export function ProfileSection({
  session,
}: {
  session: { user: User; session: Session };
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(session.user.name);
  const [email, setEmail] = useState(session.user.email);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Profile
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Manage your personal information and how it appears to others.
        </p>
      </div>

      <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-transparent">
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-zinc-100">
            Profile Picture
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400">
            This will be displayed on your profile.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
          <Avatar className="h-24 w-24 border border-zinc-200 dark:border-zinc-800">
            <AvatarImage src={session.user.image!} alt="User" />

            <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800 text-xl text-zinc-800 dark:text-zinc-200">
              {session.user.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-2">
            <Button
              variant="outline"
              className="border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload new image
            </Button>
            <Button
              variant="ghost"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Remove
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-200 dark:border-zinc-800 border dark:bg-transparent">
        <CardHeader>
          <CardTitle className="text-zinc-900 dark:text-zinc-100">
            Personal Information
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400">
            Update your personal details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-zinc-900 dark:text-zinc-100"
              >
                First name
              </Label>
              <Input
                id="firstName"
                value={session.user.name}
                defaultValue="John"
                disabled={!isEditing}
                className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-zinc-900 dark:text-zinc-100"
              >
                Last name
              </Label>
              <Input
                id="lastName"
                defaultValue="Doe"
                disabled={!isEditing}
                className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-zinc-900 dark:text-zinc-100">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              value={session.user.email}
              defaultValue="john.doe@example.com"
              disabled={!isEditing}
              className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-zinc-900 dark:text-zinc-100">
              Phone number
            </Label>
            <Input
              id="phone"
              type="tel"
              defaultValue="+1 (555) 123-4567"
              disabled={!isEditing}
              className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2 border-t border-zinc-100 dark:border-zinc-800 px-6 py-4">
          {isEditing ? (
            <>
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsEditing(false)}
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
              >
                Save changes
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Edit profile
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
