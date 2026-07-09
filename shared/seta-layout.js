(function () {
  const activeClass = "flex items-center gap-3 px-4 py-2.5 text-primary-container font-bold bg-primary/10 rounded-lg mx-2 transition-all duration-200";
  const inactiveClass = "flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors rounded-lg mx-2";
  const basePath = document.body.dataset.setaBase || "..";
  const logoWhite = `${basePath}/Logo seta trắng.png`;
  const avatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuBGCW0id1AQFbNNXyhpIsYTDsqelx0djpk90vgVRtRWI13Z1eSZBwsL5y7vpMozWt3V24Sq2NHUhls2Jsw5coffRuhj-5ZJwH3awFpehUrLNP783ApAJkSRRXpf2Weey3mmU13G4K1xeHZISCweDUZo9yfj0hwfhoMMQWCjoZEJTGeuatYKRw2bleW6OJMeIDp2bnZZxlbIpyd926Lfu2GL6hZofZzhgvatiBLk3uCE2GUYpJYcoXcofA";

  const navGroups = [
    [
      { key: "dashboard", label: "Bảng điều khiển", icon: "dashboard", href: `${basePath}/Bảng điều khiển/Bảng điều khiển.html` },
      { key: "alerts", label: "Cảnh báo", icon: "notifications_active", href: `${basePath}/Chức năng cảnh báo/Chức năng cảnh báo.html`, badge: { text: "12", className: "bg-error text-on-error" } },
      { key: "customers", label: "Khách hàng", icon: "groups", href: `${basePath}/Danh sách khách hàng/Danh sách khách hàng.html` },
      { key: "plans", label: "Phác đồ & Lịch", icon: "calendar_today", href: `${basePath}/Thiết lập phác đồ/Thiết lập phác đồ.html` },
      { key: "interactions", label: "Tương tác", icon: "forum", href: `${basePath}/Lịch sử tương tác/Lịch sử tương tác.html` },
      { key: "messages", label: "Tin nhắn", icon: "mail", href: `${basePath}/Hội thoại tư vấn/Hội thoại tư vấn.html`, badge: { text: "5", className: "bg-info text-on-primary" } },
      { key: "reports", label: "Báo cáo & Thống kê", icon: "analytics", href: `${basePath}/Báo cáo thống kê/Báo cáo thống kê.html` }
    ],
    [
      { key: "users", label: "Người dùng & quyền", icon: "person", href: `${basePath}/Quản lý ngừoi dùng/Quản lý ngừoi dùng.html` },
      { key: "audit", label: "Nhật ký kiểm toán", icon: "history", href: `${basePath}/Nhật ký/Nhật ký.html` },
      { key: "monitoring", label: "Giám sát hệ thống", icon: "monitoring", href: "#" }
    ]
  ];

  function escapeAttribute(value) {
    return String(value).replace(/"/g, "&quot;");
  }

  function renderItem(item, activeKey) {
    const isActive = item.key === activeKey;
    const iconStyle = isActive ? " style=\"font-variation-settings: 'FILL' 1;\"" : "";
    const disabled = item.href === "#" ? " aria-disabled=\"true\"" : "";
    const badge = item.badge
      ? `<span class="${item.badge.className} text-[10px] px-1.5 py-0.5 rounded-full">${item.badge.text}</span>`
      : "";
    const labelClass = item.badge ? "text-label-md flex-1" : "text-label-md";

    return `<li><a class="${isActive ? activeClass : inactiveClass}" href="${escapeAttribute(item.href)}"${disabled}><span class="material-symbols-outlined"${iconStyle}>${item.icon}</span><span class="${labelClass}">${item.label}</span>${badge}</a></li>`;
  }

  function renderSidebar() {
    const activeKey = document.body.dataset.setaActive || "";
    const mainItems = navGroups[0].map((item) => renderItem(item, activeKey)).join("");
    const adminItems = navGroups[1].map((item) => renderItem(item, activeKey)).join("");

    return `
<div data-seta-backdrop class="fixed inset-0 bg-on-background/40 z-40 opacity-0 pointer-events-none md:hidden transition-opacity duration-300"></div>
<aside data-seta-sidebar class="bg-surface w-64 flex-shrink-0 border-r border-outline-variant flex flex-col py-6 fixed md:static inset-y-0 left-0 z-50 h-screen -translate-x-full md:translate-x-0 transition-transform duration-300 ease-out">
  <div class="px-6 mb-8 flex items-center gap-3">
    <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary">
      <img class="w-8 h-8 object-contain" src="${logoWhite}" alt="SETA Longevity">
    </div>
    <div>
      <h1 class="text-label-md font-bold text-primary leading-tight">SETA Longevity</h1>
      <p class="text-caption text-on-surface-variant">Nền tảng vận hành</p>
    </div>
  </div>
  <nav class="flex-1 overflow-y-auto custom-scrollbar">
    <ul class="space-y-1">${mainItems}</ul>
    <div class="mt-6 px-6 mb-2"><p class="text-[10px] font-bold text-outline uppercase tracking-wider">Quản trị</p></div>
    <ul class="space-y-1">${adminItems}</ul>
  </nav>
  <div class="mt-auto pt-4 border-t border-outline-variant">
    <div class="px-4 py-4 flex items-center gap-3">
      <img class="w-10 h-10 rounded-full object-cover" src="${avatar}" alt="User avatar">
      <div class="flex-1 overflow-hidden">
        <p class="text-label-md font-bold text-on-surface truncate">BS. Nguyễn Văn Hùng</p>
        <p class="text-caption text-on-surface-variant">Quản trị viên</p>
      </div>
      <button class="text-on-surface-variant hover:text-error transition-colors" type="button" aria-label="Đăng xuất">
        <span class="material-symbols-outlined">logout</span>
      </button>
    </div>
  </div>
</aside>`;
  }

  function injectBaseStyles() {
    if (document.getElementById("seta-layout-style")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "seta-layout-style";
    style.textContent = `
      body { font-family: 'Be Vietnam Pro', sans-serif; background-color: #f8fafc; }
      .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      ::-webkit-scrollbar, .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
      ::-webkit-scrollbar-track, .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb, .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 10px; }
      ::-webkit-scrollbar-thumb:hover, .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }
      /* Consistent keyboard focus ring for all interactive elements */
      a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible,
      textarea:focus-visible, [tabindex]:focus-visible, [role="button"]:focus-visible,
      [contenteditable="true"]:focus-visible {
        outline: 2px solid #059669;
        outline-offset: 2px;
        border-radius: 6px;
      }
      /* Non-actionable disabled affordance */
      [aria-disabled="true"] { opacity: .5; pointer-events: none; cursor: not-allowed; }
      /* Invalid form field affordance */
      [aria-invalid="true"] { border-color: #dc2626 !important; }
      [aria-invalid="true"]:focus { box-shadow: 0 0 0 1px #dc2626 !important; }
      /* Skeleton shimmer for loading states */
      .seta-skel { position: relative; overflow: hidden; background: #e2e8f0; }
      .seta-skel::after {
        content: ""; position: absolute; inset: 0; transform: translateX(-100%);
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.65), transparent);
        animation: seta-shimmer 1.4s infinite;
      }
      /* Respect reduced-motion preference */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: .01ms !important;
          scroll-behavior: auto !important;
        }
        .seta-skel::after { animation: none; }
      }
      @keyframes seta-shimmer { 100% { transform: translateX(100%); } }
    `;
    document.head.appendChild(style);
  }

  function wireResponsiveDrawer() {
    const sidebar = document.querySelector("[data-seta-sidebar]");
    const backdrop = document.querySelector("[data-seta-backdrop]");
    if (!sidebar || !backdrop) {
      return;
    }

    function open() {
      sidebar.classList.remove("-translate-x-full");
      backdrop.classList.remove("opacity-0", "pointer-events-none");
      backdrop.classList.add("opacity-100");
    }
    function close() {
      sidebar.classList.add("-translate-x-full");
      backdrop.classList.add("opacity-0", "pointer-events-none");
      backdrop.classList.remove("opacity-100");
    }

    backdrop.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
    // Close after choosing a destination on mobile.
    sidebar.querySelectorAll("a[href]:not([aria-disabled='true'])").forEach((a) => {
      a.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 767px)").matches) close();
      });
    });

    // Reuse any existing per-page "menu" button; otherwise inject a floating one.
    const existingToggles = Array.from(document.querySelectorAll("button")).filter((b) => {
      const icon = b.querySelector(".material-symbols-outlined");
      return icon && icon.textContent.trim() === "menu";
    });

    if (existingToggles.length) {
      existingToggles.forEach((b) => b.addEventListener("click", open));
    } else {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "Mở menu điều hướng");
      btn.className =
        "fixed top-3 left-3 z-30 md:hidden w-10 h-10 rounded-lg bg-surface border border-outline-variant shadow-sm flex items-center justify-center text-on-surface";
      btn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
      btn.addEventListener("click", open);
      document.body.appendChild(btn);
    }
  }

  // ---- Loading / error / empty states -------------------------------------
  // Add data-seta-states (+ optional data-seta-states-label) to a data card.
  // Preview a state by appending ?state=loading|error|empty to the URL.
  function skeletonMarkup() {
    let rows = "";
    for (let i = 0; i < 6; i += 1) {
      rows += `<div class="flex items-center gap-4">
        <div class="seta-skel w-10 h-10 rounded-full shrink-0"></div>
        <div class="flex-1 space-y-2">
          <div class="seta-skel h-3 w-2/5 rounded"></div>
          <div class="seta-skel h-3 w-1/4 rounded"></div>
        </div>
        <div class="seta-skel h-6 w-20 rounded-full hidden sm:block"></div>
      </div>`;
    }
    return `<div class="p-5 w-full space-y-5" role="status" aria-live="polite" aria-busy="true">
      <span class="sr-only">Đang tải dữ liệu…</span>
      <div class="seta-skel h-7 w-1/3 rounded-lg"></div>
      ${rows}
    </div>`;
  }
  function messageMarkup(kind, label) {
    const isError = kind === "error";
    const icon = isError ? "cloud_off" : "inbox";
    const iconWrap = isError
      ? "bg-error-container text-error"
      : "bg-surface-container-high text-on-surface-variant";
    const title = isError ? `Không tải được ${label}` : `Chưa có ${label}`;
    const body = isError
      ? "Đã xảy ra lỗi khi kết nối máy chủ. Vui lòng thử lại."
      : "Không tìm thấy bản ghi nào khớp với bộ lọc hiện tại.";
    const action = isError
      ? `<button type="button" data-seta-retry class="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-lg text-label-md hover:bg-primary-container transition-colors mt-5">
           <span class="material-symbols-outlined text-[18px]">refresh</span>Thử lại
         </button>`
      : "";
    return `<div class="flex-1 w-full flex items-center justify-center p-8" role="${isError ? "alert" : "status"}">
      <div class="text-center max-w-sm">
        <div class="w-16 h-16 rounded-full ${iconWrap} flex items-center justify-center mx-auto mb-4">
          <span class="material-symbols-outlined text-3xl">${icon}</span>
        </div>
        <h3 class="text-headline-md font-bold text-on-surface mb-1">${title}</h3>
        <p class="text-body-md text-on-surface-variant">${body}</p>
        ${action}
      </div>
    </div>`;
  }
  function wireStates() {
    const state = new URLSearchParams(window.location.search).get("state");
    if (!state || ["data", "loaded"].indexOf(state) !== -1) {
      return;
    }
    document.querySelectorAll("[data-seta-states]").forEach((el) => {
      const label = el.getAttribute("data-seta-states-label") || "dữ liệu";
      const overlay = document.createElement("div");
      overlay.setAttribute("data-seta-state-overlay", state);
      overlay.className = "absolute inset-0 z-20 bg-surface flex flex-col overflow-auto";
      if (state === "loading") overlay.innerHTML = skeletonMarkup();
      else if (state === "error") overlay.innerHTML = messageMarkup("error", label);
      else if (state === "empty") overlay.innerHTML = messageMarkup("empty", label);
      else return;
      if (getComputedStyle(el).position === "static") {
        el.style.position = "relative";
      }
      el.appendChild(overlay);
      const retry = overlay.querySelector("[data-seta-retry]");
      if (retry) {
        retry.addEventListener("click", () => window.location.assign(window.location.pathname));
      }
    });
  }

  // ---- Toast (non-focus-stealing, aria-live) ------------------------------
  function ensureToastHost() {
    let host = document.querySelector("[data-seta-toast-host]");
    if (!host) {
      host = document.createElement("div");
      host.setAttribute("data-seta-toast-host", "");
      host.setAttribute("aria-live", "polite");
      host.setAttribute("aria-atomic", "true");
      host.className = "fixed z-[100] bottom-4 right-4 flex flex-col gap-2 pointer-events-none";
      document.body.appendChild(host);
    }
    return host;
  }
  function setaToast(message, type) {
    const variants = {
      success: ["check_circle", "bg-success-container text-on-success-container border-success/40"],
      error: ["error", "bg-error-container text-on-error-container border-error/40"],
      info: ["info", "bg-info-container text-on-info-container border-info/40"],
    };
    const cfg = variants[type] || variants.success;
    const host = ensureToastHost();
    const el = document.createElement("div");
    el.setAttribute("role", "status");
    el.className =
      "pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-lg border shadow-md text-label-md max-w-xs " +
      cfg[1] + " transition-all duration-300 opacity-0 translate-y-2";
    el.innerHTML = '<span class="material-symbols-outlined text-[20px]">' + cfg[0] + "</span><span></span>";
    el.lastElementChild.textContent = message;
    host.appendChild(el);
    const raf = window.requestAnimationFrame || ((f) => window.setTimeout(f, 16));
    raf(() => el.classList.remove("opacity-0", "translate-y-2"));
    window.setTimeout(() => {
      el.classList.add("opacity-0", "translate-y-2");
      window.setTimeout(() => el.remove(), 300);
    }, 3500);
    return el;
  }
  window.setaToast = setaToast;

  // ---- Inline form validation ---------------------------------------------
  // Mark a form/container with data-seta-validate, required controls with
  // data-req (+ optional data-req-msg), and the confirm button data-seta-submit.
  function isFilled(field) {
    const val = (field.value || "").trim();
    if (!val) return false;
    if (field.type === "email") return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val);
    return true;
  }
  function fieldError(field, msg) {
    field.setAttribute("aria-invalid", "true");
    let node = field.parentNode.querySelector("[data-seta-err]");
    if (!node) {
      node = document.createElement("p");
      node.setAttribute("data-seta-err", "");
      node.setAttribute("role", "alert");
      node.className = "text-caption text-error mt-1.5 flex items-center gap-1";
      node.innerHTML = '<span class="material-symbols-outlined text-[14px]">error</span><span></span>';
      field.parentNode.appendChild(node);
    }
    node.lastElementChild.textContent = msg;
  }
  function fieldClear(field) {
    field.removeAttribute("aria-invalid");
    const node = field.parentNode.querySelector("[data-seta-err]");
    if (node) node.remove();
  }
  function wireForms() {
    document.querySelectorAll("[data-seta-validate]").forEach((root) => {
      const fields = Array.from(root.querySelectorAll("[data-req]"));
      const msgFor = (f) => f.getAttribute("data-req-msg") ||
        (f.type === "email" ? "Vui lòng nhập email hợp lệ" : "Trường này là bắt buộc");
      fields.forEach((f) => {
        f.addEventListener("blur", () => {
          if (isFilled(f)) fieldClear(f);
          else fieldError(f, msgFor(f));
        });
        f.addEventListener("input", () => {
          if (f.getAttribute("aria-invalid") === "true" && isFilled(f)) fieldClear(f);
        });
      });
      const submit = root.querySelector("[data-seta-submit]");
      if (!submit) return;
      submit.addEventListener("click", (e) => {
        let firstInvalid = null;
        fields.forEach((f) => {
          if (isFilled(f)) {
            fieldClear(f);
          } else {
            fieldError(f, msgFor(f));
            if (!firstInvalid) firstInvalid = f;
          }
        });
        if (firstInvalid) {
          e.preventDefault();
          firstInvalid.focus();
          return;
        }
        // Valid: confirm with success feedback (does not steal focus).
        setaToast(submit.getAttribute("data-seta-success") || "Đã lưu thành công", "success");
        const dismiss = submit.getAttribute("data-seta-dismiss");
        if (dismiss) {
          const target = document.querySelector(dismiss);
          if (target) target.classList.add("hidden");
        }
      });
    });
  }

  // ---- Conversation master/detail on mobile -------------------------------
  function wireConversation() {
    const list = document.querySelector("[data-conv-list]");
    const chat = document.querySelector("[data-conv-chat]");
    if (!list || !chat) return;
    const isMobile = () => window.matchMedia("(max-width: 767px)").matches;
    const openChat = () => {
      if (!isMobile()) return;
      list.classList.add("hidden");
      chat.classList.remove("hidden");
    };
    const backToList = () => {
      chat.classList.add("hidden");
      list.classList.remove("hidden");
    };
    document.querySelectorAll("[data-conv-open]").forEach((el) => el.addEventListener("click", openChat));
    const back = document.querySelector("[data-conv-back]");
    if (back) back.addEventListener("click", backToList);
    window.addEventListener("resize", () => {
      if (!isMobile()) {
        list.classList.remove("hidden");
        chat.classList.remove("hidden");
      }
    });
  }

  function init() {
    injectBaseStyles();

    if (!document.querySelector("[data-seta-sidebar]")) {
      document.body.insertAdjacentHTML("afterbegin", renderSidebar());
    }
    wireResponsiveDrawer();
    wireStates();
    wireForms();
    wireConversation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
