import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Routes, Route, Link } from 'react-router-dom'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

function App() {
  const [user, setUser] = useState(null)
  const [lessonsDone, setLessonsDone] = useState(0)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      <header className="bg-emerald-700 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            Aravizo
            <span className="text-4xl">🦅</span>
          </h1>
          {user ? <span>مرحباً يا بطل!</span> : <button className="bg-gold px-4 py-2 rounded">تسجيل دخول</button>}
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8 text-center">
        <h2 className="text-5xl font-bold text-emerald-700 mb-6">
          تعلم العربية مع زيزو الصقر الذهبي
        </h2>
        <p className="text-xl mb-8">25 درس مجاني + تمارين + نطق بالذكاء الاصطناعي</p>

        {lessonsDone < 25 ? (
          <Link
            to="/lesson/1"
            className="bg-emerald-700 text-white px-8 py-5 rounded-xl text-2xl font-bold hover:bg-emerald-800 transition"
          >
            ابدأ الآن مجاناً
          </Link>
        ) : (
          <button className="bg-gold text-emerald-900 px-8 py-5 rounded-xl text-2xl font-bold">
            اشترك الآن $7.99/شهر
          </button>
        )}
      </main>
    </div>
  )
}

export default App
