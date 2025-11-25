import { Loading, SkeletonCard } from "@/components/ui/Loading";
import { Container } from "@/components/ui/Container";

export default function LoadingPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Loading size="lg" />
        </div>
    );
}



