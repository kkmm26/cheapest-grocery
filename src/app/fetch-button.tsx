"use client";

export function FetchButton({fetcher}) {

  return (
    <button
      onClick={() => fetcher()}
      className="rounded-md border-2 border-solid border-red-700 bg-amber-500 px-4 py-2 text-white hover:bg-amber-600 hover:text-black active:bg-amber-700 active:text-white"
    >
      Fetch
    </button>
  );
}
