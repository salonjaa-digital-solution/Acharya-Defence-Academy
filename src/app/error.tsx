"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Something went wrong
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        An error occurred
      </h1>
      <p className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Try again
      </button>
    </div>
  );
}
