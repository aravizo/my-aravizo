import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      <header className="bg-emerald-700 text-white p-8 text-center shadow-lg">
        <h1 className="text-5xl font-bold flex items-center justify-center gap-4">
          Aravizo <span className="text-6xl">🦅</span>
        </h1>
        <p className="text-xl mt-2">تعلم العربية مع زيزو الصقر الذهبي</p>
      </header>

      <main className="max-w-4xl mx-auto p-8 text-center">
        {user ? (
          <div>
            <p className="text-2xl mb-8">مرحباً يا بطل! 🚀</p>
            <button className="bg-emerald-700 text-white px-10 py-5 rounded-xl text-2xl font-bold">
              ابدأ الدرس الأول
            </button>
          </div>
        ) : (
          <div>
            <p className="text-2xl mb-8">سجل دلوقتي وابدأ رحلتك مجانًا</p>
            <button className="bg-gold text-emerald-900 px-10 py-5 rounded-xl text-2xl font-bold">
              تسجيل دخول / إنشاء حساب
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
