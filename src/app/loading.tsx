export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 items-center justify-center px-6 py-24">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-black dark:border-zinc-700 dark:border-t-white" />
    </div>
  );
}
