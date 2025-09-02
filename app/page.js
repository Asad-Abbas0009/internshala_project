// // import Link from "next/link";

// // export default function HomePage() {
// //   return (
// //     <div className="max-w-6xl mx-auto p-6 space-y-6">
// //       {/* Top navigation buttons */}
// //       <div className="flex justify-end gap-3 mb-6">
// //         <Link
// //           href="/addSchool"
// //           className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
// //         >
// //           ➕ Add School
// //         </Link>
// //         <Link
// //           href="/showSchools"
// //           className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium shadow hover:bg-gray-300 transition"
// //         >
// //           📋 Show Schools
// //         </Link>
// //       </div>

// //       {/* Main content */}
// //       <h1 className="text-2xl font-bold">Welcome to School Manager</h1>
// //       <p className="text-foreground/70">
// //         Use the buttons above to add a new school or explore the existing list.
// //       </p>
// //     </div>
// //   );
// // }
// import Link from "next/link";
// import ShowSchools from "./showSchools/page"; // assuming you extracted the list here

// export default function HomePage() {
//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-6">
//       {/* Buttons at the top */}
//       <div className="flex justify-between gap-3 mb-6">
//          <h1 className="text-2xl font-bold">FIND THE BEST SCHOOL FOR YOUR CHILD</h1>
//         <Link
//           href="/addSchool"
//           className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
//         >
//           ➕ Add School
//         </Link>
//         <Link
//           href="/showSchools"
//           className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium shadow hover:bg-gray-300 transition"
//         >
//           📋 Show Schools
//         </Link>
       

//       </div>

//       {/* Heading */}
      
//       {/* ShowSchools component renders the grid/list */}
//       <ShowSchools />
//     </div>
//   );
// }
import Link from "next/link";
import ShowSchools from "./showSchools/page"; // better: extract into components/ShowSchools

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header row: heading left, buttons right */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">
          FIND THE BEST SCHOOL FOR YOUR CHILD
        </h1>
        <div className="flex gap-3">
          <Link
            href="/addSchool"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            ➕ Add School
          </Link>
          <Link
            href="/showSchools"
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium shadow hover:bg-gray-300 transition"
          >
            📋 Show Schools
          </Link>
        </div>
      </div>

      {/* ShowSchools component renders the grid/list */}
      <ShowSchools />
    </div>
  );
}
