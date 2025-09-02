import Link from "next/link";
import ShowSchools from "./showSchools/page"; // better: extract into components/ShowSchools

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header row: responsive layout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center sm:text-left ">
          FIND THE BEST SCHOOL FOR YOUR CHILD
        </h1>

        <div className="flex justify-center sm:justify-end gap-3">
          <Link
            href="/addSchool"
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium shadow hover:bg-gray-300 transition"
          >
            ➕ Add School
          </Link>
        </div>
      </div>

      {/* ShowSchools component renders the grid/list */}
      <ShowSchools />
    </div>
  );
}
