// // "use client";
// // import { useState } from "react";

// // export default function AddSchool() {
// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage("");

// //     const formData = new FormData(e.target); // grabs all inputs

// //     try {
// //       const res = await fetch("/api/addSchool", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const data = await res.json();
// //       if (!res.ok) throw new Error(data.error || "Something went wrong");

// //       setMessage("✅ School added successfully!");
// //       e.target.reset();
// //     } catch (err) {
// //       setMessage("❌ " + err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-lg mx-auto mt-10 p-6 border rounded">
// //       <h1 className="text-xl font-bold mb-4">Add School</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input name="name" placeholder="School Name" required className="w-full p-2 mb-2 border rounded" />
// //         <input name="address" placeholder="Address" required className="w-full p-2 mb-2 border rounded" />
// //         <input name="city" placeholder="City" required className="w-full p-2 mb-2 border rounded" />
// //         <input name="state" placeholder="State" required className="w-full p-2 mb-2 border rounded" />
// //         <input name="contact" placeholder="Contact Number" required className="w-full p-2 mb-2 border rounded" />
// //         <input type="email" name="email" placeholder="Email" required className="w-full p-2 mb-2 border rounded" />
        
// //         {/* File input must be named "image" */}
// //         <input type="file" name="image" accept="image/*" required className="w-full p-2 mb-4 border rounded" />

// //         <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
// //           {loading ? "Saving..." : "Save School"}
// //         </button>
// //       </form>
// //       {message && <p className="mt-4">{message}</p>}
// //     </div>
// //   );
// // }
// // "use client";
// // import { useState } from "react";

// // export default function AddSchool() {
// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage("");

// //     const form = e.currentTarget; // save reference immediately
// //     const formData = new FormData(form);

// //     try {
// //       const res = await fetch("/api/addSchool", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       const data = await res.json();
// //       if (!res.ok) throw new Error(data.error || "Something went wrong");

// //       setMessage("✅ School added successfully!");
// //       form.reset(); // safe to call here
// //     } catch (err) {
// //       setMessage("❌ " + (err?.message || "Something went wrong"));
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
// //       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
// //         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
// //           Add New School
// //         </h1>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-600 mb-1">
// //               School Name
// //             </label>
// //             <input
// //               name="name"
// //               placeholder="Enter school name"
// //               required
// //               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-600 mb-1">
// //               Address
// //             </label>
// //             <input
// //               name="address"
// //               placeholder="Enter address"
// //               required
// //               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //           </div>

// //           <div className="grid grid-cols-2 gap-4">
// //             <div>
// //               <label className="block text-sm font-medium text-gray-600 mb-1">
// //                 City
// //               </label>
// //               <input
// //                 name="city"
// //                 placeholder="City"
// //                 required
// //                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-gray-600 mb-1">
// //                 State
// //               </label>
// //               <input
// //                 name="state"
// //                 placeholder="State"
// //                 required
// //                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-600 mb-1">
// //               Contact Number
// //             </label>
// //             <input
// //               name="contact"
// //               placeholder="Contact Number"
// //               required
// //               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-600 mb-1">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email"
// //               required
// //               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-600 mb-1">
// //               School Image
// //             </label>
// //             <input
// //               type="file"
// //               name="image"
// //               accept="image/*"
// //               required
// //               className="w-full px-3 py-2 border rounded-lg focus:outline-none file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-blue-600 file:text-white hover:file:bg-blue-700"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:opacity-60"
// //           >
// //             {loading ? "Saving..." : "Save School"}
// //           </button>
// //         </form>

// //         {message && (
// //           <p
// //             className={`mt-4 text-center font-medium ${
// //               message.startsWith("✅") ? "text-green-600" : "text-red-600"
// //             }`}
// //           >
// //             {message}
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function AddSchool() {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const onSubmit = async (data) => {
//     setLoading(true);
//     setMessage("");

//     try {
//       const formData = new FormData();
//       formData.append("name", data.name);
//       formData.append("address", data.address);
//       formData.append("city", data.city);
//       formData.append("state", data.state);
//       formData.append("contact", data.contact);
//       formData.append("email", data.email);
//       formData.append("image", data.image[0]); // file input

//       const res = await fetch("/api/addSchool", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await res.json();
//       if (!res.ok) throw new Error(result.error || "Something went wrong");

//       setMessage("✅ School added successfully!");
//       reset();
//     } catch (err) {
//       setMessage("❌ " + (err?.message || "Something went wrong"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Add New School
//         </h1>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* School Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               School Name
//             </label>
//             <input
//               {...register("name", { required: "School name is required" })}
//               placeholder="Enter school name"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
//             />
//             {errors.name && (
//               <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
//             )}
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Address
//             </label>
//             <input
//               {...register("address", { required: "Address is required" })}
//               placeholder="Enter address"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
//             />
//             {errors.address && (
//               <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
//             )}
//           </div>

//           {/* City & State */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 City
//               </label>
//               <input
//                 {...register("city", { required: "City is required" })}
//                 placeholder="City"
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
//               />
//               {errors.city && (
//                 <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 State
//               </label>
//               <input
//                 {...register("state", { required: "State is required" })}
//                 placeholder="State"
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
//               />
//               {errors.state && (
//                 <p className="text-red-600 text-sm mt-1">{errors.state.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Contact Number
//             </label>
//             <input
//               type="tel"
//               {...register("contact", {
//                 required: "Contact number is required",
//                 pattern: {
//                   value: /^[0-9]+$/,
//                   message: "Contact must be numeric",
//                 },
//               })}
//               placeholder="Contact Number"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
//             />
//             {errors.contact && (
//               <p className="text-red-600 text-sm mt-1">{errors.contact.message}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^\S+@\S+$/i,
//                   message: "Invalid email address",
//                 },
//               })}
//               placeholder="Email"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
//             />
//             {errors.email && (
//               <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Image */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               School Image
//             </label>
//             <input
//               type="file"
//               {...register("image", { required: "School image is required" })}
//               accept="image/*"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-blue-600 file:text-white hover:file:bg-blue-700 text-gray-800"
//             />
//             {errors.image && (
//               <p className="text-red-600 text-sm mt-1">{errors.image.message}</p>
//             )}
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:opacity-60"
//           >
//             {loading ? "Saving..." : "Save School"}
//           </button>
//         </form>

//         {/* Message */}
//         {message && (
//           <p
//             className={`mt-4 text-center font-medium ${
//               message.startsWith("✅") ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function AddSchool() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("contact", data.contact);
      formData.append("email", data.email);
      formData.append("image", data.image[0]);

      const res = await fetch("/api/addSchool", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong");

      setMessage("✅ School added successfully!");
      reset();
    } catch (err) {
      setMessage("❌ " + (err?.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New School
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* School Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              School Name
            </label>
            <input
              {...register("name", { required: "School name is required" })}
              placeholder="Enter school name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Address
            </label>
            <input
              {...register("address", { required: "Address is required" })}
              placeholder="Enter address"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
            />
            {errors.address && (
              <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          {/* City & State */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                City
              </label>
              <input
                {...register("city", { required: "City is required" })}
                placeholder="City"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
              />
              {errors.city && (
                <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                State
              </label>
              <input
                {...register("state", { required: "State is required" })}
                placeholder="State"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
              />
              {errors.state && (
                <p className="text-red-600 text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              {...register("contact", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Contact must be numeric",
                },
              })}
              placeholder="Contact Number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
            />
            {errors.contact && (
              <p className="text-red-600 text-sm mt-1">{errors.contact.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              School Image
            </label>
            <input
              type="file"
              {...register("image", { required: "School image is required" })}
              accept="image/*"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-blue-600 file:text-white hover:file:bg-blue-700 text-gray-600"
            />
            {errors.image && (
              <p className="text-red-600 text-sm mt-1">{errors.image.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save School"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
