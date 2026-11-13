import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-amber-950/40 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <Card
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md border-amber-300 bg-card shadow-xl"
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold text-amber-950">
            Delete Note
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this note?
          </p>
          <p className="text-sm text-muted-foreground">
            This action cannot be undone.
          </p>
        </CardContent>

        <CardFooter className="flex justify-end gap-2 pt-3 border-t border-amber-200/70">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-amber-300 bg-amber-50/50 hover:bg-amber-100 text-amber-950"
          >
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};