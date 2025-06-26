document.querySelectorAll('.zoomable').forEach(img=> {
    let zoomed = false;

    img.addEventListener('click', () =>{
        zoomed = !zoomed;
        img.classList.toggle('zoomed',zoomed);
    });
    img.addEventListener('mousemove', (e) => {
        if (!img.classList,contains(zoomed)) return;

        const rect =img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        img.style.transformOrigin = '${x}% ${y}%';
    });
});