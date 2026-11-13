import { NoteForm } from "@/components/notes/NoteForm";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div>
              <h1 className="text-xl font-bold tracking-tight">Think Board</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto max-w-5xl px-4 py-8">
        <NoteForm />
      </main>
    </div>
  );
};

export default App;
