import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  Navigate,
  useNavigate,
} from 'react-router-dom'

import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'

import { db } from '../firebase.js'

const categories = [
  'All',
  'Welfare Council',
  'Academic Council',
  'Cultural Council',
  'Sports Council',
  'PDC Council',
  'IR&P Council',
  'General Complaints',
]

const statuses = [
  'Pending',
  'Under Review',
  'Resolved',
  'Rejected',
]

function formatDate(timestamp) {
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

function getCouncilImage(role) {
  if (!role) {
    return '/shield.png'
  }

  const imageMap = {
    'Welfare Council':
      '/welfare-modified.png',

    'Academic Council':
      '/academic-modified.png',

    'Cultural Council':
      '/cultural-modified.png',

    'Sports Council':
      '/sports-modified.png',

    'PDC Council':
      '/pdc-modified.png',

    'IR&P Council':
      '/irp-modified.png',

    'General Complaints':
      '/studentsenate.png',
  }

  return (
    imageMap[role] ||
    '/shield.png'
  )
}

function Admin() {
  const navigate = useNavigate()

  const [grievances, setGrievances] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [categoryFilter, setCategoryFilter] =
    useState('All')

  const isAdmin =
    localStorage.getItem(
      'isAdmin',
    ) === 'true'

  const adminRole =
    localStorage.getItem(
      'adminRole',
    )

  const adminEmail =
    localStorage.getItem(
      'adminEmail',
    )

  const isScoped =
    adminRole &&
    adminRole !== 'All'

  useEffect(() => {
    const fetchGrievances =
      async () => {
        try {
          const grievancesQuery =
            query(
              collection(
                db,
                'grievances',
              ),
              orderBy(
                'timestamp',
                'desc',
              ),
            )

          const snapshot =
            await getDocs(
              grievancesQuery,
            )

          const rows =
            snapshot.docs.map(
              (doc) => ({
                id: doc.id,
                ...doc.data(),
              }),
            )

          setGrievances(rows)
        } catch {
          alert(
            'Failed to load grievances.',
          )
        } finally {
          setLoading(false)
        }
      }

    fetchGrievances()
  }, [])

  useEffect(() => {
    if (isScoped) {
      setCategoryFilter(
        adminRole,
      )
    }
  }, [adminRole, isScoped])

  const filtered = useMemo(() => {
    const scopeFiltered =
      isScoped
        ? grievances.filter(
            (item) =>
              item.category ===
              adminRole,
          )
        : grievances

    if (
      categoryFilter ===
        'All' ||
      isScoped
    ) {
      return scopeFiltered
    }

    return scopeFiltered.filter(
      (item) =>
        item.category ===
        categoryFilter,
    )
  }, [
    grievances,
    categoryFilter,
    adminRole,
    isScoped,
  ])

  const handleLogout = () => {
    localStorage.removeItem(
      'isAdmin',
    )

    localStorage.removeItem(
      'adminRole',
    )

    localStorage.removeItem(
      'adminEmail',
    )

    localStorage.removeItem(
      'adminId',
    )

    navigate('/login', {
      replace: true,
    })
  }

  const updateStatus =
    async (
      grievanceId,
      newStatus,
    ) => {
      try {
        await updateDoc(
          doc(
            db,
            'grievances',
            grievanceId,
          ),
          {
            status: newStatus,
          },
        )

        setGrievances((prev) =>
          prev.map((item) =>
            item.id === grievanceId
              ? {
                  ...item,
                  status: newStatus,
                }
              : item,
          ),
        )
      } catch {
        alert(
          'Failed to update status.',
        )
      }
    }

  if (!isAdmin) {
    return (
      <Navigate
        to="/login"
        replace
      />
    )
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
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>

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

              <div>

                <h1 className="text-white text-[28px] font-bold">
                  Grievance Authority Panel
                </h1>

                <p className="text-slate-300 text-[15px]">
                  Complaint Management Dashboard
                </p>

              </div>
            </div>

            {/* RIGHT */}
            <button
              onClick={handleLogout}
              className="bg-white text-[#020b2d] px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all"
            >
              Logout
            </button>

          </div>
        </header>

        {/* MAIN */}
        <main className="px-6 py-10">

          {/* TOP */}
          <div className="flex flex-wrap gap-6 justify-between items-center mb-8">

            <div>

              {/* ICON + TITLE */}
              <div className="flex items-center gap-5 mb-3">

                {/* COUNCIL IMAGE */}
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm overflow-hidden">

                  <img
                    src={getCouncilImage(
                      adminRole,
                    )}
                    alt={adminRole}
                    className="w-12 h-12 object-contain"
                  />

                </div>

                {/* TITLE */}
                <div>

                  <h2 className="text-[38px] font-bold text-[#020b2d] leading-tight">
                    {adminRole}
                  </h2>

                  <p className="text-slate-600 text-[17px] mt-2">
                    Review and manage grievances submitted under your council.
                  </p>

                </div>

              </div>

            </div>

            {!isScoped && (
              <div>

                <select
                  value={
                    categoryFilter
                  }
                  onChange={(e) =>
                    setCategoryFilter(
                      e.target.value,
                    )
                  }
                  className="border border-slate-300 rounded-xl px-5 py-3 bg-white"
                >

                  {categories.map(
                    (item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ),
                  )}

                </select>

              </div>
            )}

          </div>

          {/* TABLE */}
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-xl overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-slate-100">

                  <tr>

                    <th className="px-6 py-5 text-left">
                      Complaint ID
                    </th>

                    <th className="px-6 py-5 text-left">
                      Name
                    </th>

                    <th className="px-6 py-5 text-left">
                      Email
                    </th>

                    <th className="px-6 py-5 text-left">
                      Description
                    </th>

                    <th className="px-6 py-5 text-left">
                      Image
                    </th>

                    <th className="px-6 py-5 text-left">
                      Status
                    </th>

                    <th className="px-6 py-5 text-left">
                      Submitted
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {loading && (
                    <tr>

                      <td
                        colSpan={7}
                        className="px-6 py-10 text-center"
                      >
                        Loading grievances...
                      </td>

                    </tr>
                  )}

                  {!loading &&
                    filtered.length ===
                      0 && (
                      <tr>

                        <td
                          colSpan={7}
                          className="px-6 py-10 text-center"
                        >
                          No complaints found.
                        </td>

                      </tr>
                    )}

                  {!loading &&
                    filtered.map(
                      (item) => (
                        <tr
                          key={item.id}
                          className="border-t border-slate-200 hover:bg-slate-50"
                        >

                          <td className="px-6 py-5 font-semibold text-[#020b2d]">
                            {
                              item.complaintId
                            }
                          </td>

                          <td className="px-6 py-5">
                            {item.name ||
                              'Anonymous'}
                          </td>

                          <td className="px-6 py-5">
                            {item.email ||
                              '-'}
                          </td>

                          <td className="px-6 py-5 max-w-[320px]">

                            <div className="line-clamp-3 text-slate-700">
                              {
                                item.description
                              }
                            </div>

                          </td>

                          <td className="px-6 py-5">

                            {item.photoUrl ? (
                              <a
                                href={
                                  item.photoUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#020b2d] text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 text-sm"
                              >

                                <span className="material-symbols-outlined text-[18px]">
                                  image
                                </span>

                                View

                              </a>
                            ) : (
                              '-'
                            )}

                          </td>

                          <td className="px-6 py-5">

                            <select
                              value={
                                item.status ||
                                'Pending'
                              }
                              onChange={(
                                e,
                              ) =>
                                updateStatus(
                                  item.id,
                                  e.target
                                    .value,
                                )
                              }
                              className="border border-slate-300 rounded-xl px-4 py-2 bg-white"
                            >

                              {statuses.map(
                                (
                                  status,
                                ) => (
                                  <option
                                    key={
                                      status
                                    }
                                    value={
                                      status
                                    }
                                  >
                                    {
                                      status
                                    }
                                  </option>
                                ),
                              )}

                            </select>

                          </td>

                          <td className="px-6 py-5 text-slate-600 text-sm">
                            {formatDate(
                              item.timestamp,
                            )}
                          </td>

                        </tr>
                      ),
                    )}

                </tbody>

              </table>

            </div>

          </div>

          {/* FOOTER */}
          <div className="mt-8 flex items-center justify-between flex-wrap gap-5">

            <div>

              <p className="text-slate-500 text-sm">
                Logged in as
              </p>

              <p className="text-[#020b2d] font-semibold">
                {adminEmail}
              </p>

            </div>

          </div>

        </main>
      </div>
    </div>
  )
}

export default Admin