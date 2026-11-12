/**
     * HOTEL WHATSAPP CONFIGURATION
     * Replace with Paradise Grill's official WhatsApp number in international format (no '+' or spaces).
     */
    const HOTEL_WHATSAPP_NUMBER = "923000000000";

    /**
     * ROOMS DATA (6 Distinct Rooms: 3 in Row 1, 3 in Row 2)
     */
    const ROOMS_DATA = [
      {
        id: "room-standard",
        title: "Standard River View Room",
        price: 8500,
        size: "320 sq. ft.",
        guests: "2 Adults",
        badge: "Cozy Riverside",
        description:
          "Wake up to the soothing sound of the Gilgit River. Our Standard River View Room features plush queen bedding, warm cedar accents, high-speed Wi-Fi, and quick 2-minute access to Gilgit Airport.",
        amenities: ["Gilgit River View", "Free High-Speed Wi-Fi", "24/7 Hot Water", "Smart LED TV", "Room Service"],
        images: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        id: "room-deluxe",
        title: "Deluxe Mountain Suite",
        price: 12500,
        size: "460 sq. ft.",
        guests: "2 Adults + 1 Child",
        badge: "Most Popular",
        description:
          "Spacious elegance with a private balcony framing the Karakoram peaks and River Road valley. Includes a dedicated seating lounge, artisan Kashmiri rugs, climate control, and complimentary morning tea.",
        amenities: ["Private Mountain Balcony", "King Size Bed", "Seating Lounge", "Climate Control", "Complimentary Tea/Coffee"],
        images: [
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        id: "room-twin",
        title: "Alpine Twin Comfort Room",
        price: 9500,
        size: "360 sq. ft.",
        guests: "2 Adults",
        badge: "Twin Beds",
        description:
          "Tailored for trekking partners, business travelers, and friends visiting Gilgit. Features two extra-long orthopedic twin beds, sunlit valley windows, dedicated work desk, and fast airport access.",
        amenities: ["2 Orthopedic Twin Beds", "Sunlit Valley View", "Work Desk & Wi-Fi", "24/7 Hot Water", "Airport Proximity"],
        images: [
          "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        id: "room-family",
        title: "Executive Family Suite",
        price: 17000,
        size: "680 sq. ft.",
        guests: "Up to 4 Guests",
        badge: "Ideal for Families",
        description:
          "Designed for families and groups exploring Gilgit-Baltistan. Features two interconnected sleeping zones, two modern en-suite bathrooms, panoramic river-facing windows, and priority dining service.",
        amenities: ["2 Interconnected Rooms", "2 En-suite Bathrooms", "River & Valley Panorama", "Airport Transfer Assistance", "Mini Fridge"],
        images: [
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        id: "room-transit",
        title: "Airport Express Studio",
        price: 7500,
        size: "290 sq. ft.",
        guests: "1–2 Guests",
        badge: "2 Mins to Airport",
        description:
          "Smart, bright, and convenient studio located on River Road Sonikot right near Gilgit Airport. Perfect for early morning flight departures or overnight layovers with express room service.",
        amenities: ["2 Mins to Gilgit Airport", "Express Check-in", "Queen Bed", "High-Speed Fiber Wi-Fi", "Complimentary Breakfast Tea"],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80"
        ]
      },
      {
        id: "room-honeymoon",
        title: "Honeymoon Panoramic Suite",
        price: 21000,
        size: "580 sq. ft.",
        guests: "2 Adults",
        badge: "Luxury Corner",
        description:
          "Our flagship top-floor corner suite boasting 270-degree views of the Gilgit River and sunset peaks. Includes bespoke wooden interiors, luxury soaking tub, candlelight dinner setup on request, and private terrace.",
        amenities: ["270° Panoramic Terrace", "Luxury Soaking Tub", "Canopy King Bed", "Candlelight Dinner Setup", "VIP Hospitality"],
        images: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80"
        ]
      }
    ];

    /**
     * MENU DATA (Diverse Paradise Grill Dishes)
     */
    const MENU_DATA = [
      {
        id: "menu-1",
        title: "Gilgiti Special Mutton Karahi (1 Kg)",
        category: "Karahi & Traditional",
        price: 3400,
        description: "Tender mountain mutton wok-seared with fresh tomatoes, green chilies, ginger juliennes, and organic Gilgiti herbs.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "menu-2",
        title: "Paradise Charcoal BBQ Platter",
        category: "Charcoal Grill",
        price: 2650,
        description: "Assortment of beef seekh kebabs, chicken malai boti, reshmi kebabs, and grilled wings served with mint chutney & naan.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "menu-3",
        title: "Fresh Gilgit River Trout Grill",
        category: "Charcoal Grill",
        price: 2200,
        description: "Locally caught river rainbow trout marinated in lemon, garlic, and crushed black pepper, flame-grilled to crispy perfection.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "menu-4",
        title: "Traditional Hunza Chapshuro",
        category: "Karahi & Traditional",
        price: 850,
        description: "Crisp golden flatbread stuffed with spiced minced beef, onions, tomatoes, and fresh coriander baked in our clay oven.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "menu-5",
        title: "Smoky Chicken Tikka & Kabuli Pulao",
        category: "Charcoal Grill",
        price: 1450,
        description: "Fragrant basmati rice topped with caramelized carrots and raisins paired with a quarter charcoal-roasted chicken tikka.",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "menu-6",
        title: "Pink Kashmiri Chai & Walnut Cake",
        category: "Beverages & Sides",
        price: 650,
        description: "Velvety salted pink noon chai garnished with crushed pistachios and almonds alongside warm Gilgit walnut cake.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
      }
    ];

    /**
     * APPLICATION STATE
     */
    let activeMenuCategory = "All";
    let searchQuery = "";
    let searchScope = "all";
    let cart = []; // Array of { id, title, price, image, quantity }

    // Active room state for modals
    let currentViewRoom = null;
    let currentGalleryIndex = 0;
    let currentBookingRoom = null;

    /**
     * INITIALIZE PAGE ON LOAD
     */
    // Shared components are inserted before this script loads, so initialize immediately.
    renderRooms();
    renderMenu();
    renderCart();

    /**
     * FORMAT CURRENCY (PKR)
     */
    function formatPKR(amount) {
      return "Rs. " + Number(amount).toLocaleString("en-PK");
    }

    /**
     * TOAST MESSAGE HELPER
     */
    let toastTimeout;
    function showToast(message) {
      const toast = document.getElementById("toastNotification");
      const msgEl = document.getElementById("toastMessage");
      msgEl.textContent = message;
      toast.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
      }, 2800);
    }

    /**
     * MOBILE & TABLET NAVIGATION DRAWER
     */
    function toggleMobileMenu() {
      const drawer = document.getElementById("mobileMenuDrawer");
      const btn = document.getElementById("mobileMenuBtn");
      const openIcon = document.getElementById("menuOpenIcon");
      const closeIcon = document.getElementById("menuCloseIcon");

      const isHidden = drawer.classList.contains("hidden");
      if (isHidden) {
        drawer.classList.remove("hidden");
        openIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
        btn.setAttribute("aria-expanded", "true");
      } else {
        closeMobileMenu();
      }
    }

    function closeMobileMenu() {
      const drawer = document.getElementById("mobileMenuDrawer");
      const btn = document.getElementById("mobileMenuBtn");
      const openIcon = document.getElementById("menuOpenIcon");
      const closeIcon = document.getElementById("menuCloseIcon");

      drawer.classList.add("hidden");
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    }

    /**
     * HERO SEARCH & LIVE FILTERING
     */
    function liveFilterContent() {
      searchQuery = document.getElementById("heroSearchInput").value.trim().toLowerCase();
      searchScope = document.getElementById("heroSearchCategory").value;
      renderRooms();
      renderMenu();
    }

    function handleHeroSearch(e) {
      e.preventDefault();
      liveFilterContent();
      const scope = document.getElementById("heroSearchCategory").value;
      const targetId = scope === "menu" ? "menu" : "rooms";
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    }

    function resetSearchFilter() {
      document.getElementById("heroSearchInput").value = "";
      document.getElementById("heroSearchCategory").value = "all";
      searchQuery = "";
      searchScope = "all";
      renderRooms();
      renderMenu();
    }

    /**
     * RENDER ROOMS GRID
     */
    function renderRooms() {
      const grid = document.getElementById("roomsGrid");
      const notice = document.getElementById("roomFilterNotice");
      const noticeText = document.getElementById("roomFilterText");

      let filtered = ROOMS_DATA;
      if (searchQuery && (searchScope === "all" || searchScope === "rooms")) {
        filtered = ROOMS_DATA.filter(
          (room) =>
            room.title.toLowerCase().includes(searchQuery) ||
            room.description.toLowerCase().includes(searchQuery) ||
            room.amenities.some((a) => a.toLowerCase().includes(searchQuery))
        );
        notice.classList.remove("hidden");
        noticeText.textContent = `Showing ${filtered.length} room(s) matching "${searchQuery}"`;
      } else {
        notice.classList.add("hidden");
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-white rounded-3xl p-10 text-center border border-sand-200">
            <p class="font-display text-xl font-bold text-alpine-900 mb-2">No matching rooms found</p>
            <p class="text-sm text-alpine-700 mb-4">Try searching for "River", "Deluxe", "Family", or "Suite".</p>
            <button onclick="resetSearchFilter()" class="px-5 py-2.5 rounded-xl bg-alpine-900 text-white text-sm font-semibold">Show All Rooms</button>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered
        .map(
          (room) => `
          <article class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-sand-200 flex flex-col group">
            <!-- Room Thumbnail -->
            <div class="relative h-64 sm:h-72 overflow-hidden bg-alpine-900">
              <img
                src="${room.images[0]}"
                onerror="this.src='https://placehold.co/800x600/1b312c/f5b942?text=${encodeURIComponent(room.title)}'"
                alt="${room.title}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-alpine-950/70 via-transparent to-transparent"></div>
              
              <!-- Top Badge -->
              <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-alpine-950/85 backdrop-blur-md text-amberwarm-400 text-xs font-bold tracking-wide border border-white/10">
                ${room.badge}
              </span>

              <!-- Photo Count Indicator -->
              <button
                onclick="openRoomViewModal('${room.id}')"
                class="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 hover:bg-white text-alpine-950 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <svg class="w-3.5 h-3.5 text-amberwarm-600" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>${room.images.length} Photos</span>
              </button>

              <!-- Price Overlay -->
              <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span class="text-xs text-white/80 block">${room.size} • ${room.guests}</span>
                  <h3 class="font-display text-2xl font-bold leading-snug">${room.title}</h3>
                </div>
                <div class="text-right shrink-0 bg-alpine-950/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/10">
                  <span class="text-lg sm:text-xl font-bold text-amberwarm-400 block leading-none">${formatPKR(room.price)}</span>
                  <span class="text-[11px] text-white/75">per night</span>
                </div>
              </div>
            </div>

            <!-- Room Body & Action Buttons -->
            <div class="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div>
                <p class="text-sm text-alpine-800/85 line-clamp-2 leading-relaxed mb-4">
                  ${room.description}
                </p>
                <!-- Key Amenities Preview -->
                <div class="flex flex-wrap gap-1.5">
                  ${room.amenities
                    .slice(0, 3)
                    .map(
                      (item) =>
                        `<span class="px-2.5 py-1 rounded-lg bg-sand-100 text-alpine-900 text-xs font-medium">${item}</span>`
                    )
                    .join("")}
                </div>
              </div>

              <!-- View & Book Now Buttons -->
              <div class="grid grid-cols-2 gap-3 pt-2">
                <button
                  onclick="openRoomViewModal('${room.id}')"
                  class="py-3 px-4 rounded-xl border-2 border-alpine-900 text-alpine-900 hover:bg-alpine-900 hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View</span>
                </button>

                <button
                  onclick="openRoomBookModal('${room.id}')"
                  class="py-3 px-4 rounded-xl bg-amberwarm-500 hover:bg-amberwarm-400 text-alpine-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Book Now</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        `
        )
        .join("");
    }

    /**
     * ROOM VIEW MODAL & MULTI-IMAGE GALLERY CONTROLS
     */
    function openRoomViewModal(roomId) {
      const room = ROOMS_DATA.find((r) => r.id === roomId);
      if (!room) return;

      currentViewRoom = room;
      currentGalleryIndex = 0;

      document.getElementById("viewModalTitle").textContent = room.title;
      document.getElementById("viewModalPrice").innerHTML = `${formatPKR(room.price)} <span class="text-sm font-normal text-alpine-700">/ night</span>`;
      document.getElementById("viewModalDescription").textContent = room.description;

      document.getElementById("viewModalMeta").innerHTML = `
        <span class="px-3 py-1 rounded-full bg-sand-100 border border-sand-200">${room.size}</span>
        <span class="px-3 py-1 rounded-full bg-sand-100 border border-sand-200">${room.guests}</span>
      `;

      document.getElementById("viewModalAmenities").innerHTML = room.amenities
        .map(
          (am) =>
            `<span class="px-3 py-1.5 rounded-xl bg-alpine-900/5 text-alpine-900 text-xs font-semibold border border-alpine-900/10">✓ ${am}</span>`
        )
        .join("");

      // Wire up "Book This Room Now" button inside View Modal
      document.getElementById("viewModalBookBtn").onclick = () => {
        closeRoomViewModal();
        openRoomBookModal(room.id);
      };

      updateGalleryDisplay();

      const modal = document.getElementById("roomViewModal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    }

    function updateGalleryDisplay() {
      if (!currentViewRoom) return;
      const images = currentViewRoom.images;
      const mainImg = document.getElementById("viewModalMainImg");
      mainImg.src = images[currentGalleryIndex];
      mainImg.onerror = () => {
        mainImg.src = `https://placehold.co/1000x600/1b312c/f5b942?text=${encodeURIComponent(currentViewRoom.title)}`;
      };

      document.getElementById("galleryCounter").textContent = `${currentGalleryIndex + 1} / ${images.length}`;

      // Show/Hide prev/next buttons based on image count
      const prevBtn = document.getElementById("galleryPrevBtn");
      const nextBtn = document.getElementById("galleryNextBtn");
      if (images.length <= 1) {
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
      } else {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
      }

      // Render Thumbnails
      const thumbsContainer = document.getElementById("viewModalThumbnails");
      thumbsContainer.innerHTML = images
        .map(
          (imgUrl, idx) => `
          <button
            onclick="selectGalleryImage(${idx})"
            class="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
              idx === currentGalleryIndex ? "border-amberwarm-500 scale-105 shadow-md" : "border-transparent opacity-65 hover:opacity-100"
            }"
          >
            <img src="${imgUrl}" alt="Thumbnail ${idx + 1}" class="w-full h-full object-cover" />
          </button>
        `
        )
        .join("");
    }

    function changeGalleryImage(direction) {
      if (!currentViewRoom) return;
      const total = currentViewRoom.images.length;
      currentGalleryIndex = (currentGalleryIndex + direction + total) % total;
      updateGalleryDisplay();
    }

    function selectGalleryImage(index) {
      currentGalleryIndex = index;
      updateGalleryDisplay();
    }

    function closeRoomViewModal() {
      const modal = document.getElementById("roomViewModal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }

    /**
     * ROOM BOOKING MODAL & WHATSAPP SUBMISSION
     */
    function openRoomBookModal(roomId) {
      const room = ROOMS_DATA.find((r) => r.id === roomId);
      if (!room) return;

      currentBookingRoom = room;
      document.getElementById("bookModalRoomTitle").textContent = room.title;
      document.getElementById("bookModalRateDisplay").textContent = formatPKR(room.price);

      // Reset default values
      document.getElementById("bookRoomsQty").value = 1;
      document.getElementById("bookDaysQty").value = 1;
      calculateRoomTotal();

      const modal = document.getElementById("roomBookModal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    }

    function closeRoomBookModal() {
      const modal = document.getElementById("roomBookModal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }

    function calculateRoomTotal() {
      if (!currentBookingRoom) return;
      const roomsQty = Math.max(1, parseInt(document.getElementById("bookRoomsQty").value) || 1);
      const daysQty = Math.max(1, parseInt(document.getElementById("bookDaysQty").value) || 1);
      const total = currentBookingRoom.price * roomsQty * daysQty;

      document.getElementById("bookTotalBreakdown").textContent = `${roomsQty} Room${roomsQty > 1 ? "s" : ""} × ${daysQty} Day${daysQty > 1 ? "s" : ""}`;
      document.getElementById("bookTotalPrice").textContent = formatPKR(total);
    }

    function submitRoomBookingWhatsApp(event) {
      event.preventDefault();
      if (!currentBookingRoom) return;

      const customerName = document.getElementById("bookCustomerName").value.trim();
      const phoneNumber = document.getElementById("bookPhoneNumber").value.trim();
      const roomsQty = Math.max(1, parseInt(document.getElementById("bookRoomsQty").value) || 1);
      const daysQty = Math.max(1, parseInt(document.getElementById("bookDaysQty").value) || 1);
      const arrivalTiming = document.getElementById("bookArrivalTiming").value.trim();
      const totalPrice = currentBookingRoom.price * roomsQty * daysQty;

      const message =
        `*NEW ROOM BOOKING — PARADISE GRILL*\n` +
        `📍 Location: River Road, Sonikot, Gilgit\n` +
        `----------------------------------\n` +
        `🛏️ *Room:* ${currentBookingRoom.title}\n` +
        `👤 *Customer Name:* ${customerName}\n` +
        `📞 *Phone Number:* ${phoneNumber}\n` +
        `🔢 *Rooms Quantity:* ${roomsQty}\n` +
        `📅 *Days / Nights:* ${daysQty}\n` +
        `⏰ *Arrival Timing:* ${arrivalTiming}\n` +
        `----------------------------------\n` +
        `💰 *Total Price:* ${formatPKR(totalPrice)}\n\n` +
        `Please confirm my room reservation. Thank you!`;

      const whatsappUrl = `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      closeRoomBookModal();
      showToast("Opening WhatsApp with your room booking details...");
    }

    /**
     * MENU FILTERING & RENDERING
     */
    function filterMenuByCategory(category) {
      activeMenuCategory = category;

      // Update active button styles
      document.querySelectorAll(".menu-tab").forEach((btn) => {
        if (btn.dataset.cat === category) {
          btn.classList.remove("bg-white", "text-alpine-900", "border", "border-sand-200");
          btn.classList.add("bg-alpine-900", "text-white", "shadow-sm");
        } else {
          btn.classList.add("bg-white", "text-alpine-900", "border", "border-sand-200");
          btn.classList.remove("bg-alpine-900", "text-white", "shadow-sm");
        }
      });

      renderMenu();
    }

    function renderMenu() {
      const grid = document.getElementById("menuGrid");
      let filtered = MENU_DATA;

      if (activeMenuCategory !== "All") {
        filtered = filtered.filter((item) => item.category === activeMenuCategory);
      }

      if (searchQuery && (searchScope === "all" || searchScope === "menu")) {
        filtered = filtered.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery) ||
            item.category.toLowerCase().includes(searchQuery)
        );
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-white rounded-3xl p-10 text-center border border-sand-200">
            <p class="font-display text-xl font-bold text-alpine-900 mb-2">No matching dishes found</p>
            <p class="text-sm text-alpine-700 mb-4">Try selecting "All Dishes" or clearing your search filter.</p>
            <button onclick="resetSearchFilter(); filterMenuByCategory('All');" class="px-5 py-2.5 rounded-xl bg-alpine-900 text-white text-sm font-semibold">View Full Menu</button>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered
        .map(
          (item) => `
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200 flex flex-col group">
            <div class="relative h-52 overflow-hidden bg-alpine-900">
              <img
                src="${item.image}"
                onerror="this.src='https://placehold.co/600x400/1b312c/f5b942?text=${encodeURIComponent(item.title)}'"
                alt="${item.title}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-alpine-950/80 backdrop-blur-md text-white text-[11px] font-semibold">
                ${item.category}
              </span>
            </div>

            <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-start justify-between gap-3 mb-2">
                  <h3 class="font-display text-xl font-bold text-alpine-950 leading-snug">${item.title}</h3>
                  <span class="text-base font-bold text-amberwarm-600 shrink-0">${formatPKR(item.price)}</span>
                </div>
                <p class="text-xs sm:text-sm text-alpine-800/80 leading-relaxed">
                  ${item.description}
                </p>
              </div>

              <button
                id="order-btn-${item.id}"
                onclick="addToCart('${item.id}', this)"
                class="w-full py-3 px-4 rounded-xl bg-alpine-900 hover:bg-alpine-800 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                <svg class="w-4 h-4 text-amberwarm-400" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>Order Now</span>
              </button>
            </div>
          </div>
        `
        )
        .join("");
    }

    /**
     * SHOPPING CART MANAGEMENT WITH CLEAR VISUAL FEEDBACK
     */
    function addToCart(menuId, btnElement) {
      const item = MENU_DATA.find((m) => m.id === menuId);
      if (!item) return;

      const existing = cart.find((c) => c.id === menuId);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          quantity: 1
        });
      }

      // 1. Immediate visual state change on the clicked "Order Now" button
      const targetBtn = btnElement || document.getElementById(`order-btn-${menuId}`);
      if (targetBtn) {
        clearTimeout(targetBtn._resetTimer);
        targetBtn.classList.remove("bg-alpine-900", "hover:bg-alpine-800");
        targetBtn.classList.add("bg-emerald-600", "hover:bg-emerald-500", "ring-2", "ring-emerald-300");
        targetBtn.innerHTML = `
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.8" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Added to Cart!</span>
        `;

        targetBtn._resetTimer = setTimeout(() => {
          targetBtn.classList.add("bg-alpine-900", "hover:bg-alpine-800");
          targetBtn.classList.remove("bg-emerald-600", "hover:bg-emerald-500", "ring-2", "ring-emerald-300");
          targetBtn.innerHTML = `
            <svg class="w-4 h-4 text-amberwarm-400" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>Order Now</span>
          `;
        }, 1700);
      }

      renderCart(true);
      showToast(`Added "${item.title}" to cart`);
    }

    function updateCartQuantity(menuId, delta) {
      const idx = cart.findIndex((c) => c.id === menuId);
      if (idx === -1) return;

      cart[idx].quantity += delta;
      if (cart[idx].quantity <= 0) {
        cart.splice(idx, 1);
      }
      renderCart(false);
    }

    function removeFromCart(menuId) {
      cart = cart.filter((c) => c.id !== menuId);
      renderCart(false);
    }

    function clearCart() {
      cart = [];
      renderCart(false);
    }

    function renderCart(justAdded = false) {
      const badge = document.getElementById("cartBadge");
      const navCartBtn = document.getElementById("navCartBtn");
      const navCartIcon = document.getElementById("navCartIcon");
      const container = document.getElementById("cartItemsContainer");
      const checkoutSection = document.getElementById("cartCheckoutSection");
      const totalPriceEl = document.getElementById("cartTotalPrice");
      const clearBtn = document.getElementById("clearCartBtn");

      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      badge.textContent = totalCount;

      // Highlight Navbar Cart Button background distinctly whenever cart has items
      if (totalCount > 0) {
        navCartBtn.classList.remove("bg-alpine-900", "hover:bg-alpine-800");
        navCartBtn.classList.add("bg-emerald-600", "hover:bg-emerald-500", "shadow-md", "shadow-emerald-600/25");
        navCartIcon.classList.remove("text-amberwarm-400");
        navCartIcon.classList.add("text-white");
        badge.classList.remove("bg-amberwarm-400", "text-alpine-950");
        badge.classList.add("bg-white", "text-emerald-800");

        if (justAdded) {
          badge.classList.add("scale-125");
          setTimeout(() => badge.classList.remove("scale-125"), 300);
        }
      } else {
        navCartBtn.classList.add("bg-alpine-900", "hover:bg-alpine-800");
        navCartBtn.classList.remove("bg-emerald-600", "hover:bg-emerald-500", "shadow-md", "shadow-emerald-600/25");
        navCartIcon.classList.add("text-amberwarm-400");
        navCartIcon.classList.remove("text-white");
        badge.classList.add("bg-amberwarm-400", "text-alpine-950");
        badge.classList.remove("bg-white", "text-emerald-800");
      }

      if (cart.length === 0) {
        clearBtn.classList.add("hidden");
        checkoutSection.classList.add("hidden");
        container.innerHTML = `
          <div class="text-center py-12 px-4 bg-sand-50 rounded-2xl border border-dashed border-sand-200">
            <svg class="w-12 h-12 text-alpine-700/40 mx-auto mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p class="font-display text-lg font-bold text-alpine-900 mb-1">Your cart is empty</p>
            <p class="text-xs text-alpine-700 mb-4">Explore our charcoal grill &amp; Gilgiti dishes and click "Order Now".</p>
            <button onclick="closeCartDrawer()" class="px-5 py-2.5 rounded-xl bg-alpine-900 text-white text-xs font-semibold">
              Browse Menu
            </button>
          </div>
        `;
        return;
      }

      clearBtn.classList.remove("hidden");
      checkoutSection.classList.remove("hidden");
      totalPriceEl.textContent = formatPKR(totalPrice);

      container.innerHTML = cart
        .map(
          (item) => `
          <div class="flex items-center gap-3.5 p-3 rounded-2xl bg-sand-50 border border-sand-200">
            <img
              src="${item.image}"
              onerror="this.src='https://placehold.co/120x120/1b312c/f5b942?text=Dish'"
              alt="${item.title}"
              class="w-16 h-16 rounded-xl object-cover shrink-0 bg-alpine-900"
            />
            <div class="flex-1 min-w-0">
              <h5 class="text-sm font-bold text-alpine-950 truncate">${item.title}</h5>
              <p class="text-xs font-semibold text-amberwarm-600 mt-0.5">${formatPKR(item.price)} each</p>
              
              <!-- Quantity Controls -->
              <div class="flex items-center gap-2 mt-2">
                <button
                  type="button"
                  onclick="updateCartQuantity('${item.id}', -1)"
                  aria-label="Decrease quantity"
                  class="w-7 h-7 rounded-lg bg-white border border-sand-200 hover:bg-sand-100 text-alpine-950 font-bold text-sm flex items-center justify-center"
                >
                  −
                </button>
                <span class="text-xs font-bold text-alpine-950 w-5 text-center">${item.quantity}</span>
                <button
                  type="button"
                  onclick="updateCartQuantity('${item.id}', 1)"
                  aria-label="Increase quantity"
                  class="w-7 h-7 rounded-lg bg-white border border-sand-200 hover:bg-sand-100 text-alpine-950 font-bold text-sm flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div class="text-right flex flex-col items-end justify-between self-stretch">
              <button
                type="button"
                onclick="removeFromCart('${item.id}')"
                aria-label="Remove item"
                class="text-alpine-700/50 hover:text-red-600 p-1 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <span class="text-xs font-bold text-alpine-950">${formatPKR(item.price * item.quantity)}</span>
            </div>
          </div>
        `
        )
        .join("");
    }

    /**
     * CART DRAWER OPEN/CLOSE & CONDITIONAL DELIVERY/PICK UP TOGGLE
     */
    function openCartDrawer() {
      const drawer = document.getElementById("cartDrawerBackdrop");
      drawer.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      toggleOrderModeFields();
    }

    function closeCartDrawer() {
      const drawer = document.getElementById("cartDrawerBackdrop");
      drawer.classList.add("hidden");
      document.body.style.overflow = "";
    }

    function toggleOrderModeFields() {
      const selectedMode = document.querySelector('input[name="orderMode"]:checked').value;
      const addressWrapper = document.getElementById("deliveryAddressWrapper");
      const addressInput = document.getElementById("orderDeliveryAddress");
      const pickupWrapper = document.getElementById("pickupTimingWrapper");
      const pickupInput = document.getElementById("orderPickupTiming");

      if (selectedMode === "Delivery") {
        // Show Delivery Address, Hide Pick Up Timing
        addressWrapper.classList.remove("hidden");
        addressInput.required = true;

        pickupWrapper.classList.add("hidden");
        pickupInput.required = false;
      } else {
        // Pick Up Selected: Hide Address completely, Show Pick Up Timing
        addressWrapper.classList.add("hidden");
        addressInput.required = false;

        pickupWrapper.classList.remove("hidden");
        pickupInput.required = true;
      }
    }

    /**
     * SUBMIT FOOD ORDER VIA WHATSAPP
     */
    function submitFoodOrderWhatsApp(event) {
      event.preventDefault();
      if (cart.length === 0) return;

      const userName = document.getElementById("orderUserName").value.trim();
      const contactNumber = document.getElementById("orderContactNumber").value.trim();
      const additionalNumber = document.getElementById("orderAdditionalNumber").value.trim();
      const orderMode = document.querySelector('input[name="orderMode"]:checked').value;
      const deliveryAddress = document.getElementById("orderDeliveryAddress").value.trim();
      const pickupTiming = document.getElementById("orderPickupTiming").value.trim();

      const totalBill = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      const itemsLines = cart
        .map((item, index) => `${index + 1}. ${item.title} × ${item.quantity} = ${formatPKR(item.price * item.quantity)}`)
        .join("\n");

      let fulfillmentLine = "";
      if (orderMode === "Delivery") {
        fulfillmentLine = `🚚 *Order Type:* Delivery\n🏠 *Delivery Address:* ${deliveryAddress}`;
      } else {
        fulfillmentLine = `🛍️ *Order Type:* Pick Up\n⏰ *Pick Up Timing:* ${pickupTiming}`;
      }

      const message =
        `*NEW FOOD ORDER — PARADISE GRILL*\n` +
        `📍 River Road, Sonikot, Gilgit\n` +
        `----------------------------------\n` +
        `🍽️ *Order Items:*\n${itemsLines}\n` +
        `----------------------------------\n` +
        `💰 *Total Bill:* ${formatPKR(totalBill)}\n` +
        `----------------------------------\n` +
        `👤 *Customer Name:* ${userName}\n` +
        `📞 *Contact Number:* ${contactNumber}\n` +
        (additionalNumber ? `📱 *Additional Number:* ${additionalNumber}\n` : "") +
        `${fulfillmentLine}\n\n` +
        `Please confirm my order. Thank you!`;

      const whatsappUrl = `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      closeCartDrawer();
      showToast("Opening WhatsApp with your food order details...");
    }

    // Close modals/drawers when clicking outside on backdrop
    const roomViewModalEl = document.getElementById("roomViewModal");
    if (roomViewModalEl) {
      roomViewModalEl.addEventListener("click", (e) => {
        if (e.target.id === "roomViewModal") closeRoomViewModal();
      });
    }

    const roomBookModalEl = document.getElementById("roomBookModal");
    if (roomBookModalEl) {
      roomBookModalEl.addEventListener("click", (e) => {
        if (e.target.id === "roomBookModal") closeRoomBookModal();
      });
    }

    const cartDrawerBackdropEl = document.getElementById("cartDrawerBackdrop");
    if (cartDrawerBackdropEl) {
      cartDrawerBackdropEl.addEventListener("click", (e) => {
        if (e.target.id === "cartDrawerBackdrop") closeCartDrawer();
      });
    }