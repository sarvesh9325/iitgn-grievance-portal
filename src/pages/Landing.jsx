// // import { Link } from 'react-router-dom'

// // function Landing() {
// //   return (
// //     <div className="min-h-screen flex flex-col bg-[#f7f9fc] text-slate-900 overflow-x-hidden">

// //       {/* HEADER */}
// //       <header className="bg-[#020b2d] h-[85px] border-b border-slate-700">
// //         <div className="w-full h-full px-8 flex items-center justify-between">

// //           {/* LEFT */}
// //           <div className="flex items-center gap-4">

// //             <img
// //               src="/iitgnlogo-emblem.png"
// //               alt="IITGN"
// //               className="h-15 w-16 object-contain"
// //             />

// //             <div className="flex items-center gap-4">

// //               <h1 className="text-white text-[25px] font-semibold tracking-tight">
// //                 IIT Gandhinagar
// //               </h1>

// //               <div className="w-[1px] h-8 bg-slate-500" />

// //               <div>
// //                 <h2 className="text-white text-[25px] font-bold leading-none">
// //                   Grievance Portal
// //                 </h2>

// //                 <p className="text-slate-300 text-[15px] mt-1">
// //                   Your Voice. Our Commitment.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT */}
// //           <div className="hidden md:flex items-center gap-2 text-white">

// //             <span className="material-symbols-outlined text-[20px]">
// //               shield
// //             </span>

// //             <span className="text-[20px] tracking-wide text-slate-200">
// //               Student Governance Portal
// //             </span>
// //           </div>
// //         </div>
// //       </header>

// //       {/* MAIN */}
// // <main className="flex-1 flex items-center justify-center py-14 relative overflow-hidden">

// //   {/* BACKGROUND IMAGE */}
// //   <div
// //     className="absolute inset-0 bg-cover bg-center"
// //     style={{
// //       backgroundImage: "url('/campus-lite2.jpg')"
// //     }}
// //   ></div>

// //   {/* WHITE OVERLAY */}
// //   <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]"></div>

// //         {/* Background dots */}
// //         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:28px_28px]" />

// //         <section className="max-w-[1180px] w-full px-6 relative z-10">

// //           {/* CARDS */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

// //             {/* LEFT CARD */}
// //             <Link
// //               to="/categories"
// //               className="bg-white border border-slate-200 rounded-2xl p-12 min-h-[420px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline"
// //             >
// //               <div>

// //                 {/* ICON */}
// //                 <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-10">

// //                   <span
// //                     className="material-symbols-outlined text-[#2563eb] text-[50px]"
// //                     style={{ fontVariationSettings: "'wght' 300" }}
// //                   >
// //                     description
// //                   </span>
// //                 </div>

// //                 {/* TITLE */}
// //                 <h2 className="text-[34px] font-bold text-[#020b2d] mb-5">
// //                   Lodge a Complaint
// //                 </h2>

// //                 {/* LINE */}
// //                 <div className="w-16 h-[3px] rounded-full bg-[#2563eb] mb-8" />

// //                 {/* TEXT */}
// //                 <p className="text-[18px] text-slate-600 leading-[1.9]">
// //                   Secure and confidential submission portal for institutional
// //                   feedback and formal grievance procedures.
// //                 </p>
// //               </div>

// //               {/* BUTTON */}
// //               <div className="mt-12 inline-flex items-center gap-3 border-2 border-[#2563eb] text-[#2563eb] px-7 py-4 rounded-xl font-semibold text-[18px] tracking-wide w-fit hover:bg-blue-50 transition-all">

// //                 INITIATE FORM

// //                 <span className="material-symbols-outlined text-[26px]">
// //                   arrow_forward
// //                 </span>
// //               </div>
// //             </Link>

// //             {/* RIGHT CARD */}
// //             <Link
// //               to="/login"
// //               className="bg-white border border-slate-200 rounded-2xl p-12 min-h-[420px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline"
// //             >
// //               <div>

// //                 {/* ICON */}
// //                 <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-10">

// //                   <span
// //                     className="material-symbols-outlined text-green-700 text-[50px]"
// //                     style={{ fontVariationSettings: "'wght' 300" }}
// //                   >
// //                     visibility
// //                   </span>
// //                 </div>

// //                 {/* TITLE */}
// //                 <h2 className="text-[34px] font-bold text-[#020b2d] mb-5">
// //                   View Complaints
// //                 </h2>

// //                 {/* LINE */}
// //                 <div className="w-16 h-[3px] rounded-full bg-green-600 mb-8" />

// //                 {/* TEXT */}
// //                 <p className="text-[18px] text-slate-600 leading-[1.9]">
// //                   Track progress, review submitted status, and access resolution
// //                   updates for existing institutional filings.
// //                 </p>
// //               </div>

// //               {/* BUTTON */}
// //               <div className="mt-12 inline-flex items-center gap-3 border-2 border-green-700 text-green-700 px-7 py-4 rounded-xl font-semibold text-[18px] tracking-wide w-fit hover:bg-green-50 transition-all">

// //                 ACCESS STATUS

// //                 <span className="material-symbols-outlined text-[24px]">
// //                   open_in_new
// //                 </span>
// //               </div>
// //             </Link>
// //           </div>
// //         </section>
// //       </main>

// //       {/* AUTHORITY SECTION */}
// //       <section className="bg-white border-t border-slate-200 py-7 px-10">

// //         <div className="max-w-[1450px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

// //           {/* LEFT SECTION */}
// //           <div className="flex items-start gap-5 flex-1">

// //             <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">

// //               <span className="material-symbols-outlined text-[#2563eb] text-[30px]">
// //                 shield
// //               </span>
// //             </div>

// //             <div>
// //               <h3 className="text-[24px] font-bold text-[#020b2d] leading-tight">
// //                 Grievance Portal Authority
// //               </h3>

// //               <p className="text-slate-600 text-[16px] leading-[1.5] mt-1 max-w-[320px]">
// //                 For any queries or assistance, please contact the authority.
// //               </p>
// //             </div>
// //           </div>

// //           {/* DIVIDER */}
// //           <div className="hidden lg:block w-[1px] h-[140px] bg-slate-200" />

// //           {/* CENTER SECTION */}
// //           <div className="flex items-start gap-5 flex-1 justify-center">

// //             <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center shrink-0">

// //               <span className="material-symbols-outlined text-[#2563eb] text-[30px]">
// //                 person
// //               </span>
// //             </div>

// //             <div>
// //               <h3 className="text-[24px] font-bold text-[#020b2d] leading-tight">
// //                 Antariksh Milind Dongre
// //               </h3>

// //               <p className="text-[#2563eb] text-[18px] mt-1 leading-relaxed">
// //                 General Secretary,<br />
// //                 Student Senate Council
// //               </p>

// //               <div className="mt-1 space-y-1 text-slate-700">

// //                 <div className="flex items-center gap-3 text-[16px]">

// //                   <span className="material-symbols-outlined text-[18px]">
// //                     call
// //                   </span>

// //                   <span>+91 91736 06682</span>
// //                 </div>

// //                 <div className="flex items-center gap-3 text-[16px]">

// //                   <span className="material-symbols-outlined text-[18px]">
// //                     mail
// //                   </span>

// //                   <span>general.secretary@iitgn.ac.in</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* DIVIDER */}
// //           <div className="hidden lg:block w-[1px] h-[140px] bg-slate-200" />

// //           {/* RIGHT SECTION */}
// //           <div className="flex items-center justify-end flex-1">

// //             <div className="flex items-center gap-4">

// //               <img
// //                 src="/IITGN-5.png"
// //                 alt="IITGN"
// //                 className="h-25 w-auto object-contain"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FOOTER */}
// //       <footer className="bg-[#020b2d] py-4 border-t border-slate-700">

// //         <div className="text-center text-slate-300 text-[15px] tracking-wide">
// //           © 2026 IIT Gandhinagar | All Rights Reserved
// //         </div>
// //       </footer>
// //     </div>
// //   )
// // }

// // export default Landing


// import { Link } from 'react-router-dom'

// function Landing() {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#f7f9fc] text-slate-900 overflow-x-hidden">

//       {/* HEADER */}
//       <header className="bg-[#020b2d] h-[85px] border-b border-slate-700">
//         <div className="w-full h-full px-8 flex items-center justify-between">

//           {/* LEFT */}
//           <div className="flex items-center gap-4">

//             <img
//               src="/iitgnlogo-emblem.png"
//               alt="IITGN"
//               className="h-15 w-16 object-contain"
//             />

//             <div className="flex items-center gap-4">

//               <h1 className="text-white text-[25px] font-semibold tracking-tight">
//                 IIT Gandhinagar
//               </h1>

//               <div className="w-[1px] h-8 bg-slate-500" />

//               <div>
//                 <h2 className="text-white text-[25px] font-bold leading-none">
//                   Grievance Portal
//                 </h2>

//                 <p className="text-slate-300 text-[15px] mt-1">
//                   Your Voice. Our Commitment.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="hidden md:flex items-center gap-2 text-white">

//             <span className="material-symbols-outlined text-[20px]">
//               shield
//             </span>

//             <span className="text-[20px] tracking-wide text-slate-200">
//               Student Governance Portal
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* MAIN */}
//       <main className="flex-1 flex items-center justify-center py-14 relative overflow-hidden">

//         {/* BACKGROUND IMAGE */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/campus-lite2.jpg')"
//           }}
//         ></div>

//         {/* WHITE OVERLAY */}
//         <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]"></div>

//         {/* Background dots */}
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:28px_28px]" />

//         <section className="max-w-[1180px] w-full px-6 relative z-10">

//           {/* CARDS */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//             {/* LEFT CARD */}
//             <Link
//               to="/categories"
//               className="bg-white border border-slate-200 rounded-2xl p-12 min-h-[420px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline"
//             >
//               <div>

//                 {/* ICON */}
//                 <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-10">

//                   <span
//                     className="material-symbols-outlined text-[#2563eb] text-[50px]"
//                     style={{ fontVariationSettings: "'wght' 300" }}
//                   >
//                     description
//                   </span>
//                 </div>

//                 {/* TITLE */}
//                 <h2 className="text-[34px] font-bold text-[#020b2d] mb-5">
//                   Lodge a Complaint
//                 </h2>

//                 {/* LINE */}
//                 <div className="w-16 h-[3px] rounded-full bg-[#2563eb] mb-8" />

//                 {/* TEXT */}
//                 <p className="text-[18px] text-slate-600 leading-[1.9]">
//                   Secure and confidential submission portal for institutional
//                   feedback and formal grievance procedures.
//                 </p>
//               </div>

//               {/* BUTTON */}
//               <div className="mt-12 inline-flex items-center gap-3 border-2 border-[#2563eb] text-[#2563eb] px-7 py-4 rounded-xl font-semibold text-[18px] tracking-wide w-fit hover:bg-blue-50 transition-all">

//                 INITIATE FORM

//                 <span className="material-symbols-outlined text-[26px]">
//                   arrow_forward
//                 </span>
//               </div>
//             </Link>

//             {/* RIGHT CARD */}
//             <Link
//               to="/track"
//               className="bg-white border border-slate-200 rounded-2xl p-12 min-h-[420px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline"
//             >
//               <div>

//                 {/* ICON */}
//                 <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-10">

//                   <span
//                     className="material-symbols-outlined text-green-700 text-[50px]"
//                     style={{ fontVariationSettings: "'wght' 300" }}
//                   >
//                     visibility
//                   </span>
//                 </div>

//                 {/* TITLE */}
//                 <h2 className="text-[34px] font-bold text-[#020b2d] mb-5">
//                   View Complaints
//                 </h2>

//                 {/* LINE */}
//                 <div className="w-16 h-[3px] rounded-full bg-green-600 mb-8" />

//                 {/* TEXT */}
//                 <p className="text-[18px] text-slate-600 leading-[1.9]">
//                   Track progress, review submitted status, and access resolution
//                   updates for existing institutional filings.
//                 </p>
//               </div>

//               {/* BUTTON */}
//               <div className="mt-12 inline-flex items-center gap-3 border-2 border-green-700 text-green-700 px-7 py-4 rounded-xl font-semibold text-[18px] tracking-wide w-fit hover:bg-green-50 transition-all">

//                 ACCESS STATUS

//                 <span className="material-symbols-outlined text-[24px]">
//                   open_in_new
//                 </span>
//               </div>
//             </Link>
//           </div>
//         </section>
//       </main>

//       {/* AUTHORITY SECTION */}
//       <section className="bg-white border-t border-slate-200 py-7 px-10">

//         <div className="max-w-[1450px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

//           {/* LEFT SECTION */}
//           <div className="flex items-start gap-5 flex-1">

//             <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">

//               <span className="material-symbols-outlined text-[#2563eb] text-[30px]">
//                 shield
//               </span>
//             </div>

//             <div>
//               <h3 className="text-[24px] font-bold text-[#020b2d] leading-tight">
//                 Grievance Portal Authority
//               </h3>

//               <p className="text-slate-600 text-[16px] leading-[1.5] mt-1 max-w-[320px]">
//                 For any queries or assistance, please contact the authority.
//               </p>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="hidden lg:block w-[1px] h-[140px] bg-slate-200" />

//           {/* CENTER SECTION */}
//           <div className="flex items-start gap-5 flex-1 justify-center">

//             <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center shrink-0">

//               <span className="material-symbols-outlined text-[#2563eb] text-[30px]">
//                 person
//               </span>
//             </div>

//             <div>
//               <h3 className="text-[24px] font-bold text-[#020b2d] leading-tight">
//                 Antariksh Milind Dongre
//               </h3>

//               <p className="text-[#2563eb] text-[18px] mt-1 leading-relaxed">
//                 General Secretary,<br />
//                 Student Senate Council
//               </p>

//               <div className="mt-1 space-y-1 text-slate-700">

//                 <div className="flex items-center gap-3 text-[16px]">

//                   <span className="material-symbols-outlined text-[18px]">
//                     call
//                   </span>

//                   <span>+91 91736 06682</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-[16px]">

//                   <span className="material-symbols-outlined text-[18px]">
//                     mail
//                   </span>

//                   <span>general.secretary@iitgn.ac.in</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="hidden lg:block w-[1px] h-[140px] bg-slate-200" />

//           {/* RIGHT SECTION */}
//           <div className="flex items-center justify-end flex-1">

//             <div className="flex items-center gap-4">

//               <img
//                 src="/IITGN-5.png"
//                 alt="IITGN"
//                 className="h-25 w-auto object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-[#020b2d] py-4 border-t border-slate-700">

//         <div className="text-center text-slate-300 text-[15px] tracking-wide">
//           © 2026 IIT Gandhinagar | All Rights Reserved
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default Landing


import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fc] text-slate-900 overflow-x-hidden">

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
          <div className="hidden md:flex items-center gap-4">

            <div className="flex items-center gap-2 text-white">

              <span className="material-symbols-outlined text-[20px]">
                shield
              </span>

              <span className="text-[20px] tracking-wide text-slate-200">
                Student Governance Portal
              </span>

            </div>

            {/* AUTHORITY ACCESS */}
            <Link
              to="/login"
              className="ml-4 border border-slate-500 text-slate-200 px-5 py-2 rounded-xl text-[16px] font-medium hover:bg-white hover:text-[#020b2d] transition-all"
            >
              Authority Access
            </Link>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center py-14 relative overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/campus-lite2.jpg')",
          }}
        ></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]"></div>

        {/* DOT PATTERN */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:28px_28px]" />

        <section className="max-w-[1180px] w-full px-6 relative z-10">

          {/* HERO */}
          <div className="text-center mb-10">

            <h1 className="text-[58px] font-bold text-[#020b2d] tracking-tight leading-none">
              Institutional Grievance Portal
            </h1>


          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LODGE COMPLAINT */}
            <Link
              to="/categories"
              className="bg-white border border-slate-200 rounded-2xl p-12 min-h-[420px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline"
            >

              <div>

                {/* ICON */}
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-10">

                  <span
                    className="material-symbols-outlined text-[#2563eb] text-[50px]"
                    style={{
                      fontVariationSettings:
                        "'wght' 300",
                    }}
                  >
                    description
                  </span>

                </div>

                {/* TITLE */}
                <h2 className="text-[34px] font-bold text-[#020b2d] mb-5">
                  Lodge a Complaint
                </h2>

                {/* LINE */}
                <div className="w-16 h-[3px] rounded-full bg-[#2563eb] mb-8" />

                {/* TEXT */}
                <p className="text-[18px] text-slate-600 leading-[1.9]">
                  Secure and confidential submission portal for institutional
                  feedback, grievance redressal, and student concern reporting.
                </p>

              </div>

              {/* BUTTON */}
              <div className="mt-12 inline-flex items-center gap-3 border-2 border-[#2563eb] text-[#2563eb] px-7 py-4 rounded-xl font-semibold text-[18px] tracking-wide w-fit hover:bg-blue-50 transition-all">

                INITIATE FORM

                <span className="material-symbols-outlined text-[26px]">
                  arrow_forward
                </span>

              </div>

            </Link>

            {/* TRACK COMPLAINT */}
            <Link
              to="/track"
              className="bg-white border border-slate-200 rounded-2xl p-12 min-h-[420px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline"
            >

              <div>

                {/* ICON */}
                <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-10">

                  <span
                    className="material-symbols-outlined text-green-700 text-[50px]"
                    style={{
                      fontVariationSettings:
                        "'wght' 300",
                    }}
                  >
                    visibility
                  </span>

                </div>

                {/* TITLE */}
                <h2 className="text-[34px] font-bold text-[#020b2d] mb-5">
                  Track Complaints
                </h2>

                {/* LINE */}
                <div className="w-16 h-[3px] rounded-full bg-green-600 mb-8" />

                {/* TEXT */}
                <p className="text-[18px] text-slate-600 leading-[1.9]">
                  Track complaint progress, review authority remarks,
                  and monitor institutional resolution updates using your Complaint ID.
                </p>

              </div>

              {/* BUTTON */}
              <div className="mt-12 inline-flex items-center gap-3 border-2 border-green-700 text-green-700 px-7 py-4 rounded-xl font-semibold text-[18px] tracking-wide w-fit hover:bg-green-50 transition-all">

                ACCESS STATUS

                <span className="material-symbols-outlined text-[24px]">
                  open_in_new
                </span>

              </div>

            </Link>

          </div>
        </section>
      </main>

      {/* AUTHORITY SECTION */}
      <section className="bg-white border-t border-slate-200 py-7 px-10">

        <div className="max-w-[1450px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT */}
          <div className="flex items-start gap-5 flex-1">

            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">

              <span className="material-symbols-outlined text-[#2563eb] text-[30px]">
                shield
              </span>

            </div>

            <div>

              <h3 className="text-[24px] font-bold text-[#020b2d] leading-tight">
                Grievance Portal Authority
              </h3>

              <p className="text-slate-600 text-[16px] leading-[1.5] mt-1 max-w-[320px]">
                For institutional grievance support or assistance,
                please contact the designated authority.
              </p>

            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden lg:block w-[1px] h-[140px] bg-slate-200" />

          {/* CENTER */}
          <div className="flex items-start gap-5 flex-1 justify-center">

            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center shrink-0">

              <span className="material-symbols-outlined text-[#2563eb] text-[30px]">
                person
              </span>

            </div>

            <div>

              <h3 className="text-[24px] font-bold text-[#020b2d] leading-tight">
                Antariksh Milind Dongre
              </h3>

              <p className="text-[#2563eb] text-[18px] mt-1 leading-relaxed">
                General Secretary,<br />
                Student Senate Council
              </p>

              <div className="mt-1 space-y-1 text-slate-700">

                <div className="flex items-center gap-3 text-[16px]">

                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>

                  <span>
                    +91 91736 06682
                  </span>

                </div>

                <div className="flex items-center gap-3 text-[16px]">

                  <span className="material-symbols-outlined text-[18px]">
                    mail
                  </span>

                  <span>
                    general.secretary@iitgn.ac.in
                  </span>

                </div>

              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden lg:block w-[1px] h-[140px] bg-slate-200" />

          {/* RIGHT */}
          <div className="flex items-center justify-end flex-1">

            <img
              src="/IITGN-5.png"
              alt="IITGN"
              className="h-25 w-auto object-contain"
            />

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020b2d] py-4 border-t border-slate-700">

        <div className="text-center text-slate-300 text-[15px] tracking-wide">
          © 2026 IIT Gandhinagar | All Rights Reserved
        </div>

      </footer>
    </div>
  )
}

export default Landing