// Data Resep Bawaan (Default)
const defaultRecipes = [
  {
    id: 1,
    title: "Nasi Goreng Kampung Spesial",
    category: "Tumis",
    cookTime: "15 Menit",
    author: "EY (Elfa Yunisa)",
    date: "12 Nov 2026",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 piring nasi putih dingin",
      "2 butir telur ayam",
      "3 siung bawang putih, cincang halus",
      "4 butir bawang merah, iris tipis",
      "2 sdm kecap manis & 1 sdm saus tiram",
      "Garam, kaldu jamur, dan cabai rawit sesuai selera",
    ],
    steps: [
      "Panaskan sedikit minyak, tumis bawang merah, bawang putih, dan cabai hingga harum.",
      "Sisihkan bumbu ke pinggir wajan, masukkan telur lalu buat orak-arik.",
      "Masukkan nasi putih, aduk rata dengan api besar.",
      "Tambahkan kecap manis, saus tiram, garam, dan kaldu jamur. Aduk hingga berasap dan matang.",
      "Sajikan hangat dengan telur mata sapi dan kerupuk.",
    ],
  },
  {
    id: 2,
    title: "Strawberry Cream Croissant",
    category: "Dessert & Cake",
    cookTime: "20 Menit",
    author: "EY (Elfa Yunisa)",
    date: "10 Nov 2026",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 buah croissant butter siap panggang",
      "100 ml whipping cream cair dingin",
      "1 sdm gula halus",
      "6 buah stroberi segar, potong dua",
      "Gula donat untuk taburan",
    ],
    steps: [
      "Kocok whipping cream dingin dan gula halus hingga kaku (stiff peak).",
      "Belah bagian tengah croissant tanpa terputus.",
      "Semprotkan whipped cream ke dalam croissant, lalu susun potongan stroberi segar.",
      "Taburi bagian atas dengan gula halus agar estetik.",
    ],
  },
  {
    id: 3,
    title: "Sup Ayam Bening Jahe Hangat",
    category: "Sop & Kuah",
    cookTime: "35 Menit",
    author: "EY (Elfa Yunisa)",
    date: "08 Nov 2026",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "300 gr daging ayam potong dadu",
      "1 buah wortel, potong bulat",
      "1 buah kentang, potong dadu",
      "2 ruas jahe, memarkan",
      "3 siung bawang putih, geprek",
      "Daun bawang, seledri, garam, dan lada bubuk",
    ],
    steps: [
      "Rebus air hingga mendidih, masukkan ayam, bawang putih geprek, dan jahe.",
      "Setelah ayam empuk, masukkan wortel dan kentang.",
      "Bumbui dengan garam, lada bubuk, dan kaldu ayam.",
      "Taburi irisan daun bawang dan seledri sesaat sebelum diangkat.",
    ],
  },
  {
    id: 4,
    title: "Avocado Toast & Poached Egg",
    category: "Cemilan",
    cookTime: "10 Menit",
    author: "EY (Elfa Yunisa)",
    date: "05 Nov 2026",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414342d8?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 lembar roti sourdough atau roti gandum",
      "1 buah alpukat matang, haluskan",
      "2 butir telur",
      "Perasan air lemon, garam, dan lada hitam",
      "Chili flakes secukupnya",
    ],
    steps: [
      "Panggang roti hingga kecokelatan dan renyah.",
      "Campur alpukat halus dengan sedikit air lemon dan garam, oleskan di atas roti.",
      "Letakkan telur rebus setengah matang atau poached egg di atasnya.",
      "Taburi lada hitam dan chili flakes.",
    ],
  },
  {
    id: 5,
    title: "Iced Matcha Strawberry Latte",
    category: "Minuman",
    cookTime: "5 Menit",
    author: "EY (Elfa Yunisa)",
    date: "03 Nov 2026",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 sdm selai stroberi homemade",
      "150 ml susu UHT full cream",
      "1 sdt bubuk matcha murni",
      "30 ml air hangat",
      "Es batu secukupnya",
    ],
    steps: [
      "Tuang selai stroberi di dasar gelas estetik, lalu tambahkan es batu.",
      "Tuang susu full cream perlahan hingga 3/4 gelas.",
      "Larutkan bubuk matcha dengan air hangat menggunakan whisk hingga berbusa.",
      "Tuang larutan matcha di lapisan paling atas untuk efek gradasi cantik.",
    ],
  },
  {
    id: 6,
    title: "Tumis Buncis Daging Cincang",
    category: "Tumis",
    cookTime: "15 Menit",
    author: "EY (Elfa Yunisa)",
    date: "01 Nov 2026",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "200 gr baby buncis, potong serong",
      "100 gr daging ayam/sapi cincang",
      "3 siung bawang putih, cincang",
      "1 sdm saus tiram & 1 sdt kecap asin",
      "50 ml air",
    ],
    steps: [
      "Tumis bawang putih hingga wangi, masukkan daging cincang dan masak hingga berubah warna.",
      "Masukkan buncis, aduk cepat dengan api besar agar warnanya tetap hijau segar.",
      "Tambahkan saus tiram, kecap asin, dan sedikit air. Masak 3 menit lalu sajikan.",
    ],
  },
];

// Ambil data dari LocalStorage atau gunakan data default
let recipes =
  JSON.parse(localStorage.getItem("cookWithEY_recipes")) || defaultRecipes;
let currentCategory = "Semua";
let searchQuery = "";

// Elemen DOM
const recipeGrid = document.getElementById("recipeGrid");
const recipeCount = document.getElementById("recipeCount");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");

// Modal Upload
const uploadModal = document.getElementById("uploadModal");
const btnOpenUpload = document.getElementById("btnOpenUpload");
const btnHeroUpload = document.getElementById("btnHeroUpload");
const closeUploadModal = document.getElementById("closeUploadModal");
const recipeForm = document.getElementById("recipeForm");

// Modal Detail
const detailModal = document.getElementById("detailModal");
const closeDetailModal = document.getElementById("closeDetailModal");
const detailBody = document.getElementById("detailBody");

// Render Kartu Resep
function renderRecipes() {
  const filtered = recipes.filter((item) => {
    const matchCat =
      currentCategory === "Semua" || item.category === currentCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  recipeCount.textContent = `Menampilkan ${filtered.length} resep`;

  if (filtered.length === 0) {
    recipeGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 40px;">Belum ada resep yang cocok. Yuk upload resep baru!</p>`;
    return;
  }

  recipeGrid.innerHTML = filtered
    .map(
      (recipe) => `
        <article class="recipe-card" onclick="openRecipeDetail(${recipe.id})">
            <img src="${recipe.image}" alt="${recipe.title}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80'">
            <div class="card-body">
                <span class="card-cat">${recipe.category} • ${recipe.cookTime}</span>
                <h3 class="card-title">${recipe.title}</h3>
                <div class="card-meta">
                    <div class="author-tag">
                        <span class="author-avatar">EY</span>
                        <span>${recipe.author}</span>
                    </div>
                    <span>${recipe.date}</span>
                </div>
            </div>
        </article>
    `,
    )
    .join("");
}

// Buka Detail Resep
window.openRecipeDetail = function (id) {
  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) return;

  detailBody.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="detail-banner">
        <div class="detail-info">
            <span class="badge">${recipe.category} • ⏱ ${recipe.cookTime}</span>
            <h2>${recipe.title}</h2>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">
                Dipublikasikan oleh <strong>${recipe.author}</strong> pada ${recipe.date}
            </p>
            
            <h4>Bahan-bahan:</h4>
            <ul class="detail-list">
                ${recipe.ingredients.map((ing) => `<li>${ing}</li>`).join("")}
            </ul>

            <h4>Cara Membuat:</h4>
            <ol class="detail-list">
                ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
            </ol>

            <button class="btn-delete" onclick="deleteRecipe(${recipe.id})">
                <i class="ri-delete-bin-line"></i> Hapus Resep Ini
            </button>
        </div>
    `;
  detailModal.classList.add("show");
};

// Hapus Resep
window.deleteRecipe = function (id) {
  if (confirm("Yakin ingin menghapus resep ini?")) {
    recipes = recipes.filter((r) => r.id !== id);
    localStorage.setItem("cookWithEY_recipes", JSON.stringify(recipes));
    detailModal.classList.remove("show");
    renderRecipes();
  }
};

// Event Filter Kategori
categoryFilter.addEventListener("click", (e) => {
  if (e.target.classList.contains("pill")) {
    document
      .querySelectorAll(".pill")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    currentCategory = e.target.dataset.category;
    renderRecipes();
  }
});

// Event Pencarian
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderRecipes();
});

// Buka & Tutup Modal Upload
btnOpenUpload.addEventListener("click", () =>
  uploadModal.classList.add("show"),
);
btnHeroUpload.addEventListener("click", () =>
  uploadModal.classList.add("show"),
);
closeUploadModal.addEventListener("click", () =>
  uploadModal.classList.remove("show"),
);
closeDetailModal.addEventListener("click", () =>
  detailModal.classList.remove("show"),
);

window.addEventListener("click", (e) => {
  if (e.target === uploadModal) uploadModal.classList.remove("show");
  if (e.target === detailModal) detailModal.classList.remove("show");
});

// Submit Form Upload Resep Baru
recipeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const cookTime = document.getElementById("cookTime").value || "20 Menit";
  const imageUrl = document.getElementById("imageUrl").value;
  const imageFile = document.getElementById("imageFile").files[0];

  const ingredients = document
    .getElementById("ingredients")
    .value.split("\n")
    .map((line) => line.replace(/^[-•*]\s*/, "").trim())
    .filter(Boolean);
  const steps = document
    .getElementById("steps")
    .value.split("\n")
    .map((line) => line.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);

  const today = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const saveNewRecipe = (finalImage) => {
    const newRecipe = {
      id: Date.now(),
      title,
      category,
      cookTime,
      author: "EY (Elfa Yunisa)",
      date: today,
      image: finalImage,
      ingredients,
      steps,
    };

    recipes.unshift(newRecipe);
    localStorage.setItem("cookWithEY_recipes", JSON.stringify(recipes));
    recipeForm.reset();
    uploadModal.classList.remove("show");
    renderRecipes();
  };

  // Jika user upload file gambar dari laptop/HP, ubah ke Base64
  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      saveNewRecipe(event.target.result);
    };
    reader.readAsDataURL(imageFile);
  } else {
    const fallbackImg =
      imageUrl ||
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80";
    saveNewRecipe(fallbackImg);
  }
});

// Jalankan pertama kali
renderRecipes();
