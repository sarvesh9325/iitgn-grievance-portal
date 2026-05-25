// import { Navigate, useNavigate, useParams } from 'react-router-dom'
// import { addDoc, collection, getDoc, serverTimestamp } from 'firebase/firestore'

// import Form from '../components/Form.jsx'
// import { db } from '../firebase.js'

// const allowedCategories = [
//   {
//     name: 'Welfare Council',
//     image: '/welfare-modified.png',
//   },
//   {
//     name: 'Academic Council',
//     image: '/academic-modified.png',
//   },
//   {
//     name: 'Cultural Council',
//     image: '/cultural-modified.png',
//   },
//   {
//     name: 'Sports Council',
//     image: '/sports-modified.png',
//   },
//   {
//     name: 'PDC Council',
//     image: '/pdc-modified.png',
//   },
//   {
//     name: 'IRP Council',
//     image: '/irp-modified.png',
//   },
//   {
//     name: 'General Complaints',
//     image: '/studentsenate.png',
//   },
// ]

// function Submit() {
//   const navigate = useNavigate()
//   const params = useParams()

//   const category = decodeURIComponent(params.category || '')

//   const selectedCategory = allowedCategories.find(
//     (c) => c.name === category,
//   )

//   if (!selectedCategory) {
//     return <Navigate to="/" replace />
//   }

//   const withTimeout = async (promise, ms, stage) => {
//     let timeoutId

//     const timeoutPromise = new Promise((_, reject) => {
//       timeoutId = setTimeout(() => {
//         const error = new Error(
//           `Timed out while ${stage}. This is usually caused by Firestore rules or network/adblock restrictions.`,
//         )

//         error.code = 'timeout'

//         reject(error)
//       }, ms)
//     })

//     try {
//       return await Promise.race([promise, timeoutPromise])
//     } finally {
//       clearTimeout(timeoutId)
//     }
//   }

//   const fileToBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader()

//       reader.onerror = () =>
//         reject(new Error('Failed to read selected image.'))

//       reader.onload = () => {
//         const result = String(reader.result || '')

//         const commaIndex = result.indexOf(',')

//         resolve(
//           commaIndex >= 0
//             ? result.slice(commaIndex + 1)
//             : result,
//         )
//       }

//       reader.readAsDataURL(file)
//     })

//   const uploadToImgBB = async (file) => {
//     const apiKey = import.meta.env.VITE_IMGBB_API_KEY

//     if (!apiKey) {
//       const error = new Error(
//         'Missing VITE_IMGBB_API_KEY. Image upload is not configured.',
//       )

//       error.code = 'missing-imgbb-key'

//       throw error
//     }

//     const imageBase64 = await fileToBase64(file)

//     const body = new FormData()

//     body.append('image', imageBase64)

//     const response = await fetch(
//       `https://api.imgbb.com/1/upload?key=${apiKey}`,
//       {
//         method: 'POST',
//         body,
//       },
//     )

//     if (!response.ok) {
//       const text = await response.text().catch(() => '')

//       const error = new Error(
//         `Image upload failed (${response.status}). ${text}`.trim(),
//       )

//       error.code = 'img-upload-failed'

//       throw error
//     }

//     const json = await response.json()

//     const url =
//       json?.data?.url || json?.data?.display_url

//     if (!url) {
//       const error = new Error(
//         'Image upload succeeded but no URL was returned.',
//       )

//       error.code = 'img-no-url'

//       throw error
//     }

//     return url
//   }

//   const handleSubmit = async (formData) => {
//     const { photoFile, ...rest } = formData || {}

//     let photoUrl = ''
//     let photoName = ''
//     let photoSize = 0

//     if (photoFile) {
//       photoName = String(photoFile.name || '')

//       photoSize = Number(photoFile.size || 0)

//       photoUrl = await withTimeout(
//         uploadToImgBB(photoFile),
//         60000,
//         'uploading the image',
//       )
//     }

//     const docRef = await withTimeout(
//       addDoc(collection(db, 'grievances'), {
//         ...rest,
//         category: selectedCategory.name,
//         timestamp: serverTimestamp(),
//         photoUrl: photoUrl || null,
//         photoName: photoName || null,
//         photoSize: photoSize || null,
//       }),
//       15000,
//       'saving grievance to Firestore',
//     )

//     await withTimeout(
//       getDoc(docRef),
//       15000,
//       'confirming grievance submission',
//     )

//     navigate('/categories')
//   }

//   return (
//     <div className="min-h-screen overflow-x-hidden relative bg-[#f7f9fc]">

//       {/* BACKGROUND */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/campus-lite2.jpg')",
//         }}
//       ></div>

//       {/* WHITE OVERLAY */}
//       <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>

//       {/* CONTENT */}
//       <div className="relative z-10">

//         {/* HEADER */}
//         <header className="bg-[#020b2d] h-[85px] border-b border-slate-700">
//           <div className="w-full h-full px-8 flex items-center justify-between">

//             {/* LEFT */}
//             <div className="flex items-center gap-4">

//               <img
//                 src="/iitgnlogo-emblem.png"
//                 alt="IITGN"
//                 className="h-15 w-16 object-contain"
//               />

//               <div className="flex items-center gap-4">

//                 <h1 className="text-white text-[25px] font-semibold tracking-tight">
//                   IIT Gandhinagar
//                 </h1>

//                 <div className="w-[1px] h-8 bg-slate-500" />

//                 <div>
//                   <h2 className="text-white text-[25px] font-bold leading-none">
//                     Grievance Portal
//                   </h2>

//                   <p className="text-slate-300 text-[15px] mt-1">
//                     Your Voice. Our Commitment.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="hidden md:flex items-center gap-2 text-white">

//               <span className="material-symbols-outlined text-[20px]">
//                 shield
//               </span>

//               <span className="text-[20px] tracking-wide text-slate-200">
//                 Student Governance Portal
//               </span>
//             </div>
//           </div>
//         </header>

//         {/* MAIN */}
//         <main className="max-w-[900px] mx-auto px-6 py-14">

//           {/* TITLE CARD */}
//           <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-lg px-12 py-10 mb-10">

//             <div className="flex flex-col md:flex-row items-center gap-8">

//               {/* ICON */}
//               <div className="w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden shadow-sm">

//                 <img
//                   src={selectedCategory.image}
//                   alt={selectedCategory.name}
//                   className="w-24 h-24 object-cover rounded-full"
//                 />
//               </div>

//               {/* TEXT */}
//               <div className="text-center md:text-left">

//                 <h1 className="text-[42px] font-bold text-[#020b2d] tracking-tight leading-tight">
//                   {selectedCategory.name}
//                 </h1>

//                 <p className="text-slate-600 text-[18px] mt-4 leading-relaxed max-w-[550px]">
//                   Submit your grievance securely to the respective council.
//                   All submissions are handled confidentially and reviewed
//                   by the concerned authority.
//                 </p>

//                 <div className="w-20 h-[3px] bg-[#2563eb] rounded-full mt-6 mx-auto md:mx-0" />
//               </div>
//             </div>
//           </div>

//           {/* FORM CONTAINER */}
//           <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-lg p-10">

//             <Form
//               onSubmit={handleSubmit}
//               onBack={() => navigate('/categories')}
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// export default Submit


import {
  Navigate,
  useNavigate,
  useParams,
} from 'react-router-dom'

import { useEffect, useState } from 'react'

import {
  addDoc,
  collection,
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
} from 'firebase/firestore'

import Form from '../components/Form.jsx'
import { db } from '../firebase.js'

const allowedCategories = [
  {
    name: 'Welfare Council',
    image: '/welfare-modified.png',
  },
  {
    name: 'Academic Council',
    image: '/academic-modified.png',
  },
  {
    name: 'Cultural Council',
    image: '/cultural-modified.png',
  },
  {
    name: 'Sports Council',
    image: '/sports-modified.png',
  },
  {
    name: 'PDC Council',
    image: '/pdc-modified.png',
  },
  {
    name: 'IR&P Council',
    image: '/irp-modified.png',
  },
  {
    name: 'General Complaints',
    image: '/studentsenate.png',
  },
]

function Submit() {
  const navigate = useNavigate()

  const params = useParams()

  const [nextComplaintId, setNextComplaintId] =
    useState('')

  const category = decodeURIComponent(
    params.category || '',
  )

  const selectedCategory = allowedCategories.find(
    (c) => c.name === category,
  )

  if (!selectedCategory) {
    return <Navigate to="/" replace />
  }

  const withTimeout = async (
    promise,
    ms,
    stage,
  ) => {
    let timeoutId

    const timeoutPromise = new Promise(
      (_, reject) => {
        timeoutId = setTimeout(() => {
          const error = new Error(
            `Timed out while ${stage}.`,
          )

          error.code = 'timeout'

          reject(error)
        }, ms)
      },
    )

    try {
      return await Promise.race([
        promise,
        timeoutPromise,
      ])
    } finally {
      clearTimeout(timeoutId)
    }
  }

  const generateComplaintId = async () => {
    const counterRef = doc(
      db,
      'metadata',
      'complaintCounter',
    )

    const complaintId = await runTransaction(
      db,
      async (transaction) => {
        const counterDoc =
          await transaction.get(counterRef)

        let current = 0

        if (counterDoc.exists()) {
          current =
            counterDoc.data().current || 0
        }

        const next = current + 1

        transaction.set(
          counterRef,
          {
            current: next,
          },
          { merge: true },
        )

        const year =
          new Date().getFullYear()

        return `GRV-${year}-${String(
          next,
        ).padStart(5, '0')}`
      },
    )

    return complaintId
  }

  const fetchNextComplaintId = async () => {
    const counterRef = doc(
      db,
      'metadata',
      'complaintCounter',
    )

    const counterDoc = await getDoc(counterRef)

    let current = 0

    if (counterDoc.exists()) {
      current =
        counterDoc.data().current || 0
    }

    const next = current + 1

    const year = new Date().getFullYear()

    const previewId = `GRV-${year}-${String(
      next,
    ).padStart(5, '0')}`

    setNextComplaintId(previewId)
  }

  useEffect(() => {
    fetchNextComplaintId()
  }, [])

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onerror = () =>
        reject(
          new Error(
            'Failed to read selected image.',
          ),
        )

      reader.onload = () => {
        const result = String(
          reader.result || '',
        )

        const commaIndex =
          result.indexOf(',')

        resolve(
          commaIndex >= 0
            ? result.slice(commaIndex + 1)
            : result,
        )
      }

      reader.readAsDataURL(file)
    })

  const uploadToImgBB = async (file) => {
    const apiKey =
      import.meta.env.VITE_IMGBB_API_KEY

    if (!apiKey) {
      const error = new Error(
        'Missing VITE_IMGBB_API_KEY.',
      )

      error.code = 'missing-imgbb-key'

      throw error
    }

    const imageBase64 =
      await fileToBase64(file)

    const body = new FormData()

    body.append('image', imageBase64)

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: 'POST',
        body,
      },
    )

    if (!response.ok) {
      const error = new Error(
        'Image upload failed.',
      )

      error.code = 'img-upload-failed'

      throw error
    }

    const json = await response.json()

    const url =
      json?.data?.url ||
      json?.data?.display_url

    if (!url) {
      const error = new Error(
        'No image URL returned.',
      )

      error.code = 'img-no-url'

      throw error
    }

    return url
  }

  const handleSubmit = async (
    formData,
  ) => {
    const { photoFile, ...rest } =
      formData || {}

    let photoUrl = ''
    let photoName = ''
    let photoSize = 0

    if (photoFile) {
      photoName = String(
        photoFile.name || '',
      )

      photoSize = Number(
        photoFile.size || 0,
      )

      photoUrl = await withTimeout(
        uploadToImgBB(photoFile),
        60000,
        'uploading image',
      )
    }

    const complaintId =
      await generateComplaintId()

    const docRef = await withTimeout(
      addDoc(collection(db, 'grievances'), {
        ...rest,
        complaintId,
        status: 'Pending',
        category: selectedCategory.name,
        timestamp: serverTimestamp(),
        photoUrl: photoUrl || null,
        photoName: photoName || null,
        photoSize: photoSize || null,
      }),
      15000,
      'saving grievance',
    )

    await withTimeout(
      getDoc(docRef),
      15000,
      'confirming grievance',
    )

    navigate(`/success/${complaintId}`)
  }

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-[#f7f9fc]">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/campus-lite2.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>

      <div className="relative z-10">

        <header className="bg-[#020b2d] h-[85px] border-b border-slate-700">
          <div className="w-full h-full px-8 flex items-center justify-between">

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

        <main className="max-w-[900px] mx-auto px-6 py-14">

          <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-lg px-12 py-10 mb-10">

            <div className="flex flex-col md:flex-row items-center gap-8">

              <div className="w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden shadow-sm">

                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.name}
                  className="w-24 h-24 object-cover rounded-full"
                />

              </div>

              <div className="text-center md:text-left">

                <h1 className="text-[42px] font-bold text-[#020b2d] tracking-tight leading-tight">
                  {selectedCategory.name}
                </h1>

                <p className="text-slate-600 text-[18px] mt-4 leading-relaxed max-w-[550px]">
                  Submit your grievance securely to the respective council.
                </p>

                <div className="w-20 h-[3px] bg-[#2563eb] rounded-full mt-6 mx-auto md:mx-0" />

              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-lg p-10">

            <Form
              onSubmit={handleSubmit}
              onBack={() =>
                navigate('/categories')
              }
              nextComplaintId={
                nextComplaintId
              }
            />

          </div>
        </main>
      </div>
    </div>
  )
}

export default Submit