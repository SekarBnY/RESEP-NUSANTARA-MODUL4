// src/pages/ProfilePage.jsx
export default function ProfilePage() {
  const user = {
    name: "Sekar Bestari Nindita Yasmin",
    email: "sekar.bestri@gmail.com",
    bio: "Mahasiswa yang suka eksplorasi teknologi web dan data science.",
    location: "Indonesia",
  };

  return (
    <div className="p-4 md:p-8 pb-20 md:pb-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Profile Pengguna</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">SR</div>
            <div>
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700">Tentang Saya</h3>
            <p className="text-gray-600 mt-1">{user.bio}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700">Lokasi</h3>
            <p className="text-gray-600 mt-1">{user.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
