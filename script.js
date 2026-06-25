document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Retire la classe active de toutes les images
        document.querySelectorAll('.gallery img').forEach(i => i.classList.remove('active'));
        
        // Ajoute la classe active à l'image cliquée
        this.classList.add('active');
    });
});

// Retire la classe active quand on clique ailleurs
document.addEventListener('click', function() {
    document.querySelectorAll('.gallery img').forEach(img => img.classList.remove('active'));
});