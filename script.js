// Menunggu semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // Pilih SEMUA elemen yang ingin dianimasikan
    // (yang memiliki kelas .fade-in-section)
    const targetElements = document.querySelectorAll('.fade-in-section');

    if (targetElements.length > 0) {
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Jika elemennya masuk ke layar
                if (entry.isIntersecting) {
                    // Tambahkan kelas .is-visible
                    entry.target.classList.add('is-visible');
                    // Hentikan pengamatan elemen ini
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Picu animasi saat 10% elemen terlihat
        });

        // Amati SETIAP elemen yang kita pilih
        targetElements.forEach(target => {
            observer.observe(target);
        });

    } else {
        // Ini akan muncul di console browser jika tidak ada section untuk dianimasikan
        console.log("Tidak ada elemen .fade-in-section untuk dianimasikan.");
    }
});