document.addEventListener("DOMContentLoaded", function () {

    const surpriseBtn = document.querySelector(".surprise-btn");
    const heroSection = document.querySelector("#hero");
    const letterSection = document.querySelector("#letter-section");
    const bgMusic = document.querySelector("#bg-music");

    const openLetterBtn = document.querySelector(".open-letter-btn");
    const envelopeContainer = document.querySelector(".envelope-container");
    const storyBtn = document.querySelector("#story-btn");
    const storySection = document.querySelector("#story");

    // 1. Sürprizi Aç
    surpriseBtn.addEventListener("click", function () {
        if (bgMusic) {
            bgMusic.volume = 0.5;
            bgMusic.play().catch(e => console.log("Müzik hatası:", e));
        }

        heroSection.style.display = "none";
        letterSection.style.display = "flex";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 2. Mektubu Aç
    openLetterBtn.addEventListener("click", function () {
        envelopeContainer.classList.add("open");
        openLetterBtn.style.display = "none"; // Mektup açılınca butonu gizle
        storyBtn.style.display = "inline-block"; // Hikayemize bak butonunu göster
    });

    // 3. Hikâyemize Bak
    storyBtn.addEventListener("click", function () {
        storySection.style.display = "block";
        storySection.scrollIntoView({ behavior: "smooth" });
    });

    // --- SLIDER KODLARI ---
    const photoTrack = document.querySelector(".photo-track");
    const photoCards = document.querySelectorAll(".photo-card");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;
    const totalSlides = photoCards.length;

    function showSlide(index) {
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;

        photoTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === currentSlide);
        });
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
        prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    setInterval(() => showSlide(currentSlide + 1), 5000);
});