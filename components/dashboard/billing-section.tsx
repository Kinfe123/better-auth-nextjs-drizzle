import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconCreditCard, IconDownload } from "@tabler/icons-react";

export default function BillingSection() {
  const invoices = [
    { id: "INV-001", date: "Apr 1, 2023", amount: "$49.00", status: "Paid" },
    { id: "INV-002", date: "Mar 1, 2023", amount: "$49.00", status: "Paid" },
    { id: "INV-003", date: "Feb 1, 2023", amount: "$49.00", status: "Paid" },
    { id: "INV-004", date: "Jan 1, 2023", amount: "$49.00", status: "Paid" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Billing
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Manage your subscription, payment methods, and billing history.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-zinc-100 dark:bg-zinc-800 p-0.5">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="payment-methods"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950"
          >
            Payment Methods
          </TabsTrigger>
          <TabsTrigger
            value="invoices"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950"
          >
            Invoices
          </TabsTrigger>
          <TabsTrigger
            value="usage"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950"
          >
            Usage
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-zinc-900 dark:text-zinc-100">
                    Current Plan
                  </CardTitle>
                  <CardDescription className="text-zinc-500 dark:text-zinc-400">
                    You are currently on the Pro plan.
                  </CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-900">
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                    $49
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    per month
                  </p>
                </div>
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200">
                  Change plan
                </Button>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Next billing date
                  </p>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    May 1, 2023
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Billing cycle
                  </p>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    Monthly
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
            <CardHeader>
              <CardTitle className="text-zinc-900 dark:text-zinc-100">
                Usage
              </CardTitle>
              <CardDescription className="text-zinc-500 dark:text-zinc-400">
                Your current usage for this billing period.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    API Requests
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    12,543 / 50,000
                  </p>
                </div>
                <Progress
                  value={25}
                  className="h-2 bg-zinc-100 dark:bg-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    Storage
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    2.1 GB / 10 GB
                  </p>
                </div>
                <Progress
                  value={21}
                  className="h-2 bg-zinc-100 dark:bg-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    Team Members
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-400">3 / 10</p>
                </div>
                <Progress
                  value={30}
                  className="h-2 bg-zinc-100 dark:bg-zinc-800"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment-methods" className="space-y-6">
          <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
            <CardHeader>
              <CardTitle className="text-zinc-900 dark:text-zinc-100">
                Payment Methods
              </CardTitle>
              <CardDescription className="text-zinc-500 dark:text-zinc-400">
                Manage your payment methods and billing preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-14 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
                      <IconCreditCard className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-zinc-100">
                        •••• •••• •••• 4242
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Expires 04/2024
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-900">
                    Default
                  </Badge>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                Add payment method
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
            <CardHeader>
              <CardTitle className="text-zinc-900 dark:text-zinc-100">
                Invoices
              </CardTitle>
              <CardDescription className="text-zinc-500 dark:text-zinc-400">
                View and download your billing history.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-zinc-200 dark:border-zinc-800">
                <div className="grid grid-cols-4 border-b border-zinc-200 dark:border-zinc-800 py-3 px-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  <div>Invoice</div>
                  <div>Date</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                {invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="grid grid-cols-4 items-center py-3 px-4 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  >
                    <div className="font-medium text-zinc-900 dark:text-zinc-100">
                      {invoice.id}
                    </div>
                    <div className="text-zinc-500 dark:text-zinc-400">
                      {invoice.date}
                    </div>
                    <div className="text-zinc-500 dark:text-zinc-400">
                      {invoice.amount}
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-900">
                        {invoice.status}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto text-zinc-500 dark:text-zinc-400"
                      >
                        <IconDownload className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          <Card className="border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950">
            <CardHeader>
              <CardTitle className="text-zinc-900 dark:text-zinc-100">
                Usage Details
              </CardTitle>
              <CardDescription className="text-zinc-500 dark:text-zinc-400">
                Monitor your resource usage and limits.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">
                      API Requests
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      25% used
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-zinc-500 dark:text-zinc-400">
                      12,543 / 50,000
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Resets on May 1, 2023
                    </p>
                  </div>
                  <Progress
                    value={25}
                    className="h-2 bg-zinc-100 dark:bg-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">
                      Storage
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      21% used
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-zinc-500 dark:text-zinc-400">
                      2.1 GB / 10 GB
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Included in plan
                    </p>
                  </div>
                  <Progress
                    value={21}
                    className="h-2 bg-zinc-100 dark:bg-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">
                      Team Members
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      30% used
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-zinc-500 dark:text-zinc-400">3 / 10</p>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Included in plan
                    </p>
                  </div>
                  <Progress
                    value={30}
                    className="h-2 bg-zinc-100 dark:bg-zinc-800"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
