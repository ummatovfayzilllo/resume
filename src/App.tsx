import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
// import fayzill_png from "/Fayzillo_ummatov.jpg";
import { useState } from "react";

// 🔹 Reusable Section Component
function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">{title}</h3>
      <ul className="list-disc ml-6 space-y-1">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);

  // 🎨 Dynamic MUI Theme
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      background: {
        default: isDark ? "#1e1e1e" : "#f9fafb",
        paper: isDark ? "#2c2c2c" : "#ffffff",
      },
      text: {
        primary: isDark ? "#f1f1f1" : "#1e1e1e",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        className={`min-h-screen transition-all duration-500 ${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
          }`}
      >
        {/* 🌗 Mode Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
          <IconButton
            onClick={() => setIsDark(!isDark)}
            color="inherit"
            sx={{
              backgroundColor: isDark ? "#333" : "#fff",
              boxShadow: 2,
              "&:hover": { backgroundColor: isDark ? "#444" : "#f0f0f0" },
            }}
          >
            {isDark ? <LightMode /> : <DarkMode />}
          </IconButton>
        </div>

        {/* 🌟 Resume Container */}
        <div className="container mx-auto p-6 md:p-8 space-y-8">
          {/* 👤 Shaxsiy Ma’lumotlar */}
          <div
            className={`shadow-2xl p-6 md:p-8 rounded-2xl ${isDark ? "bg-gray-800" : "bg-white"
              }`}
          >
            <div className="flex flex-col lg:flex-row flex-wrap gap-8 items-center">
              {/* 🖼 Rasm */}
              {/* <img
                src={fayzill_png}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                alt="Fayzillo Ummatov"
              /> */}

              {/* ℹ️ Ma’lumotlar */}
              <div className="flex flex-col md:flex-row gap-10 w-full justify-between">
                {/* Chap qism */}
                <div className="flex-1">
                  <h1 className="text-2xl font-bold border-b pb-1 mb-2 flex items-center gap-2">
                    👨‍💻 Fayzillo Ummatov
                  </h1>
                  <p><b>🏅 Level:</b> Junior</p>
                  <p><b>🧭 Yo‘nalish:</b> Full Stack Developer</p>
                  <p><b>⚙️ Backend:</b> NestJs + TypeScript</p>
                  <p>
                    <b>💻 Frontend:</b>{" "}
                    <span className="text-blue-500">React</span>,{" "}
                    <span className="text-gray-400">Next</span>,{" "}
                    <span className="text-green-500">TypeScript</span>
                  </p>
                  <p className="mt-2">
                    <b>🎂 Tug‘ilgan sana:</b> <br /> 1995-yil 29-Dekabr
                  </p>
                </div>

                {/* O‘ng qism */}
                <div className="flex-1">
                  <h1 className="text-2xl font-bold border-b pb-1 mb-2 flex items-center gap-2">
                    📞 Contact
                  </h1>
                  <p>
                    📱{" "}
                    <a
                      href="tel:+998916102141"
                      className="text-blue-500 hover:underline"
                    >
                      +998 91 610 21 41
                    </a>
                  </p>
                  <p>
                    ✉️{" "}
                    <a
                      href="mailto:ummatovfayzilllo@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      ummatovfayzilllo@gmail.com
                    </a>
                  </p>
                  <p>💬 Telegram: <span className="font-semibold">@Fayzillo_Ummatov</span></p>
                  <p>
                    🧠{" "}
                    <a
                      href="https://github.com/ummatovfayzilllo"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      github.com/ummatovfayzilllo
                    </a>
                  </p>
                  <p>📍 Andijon viloyati, Ulug‘nor tumani</p>
                </div>
              </div>

              {/* 🎯 Maqsad */}
              <div className="w-full border-t mt-6 pt-4">
                <h2 className="text-xl font-bold border-b pb-2 mb-3 flex items-center gap-2">
                  🎯 Maqsad
                </h2>
                <p>
                  Zamonaviy texnologiyalarni chuqur o‘zlashtirish, ularni real loyihalarda qo‘llash
                  va tajriba orttirish orqali o‘z bilim va ko‘nikmalarimni doimiy ravishda mustahkamlab borish..
                  Har bir loyiham orqali nafaqat texnik, balki ijodiy jihatdan ham rivojlanishni,
                  jamoa bilan ishlash madaniyatini kuchaytirishni istayman.
                </p>
              </div>
            </div>
          </div>

          {/* 📚 Ta’lim */}
          {/* 📚 Ta’lim */}
          <div
            className={`p-6 md:p-8 rounded-2xl shadow-2xl ${isDark ? "bg-gray-800" : "bg-white"
              }`}
          >
            <h2 className="text-xl font-bold border-b pb-2 mb-3 flex items-center gap-2">
              📚 Ta’lim
            </h2>

            <h3 className="text-lg font-semibold mb-4">
              🏫 Najot Ta’lim — Farg‘ona filiali
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Foundation */}
              <div className="flex-1">
                <b>🎓 Foundation Bootcamp (5 oy)</b>
                <p className="text-sm text-gray-500 mt-1">
                  📅 2024-yil 28-may → 2024-yil 14-oktyabr
                </p>
                <ul className="list-disc ml-6 mt-1">
                  <li>💡 Dasturlash asoslari</li>
                  <li>⚙️ C tili (Compiler asoslari)</li>
                  <li>🐍 Python (OOP asoslari)</li>
                  <li>🧩 Ma’lumot tuzilmalari</li>
                </ul>
              </div>

              {/* FullStack */}
              <div className="flex-1">
                <b>🚀 FullStack Web Development (8 oy)</b>
                <p className="text-sm text-gray-500 mt-1">
                  📅 2025-yil 9-mart → 2025-yil 24-oktyabr
                </p>
                <ul className="list-disc ml-6 mt-1">
                  <li>🛠 Backend: NestJS + ExpressJS</li>
                  <li>🖥 Frontend: ReactJS</li>
                  <li>🌐 Qo‘shimcha: Next.js</li>
                </ul>
              </div>
            </div>
          </div>


          {/* ⚙️ Texnologiyalar */}
          <div
            className={`p-6 md:p-8 rounded-2xl shadow-2xl ${isDark ? "bg-gray-800" : "bg-white"
              } space-y-4`}
          >
            <h2 className="text-xl font-bold border-b pb-2 mb-3 flex items-center gap-2">
              ⚙️ Texnologiyalar & Platformalar
            </h2>

            <Section
              title="🗄 Database & ORM/ODM"
              items={[
                "PostgreSQL, MySQL, MongoDB",
                "Prisma, Sequelize, Mongoose",
              ]}
            />
            <Section
              title="🧠 Backend"
              items={["Node.js, NestJS, ExpressJS"]}
            />
            <Section
              title="🎨 Frontend"
              items={["HTML, CSS, JS (ES6+), ReactJS, Next.js"]}
            />
            <Section
              title="🧩 Qo‘shimcha"
              items={["REST API, JWT, Swagger, Email OTP"]}
            />
            <Section
              title="🧰 Vositalar"
              items={["Git, GitHub, Postman, Docker, Linux CLI"]}
            />
          </div>

          {/* 🌐 Tillar */}
          <div
            className={`p-6 md:p-8 rounded-2xl shadow-2xl ${isDark ? "bg-gray-800" : "bg-white"
              }`}
          >
            <h2 className="text-xl font-bold border-b pb-2 mb-3 flex items-center gap-2">
              🌐 Tillar
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>🇺🇿 O‘zbek tili — Ona tili</li>
              <li>🇷🇺 Rus tili — O‘rta (2/5)</li>
              <li>🇬🇧 Ingliz tili — O‘rganish jarayonida</li>
            </ul>
          </div>

          {/* 🕓 Oxirgi yangilanish */}
          <p className="text-center text-sm opacity-70 mt-6">
            📅 Oxirgi yangilanish: 2025-yil 25-oktyabr
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
