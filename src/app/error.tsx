"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { AlertCircle } from "lucide-react";

export default function Error({
    error: _error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    void _error;

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="max-w-md w-full">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <CardTitle>Something went wrong</CardTitle>
                    </div>
                    <CardDescription>
                        An unexpected error occurred. Please try again.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button onClick={reset} variant="primary">
                        Try again
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}






