const API_KEY = '7a138768c99c48a8be4faf7c29cccb0c';

const PageList = (argument = '') => {
  let currentPage = 1; // Variable pour suivre la page actuelle
  let totalImages = 0; // Variable pour suivre le nombre total d'images affichées

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const maxImage = 9;
      const resultsContainer = document.querySelector('.page-list .articles');

      if (currentPage === 1) {
        // Si c'est la première page, nettoie le conteneur des résultats précédents
        resultsContainer.innerHTML = '';
      }

      let articless = articles.slice(0, maxImage);

      const resultsContent = articless.map((article) => (
        `<article class="cardGame">
          <a href="#pagedetail/${article.id}"><img src="${article.background_image}"></a>
          <h1>${article.name}</h1>
          <h2>${article.parent_platforms.map(platform => platform.platform.name).join(", ")}</h2>
        </article>`
      ));

      resultsContainer.innerHTML += resultsContent.join("\n");

      totalImages += articless.length; // Met à jour le nombre total d'images affichées
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results);
          // Vérifie si le bouton "Show More" doit être affiché
          if (totalImages >= 27) {
            document.getElementById("show-more-btn").style.display = "none";
          } else {
            document.getElementById("show-more-btn").style.display = "block";
          }
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
    };

    const loadMoreImages = () => {
      const maxImage = 9;
      fetchList(`https://api.rawg.io/api/games?key=${API_KEY}&page=${currentPage}${argument ? `&search=${argument}` : ''}`);
      currentPage++; // Incrémente la page pour la prochaine requête
    };

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const showMoreButton = document.getElementById("show-more-btn");

    // Ajout d'un gestionnaire d'événements pour la soumission du formulaire de recherche
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      currentPage = 1; // Réinitialise la page lors d'une nouvelle recherche
      totalImages = 0; // Réinitialise le nombre total d'images affichées lors d'une nouvelle recherche
      const searchQuery = searchInput.value;
      fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, searchQuery);
    });

    // Chargez les résultats sans recherche initiale
    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);

    // Gestionnaire d'événement pour le bouton "Show More"
    showMoreButton.addEventListener("click", loadMoreImages);
  };

  const render = () => {
    const pageContent = document.getElementById("pageContent");
    pageContent.innerHTML = `
    <h2>Welcome,</h2>
    <p>The Hyper Progame is the worlds premier event for computer and video games and related products. At The
        Hyper
        Progame,
        the video game industrys top talent pack the Los Angeles Convention Center, connecting tens of thousands of
        the
        best,
        brightest, and most innovative in the interactive entertainment industry. For three exciting days,
        leading-edge
        companies,
        groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame
        connects
        you
        with both new and existing partners, industry executives, gamers, and social influencers providing
        unprecedented
        exposure
      </p>
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
      <button id="show-more-btn" style="display:none;">Show More</button>
    `;

    preparePage();
  };

  render();
};

export default PageList;
