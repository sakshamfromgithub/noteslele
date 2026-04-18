
// ===========================
// NotesLeLe — app.js
// UI Utilities (non-Firebase)
// ===========================

// ===== MODAL CONTROLS =====
function openModal(id) {
  const m = document.getElementById(
    id === "login" || id === "signup" ? "authModal" : id,
  );
  m.classList.add("open");
  document.body.style.overflow = "hidden";
  if (id === "login") switchTab("login");
  if (id === "signup") switchTab("signup");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

function switchTab(tab) {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");

  if (tab === "login") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
  }
}

// ===== TOAST =====
let toastTimer;
function showToast(msg, type = "default") {
  const toast = document.getElementById("toast");
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.className = "toast" + (type === "error" ? " error" : "");
  // Force reflow
  void toast.offsetWidth;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

// ===== NAVBAR SCROLL =====
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 10) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

// ===== USER DROPDOWN =====
function toggleUserDropdown() {
  document.getElementById("userDropdown").classList.toggle("open");
}
function closeUserDropdown() {
  document.getElementById("userDropdown").classList.remove("open");
}
document.addEventListener("click", (e) => {
  const wrap = document.querySelector(".avatar-wrap");
  const dropdown = document.getElementById("userDropdown");
  if (wrap && !wrap.contains(e.target)) {
    dropdown?.classList.remove("open");
  }
});

// ===== KEYBOARD ESC TO CLOSE MODALS =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach((m) => {
      m.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
});

// ===== ENTER KEY LOGIN =====
document.getElementById("loginPassword")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") window.loginUser?.();
});
document.getElementById("signupPassword")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") window.signupUser?.();
});
