document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get("id");

  fetch("data/videos.json")
    .then(res => res.json())
    .then(data => {
      const allSeries = data.series;
      let foundVideo = null;
      let foundSeries = null;

      // Cerca il video e la serie corrispondente
      for (const [seriesName, videos] of Object.entries(allSeries)) {
        const video = videos.find(v => v.id === videoId);
        if (video) {
          foundVideo = video;
          foundSeries = videos.filter(v => v.id !== videoId); // altri video correlati
          break;
        }
      }

      if (!foundVideo) {
        document.getElementById("videoTitle").innerText = "Video non trovato";
        return;
      }

      // Mostra il video
      const frame = document.getElementById("videoFrame");
      frame.src = `https://www.youtube.com/embed/${foundVideo.id}?autoplay=1`;

      // Testo e descrizione
      document.getElementById("videoTitle").innerText = foundVideo.title;
      document.getElementById("videoDesc").innerText = foundVideo.description || "Nessuna descrizione disponibile.";

      // Link alternativo
      document.getElementById("backupLink").href = `https://www.youtube.com/watch?v=${foundVideo.id}`;

      // Video correlati
      const relatedList = document.getElementById("relatedList");
      relatedList.innerHTML = "";

      foundSeries.forEach(video => {
        const div = document.createElement("div");
        div.className = "related-video-item";
        div.onclick = () => {
          window.location.href = `video.html?id=${video.id}`;
        };
        div.innerHTML = `
          <img src="${video.thumbnail}" alt="${video.title}" />
          <div class="related-title">${video.title}</div>
        `;
        relatedList.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Errore nel caricamento del video:", err);
    });
});
