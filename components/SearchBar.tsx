"use client";

export default function SearchBar({
  searchQuery,
  onSearch,
}: {
  searchQuery: string;
  onSearch: (term: string) => void;
}) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search for properties..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
