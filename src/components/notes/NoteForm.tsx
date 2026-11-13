import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const NoteForm = () => {
  return (
    <Card className="mb-8 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          Create a New Note
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Input
              placeholder="Note title"
              className="font-medium"
            />
          </div>
          <div>
            <Textarea
              placeholder="Write your thoughts here"
              rows={4}
            />
          </div>
          <div className="flex justify-end">
            <Button className="gap-2">
              Add Note
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};