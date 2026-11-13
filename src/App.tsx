import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NoteCard } from "@/components/notes/NoteCard";
import { NoteDetailModal } from "@/components/notes/NoteDetailModal";
import { NoteFilterBar } from "@/components/notes/NoteFilterBar";
import { NoteForm } from "@/components/notes/NoteForm";
import { NoteSkeleton } from "@/components/notes/NoteSkeleton";
import axiosInstance from "@/lib/axios";
import type { NoteType } from "@/types/note.type";
import type { ResponseType } from "@/types/response.type";

const App = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState<NoteType | null>(null);

  const fetchNotes = () => {
    setIsLoading(true);

    axiosInstance
      .get<ResponseType<NoteType[]>>("/notes")
      .then((response) => {
        if (response.data.response) {
          setNotes(response.data.response);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to fetch notes");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />

      <header className="border-b border-amber-300/70 bg-amber-100/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-amber-950">
            Think Board
          </h1>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-8">
        <NoteForm onNoteCreated={fetchNotes} />
        <NoteFilterBar />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <NoteSkeleton />
            <NoteSkeleton />
            <NoteSkeleton />
            <NoteSkeleton />
            <NoteSkeleton />
            <NoteSkeleton />
          </div>
        ) : notes.length === 0 ? (
          <p className="text-center text-muted-foreground py-10">
            No notes found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onView={() => setSelectedNote(note)}
              />
            ))}
          </div>
        )}
      </main>
      <NoteDetailModal
        note={selectedNote}
        onClose={() => setSelectedNote(null)}
      />
    </div>
  );
};

export default App;