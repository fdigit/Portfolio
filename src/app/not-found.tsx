"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="max-w-md w-full text-center">
                <CardHeader>
                    <div className="text-6xl font-bold text-primary mb-4">404</div>
                    <CardTitle>Page Not Found</CardTitle>
                    <CardDescription>
                        The page you're looking for doesn't exist or has been moved.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-dark dark:text-gray-light">
                        Let's get you back on track.
                    </p>
                </CardContent>
                <CardFooter className="flex gap-4 justify-center">
                    <Link href="/">
                        <Button variant="primary">
                            <Home size={18} className="mr-2" />
                            Go Home
                        </Button>
                    </Link>
                    <Button variant="outline" onClick={() => window.history.back()}>
                        <ArrowLeft size={18} className="mr-2" />
                        Go Back
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

