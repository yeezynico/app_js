const API_KEY = '7a138768c99c48a8be4faf7c29cccb0c';

const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      const { name, released, description, background_image, developers, genres, tags, publishers, platforms, website, video, rating, metacritic, screenshots, stores } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("img.game-image").src = background_image;
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.dev").innerHTML = developers[0].name;
      articleDOM.querySelector("p.tag").innerHTML = tags[0].name;
      articleDOM.querySelector("p.genre").innerHTML = genres[0].name;
      articleDOM.querySelector("p.publisher").innerHTML = publishers[0].name;
      articleDOM.querySelector("p.platform").innerHTML = platforms.map(platform => platform.platform.name).join(", ");
      articleDOM.querySelector("p.web").innerHTML = website;
      // Une vidéo de présentation (Lecteur HTML 5 interne)
      articleDOM.querySelector("p.note span").innerHTML = rating;
      articleDOM.querySelector("p.meta span").innerHTML = metacritic;
      articleDOM.querySelector("img.screenshots").innerHTML = screenshots; // marche po
      articleDOM.querySelector("p.store").innerHTML = stores.map(store => store.store.name).join("<br><br>");

    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <img class="game-image" src="" >
          <p class="release-date">Release date : <span></span></p>
          <p class="description"></p>
          <p class="dev"></p>
          <p class="tag"></p>
          <p class="genre"></p>
          <p class="publisher"></p>
          <p class="platform"></p>
          <p class="web"></p>
          <p>vidéo</p>
          <p class="note"> <span></span>/5 </p>
          <p class="meta">vote: <span></span></p>
          <img class="screenshots" src="" >
          <p class="store"></p>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export default PageDetail;