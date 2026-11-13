import { NoteForm } from "@/components/notes/NoteForm";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b border-amber-300/70 bg-amber-100/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-amber-950">
            Think Board
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-5xl px-4 py-8">
        <NoteForm />
      </main>
    </div>
  );
};

export default App;