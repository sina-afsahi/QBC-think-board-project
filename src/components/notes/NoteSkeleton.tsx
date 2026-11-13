import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export const NoteSkeleton = () => {
  return (
    <Card className="flex flex-col justify-between border-amber-300/80 bg-card shadow-sm">
      <div>
        <CardHeader className="pb-2">
          <div className="h-5 w-2/3 animate-pulse rounded-md bg-amber-200/70" />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded-md bg-amber-200/50" />
          <div className="h-4 w-5/6 animate-pulse rounded-md bg-amber-200/50" />
          <div className="h-4 w-4/6 animate-pulse rounded-md bg-amber-200/50" />
        </CardContent>
      </div>

      <CardFooter className="mt-4 flex items-center justify-between border-t border-amber-200/70 pt-4">
        <div className="h-3.5 w-20 animate-pulse rounded-md bg-amber-200/60" />
        <div className="flex items-center gap-2">
          <div className="size-9 animate-pulse rounded-full bg-amber-200/70" />
          <div className="size-9 animate-pulse rounded-full bg-amber-200/70" />
          <div className="size-9 animate-pulse rounded-full bg-amber-200/70" />
        </div>
      </CardFooter>
    </Card>
  );
};