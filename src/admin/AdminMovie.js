import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSave, FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const AdminMovies = ({
  newReleases,
  setNewReleases,
  trendingMovies,
  setTrendingMovies,
  topRatedMovies,
  setTopRatedMovies,
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("newReleases");
  const [editingMovie, setEditingMovie] = useState(null);
  const [newMovie, setNewMovie] = useState({
    title: "",
    image: "",
    alt: "",
    rating: "",
    ageRating: "13+",
    genre: "",
    duration: "",
    isSeries: false,
  });

  // Get current collection based on active tab
  const getCurrentCollection = () => {
    switch (activeTab) {
      case "newReleases":
        return newReleases;
      case "trending":
        return trendingMovies;
      case "topRated":
        return topRatedMovies;
      default:
        return newReleases;
    }
  };

  const getCurrentSetter = () => {
    switch (activeTab) {
      case "newReleases":
        return setNewReleases;
      case "trending":
        return setTrendingMovies;
      case "topRated":
        return setTopRatedMovies;
      default:
        return setNewReleases;
    }
  };

  // CREATE - Tambah film baru
  const addMovie = () => {
    if (!newMovie.title || !newMovie.image) return;

    const movieToAdd = {
      ...newMovie,
      id: Date.now(),
      newEpisode: false,
      top10: false,
      bgColor: "bg-[#181A1C]",
      textColor: "text-white",
    };

    const setter = getCurrentSetter();
    setter((prev) => [...prev, movieToAdd]);
    resetForm();
  };

  // UPDATE - Edit film
  const updateMovie = () => {
    if (!editingMovie) return;

    const setter = getCurrentSetter();
    setter((prev) =>
      prev.map((movie) => (movie.id === editingMovie.id ? editingMovie : movie))
    );
    setEditingMovie(null);
    resetForm();
  };

  // DELETE - Hapus film
  const deleteMovie = (id) => {
    const setter = getCurrentSetter();
    setter((prev) => prev.filter((movie) => movie.id !== id));
  };

  const resetForm = () => {
    setNewMovie({
      title: "",
      image: "",
      alt: "",
      rating: "",
      ageRating: "13+",
      genre: "",
      duration: "",
      isSeries: false,
    });
  };

  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-6 text-blue-400 hover:text-blue-300"
        >
          <FaArrowLeft /> Kembali ke Halaman Utama
        </button>

        <h1 className="text-3xl font-bold mb-6">Admin Panel - Kelola Film</h1>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-700 mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "newReleases"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("newReleases")}
          >
            Rilis Baru
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "trending"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("trending")}
          >
            Film Trending
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "topRated"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("topRated")}
          >
            Top Rating
          </button>
        </div>

        {/* Form Tambah/Edit Film */}
        <div className="bg-[#2D2F31] p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingMovie
              ? "Edit Film"
              : `Tambah Film Baru (${
                  activeTab === "newReleases"
                    ? "Rilis Baru"
                    : activeTab === "trending"
                    ? "Film Trending"
                    : "Top Rating"
                })`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-1">Judul*</label>
              <input
                type="text"
                value={editingMovie ? editingMovie.title : newMovie.title}
                onChange={(e) =>
                  editingMovie
                    ? setEditingMovie({
                        ...editingMovie,
                        title: e.target.value,
                      })
                    : setNewMovie({ ...newMovie, title: e.target.value })
                }
                className="w-full bg-[#181A1C] text-white p-2 rounded border border-[#3E4042]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">URL Gambar*</label>
              <input
                type="text"
                value={editingMovie ? editingMovie.image : newMovie.image}
                onChange={(e) =>
                  editingMovie
                    ? setEditingMovie({
                        ...editingMovie,
                        image: e.target.value,
                      })
                    : setNewMovie({ ...newMovie, image: e.target.value })
                }
                className="w-full bg-[#181A1C] text-white p-2 rounded border border-[#3E4042]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Rating*</label>
              <input
                type="text"
                value={editingMovie ? editingMovie.rating : newMovie.rating}
                onChange={(e) =>
                  editingMovie
                    ? setEditingMovie({
                        ...editingMovie,
                        rating: e.target.value,
                      })
                    : setNewMovie({ ...newMovie, rating: e.target.value })
                }
                className="w-full bg-[#181A1C] text-white p-2 rounded border border-[#3E4042]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Genre*</label>
              <input
                type="text"
                value={editingMovie ? editingMovie.genre : newMovie.genre}
                onChange={(e) =>
                  editingMovie
                    ? setEditingMovie({
                        ...editingMovie,
                        genre: e.target.value,
                      })
                    : setNewMovie({ ...newMovie, genre: e.target.value })
                }
                className="w-full bg-[#181A1C] text-white p-2 rounded border border-[#3E4042]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Durasi</label>
              <input
                type="text"
                value={editingMovie ? editingMovie.duration : newMovie.duration}
                onChange={(e) =>
                  editingMovie
                    ? setEditingMovie({
                        ...editingMovie,
                        duration: e.target.value,
                      })
                    : setNewMovie({ ...newMovie, duration: e.target.value })
                }
                className="w-full bg-[#181A1C] text-white p-2 rounded border border-[#3E4042]"
                placeholder="Contoh: 1h 30m"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Rating Usia</label>
              <select
                value={
                  editingMovie ? editingMovie.ageRating : newMovie.ageRating
                }
                onChange={(e) =>
                  editingMovie
                    ? setEditingMovie({
                        ...editingMovie,
                        ageRating: e.target.value,
                      })
                    : setNewMovie({ ...newMovie, ageRating: e.target.value })
                }
                className="w-full bg-[#181A1C] text-white p-2 rounded border border-[#3E4042]"
              >
                <option value="13+">13+</option>
                <option value="16+">16+</option>
                <option value="17+">17+</option>
                <option value="18+">18+</option>
                <option value="21+">21+</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={
                  editingMovie ? editingMovie.isSeries : newMovie.isSeries
                }
                onChange={(e) =>
                  editingMovie
                    ? setEditingMovie({
                        ...editingMovie,
                        isSeries: e.target.checked,
                      })
                    : setNewMovie({ ...newMovie, isSeries: e.target.checked })
                }
                className="mr-2"
              />
              <label className="text-gray-300">Serial TV</label>
            </div>

            {activeTab === "newReleases" && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={
                    editingMovie ? editingMovie.newEpisode : newMovie.newEpisode
                  }
                  onChange={(e) =>
                    editingMovie
                      ? setEditingMovie({
                          ...editingMovie,
                          newEpisode: e.target.checked,
                        })
                      : setNewMovie({
                          ...newMovie,
                          newEpisode: e.target.checked,
                        })
                  }
                  className="mr-2"
                />
                <label className="text-gray-300">Episode Baru</label>
              </div>
            )}

            {activeTab === "trending" && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={editingMovie ? editingMovie.top10 : newMovie.top10}
                  onChange={(e) =>
                    editingMovie
                      ? setEditingMovie({
                          ...editingMovie,
                          top10: e.target.checked,
                        })
                      : setNewMovie({ ...newMovie, top10: e.target.checked })
                  }
                  className="mr-2"
                />
                <label className="text-gray-300">Top 10</label>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-end gap-3">
            {editingMovie && (
              <button
                onClick={() => {
                  setEditingMovie(null);
                  resetForm();
                }}
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition"
              >
                Batal
              </button>
            )}

            <button
              onClick={editingMovie ? updateMovie : addMovie}
              disabled={
                !newMovie.title ||
                !newMovie.image ||
                !newMovie.rating ||
                !newMovie.genre
              }
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 transition disabled:bg-blue-800 disabled:cursor-not-allowed"
            >
              {editingMovie ? <FaSave /> : <FaPlus />}
              {editingMovie ? "Simpan Perubahan" : "Tambah Film"}
            </button>
          </div>
        </div>

        {/* Daftar Film */}
        <div className="bg-[#2D2F31] p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Daftar Film{" "}
            {activeTab === "newReleases"
              ? "Rilis Baru"
              : activeTab === "trending"
              ? "Trending"
              : "Top Rating"}
            <span className="text-gray-400 ml-2">
              ({getCurrentCollection().length})
            </span>
          </h2>

          {getCurrentCollection().length === 0 ? (
            <p className="text-gray-400">Belum ada film dalam kategori ini</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs text-gray-300 uppercase bg-[#181A1C]">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Poster
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Judul
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Rating
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Genre
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentCollection().map((movie) => (
                    <tr
                      key={movie.id}
                      className="border-b border-gray-700 hover:bg-[#181A1C]"
                    >
                      <td className="px-4 py-3">
                        <div className="w-16 h-16 bg-gray-800 rounded overflow-hidden">
                          {movie.image && (
                            <img
                              src={movie.image}
                              alt={movie.alt}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 font-medium text-white">
                        {movie.title}
                        <div className="text-xs text-gray-400 mt-1">
                          {movie.isSeries ? "Serial TV" : "Film"} •{" "}
                          {movie.ageRating}
                          {movie.newEpisode && (
                            <span className="ml-2 text-blue-400">
                              Episode Baru
                            </span>
                          )}
                          {movie.top10 && (
                            <span className="ml-2 text-red-400">Top 10</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">{movie.rating}</td>
                      <td className="px-4 py-3">{movie.genre}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingMovie(movie)}
                            className="text-blue-400 hover:text-blue-300 p-1"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => {
                              if (
                                window.confirm(
                                  `Yakin ingin menghapus "${movie.title}"?`
                                )
                              ) {
                                deleteMovie(movie.id);
                              }
                            }}
                            className="text-red-400 hover:text-red-300 p-1"
                            title="Hapus"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMovies;
