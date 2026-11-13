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
}

export const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <Card className="flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow border-amber-300/80 bg-card">
      <div>
        <CardHeader className="pb-2">
          <CardTitle
            dir="auto"
            className="text-base font-semibold text-amber-950 line-clamp-1"
          >
            {note.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3 whitespace-pre-wrap">
            {note.content}
          </p>
        </CardContent>
      </div>

      <CardFooter className="pt-4 border-t border-amber-200/70 flex items-center justify-between gap-2 mt-4">
        <span className="text-xs text-muted-foreground">
          {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
        </span>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="size-9 rounded-full border-amber-300 bg-amber-50/50 text-amber-900 hover:bg-amber-200/60 hover:text-amber-950"
            title="View note"
          >
            <Eye className="!size-4.5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-9 rounded-full border-amber-300 bg-amber-50/50 text-amber-900 hover:bg-amber-200/60 hover:text-amber-950"
            title="Edit note"
          >
            <Pencil className="!size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-9 rounded-full border-rose-300 bg-rose-50/50 text-rose-600 hover:bg-rose-100 hover:text-rose-700"
            title="Delete note"
          >
            <Trash2 className="!size-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};