"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            // TODO: Replace with actual API endpoint
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            toast.success("Message sent successfully! I'll get back to you soon.");
            reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to send message. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    label="Name"
                    id="name"
                    placeholder="John Doe"
                    error={errors.name?.message}
                    {...register("name")}
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                />
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    error={errors.email?.message}
                    {...register("email")}
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                />
            </div>

            <Input
                label="Subject"
                id="subject"
                placeholder="Project Inquiry"
                error={errors.subject?.message}
                {...register("subject")}
                required
                disabled={isSubmitting}
                aria-required="true"
            />

            <Textarea
                label="Message"
                id="message"
                rows={6}
                placeholder="Tell me about your project..."
                error={errors.message?.message}
                {...register("message")}
                required
                disabled={isSubmitting}
                aria-required="true"
            />

            <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full !bg-[#F97316] !text-white hover:!bg-[#EA580C] shadow-lg shadow-orange-500/40"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message <Send size={18} className="ml-2" />
                    </>
                )}
            </Button>
        </form>
    );
}

