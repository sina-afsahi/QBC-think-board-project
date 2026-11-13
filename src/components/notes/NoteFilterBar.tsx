import { Input } from "@/components/ui/input";

export const NoteFilterBar = () => {
  return (
    <div className="flex gap-3 mb-6 items-center justify-between">
      <div className="w-80">
        <Input
          dir="auto"
          placeholder="Search notes by title or content"
          className="bg-amber-50/70 border-amber-300/90 placeholder:text-amber-900/40"
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Sort by:
        </span>
        <select className="h-9 rounded-md border border-amber-300/90 bg-amber-50/70 px-3 py-1 text-sm text-amber-950 shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <option>Newest First</option>
          <option>Oldest First</option>
        </select>
      </div>
    </div>
  );
};