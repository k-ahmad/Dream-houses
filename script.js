/* =========================
   DATA
========================= */

const houses = [
  {
    image: "images/house1.jpg",
    title: "Modern Villa",
    location: "Islamabad",
    price: "PKR 4.5 Crore",
  },
  {
    image: "images/house2.jpg",
    title: "Luxury House",
    location: "Lahore",
    price: "PKR 3.8 Crore",
  },
  {
    image: "images/house3.jpg",
    title: "Beautiful Family Home",
    location: "Rawalpindi",
    price: "PKR 2.5 Crore",
  },
  {
    image: "images/house4.jpg",
    title: "Premium Villa",
    location: "Islamabad",
    price: "PKR 5.2 Crore",
  },
  {
    image: "images/house5.jpg",
    title: "Modern Family House",
    location: "Peshawar",
    price: "PKR 2.8 Crore",
  },
  {
    image: "images/house6.jpg",
    title: "Elegant Luxury Home",
    location: "Karachi",
    price: "PKR 6 Crore",
  },
];

const galleryImages = [
  {
    image: "images/interior1.jpg",
    title: "Elegant Interior",
    category: "Interior",
  },
  {
    image: "images/interior2.jpg",
    title: "Modern Interior",
    category: "Interior",
  },
  {
    image: "images/traditional1.jpg",
    title: "Traditional Home",
    category: "Traditional",
  },
  {
    image: "images/traditional2.jpg",
    title: "Classic Design",
    category: "Traditional",
  },
  { image: "images/luxury1.jpg", title: "Luxury Living", category: "Luxury" },
  { image: "images/luxury2.jpg", title: "Luxury Bedroom", category: "Luxury" },
  {
    image: "images/modern1.jpg",
    title: "Modern Architecture",
    category: "Modern",
  },
  {
    image: "images/modern2.jpg",
    title: "Contemporary Home",
    category: "Modern",
  },
];

const categories = ["All", "Interior", "Traditional", "Luxury", "Modern"];

const services = [
  {
    icon: "bi bi-house-door",
    title: "House Design",
    description:
      "We create modern and beautiful house designs that match your lifestyle, needs and vision.",
  },
  {
    icon: "bi bi-lamp",
    title: "Interior Design",
    description:
      "Transform your living spaces with elegant, comfortable and stylish interior designs.",
  },
  {
    icon: "bi bi-building",
    title: "Construction",
    description:
      "From planning to completion, we provide reliable construction services with quality materials.",
  },
  {
    icon: "bi bi-chat-square-text",
    title: "Consultation",
    description:
      "Get professional guidance and expert advice to make the right property and design decisions.",
  },
];

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide complete property solutions including house design, interior design, construction and professional consultation.",
  },
  {
    question: "Can you design a custom house?",
    answer:
      "Yes, we create custom house designs according to your requirements, lifestyle, budget and preferred architectural style.",
  },
  {
    question: "Do you provide interior design services?",
    answer:
      "Yes, our interior design service focuses on creating elegant, comfortable and functional spaces that match your style.",
  },
  {
    question: "Do you handle complete construction projects?",
    answer:
      "Yes, we can help with complete construction projects from initial planning and design to construction and finishing.",
  },
  {
    question: "How can I get a consultation?",
    answer:
      "You can contact us through our contact section and share your requirements. Our team will guide you through the next steps.",
  },
  {
    question: "How long does a house project take?",
    answer:
      "The project duration depends on the size, design, construction requirements and finishing details of the property.",
  },
];

/* =========================
   RENDER HOUSES
========================= */

function renderHouses() {
  const container = document.getElementById("housesContainer");
  container.innerHTML = houses
    .map(
      (house) => `
    <div class="house-card">
      <img src="${house.image}" alt="${house.title}" />
      <div class="house-card-content">
        <h3>${house.title}</h3>
        <p class="location">📍 ${house.location}</p>
        <p class="price">${house.price}</p>
        <button class="read-more">Read More</button>
      </div>
    </div>
  `,
    )
    .join("");
}

/* =========================
   RENDER GALLERY
========================= */

let activeCategory = "All";

function renderGalleryFilters() {
  const filtersEl = document.getElementById("galleryFilters");
  filtersEl.innerHTML = categories
    .map(
      (cat) => `
    <button class="filter-btn ${cat === activeCategory ? "active" : ""}" data-category="${cat}">
      ${cat}
    </button>
  `,
    )
    .join("");

  filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderGalleryFilters();
      renderGalleryGrid();
    });
  });
}

function renderGalleryGrid() {
  const gridEl = document.getElementById("galleryGrid");
  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeCategory);

  gridEl.innerHTML = filtered
    .map(
      (item) => `
    <div class="gallery-card">
      <img src="${item.image}" alt="${item.title}" />
      <div class="gallery-overlay">
        <div>
          <span>${item.category}</span>
          <h3>${item.title}</h3>
        </div>
        <button class="view-btn">View →</button>
      </div>
    </div>
  `,
    )
    .join("");
}

/* =========================
   RENDER SERVICES
========================= */

function renderServices() {
  const container = document.getElementById("servicesContainer");
  container.innerHTML = services
    .map(
      (service) => `
    <div class="service-card">
      <div class="service-icon"><i class="${service.icon}"></i></div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <button class="service-btn">Learn More <i class="bi bi-arrow-right"></i></button>
    </div>
  `,
    )
    .join("");
}

/* =========================
   RENDER FAQ
========================= */

function renderFAQ() {
  const container = document.getElementById("faqContainer");
  container.innerHTML = faqs
    .map(
      (faq, index) => `
    <div class="faq-item" data-index="${index}">
      <button class="faq-question">
        <span>${faq.question}</span>
        <i class="bi bi-plus"></i>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `,
    )
    .join("");

  container.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("faq-active");

      container.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("faq-active");
        el.querySelector(".faq-answer").classList.remove("show-answer");
        el.querySelector(".faq-question i").className = "bi bi-plus";
      });

      if (!isOpen) {
        item.classList.add("faq-active");
        item.querySelector(".faq-answer").classList.add("show-answer");
        item.querySelector(".faq-question i").className = "bi bi-dash";
      }
    });
  });
}

/* =========================
   NAVBAR TOGGLE (MOBILE)
========================= */

function setupNavbar() {
  const toggler = document.getElementById("navToggler");
  const navbarNav = document.getElementById("navbarNav");
  const navbarSearch = document.getElementById("navbarSearch");

  toggler.addEventListener("click", () => {
    navbarNav.classList.toggle("show");
    navbarSearch.classList.toggle("show");
  });

  // Mobile dropdown toggle (tap to open on small screens)
  document
    .querySelectorAll(".nav-item.dropdown > .dropdown-toggle")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (window.innerWidth <= 900) {
          e.stopPropagation();
          const parent = btn.closest(".nav-item.dropdown");
          document.querySelectorAll(".nav-item.dropdown").forEach((el) => {
            if (el !== parent) el.classList.remove("open");
          });
          parent.classList.toggle("open");
        }
      });
    });
}

/* =========================
   CONTACT FORM
========================= */

function setupContactForm() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  renderHouses();
  renderGalleryFilters();
  renderGalleryGrid();
  renderServices();
  renderFAQ();
  setupNavbar();
  setupContactForm();
});
