"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          Prototype Starter
        </h1>
        <p className="text-base leading-relaxed text-pretty text-muted-foreground">
          A blank foundation for live product tests.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <Button type="button">Continue</Button>
        <Button type="button" variant="secondary">
          Cancel
        </Button>
        <Button type="button" variant="destructive">
          Delete
        </Button>
      </div>

      <form
        className="flex flex-col gap-3 sm:flex-row sm:items-end"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <label htmlFor="example-text" className="text-sm font-medium">
            Text
          </label>
          <Input id="example-text" name="text" placeholder="Enter text" />
        </div>
        <div className="flex w-full flex-col gap-1.5 sm:w-44">
          <label htmlFor="example-option" className="text-sm font-medium">
            Option
          </label>
          <Select>
            <SelectTrigger id="example-option" className="w-full">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="one">Option one</SelectItem>
              <SelectItem value="two">Option two</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Save changes
        </Button>
      </form>

      <div className="flex flex-wrap gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" variant="outline">
              Open dialog
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog</DialogTitle>
              <DialogDescription>Placeholder content.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="button">Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Sheet>
          <SheetTrigger asChild>
            <Button type="button" variant="outline">
              Open sheet
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet</SheetTitle>
              <SheetDescription>Placeholder content.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
          <TabsTrigger value="three">Three</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Placeholder content.</TabsContent>
        <TabsContent value="two">Placeholder content.</TabsContent>
        <TabsContent value="three">Placeholder content.</TabsContent>
      </Tabs>

      <div aria-busy="true" className="flex flex-col gap-2">
        <span className="sr-only">Loading</span>
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>

      <div className="rounded-xl border border-dashed bg-card px-4 py-6">
        <h2 className="text-sm font-medium">No items yet</h2>
        <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
          There is nothing here yet.
        </p>
      </div>

      <div>
        <Button type="button" variant="outline" onClick={() => toast("Saved")}>
          Show toast
        </Button>
      </div>
    </main>
  );
}
