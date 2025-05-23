// --- DATI DEI POST ---
const postsData = [
    
    {
        id: "1",
        title: "Il Mio Primo Articolo sul Web Moderno",
        date: "2025-05-21",
        author: "SpanoPrime",
        image: "img/placeholder.jpg", // Immagine per l'anteprima su index.html
        excerpt: "Una breve introduzione a un bel cazzo di niente.",
        contentFile: "posts/post-1.html" // Percorso al file HTML del post
    },
    {
        id: "2",
        title: "La sfida è ufficialmente aperta...",
        date: "2025-05-22",
        author: "SpanoPrime",
        image: "img/gam.jpg", // Immagine per l'anteprima su index.html
        excerpt: "Gam è assurdo e SpanoPrime lancia una sfida.",
        contentFile: "posts/post-2.html" // Percorso al file HTML del post
    },
    {
        id: "2",
        title: "Prendersi cura della propria schiena",
        date: "2025-05-23",
        author: "SpanoPrime",
        image: "img/back.jpg", // Immagine per l'anteprima su index.html
        excerpt: "L'importanza dell'esecuzione e dell'alimentazione.",
        contentFile: "posts/post-3.html" // Percorso al file HTML del post
    }
];

// --- FUNZIONI PER LA PAGINA PRINCIPALE (index.html) ---

function loadPostPreviews() {
    const previewsContainer = document.getElementById('post-previews');
    if (!previewsContainer) return;

    const loadingPlaceholder = previewsContainer.querySelector('.loading-placeholder');

    if (postsData.length > 0) {
        if(loadingPlaceholder) loadingPlaceholder.remove();
        
        // Ordina i post per data, dal più recente al più vecchio
        const sortedPosts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

        sortedPosts.forEach(post => {
            const previewElement = document.createElement('article');
            previewElement.classList.add('post-preview');
            
            let imageHtml = '';
            if (post.image) {
                // Assicurati che il percorso sia corretto rispetto a index.html
                imageHtml = `<img src="${post.image}" alt="Anteprima ${post.title}" class="preview-image" style="max-width: 20%; float: right; margin-left: 15px;">`;
            }

            previewElement.innerHTML = `
                ${imageHtml}
                <h3><a href="${post.contentFile}">${post.title}</a></h3>
                <p class="post-meta">Pubblicato il ${formatDate(post.date)} da ${post.author}</p>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="${post.contentFile}" class="read-more">Leggi Tutto →</a>
            `;
            previewsContainer.appendChild(previewElement);
        });
    } else {
        if(loadingPlaceholder) loadingPlaceholder.textContent = 'Nessun articolo disponibile al momento.';
    }
}

// --- UTILITIES ---

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('it-IT', options);
}

// La funzione escapeHTML non è più strettamente necessaria qui se non gestisci input utente
// ma la lascio se dovesse servire per altre manipolazioni di testo.
// function escapeHTML(str) {
//     const div = document.createElement('div');
//     div.appendChild(document.createTextNode(str));
//     return div.innerHTML;
// }