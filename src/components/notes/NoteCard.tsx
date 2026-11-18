import { formatDistanceToNow } from "date-fns";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { NoteType } from "@/types/note.type";

interface NoteCardProps {
  note: NoteType;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const NoteCard = ({ note, onView, onEdit, onDelete }: NoteCardProps) => {
  return (
    <Card className="flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#c2591a]/50 transition-all border-[#dfd5c5] bg-card">
      <div>
        <CardHeader className="pb-2">
          <CardTitle
            dir="auto"
            className="ext-base font-semibold text-[#1b354b] line-clamp-1 break-words"
          >
            {note.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            dir="auto"
            className="text-sm text-[#5c6b78] line-clamp-3 whitespace-pre-wrap break-words"
          >
            {note.content}
          </p>
        </CardContent>
      </div>

      <CardFooter className="pt-3 border-t border-[#ece3d5] bg-[#faf6ee]/60 rounded-b-xl flex items-center justify-between gap-2 mt-4">
        <span className="text-xs text-muted-foreground">
          {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
        </span>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onView}
            className="size-9 rounded-full border-[#1b354b]/25 bg-[#1b354b]/5 text-[#1b354b] hover:bg-[#1b354b] hover:text-white cursor-pointer"
            title="View note"
          >
            <Eye className="!size-4.5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onEdit}
            className="size-9 rounded-full border-[#c2591a]/30 bg-[#c2591a]/10 text-[#c2591a] hover:bg-[#c2591a] hover:text-white cursor-pointer"
            title="Edit note"
          >
            <Pencil className="!size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onDelete}
            className="size-9 rounded-full border-rose-300 bg-rose-50/50 text-rose-600 hover:bg-rose-100 hover:text-rose-700 cursor-pointer"
            title="Delete note"
          >
            <Trash2 className="!size-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};