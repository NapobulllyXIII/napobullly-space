function showSection(section) {
  document.getElementById('videos').style.display = section === 'videos' ? 'block' : 'none';
  document.getElementById('posts').style.display = section === 'posts' ? 'block' : 'none';
  document.getElementById('me').style.display = section === 'me' ? 'block' : 'none';
}

const series = {
  "Tutti i video": [
  //copiare tutti i video delle raccolte
    { id: "JUskita_GU8", title: "Due Terroni a Vienna - Episodio 1", description: "Nel primo episodio della serie: 'Due Terroni a Vienna', i nostri eroi Carlo e Alessio, approdano in terra austriaca", thumbnail: "https://img.youtube.com/vi/JUskita_GU8/hqdefault.jpg", orientation: "vertical" },
    { id: "05gkLaCXil8", title: "Due Terroni a Vienna - Episodio 2", description: "Continuano le avventure di Carlo e Alessio a Vienna in compagnia", thumbnail: "images/2.png", orientation: "vertical" },
    { id: "ypjQSAYLT90", title: "Due Terroni a Vienna - Episodio 3", description: "Ultimo episodio della serie", thumbnail: "https://img.youtube.com/vi/ypjQSAYLT90/hqdefault.jpg", orientation: "vertical" },
    { id: "heJNfTp43oU", title: "Due Terroni a Barcellona - TRAILER", description: "Trailer di presentazione delle avventure dei nostri due terroni di fiducia Carlo e Alessio, stavolta in terra spagnola", thumbnail: "images/6.png", orientation: "vertical" },
    { id: "GkeyH5ZY30Y", title: "Due Terroni a Barcellona - Episodio 1", description: "Primo episodio del viaggio a Barcellona, dalla partenza all'arrivo", thumbnail: "https://img.youtube.com/vi/GkeyH5ZY30Y/hqdefault.jpg", orientation: "vertical" },
    { id: "wm9QAQhJdFY", title: "Due Terroni a Barcellona - Episodio 2", description: "In questo episodio c'è un momento speciale, guardalo fino alla fine", thumbnail: "https://img.youtube.com/vi/wm9QAQhJdFY/hqdefault.jpg", orientation: "vertical" }
  
  ],
  "Due Terroni a Vienna": [
    { id: "JUskita_GU8", title: "Due Terroni a Vienna - Episodio 1", description: "Nel primo episodio della serie: 'Due Terroni a Vienna', i nostri eroi Carlo e Alessio, approdano in terra austriaca", thumbnail: "https://img.youtube.com/vi/JUskita_GU8/hqdefault.jpg", orientation: "vertical" },
    { id: "05gkLaCXil8", title: "Due Terroni a Vienna - Episodio 2", description: "Continuano le avventure di Carlo e Alessio a Vienna in compagnia", thumbnail: "images/2.png", orientation: "vertical" },
    { id: "ypjQSAYLT90", title: "Due Terroni a Vienna - Episodio 3", description: "Ultimo episodio della serie", thumbnail: "https://img.youtube.com/vi/ypjQSAYLT90/hqdefault.jpg", orientation: "vertical" },
],
  "Due Terroni a Barcellona": [
    { id: "heJNfTp43oU", title: "Due Terroni a Barcellona - TRAILER", description: "Trailer di presentazione delle avventure dei nostri due terroni di fiducia Carlo e Alessio, stavolta in terra spagnola", thumbnail: "images/6.png", orientation: "vertical" },
    { id: "GkeyH5ZY30Y", title: "Due Terroni a Barcellona - Episodio 1", description: "Primo episodio del viaggio a Barcellona, dalla partenza all'arrivo", thumbnail: "https://img.youtube.com/vi/GkeyH5ZY30Y/hqdefault.jpg", orientation: "vertical" },
    { id: "wm9QAQhJdFY", title: "Due Terroni a Barcellona - Episodio 2", description: "In questo episodio c'è un momento speciale, guardalo fino alla fine", thumbnail: "https://img.youtube.com/vi/wm9QAQhJdFY/hqdefault.jpg", orientation: "vertical" }
  ]
};

const posts = [
  { title: "Benvenuto nel mio sito", content: "Questo è un post di benvenuto al mio sito personalizzato." },
  { title: "Novità e altro ancora", content: "Il sito web è ancora in costruzione, ci saranno novità prossimamente" }
];

function loadSeriesTabs() {
  const container = document.getElementById('seriesTabs');
  container.innerHTML = '';

  const seriesNames = Object.keys(series);
  seriesNames.forEach((name, index) => {
    const btn = document.createElement('div');
    btn.className = 'series-tab' + (index === 0 ? ' active' : '');
    btn.innerText = name;
    btn.onclick = () => {
      document.querySelectorAll('.series-tab').forEach(tab => tab.classList.remove('active'));
      btn.classList.add('active');
      loadVideos(name);
    };
    container.appendChild(btn);
  });

  // Carica la prima serie
  if (seriesNames.length > 0) {
    loadVideos(seriesNames[0]);
  }
}

function loadVideos(seriesName) {
  const videoContainer = document.getElementById('videoList');
  videoContainer.innerHTML = '';

  const selectedVideos = series[seriesName];
  selectedVideos.forEach(video => {
    const link = document.createElement('a');
    link.href = `video.html?id=${video.id}&title=${encodeURIComponent(video.title)}&desc=${encodeURIComponent(video.description)}&orientation=${video.orientation || "horizontal"}`;
    link.className = 'video-item';
    link.innerHTML = `
      <img class="video-thumbnail" src="${video.thumbnail}" alt="${video.title}">
      <div class="video-title">${video.title}</div>
    `;
    videoContainer.appendChild(link);
  });
}

function loadPosts() {
  const postContainer = document.getElementById('postList');
  postContainer.innerHTML = '';
  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post-item';
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    postContainer.appendChild(div);
  });
}

window.onload = () => {
  loadSeriesTabs();
  loadPosts();
};
