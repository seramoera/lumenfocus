
    const gallery = document.querySelector('.gallery');
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let isDragging = false, startX, currentTranslate = 0, prevTranslate = 0;
    const galleryWidth = galleryItems.length * galleryContainer.offsetWidth; // Total width of all gallery items

    gallery.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        gallery.style.cursor = 'grabbing';
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const delta = currentX - startX;
        currentTranslate = prevTranslate + delta;

        // Prevent dragging beyond the first image
        if (currentTranslate > 0) {
            currentTranslate = 0;
        }

        // Prevent dragging beyond the last image
        const maxTranslate = -(galleryWidth - galleryContainer.offsetWidth);
        if (currentTranslate < maxTranslate) {
            currentTranslate = maxTranslate;
        }

        gallery.style.transform = `translateX(${currentTranslate}px)`;
    });

    gallery.addEventListener('mouseup', () => {
        isDragging = false;
        prevTranslate = currentTranslate;
        gallery.style.cursor = 'grab';
    });

    gallery.addEventListener('mouseleave', () => {
        if (!isDragging) return;
        isDragging = false;
        prevTranslate = currentTranslate;
        gallery.style.cursor = 'grab';
    });

    // Disable image dragging
    gallery.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });
