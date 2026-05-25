import {
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'

function Success() {
  const navigate = useNavigate()

  const { complaintId } = useParams()

  const [searchParams] = useSearchParams()

  const name =
    searchParams.get('name') || ''

  const email =
    searchParams.get('email') || ''

  const copyComplaintId = async () => {
    try {
      await navigator.clipboard.writeText(
        complaintId,
      )

      alert('Complaint ID copied!')
    } catch {
      alert('Failed to copy Complaint ID.')
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f7f9fc]">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/campus-lite2.jpg')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="w-full max-w-[700px] bg-white/95 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-2xl p-12 text-center">

          {/* CHECK ICON */}
          <div className="w-28 h-28 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-8">

            <span className="material-symbols-outlined text-[60px] text-green-600">
              check
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-[42px] font-bold text-[#020b2d] tracking-tight mb-4">
            Complaint Registered Successfully
          </h1>

          {/* SUBTEXT */}
          <p className="text-slate-600 text-[18px] leading-relaxed max-w-[550px] mx-auto">
            Your grievance has been submitted successfully to the concerned authority.
          </p>

          {/* USER DETAILS */}
          {(name || email) && (
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl px-8 py-6 text-left">

              {name && (
                <div className="mb-4">

                  <p className="text-slate-500 text-[14px] mb-1">
                    Submitted By
                  </p>

                  <p className="text-[18px] font-semibold text-[#020b2d]">
                    {name}
                  </p>

                </div>
              )}

              {email && (
                <div>

                  <p className="text-slate-500 text-[14px] mb-1">
                    Email
                  </p>

                  <p className="text-[18px] font-semibold text-[#020b2d] break-all">
                    {email}
                  </p>

                </div>
              )}

            </div>
          )}

          {/* TRACKING MESSAGE */}
          <div className="mt-10">

            <p className="text-slate-700 text-[17px] mb-4">
              Use this Complaint ID to track your complaint status.
            </p>

            {/* ID BOX */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl px-8 py-6 inline-block shadow-sm">

              <p className="text-[34px] font-bold tracking-[3px] text-[#020b2d]">
                {complaintId}
              </p>

            </div>

            {/* COPY BUTTON */}
            <div className="mt-6">

              <button
                onClick={copyComplaintId}
                className="bg-[#020b2d] text-white px-7 py-3 rounded-xl text-[16px] font-semibold hover:bg-[#0b1b55] transition-all inline-flex items-center gap-2"
              >

                <span className="material-symbols-outlined text-[20px]">
                  content_copy
                </span>

                Copy Complaint ID

              </button>

            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center">

            <button
              onClick={() =>
                navigate('/categories')
              }
              className="border border-slate-300 text-[#020b2d] px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-slate-100 transition-all"
            >
              Submit Another Complaint
            </button>

            <button
              onClick={() => navigate('/')}
              className="bg-[#020b2d] text-white px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-[#0b1b55] transition-all"
            >
              Back to Home
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Success