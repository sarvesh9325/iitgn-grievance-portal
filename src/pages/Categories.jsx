// import { Link } from 'react-router-dom'

// const categories = [
//   { label: 'Welfare Council', icon: 'volunteer_activism' },
//   { label: 'Academic Council', icon: 'school' },
//   { label: 'Cultural Council', icon: 'theater_comedy' },
//   { label: 'Sports Council', icon: 'sports_soccer' },
//   { label: 'PDC Council', icon: 'work' },
//   { label: 'IRP Council', icon: 'public' },
//   { label: 'General Complaints', icon: 'report' },
// ]

// function Categories() {
//   return (
//     <div className="bg-background text-on-surface min-h-screen flex justify-center px-margin-mobile sm:px-gutter lg:px-margin-desktop py-10 sm:py-14 overflow-x-hidden">
//       <main className="w-full max-w-[1280px] mx-auto pb-24">
//         <div className="text-center mb-12 sm:mb-16">
//           <h1 className="font-display-lg text-[28px] sm:text-display-lg text-primary uppercase tracking-widest mb-2 px-2">
//             Select the complaint category
//           </h1>
//           <div className="w-12 h-1 bg-primary mx-auto opacity-20" />
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
//           {categories.map((category) => (
//             <Link
//               key={category.label}
//               to={`/submit/${encodeURIComponent(category.label)}`}
//               className="group relative flex flex-col items-center justify-center aspect-square bg-white border border-outline-variant hover:border-primary transition-all duration-300 p-4 sm:p-8"
//               style={{ textDecoration: 'none' }}
//             >
//               <div className="mb-3 sm:mb-6">
//                 <span className="material-symbols-outlined text-[36px] sm:text-[56px] text-primary group-hover:scale-110 transition-transform duration-300">
//                   {category.icon}
//                 </span>
//               </div>
//               <span className="font-headline-sm text-[11px] sm:text-headline-sm leading-tight tracking-widest text-primary uppercase text-center px-1">
//                 {category.label}
//               </span>
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-primary" />
//             </Link>
//           ))}
//         </div>
//       </main>

//       <Link
//         to="/"
//         className="button fixed bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 z-10"
//         style={{ textDecoration: 'none' }}
//       >
//         <span className="material-symbols-outlined text-[18px]">home</span>
//         Home
//       </Link>

//       <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
//     </div>
//   )
// }

// export default Categories


import { Link } from 'react-router-dom'

const categories = [
  { label: 'Welfare Council', image: '/welfare-modified.png' },
  { label: 'Academic Council', image: '/academic-modified.png' },
  { label: 'Cultural Council', image: '/cultural-modified.png' },
  { label: 'Sports Council', image: '/sports-modified.png' },
  { label: 'PDC Council', image: '/pdc-modified.png' },
  { label: 'IR&P Council', image: '/irp-modified.png' },
  { label: 'General Complaints', image: '/studentsenate.png' },
]

function Categories() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] overflow-x-hidden relative">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/campus-lite2.jpg')"
        }}
      ></div>

      {/* WHITE OVERLAY */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
        <header className="bg-[#020b2d] h-[85px] border-b border-slate-700">
          <div className="w-full h-full px-8 flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              <img
                src="/iitgnlogo-emblem.png"
                alt="IITGN"
                className="h-15 w-16 object-contain"
              />

              <div className="flex items-center gap-4">

                <h1 className="text-white text-[25px] font-semibold tracking-tight">
                  IIT Gandhinagar
                </h1>

                <div className="w-[1px] h-8 bg-slate-500" />

                <div>
                  <h2 className="text-white text-[25px] font-bold leading-none">
                    Grievance Portal
                  </h2>

                  <p className="text-slate-300 text-[15px] mt-1">
                    Your Voice. Our Commitment.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex items-center gap-2 text-white">

              <span className="material-symbols-outlined text-[20px]">
                shield
              </span>

              <span className="text-[20px] tracking-wide text-slate-200">
                Student Governance Portal
              </span>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="max-w-[1400px] mx-auto px-6 py-14">

          {/* TITLE */}
          <div className="flex justify-center mb-14">

            <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl px-12 py-8 shadow-sm text-center max-w-[700px] w-full">

              <h1 className="text-[42px] font-bold text-[#020b2d] tracking-tight">
                Select the Complaint Category
              </h1>

              <p className="text-slate-600 text-[18px] mt-4">
                Choose the department or council related to your grievance.
              </p>

              <div className="w-20 h-[3px] bg-[#2563eb] mx-auto rounded-full mt-6" />
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">

            {categories.map((category) => (
              <Link
                key={category.label}
                to={`/submit/${encodeURIComponent(category.label)}`}
                className="group w-[300px] h-[300px] bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline relative overflow-hidden"
              >

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] bg-[#2563eb] transition-opacity duration-300" />

                {/* IMAGE ICON */}
                <div className="w-28 h-28 rounded-full bg-blue-50 flex items-center justify-center mb-8 relative z-10 overflow-hidden">

                  <img
                    src={category.image}
                    alt={category.label}
                    className="w-24 h-24 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* TEXT */}
                <span className="text-[#020b2d] text-[20px] font-semibold tracking-wide text-center px-4 leading-relaxed relative z-10">
                  {category.label}
                </span>
              </Link>
            ))}
          </div>

          {/* HOME BUTTON */}
          <div className="flex justify-center mt-16">

            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-[#020b2d] text-white px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-[#0b1b55] transition-all no-underline"
            >
              <span className="material-symbols-outlined text-[20px]">
                home
              </span>

              Back to Home
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Categories