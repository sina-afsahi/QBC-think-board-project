import { NoteCard } from "@/components/notes/NoteCard";
import { NoteFilterBar } from "@/components/notes/NoteFilterBar";
import { NoteForm } from "@/components/notes/NoteForm";
import type { NoteType } from "@/types/note.type";

const TestNote: NoteType[] = [
  {
    id: "1",
    title: "Test1",
    content:
      "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: "2",
    title: "Test2",
    content:
      "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
  {
    id: "3",
    title: "Test3",
    content:
      "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-amber-300/70 bg-amber-100/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-amber-950">
            Think Board
          </h1>
        </div>
      </header>
      <main className="container mx-auto max-w-5xl px-4 py-8">
        <NoteForm />
        <NoteFilterBar />
        <div className="grid grid-cols-3 gap-4">
          {TestNote.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
