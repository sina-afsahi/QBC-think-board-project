import { format } from "date-fns";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { NoteType } from "@/types/note.type";

interface NoteDetailModalProps {
  note: NoteType | null;
  onClose: () => void;
}

export const NoteDetailModal = ({ note, onClose }: NoteDetailModalProps) => {
  if (!note) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-amber-950/40 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <Card
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg border-amber-300 bg-card shadow-xl"
      >
        <CardHeader className="flex flex-row items-start justify-between gap-4 border-b border-amber-200/70 pb-3">
          <CardTitle dir="auto" className="text-lg font-bold text-amber-950">
            {note.title}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="size-8 rounded-full text-amber-900 hover:bg-amber-200/60"
          >
            <X className="!size-4" />
          </Button>
        </CardHeader>

        <CardContent className="py-4 max-h-[60vh] overflow-y-auto">
          <p
            dir="auto"
            className="text-sm leading-relaxed text-amber-950 whitespace-pre-wrap"
          >
            {note.content}
          </p>
        </CardContent>

        <CardFooter className="border-t border-amber-200/70 pt-3 flex flex-col items-start gap-1 text-xs text-muted-foreground">
          <span>Created: {format(new Date(note.createdAt), "PPpp")}</span>
          <span>Last Updated: {format(new Date(note.updatedAt), "PPpp")}</span>
        </CardFooter>
      </Card>
    </div>
  );
};