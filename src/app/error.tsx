"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { AlertCircle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

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
                <CardContent>
                    {error.digest && (
                        <details className="mt-4">
                            <summary className="cursor-pointer text-sm text-gray-dark dark:text-gray-light mb-2">
                                Error details
                            </summary>
                            <pre className="text-xs bg-gray-light dark:bg-gray-medium p-2 rounded overflow-auto">
                                {error.message}
                            </pre>
                        </details>
                    )}
                </CardContent>
                <CardFooter>
                    <Button onClick={reset} variant="primary">
                        Try again
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

