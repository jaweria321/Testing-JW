
    function openCartDrawer() {
        const drawer = document.getElementById('cart-drawer');
        // Disable body scroll
        document.body.style.overflow = 'hidden';
        drawer.style.display = 'block';
        setTimeout(() => {
        drawer.classList.add('active');
        updateShippingProgress();
        }, 10);
    }
    function closeCartDrawer() {
      const drawer = document.getElementById('cart-drawer');
        // Re-enable body scroll  
        document.body.style.overflow = "";
        drawer.classList.remove("active");
        setTimeout(() => {
            drawer.style.display = "none";
        }, 300)
    }