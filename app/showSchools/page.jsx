// // "use client";
// // import { useEffect, useState } from "react";

// // export default function ShowSchoolsPage() {
// //   const [schools, setSchools] = useState([]);

// //   useEffect(() => {
// //     fetch("/api/getSchools")
// //       .then((res) => res.json())
// //       .then((data) => setSchools(data))
// //       .catch((err) => console.error(err));
// //   }, []);

// //   return (
// //     <div className="max-w-6xl mx-auto p-6">
// //       <h1 className="text-2xl font-bold mb-6">Schools</h1>
// //       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
// //         {schools.map((school) => (
// //           <div key={school.id} className="bg-white shadow-lg rounded-xl overflow-hidden relative">
// //             {/* Add to Compare button */}
// //             <button className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-purple-500 hover:bg-purple-50">
// //               +
// //             </button>

// //             <img
// //               src={school.image || "/schoolImages/placeholder.png"}
// //               alt={school.name}
// //               className="w-full h-40 object-cover"
// //             />
// //             <div className="p-4">
// //               {/* Rating */}
// //               <div className="flex items-center mb-1">
// //                 {[...Array(5)].map((_, i) => (
// //                   <svg
// //                     key={i}
// //                     className={`w-4 h-4 ${
// //                       i < school.rating ? "text-yellow-400" : "text-gray-300"
// //                     }`}
// //                     fill="currentColor"
// //                     viewBox="0 0 20 20"
// //                   >
// //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.386-2.462a1 1 0 00-1.176 0l-3.386 2.462c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
// //                   </svg>
// //                 ))}
// //               </div>

// //               {/* Board */}
// //               <span className="text-sm text-black font-medium">{school.board}</span>
// //               <h2 className="text-lg font-semibold mt-1">{school.name}</h2>
// //               <p className="text-sm text-gray-600">{school.address}</p>
// //               <span className="block text-sm font-medium text-gray-800">{school.city}</span>

// //               {/* Apply Button */}
// //               <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
// //                 Apply Now
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";
// // import { useEffect, useState } from "react";

// // export default function ShowSchoolsPage() {
// //   const [schools, setSchools] = useState([]);

// //   useEffect(() => {
// //     fetch("/api/getSchools")
// //       .then((res) => res.json())
// //       .then((data) => setSchools(data))
// //       .catch((err) => console.error(err));
// //   }, []);

// //   return (
// //     <div className="max-w-6xl mx-auto p-6">
// //       <h1 className="text-2xl font-bold mb-6 text-foreground">Schools</h1>

// //       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
// //         {schools.map((school) => (
// //           <div
// //   key={school.id}
// //   className="bg-white shadow-md rounded-xl overflow-hidden relative hover:shadow-xl transition"
// // >
// //   {/* Add to Compare button */}
// //   <button
// //     className="absolute top-3 right-3 w-9 h-9 rounded-full border-2 border-pink-500 bg-white flex items-center justify-center text-pink-500 hover:bg-pink-50 transition"
// //   >
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       fill="none"
// //       viewBox="0 0 24 24"
// //       strokeWidth={2}
// //       stroke="currentColor"
// //       className="w-5 h-5"
// //     >
// //       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
// //     </svg>
// //   </button>

// //   {/* Image */}
// //   <img
// //     src={school.image || "/schoolImages/placeholder.png"}
// //     alt={school.name}
// //     className="w-full h-40 object-cover"
// //   />

// //   {/* Content */}
// //   <div className="p-4">
// //     {/* Rating stars */}
// //     <div className="flex items-center mb-2">
// //       {[...Array(5)].map((_, i) => (
// //         <svg
// //           key={i}
// //           className={`w-4 h-4 ${
// //             i < school.rating ? "text-yellow-400" : "text-gray-300"
// //           }`}
// //           fill="currentColor"
// //           viewBox="0 0 20 20"
// //         >
// //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.386-2.462a1 1 0 00-1.176 0l-3.386 2.462c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
// //         </svg>
// //       ))}
// //     </div>

// //     {/* Location + Board */}
// //     <div className="flex justify-between items-center text-sm mb-1">
// //       <span className="text-blue-600 font-medium">{school.city}</span>
// //       <span className="text-cyan-600 font-medium">{school.board}</span>
// //     </div>

// //     {/* Name */}
// //     <h2 className="text-lg font-bold text-gray-900">{school.name}</h2>
// //     <p className="text-sm text-gray-600">{school.address}</p>

// //     {/* Apply Now */}
// //     <button className="mt-4 w-full bg-green-500 text-white font-medium py-2 rounded-b-xl hover:bg-green-600 transition">
// //       Apply Now
// //     </button>
// //   </div>
// // </div>

// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { useEffect, useState } from "react";

// export default function ShowSchoolsPage() {
//   const [schools, setSchools] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/getSchools")
//       .then((res) => res.json())
//       .then((data) => setSchools(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6 text-foreground">Schools</h1>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
//         </div>
//       ) : (
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {schools.map((school) => (
//             <div
//               key={school.id}
//               className="bg-white shadow-md rounded-xl overflow-hidden relative hover:shadow-xl transition"
//             >
//               {/* Add to Compare button */}
//               <button className="absolute top-3 right-3 w-9 h-9 rounded-full border-2 border-pink-500 bg-white flex items-center justify-center text-pink-500 hover:bg-pink-50 transition">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                 </svg>
//               </button>

//               {/* Image */}
//               <img
//                 src={school.image || "/schoolImages/placeholder.png"}
//                 alt={school.name}
//                 className="w-full h-40 object-cover"
//               />

//               {/* Content */}
//               <div className="p-4">
//                 {/* Rating stars */}
//                 <div className="flex items-center mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className={`w-4 h-4 ${
//                         i < (school.rating || 0) ? "text-yellow-400" : "text-gray-300"
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.386-2.462a1 1 0 00-1.176 0l-3.386 2.462c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
//                     </svg>
//                   ))}
//                 </div>

//                 {/* Location + Board */}
//                 <div className="flex justify-between items-center text-sm mb-1">
//                   <span className="text-blue-600 font-medium">{school.city}</span>
//                   <span className="text-cyan-600 font-medium">{school.board}</span>
//                 </div>

//                 {/* Name */}
//                 <h2 className="text-lg font-bold text-gray-900">{school.name}</h2>
//                 <p className="text-sm text-gray-600">{school.address}</p>

//                 {/* Apply Now */}
//                 <button className="mt-4 w-full bg-green-500 text-white font-medium py-2 rounded-b-xl hover:bg-green-600 transition">
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";

export default function ShowSchoolsPage() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getSchools")
      .then((res) => res.json())
      .then((data) => setSchools(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-foreground">Schools</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {schools.map((school) => (
            <div key={school.id} className="h-full">
              <div className="relative flex h-full flex-col bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
                {/* Add to Compare */}
                <button
                  className="absolute top-3 right-3 w-9 h-9 rounded-full border-2 border-pink-500 bg-white flex items-center justify-center text-pink-500 hover:bg-pink-50 transition"
                  title="Add to Compare"
                  aria-label="Add to Compare"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>

                {/* Fixed-height media area (keeps all cards equal) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={school.image || "/schoolImages/placeholder.png"}
                    alt={school.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                {/* Content grows and pushes button to bottom */}
                <div className="flex flex-1 flex-col p-4">
                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < (school.rating || 0) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.386-2.462a1 1 0 00-1.176 0l-3.386 2.462c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                  </div>

                  {/* Location + Board */}
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-blue-600 font-medium line-clamp-1">{school.city}</span>
                    <span className="text-cyan-600 font-medium line-clamp-1">{school.board}</span>
                  </div>

                  {/* Title (2 lines max, same height for all cards) */}
                  <h2 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3.25rem]">
                    {school.name}
                  </h2>

                  {/* Address (2 lines max) */}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {school.address}
                  </p>

                  {/* Button pinned to bottom */}
                  <button className="mt-auto w-full bg-green-500 text-white font-medium py-2 rounded-b-xl hover:bg-green-600 transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
