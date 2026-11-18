import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export const NoteSkeleton = () => {
  return (
    <Card className="flex flex-col justify-between border-[#dfd5c5] bg-card shadow-sm">
      <div>
        <CardHeader className="pb-2">
          <div className="h-5 w-2/3 animate-pulse rounded-md bg-[#e8dfd0]" />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded-md bg-[#e8dfd0]" />
          <div className="h-4 w-5/6 animate-pulse rounded-md bg-[#e8dfd0]" />
          <div className="h-4 w-4/6 animate-pulse rounded-md bg-[#e8dfd0]" />
        </CardContent>
      </div>

      <CardFooter className="mt-4 flex items-center justify-between border-t border-[#dfd5c5] pt-4">
        <div className="h-3.5 w-20 animate-pulse rounded-md bg-[#e8dfd0]" />
        <div className="flex items-center gap-2">
          <div className="size-9 animate-pulse rounded-full bg-[#e8dfd0]" />
          <div className="size-9 animate-pulse rounded-full bg-[#e8dfd0]" />
          <div className="size-9 animate-pulse rounded-full bg-[#e8dfd0]" />
        </div>
      </CardFooter>
    </Card>
  );
};