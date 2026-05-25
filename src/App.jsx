// import { Suspense, lazy } from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'

// const Landing = lazy(() => import('./pages/Landing.jsx'))
// const Categories = lazy(() => import('./pages/Categories.jsx'))
// const Submit = lazy(() => import('./pages/Submit.jsx'))
// const Login = lazy(() => import('./pages/Login.jsx'))
// const Admin = lazy(() => import('./pages/Admin.jsx'))

// function App() {
//   return (
//     <Suspense fallback={null}>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/submit/:category" element={<Submit />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Suspense>
//   )
// }

// export default App


// import { Suspense, lazy } from 'react'

// import {
//   Routes,
//   Route,
//   Navigate,
// } from 'react-router-dom'

// const Landing = lazy(() =>
//   import('./pages/Landing.jsx'),
// )

// const Categories = lazy(() =>
//   import('./pages/Categories.jsx'),
// )

// const Submit = lazy(() =>
//   import('./pages/Submit.jsx'),
// )

// const Success = lazy(() =>
//   import('./pages/Success.jsx'),
// )

// const Track = lazy(() =>
//   import('./pages/Track.jsx'),
// )

// const Login = lazy(() =>
//   import('./pages/Login.jsx'),
// )

// const Admin = lazy(() =>
//   import('./pages/Admin.jsx'),
// )

// function App() {
//   return (
//     <Suspense fallback={null}>

//       <Routes>

//         {/* LANDING */}
//         <Route
//           path="/"
//           element={<Landing />}
//         />

//         {/* CATEGORIES */}
//         <Route
//           path="/categories"
//           element={<Categories />}
//         />

//         {/* SUBMIT */}
//         <Route
//           path="/submit/:category"
//           element={<Submit />}
//         />

//         {/* SUCCESS */}
//         <Route
//           path="/success/:complaintId"
//           element={<Success />}
//         />

//         {/* TRACK STATUS */}
//         <Route
//           path="/track"
//           element={<Track />}
//         />

//         {/* LOGIN */}
//         <Route
//           path="/login"
//           element={<Login />}
//         />

//         {/* ADMIN */}
//         <Route
//           path="/admin"
//           element={<Admin />}
//         />

//         {/* FALLBACK */}
//         <Route
//           path="*"
//           element={
//             <Navigate
//               to="/"
//               replace
//             />
//           }
//         />

//       </Routes>
//     </Suspense>
//   )
// }

// export default App


import { Suspense, lazy } from 'react'

import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

const Landing = lazy(() =>
  import('./pages/Landing.jsx'),
)

const Categories = lazy(() =>
  import('./pages/Categories.jsx'),
)

const Submit = lazy(() =>
  import('./pages/Submit.jsx'),
)

const Success = lazy(() =>
  import('./pages/Success.jsx'),
)

const Track = lazy(() =>
  import('./pages/Track.jsx'),
)

const Login = lazy(() =>
  import('./pages/Login.jsx'),
)

const Admin = lazy(() =>
  import('./pages/Admin.jsx'),
)

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc]">

          <div className="text-center">

            <div className="w-14 h-14 border-4 border-[#020b2d] border-t-transparent rounded-full animate-spin mx-auto mb-5"></div>

            <p className="text-[#020b2d] text-[18px] font-medium">
              Loading Portal...
            </p>

          </div>
        </div>
      }
    >

      <Routes>

        {/* LANDING */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* CATEGORIES */}
        <Route
          path="/categories"
          element={<Categories />}
        />

        {/* SUBMIT */}
        <Route
          path="/submit/:category"
          element={<Submit />}
        />

        {/* SUCCESS */}
        <Route
          path="/success/:complaintId"
          element={<Success />}
        />

        {/* TRACK */}
        <Route
          path="/track"
          element={<Track />}
        />

        {/* AUTHORITY LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* AUTHORITY PANEL */}
        <Route
          path="/admin"
          element={<Admin />}
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </Suspense>
  )
}

export default App