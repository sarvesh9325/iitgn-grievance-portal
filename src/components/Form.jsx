// import { useRef, useState } from 'react'

// function Form({ onSubmit, onBack }) {
//   const [name, setName] = useState('')
//   const [description, setDescription] = useState('')
//   const [photoFile, setPhotoFile] = useState(null)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitError, setSubmitError] = useState('')
//   const [submitSuccess, setSubmitSuccess] = useState('')

//   const photoInputRef = useRef(null)

//   const withTimeout = (promise, ms) => {
//     let timeoutId

//     const timeoutPromise = new Promise((_, reject) => {
//       timeoutId = setTimeout(() => {
//         const error = new Error(
//           'Request timed out. Could not confirm submission. Please try again.',
//         )

//         error.code = 'timeout'

//         reject(error)
//       }, ms)
//     })

//     return Promise.race([promise, timeoutPromise]).finally(() => {
//       clearTimeout(timeoutId)
//     })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()

//     if (!description.trim()) {
//       setSubmitSuccess('')
//       setSubmitError('Please enter a description.')
//       return
//     }

//     setSubmitError('')
//     setSubmitSuccess('')
//     setIsSubmitting(true)

//     try {
//       const timeoutMs = photoFile ? 90000 : 12000

//       await withTimeout(
//         onSubmit({
//           name: name.trim(),
//           description: description.trim(),
//           photoFile,
//         }),
//         timeoutMs,
//       )

//       setName('')
//       setDescription('')
//       setPhotoFile(null)

//       if (photoInputRef.current) {
//         photoInputRef.current.value = ''
//       }

//       setSubmitSuccess(
//         'Grievance submitted successfully.',
//       )
//     } catch (error) {
//       const code = error?.code
//         ? String(error.code)
//         : ''

//       const details = error?.message
//         ? String(error.message)
//         : ''

//       const base = code
//         ? `Submission failed (${code}).`
//         : 'Submission failed.'

//       const hint =
//         code === 'permission-denied'
//           ? ' Check Firestore rules and try again.'
//           : ''

//       setSubmitError(
//         details
//           ? `${base}${hint} ${details}`.trim()
//           : `${base}${hint}`.trim(),
//       )
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>

//       {/* TITLE */}
//       <div className="mb-4">

//         <h2 className="text-[34px] font-bold text-[#020b2d] tracking-tight mb-1">
//           Submit Grievance
//         </h2>

//         <p className="text-slate-600 text-[17px] leading-relaxed">
//           Fill in the grievance details carefully and submit your concern
//           to the respective council.
//         </p>
//       </div>

//       {/* NAME */}
//       <div className="mb-4">

//         <label
//           htmlFor="name"
//           className="block text-[16px] font-semibold text-[#020b2d] mb-2"
//         >
//           Name (Optional)
//         </label>

//         <input
//           id="name"
//           type="text"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           placeholder="Enter your name"
//           className="w-full border border-slate-300 rounded-xl px-5 py-3 text-[16px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all bg-white"
//         />
//       </div>

//       {/* DESCRIPTION */}
//       <div className="mb-4">

//         <label
//           htmlFor="description"
//           className="block text-[16px] font-semibold text-[#020b2d] mb-2"
//         >
//           Description
//         </label>

//         <textarea
//           id="description"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//           placeholder="Describe the grievance in detail..."
//           required
//           rows={6}
//           className="w-full border border-slate-300 rounded-xl px-5 py-4 text-[16px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all resize-none bg-white"
//         />
//       </div>

//       {/* PHOTO */}
//       <div className="mb-4">

//         <label
//           htmlFor="photo"
//           className="block text-[16px] font-semibold text-[#020b2d] mb-3"
//         >
//           Supporting Image (Optional)
//         </label>

//         <input
//           id="photo"
//           ref={photoInputRef}
//           type="file"
//           accept="image/*"
//           className="w-full border border-slate-300 rounded-xl px-5 py-4 text-[15px] bg-white file:mr-4 file:px-4 file:py-2 file:border-0 file:rounded-lg file:bg-[#020b2d] file:text-white hover:file:bg-[#0b1b55]"
//           onChange={(event) => {
//             const file = event.target.files?.[0] ?? null

//             if (!file) {
//               setPhotoFile(null)
//               return
//             }

//             if (file.size > 5 * 1024 * 1024) {
//               setSubmitSuccess('')
//               setSubmitError(
//                 'Please choose an image smaller than 5 MB.',
//               )

//               event.target.value = ''

//               setPhotoFile(null)

//               return
//             }

//             setSubmitError('')
//             setPhotoFile(file)
//           }}
//         />
//       </div>

//       {/* BUTTONS */}
//       <div className="flex flex-wrap gap-4 items-center">

//         <button
//           className="bg-[#020b2d] text-white px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-[#0b1b55] transition-all disabled:opacity-60"
//           type="submit"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Submitting...' : 'Submit Grievance'}
//         </button>

//         {onBack && (
//           <button
//             className="border border-slate-300 text-[#020b2d] px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-slate-100 transition-all"
//             type="button"
//             onClick={onBack}
//           >
//             Back
//           </button>
//         )}
//       </div>

//       {/* SUCCESS */}
//       {submitSuccess && (
//         <div className="mt-8 border border-green-200 bg-green-50 rounded-xl px-5 py-4">
//           <p className="text-green-700 font-medium">
//             {submitSuccess}
//           </p>
//         </div>
//       )}

//       {/* ERROR */}
//       {submitError && (
//         <div className="mt-8 border border-red-200 bg-red-50 rounded-xl px-5 py-4">
//           <p className="text-red-700 font-medium">
//             {submitError}
//           </p>
//         </div>
//       )}
//     </form>
//   )
// }

// export default Form

// import { useRef, useState } from 'react'

// function Form({ onSubmit, onBack }) {
//   const [name, setName] = useState('')
//   const [description, setDescription] = useState('')
//   const [photoFile, setPhotoFile] = useState(null)

//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const [submitError, setSubmitError] = useState('')

//   const [submitSuccess, setSubmitSuccess] =
//     useState('')

//   const [trackingId, setTrackingId] =
//     useState('')

//   const photoInputRef = useRef(null)

//   const withTimeout = (promise, ms) => {
//     let timeoutId

//     const timeoutPromise = new Promise(
//       (_, reject) => {
//         timeoutId = setTimeout(() => {
//           const error = new Error(
//             'Request timed out. Could not confirm submission. Please try again.',
//           )

//           error.code = 'timeout'

//           reject(error)
//         }, ms)
//       },
//     )

//     return Promise.race([
//       promise,
//       timeoutPromise,
//     ]).finally(() => {
//       clearTimeout(timeoutId)
//     })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()

//     if (!description.trim()) {
//       setSubmitSuccess('')
//       setSubmitError(
//         'Please enter a description.',
//       )

//       return
//     }

//     setSubmitError('')
//     setSubmitSuccess('')
//     setTrackingId('')

//     setIsSubmitting(true)

//     try {
//       const timeoutMs = photoFile
//         ? 90000
//         : 12000

//       const result = await withTimeout(
//         onSubmit({
//           name: name.trim(),
//           description: description.trim(),
//           photoFile,
//         }),
//         timeoutMs,
//       )

//       setName('')
//       setDescription('')
//       setPhotoFile(null)

//       if (photoInputRef.current) {
//         photoInputRef.current.value = ''
//       }

//       setSubmitSuccess(
//         'Grievance submitted successfully.',
//       )

//       if (result?.complaintId) {
//         setTrackingId(result.complaintId)
//       }
//     } catch (error) {
//       const code = error?.code
//         ? String(error.code)
//         : ''

//       const details = error?.message
//         ? String(error.message)
//         : ''

//       const base = code
//         ? `Submission failed (${code}).`
//         : 'Submission failed.'

//       const hint =
//         code === 'permission-denied'
//           ? ' Check Firestore rules and try again.'
//           : ''

//       setSubmitError(
//         details
//           ? `${base}${hint} ${details}`.trim()
//           : `${base}${hint}`.trim(),
//       )
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>

//       {/* TITLE */}
//       <div className="mb-4">

//         <h2 className="text-[34px] font-bold text-[#020b2d] tracking-tight mb-1">
//           Submit Grievance
//         </h2>

//         <p className="text-slate-600 text-[17px] leading-relaxed">
//           Fill in the grievance details carefully
//           and submit your concern to the
//           respective council.
//         </p>

//       </div>

//       {/* NAME */}
//       <div className="mb-4">

//         <label
//           htmlFor="name"
//           className="block text-[16px] font-semibold text-[#020b2d] mb-2"
//         >
//           Name (Optional)
//         </label>

//         <input
//           id="name"
//           type="text"
//           value={name}
//           onChange={(event) =>
//             setName(event.target.value)
//           }
//           placeholder="Enter your name"
//           className="w-full border border-slate-300 rounded-xl px-5 py-3 text-[16px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all bg-white"
//         />

//       </div>

//       {/* DESCRIPTION */}
//       <div className="mb-4">

//         <label
//           htmlFor="description"
//           className="block text-[16px] font-semibold text-[#020b2d] mb-2"
//         >
//           Description
//         </label>

//         <textarea
//           id="description"
//           value={description}
//           onChange={(event) =>
//             setDescription(event.target.value)
//           }
//           placeholder="Describe the grievance in detail..."
//           required
//           rows={6}
//           className="w-full border border-slate-300 rounded-xl px-5 py-4 text-[16px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all resize-none bg-white"
//         />

//       </div>

//       {/* PHOTO */}
//       <div className="mb-4">

//         <label
//           htmlFor="photo"
//           className="block text-[16px] font-semibold text-[#020b2d] mb-3"
//         >
//           Supporting Image (Optional)
//         </label>

//         <input
//           id="photo"
//           ref={photoInputRef}
//           type="file"
//           accept="image/*"
//           className="w-full border border-slate-300 rounded-xl px-5 py-4 text-[15px] bg-white file:mr-4 file:px-4 file:py-2 file:border-0 file:rounded-lg file:bg-[#020b2d] file:text-white hover:file:bg-[#0b1b55]"
//           onChange={(event) => {
//             const file =
//               event.target.files?.[0] ?? null

//             if (!file) {
//               setPhotoFile(null)

//               return
//             }

//             if (
//               file.size >
//               5 * 1024 * 1024
//             ) {
//               setSubmitSuccess('')

//               setSubmitError(
//                 'Please choose an image smaller than 5 MB.',
//               )

//               event.target.value = ''

//               setPhotoFile(null)

//               return
//             }

//             setSubmitError('')

//             setPhotoFile(file)
//           }}
//         />

//       </div>

//       {/* BUTTONS */}
//       <div className="flex flex-wrap gap-4 items-center">

//         <button
//           className="bg-[#020b2d] text-white px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-[#0b1b55] transition-all disabled:opacity-60"
//           type="submit"
//           disabled={isSubmitting}
//         >
//           {isSubmitting
//             ? 'Submitting...'
//             : 'Submit Grievance'}
//         </button>

//         {onBack && (
//           <button
//             className="border border-slate-300 text-[#020b2d] px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-slate-100 transition-all"
//             type="button"
//             onClick={onBack}
//           >
//             Back
//           </button>
//         )}

//       </div>

//       {/* SUCCESS */}
//       {submitSuccess && (
//         <div className="mt-8 border border-green-200 bg-green-50 rounded-2xl px-6 py-5">

//           <p className="text-green-700 text-[17px] font-semibold">
//             {submitSuccess}
//           </p>

//           {trackingId && (
//             <div className="mt-4 border-t border-green-200 pt-4">

//               <p className="text-slate-700 text-[15px] mb-2">
//                 Your Complaint Tracking ID
//               </p>

//               <div className="bg-white border border-green-200 rounded-xl px-5 py-4 inline-block shadow-sm">

//                 <p className="text-[24px] font-bold tracking-wider text-[#020b2d]">
//                   {trackingId}
//                 </p>

//               </div>

//               <p className="text-slate-500 text-[14px] mt-3">
//                 Please save this ID carefully for
//                 future grievance tracking.
//               </p>

//             </div>
//           )}

//         </div>
//       )}

//       {/* ERROR */}
//       {submitError && (
//         <div className="mt-8 border border-red-200 bg-red-50 rounded-xl px-5 py-4">

//           <p className="text-red-700 font-medium">
//             {submitError}
//           </p>

//         </div>
//       )}

//     </form>
//   )
// }

// export default Form

import { useRef, useState } from 'react'

function Form({
  onSubmit,
  onBack,
  nextComplaintId,
}) {
  const [name, setName] = useState('')

  const [email, setEmail] =
    useState('')

  const [description, setDescription] =
    useState('')

  const [photoFile, setPhotoFile] =
    useState(null)

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [submitError, setSubmitError] =
    useState('')

  const photoInputRef = useRef(null)

  const withTimeout = (promise, ms) => {
    let timeoutId

    const timeoutPromise = new Promise(
      (_, reject) => {
        timeoutId = setTimeout(() => {
          const error = new Error(
            'Request timed out.',
          )

          error.code = 'timeout'

          reject(error)
        }, ms)
      },
    )

    return Promise.race([
      promise,
      timeoutPromise,
    ]).finally(() => {
      clearTimeout(timeoutId)
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!description.trim()) {
      setSubmitError(
        'Please enter a description.',
      )

      return
    }

    setSubmitError('')

    setIsSubmitting(true)

    try {
      const timeoutMs = photoFile
        ? 90000
        : 12000

      await withTimeout(
        onSubmit({
          name: name.trim(),
          email: email.trim(),
          description:
            description.trim(),
          photoFile,
        }),
        timeoutMs,
      )

      setName('')
      setEmail('')
      setDescription('')
      setPhotoFile(null)

      if (photoInputRef.current) {
        photoInputRef.current.value = ''
      }
    } catch (error) {
      const code = error?.code
        ? String(error.code)
        : ''

      const details = error?.message
        ? String(error.message)
        : ''

      const base = code
        ? `Submission failed (${code}).`
        : 'Submission failed.'

      setSubmitError(
        details
          ? `${base} ${details}`.trim()
          : base,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      {/* PREVIEW ID */}
      <div className="mb-6">

        <div className="border border-blue-200 bg-blue-50 rounded-2xl px-6 py-5">

          <p className="text-slate-600 text-[15px] mb-2">
            Complaint Tracking ID
          </p>

          <div className="bg-white border border-blue-200 rounded-xl px-5 py-4 inline-block shadow-sm">

            <p className="text-[26px] font-bold tracking-wider text-[#020b2d]">
              {nextComplaintId ||
                'Loading...'}
            </p>

          </div>

          <p className="text-slate-500 text-[14px] mt-3">
            This unique ID will be assigned
            to your grievance.
          </p>

        </div>
      </div>

      {/* NAME */}
      <div className="mb-4">

        <label
          htmlFor="name"
          className="block text-[16px] font-semibold text-[#020b2d] mb-2"
        >
          Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          placeholder="Enter your name"
          className="w-full border border-slate-300 rounded-xl px-5 py-3 text-[16px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all bg-white"
        />

      </div>

      {/* EMAIL */}
      <div className="mb-4">

        <label
          htmlFor="email"
          className="block text-[16px] font-semibold text-[#020b2d] mb-2"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          placeholder="Enter your email"
          className="w-full border border-slate-300 rounded-xl px-5 py-3 text-[16px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all bg-white"
        />

      </div>

      {/* DESCRIPTION */}
      <div className="mb-4">

        <label
          htmlFor="description"
          className="block text-[16px] font-semibold text-[#020b2d] mb-2"
        >
          Description
        </label>

        <textarea
          id="description"
          value={description}
          onChange={(event) =>
            setDescription(
              event.target.value,
            )
          }
          placeholder="Describe the grievance in detail..."
          required
          rows={6}
          className="w-full border border-slate-300 rounded-xl px-5 py-4 text-[16px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all resize-none bg-white"
        />

      </div>

      {/* PHOTO */}
      <div className="mb-4">

        <label
          htmlFor="photo"
          className="block text-[16px] font-semibold text-[#020b2d] mb-3"
        >
          Supporting Image (Optional)
        </label>

        <input
          id="photo"
          ref={photoInputRef}
          type="file"
          accept="image/*"
          className="w-full border border-slate-300 rounded-xl px-5 py-4 text-[15px] bg-white file:mr-4 file:px-4 file:py-2 file:border-0 file:rounded-lg file:bg-[#020b2d] file:text-white hover:file:bg-[#0b1b55]"
          onChange={(event) => {
            const file =
              event.target.files?.[0] ??
              null

            if (!file) {
              setPhotoFile(null)
              return
            }

            if (
              file.size >
              5 * 1024 * 1024
            ) {
              setSubmitError(
                'Please choose an image smaller than 5 MB.',
              )

              event.target.value = ''

              setPhotoFile(null)

              return
            }

            setSubmitError('')
            setPhotoFile(file)
          }}
        />

      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 items-center">

        <button
          className="bg-[#020b2d] text-white px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-[#0b1b55] transition-all disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? 'Submitting...'
            : 'Submit Grievance'}
        </button>

        {onBack && (
          <button
            className="border border-slate-300 text-[#020b2d] px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-slate-100 transition-all"
            type="button"
            onClick={onBack}
          >
            Back
          </button>
        )}

      </div>

      {submitError && (
        <div className="mt-8 border border-red-200 bg-red-50 rounded-xl px-5 py-4">

          <p className="text-red-700 font-medium">
            {submitError}
          </p>

        </div>
      )}

    </form>
  )
}

export default Form