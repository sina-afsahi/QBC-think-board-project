import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const NoteForm = () => {
  return (
    <Card className="mb-8 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium w-fit">
          Create a New Note
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <Input placeholder="Note title" className="font-medium" />
          </div>
          <div>
            <Textarea
              placeholder="Write your thoughts here"
              rows={4}
              className="resize-none"
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