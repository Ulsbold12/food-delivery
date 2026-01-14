import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const AddCards = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl">
          +
        </button>
      </DialogTrigger>

      <DialogContent
        className="
          fixed left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          max-w-md
        ">
        <h2 className="text-lg font-semibold">Add new Dish to Appetizers</h2>
        {/* энд form / input */}
      </DialogContent>
    </Dialog>
  );
};
