import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const NoteForm = () => {
  return (
    <Card className="mb-8 shadow-sm border-amber-300/80 bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium w-fit">
          Create a New Note
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <Input
              dir="auto"
              placeholder="Note title"
              className="font-medium bg-amber-50/70 border-amber-300/90 placeholder:text-amber-900/40"
            />
          </div>
          <div>
            <Textarea
              dir="auto"
              placeholder="Write your thoughts here"
              rows={4}
              className="resize-none bg-amber-50/70 border-amber-300/90 placeholder:text-amber-900/40"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Add Note</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};