import { useState } from 'react'

import {
  Link,
  useNavigate,
} from 'react-router-dom'

import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'

import { db } from '../firebase.js'

import {
  ADMIN_IDS,
  adminIdToEmail,
  isAllowedAdminId,
  normalizeAdminId,
} from '../admins.js'

function Login() {
  const [adminId, setAdminId] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [error, setError] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (
    event,
  ) => {
    event.preventDefault()

    setError('')

    setLoading(true)

    const normalizedId =
      normalizeAdminId(adminId)

    if (
      !isAllowedAdminId(
        normalizedId,
      )
    ) {
      setError('Unknown authority.')

      setLoading(false)

      return
    }

    try {
      const email =
        adminIdToEmail(
          normalizedId,
        )

      const adminsRef =
        collection(db, 'admins')

      const q = query(
        adminsRef,
        where(
          'email',
          '==',
          email,
        ),
      )

      const snapshot =
        await getDocs(q)

      if (snapshot.empty) {
        setError(
          'Authority account not found.',
        )

        setLoading(false)

        return
      }

      const adminData =
        snapshot.docs[0].data()

      if (
        adminData.password !==
        password
      ) {
        setError(
          'Invalid password.',
        )

        setLoading(false)

        return
      }

      // SAVE SESSION
      localStorage.setItem(
        'isAdmin',
        'true',
      )

      localStorage.setItem(
        'adminId',
        normalizedId,
      )

      localStorage.setItem(
        'adminRole',
        adminData.role,
      )

      localStorage.setItem(
        'adminEmail',
        adminData.email,
      )

      navigate('/admin')
    } catch {
      setError(
        'Login failed. Please try again.',
      )
    } finally {
      setLoading(false)
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
                    Authority Access Panel
                  </p>

                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex items-center gap-2 text-white">

              <span className="material-symbols-outlined text-[20px]">
                admin_panel_settings
              </span>

              <span className="text-[20px] tracking-wide text-slate-200">
                Secretary Dashboard
              </span>

            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="min-h-[calc(100vh-85px)] flex items-center justify-center px-6 py-12">

          <div className="w-full max-w-[620px] bg-white/95 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-2xl p-12">

            {/* ICON */}
            <div className="w-24 h-24 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-8">

              <span className="material-symbols-outlined text-[52px] text-[#020b2d]">
                shield_person
              </span>

            </div>

            {/* TITLE */}
            <div className="text-center mb-10">

              <h1 className="text-[42px] font-bold text-[#020b2d] tracking-tight mb-4">
                Authority Login
              </h1>

              <p className="text-slate-600 text-[18px] leading-relaxed">
                Login using your official secretary credentials to access the grievance dashboard.
              </p>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* CATEGORY */}
              <div>

                <label
                  htmlFor="adminId"
                  className="block text-[16px] font-semibold text-[#020b2d] mb-3"
                >
                  Authority Category
                </label>

                <select
                  id="adminId"
                  value={adminId}
                  onChange={(event) =>
                    setAdminId(
                      event.target.value,
                    )
                  }
                  required
                  className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-[16px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all bg-white"
                >

                  <option
                    value=""
                    disabled
                  >
                    Select authority category
                  </option>

                  {ADMIN_IDS.map(
                    (id) => (
                      <option
                        key={id}
                        value={id}
                      >
                        {id}
                      </option>
                    ),
                  )}

                </select>

              </div>

              {/* PASSWORD */}
              <div>

                <label
                  htmlFor="password"
                  className="block text-[16px] font-semibold text-[#020b2d] mb-3"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value,
                    )
                  }
                  required
                  placeholder="Enter password"
                  className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-[16px] outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100 transition-all bg-white"
                />

              </div>

              {/* ERROR */}
              {error && (
                <div className="border border-red-200 bg-red-50 rounded-xl px-5 py-4">

                  <p className="text-red-700 font-medium">
                    {error}
                  </p>

                </div>
              )}

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-2">

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#020b2d] text-white px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-[#0b1b55] transition-all disabled:opacity-60"
                >
                  {loading
                    ? 'Logging in...'
                    : 'Login'}
                </button>

                <Link
                  to="/"
                  className="border border-slate-300 text-[#020b2d] px-8 py-4 rounded-xl text-[16px] font-semibold hover:bg-slate-100 transition-all inline-flex items-center justify-center"
                >
                  Back to Home
                </Link>

              </div>

            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Login