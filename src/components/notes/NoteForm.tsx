import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axiosInstance from "@/lib/axios";
import type { NoteType } from "@/types/note.type";
import type { ResponseType } from "@/types/response.type";

interface NoteFormProps {
  editingNote: NoteType | null;
  onNoteSaved: () => void;
  onCancelEdit: () => void;
}

export const NoteForm = ({
  editingNote,
  onNoteSaved,
  onCancelEdit,
}: NoteFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in both title and content");
      return;
    }

    setIsSubmitting(true);

    if (editingNote) {
      axiosInstance
        .put<ResponseType<NoteType>>(`/notes/${editingNote.id}`, {
          title: title.trim(),
          content: content.trim(),
        })
        .then(() => {
          toast.success("Note updated successfully");
          setTitle("");
          setContent("");
          onCancelEdit();
          onNoteSaved();
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to update note");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      axiosInstance
        .post<ResponseType<NoteType>>("/notes", {
          title: title.trim(),
          content: content.trim(),
        })
        .then(() => {
          toast.success("Note created successfully");
          setTitle("");
          setContent("");
          onNoteSaved();
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to create note");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <Card className="mb-8 shadow-sm border-amber-300/80 bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium w-fit">
          {editingNote ? "Edit Note" : "Create a New Note"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              dir="auto"
              placeholder="Note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isSubmitting}
              className="font-medium bg-amber-50/70 border-amber-300/90 placeholder:text-amber-900/40"
            />
          </div>
          <div>
            <Textarea
              dir="auto"
              placeholder="Write your thoughts here"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isSubmitting}
              className="resize-none bg-amber-50/70 border-amber-300/90 placeholder:text-amber-900/40"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-end gap-2">
            {editingNote && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancelEdit}
                disabled={isSubmitting}
                className="w-full sm:w-auto border-amber-300 bg-amber-50/50 hover:bg-amber-100 text-amber-950"
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting
                ? editingNote
                  ? "Updating..."
                  : "Adding..."
                : editingNote
                  ? "Update Note"
                  : "Add Note"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
