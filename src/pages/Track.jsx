import { useState } from 'react'

import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'

import {
  useNavigate,
} from 'react-router-dom'

import { db } from '../firebase.js'

function Track() {
  const navigate = useNavigate()

  const [complaintId, setComplaintId] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  const [complaint, setComplaint] =
    useState(null)

  const fetchComplaint = async (
    event,
  ) => {
    event.preventDefault()

    if (!complaintId.trim()) {
      setError(
        'Please enter a Complaint ID.',
      )

      return
    }

    setLoading(true)

    setError('')

    setComplaint(null)

    try {
      const grievancesRef =
        collection(
          db,
          'grievances',
        )

      const q = query(
        grievancesRef,
        where(
          'complaintId',
          '==',
          complaintId.trim(),
        ),
      )

      const snapshot =
        await getDocs(q)

      if (snapshot.empty) {
        setError(
          'No complaint found with this Complaint ID.',
        )

        setLoading(false)

        return
      }

      const docData =
        snapshot.docs[0].data()

      setComplaint(docData)
    } catch {
      setError(
        'Failed to fetch complaint status.',
      )
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (
    status,
  ) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-700 border-green-200'

      case 'Under Review':
        return 'bg-blue-100 text-blue-700 border-blue-200'

      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-200'

      default:
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
    }
  }

  const formatDate = (
    timestamp,
  ) => {
    if (!timestamp) {
      return '-'
    }

    const rawDate =
      timestamp?.toDate
        ? timestamp.toDate()
        : new Date(timestamp)

    if (
      Number.isNaN(
        rawDate.getTime(),
      )
    ) {
      return '-'
    }

    return rawDate.toLocaleString()
  }

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-[#f7f9fc]">

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
                    Track Complaint Status
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
        <main className="max-w-[900px] mx-auto px-6 py-16">

          {/* SEARCH CARD */}
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-lg p-10">

            {/* TITLE */}
            <div className="text-center mb-10">

              <div className="w-24 h-24 rounded-full bg-blue-50 mx-auto flex items-center justify-center mb-6">

                <span className="material-symbols-outlined text-[52px] text-[#020b2d]">
                  search
                </span>

              </div>

              <h1 className="text-[42px] font-bold text-[#020b2d] tracking-tight">
                Track Complaint Status
              </h1>

              <p className="text-slate-600 text-[18px] mt-4 leading-relaxed">
                Enter your Complaint ID to view the latest grievance status and updates.
              </p>

            </div>

            {/* FORM */}
            <form
              onSubmit={fetchComplaint}
              className="space-y-6"
            >

              <div>

                <label className="block text-[16px] font-semibold text-[#020b2d] mb-3">
                  Complaint ID
                </label>

                <input
                  type="text"
                  value={complaintId}
                  onChange={(event) =>
                    setComplaintId(
                      event.target.value.toUpperCase(),
                    )
                  }
                  placeholder="GRV-2026-000001"
                  className="w-full border border-slate-300 rounded-2xl px-6 py-4 text-[18px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all bg-white tracking-wider"
                />

              </div>

              <div className="flex flex-wrap gap-4">

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#020b2d] text-white px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-[#0b1b55] transition-all disabled:opacity-60"
                >
                  {loading
                    ? 'Searching...'
                    : 'View Status'}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    navigate('/')
                  }
                  className="border border-slate-300 text-[#020b2d] px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-slate-100 transition-all"
                >
                  Back
                </button>

              </div>

            </form>

            {/* ERROR */}
            {error && (
              <div className="mt-8 border border-red-200 bg-red-50 rounded-xl px-5 py-4">

                <p className="text-red-700 font-medium">
                  {error}
                </p>

              </div>
            )}

            {/* RESULT */}
            {complaint && (
              <div className="mt-10 border border-slate-200 rounded-3xl p-8 bg-slate-50">

                {/* TOP */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-10">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

                      <span className="material-symbols-outlined text-green-600 text-[30px]">
                        check_circle
                      </span>

                    </div>

                    <div>

                      <h2 className="text-[28px] font-bold text-[#020b2d]">
                        Complaint Found
                      </h2>

                      <p className="text-slate-500">
                        Complaint details retrieved successfully.
                      </p>

                    </div>

                  </div>

                  {/* STATUS */}
                  <div
                    className={`inline-flex items-center px-6 py-3 rounded-2xl border text-[16px] font-bold ${getStatusColor(
                      complaint.status,
                    )}`}
                  >
                    {complaint.status || 'Pending'}
                  </div>

                </div>

                {/* DETAILS */}
                <div className="grid md:grid-cols-2 gap-8">

                  {/* LEFT */}
                  <div className="space-y-6">

                    <div>

                      <p className="text-slate-500 text-[14px] mb-2">
                        Complaint ID
                      </p>

                      <div className="bg-white border border-slate-200 rounded-xl px-5 py-4 inline-block shadow-sm">

                        <p className="text-[22px] font-bold tracking-wider text-[#020b2d]">
                          {complaint.complaintId}
                        </p>

                      </div>

                    </div>

                    <div>

                      <p className="text-slate-500 text-[14px] mb-2">
                        Name
                      </p>

                      <p className="text-[18px] font-semibold text-[#020b2d]">
                        {complaint.name || 'Not Provided'}
                      </p>

                    </div>

                    <div>

                      <p className="text-slate-500 text-[14px] mb-2">
                        Email
                      </p>

                      <p className="text-[18px] font-semibold text-[#020b2d] break-all">
                        {complaint.email || 'Not Provided'}
                      </p>

                    </div>

                    <div>

                      <p className="text-slate-500 text-[14px] mb-2">
                        Category
                      </p>

                      <p className="text-[18px] font-semibold text-[#020b2d]">
                        {complaint.category}
                      </p>

                    </div>

                    <div>

                      <p className="text-slate-500 text-[14px] mb-2">
                        Submitted On
                      </p>

                      <p className="text-[17px] font-medium text-slate-700">
                        {formatDate(
                          complaint.timestamp,
                        )}
                      </p>

                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="space-y-6">

                    {/* DESCRIPTION */}
                    <div>

                      <p className="text-slate-500 text-[14px] mb-2">
                        Complaint Description
                      </p>

                      <div className="bg-white border border-slate-200 rounded-2xl px-6 py-5 min-h-[170px]">

                        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                          {complaint.description}
                        </p>

                      </div>

                    </div>

                    {/* ADMIN REMARK */}
                    {complaint.adminRemark && (
                      <div>

                        <p className="text-slate-500 text-[14px] mb-2">
                          Authority Remark
                        </p>

                        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-5">

                          <p className="text-blue-900 leading-relaxed whitespace-pre-wrap">
                            {complaint.adminRemark}
                          </p>

                        </div>

                      </div>
                    )}

                    {/* IMAGE */}
                    {complaint.photoUrl && (
                      <div>

                        <p className="text-slate-500 text-[14px] mb-3">
                          Attached Image
                        </p>

                        <img
                          src={complaint.photoUrl}
                          alt="Complaint"
                          className="rounded-2xl border border-slate-200 max-h-[350px] object-cover shadow-md"
                        />

                      </div>
                    )}

                  </div>

                </div>

              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  )
}

export default Track