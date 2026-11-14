import { Input } from "@/components/ui/input";

export type SortOption = "Newest First" | "Oldest First";

interface NoteFilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
}

export const NoteFilterBar = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: NoteFilterBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6 items-stretch sm:items-center justify-between">
      <div className="w-full sm:w-80">
        <Input
          dir="auto"
          placeholder="Search notes by title or content"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-amber-50/70 border-amber-300/90 placeholder:text-amber-900/40"
        />
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-2">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Sort by:
        </span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="h-9 rounded-md border border-amber-300/90 bg-amber-50/70 px-3 py-1 text-sm text-amber-950 shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="Newest First">Newest First</option>
          <option value="Oldest First">Oldest First</option>
        </select>
      </div>
    </div>
  );
};