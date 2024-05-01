const API_KEY = '7a138768c99c48a8be4faf7c29cccb0c';

const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData, trailerData) => {
      const { name, released, description, background_image, developers, genres, tags, publishers, parent_platforms, website, trailers, rating, metacritic, screenshots, stores } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("img.game-image").src = background_image;
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector("p.release-date").innerHTML = released;
      articleDOM.querySelector("p.dev").innerHTML = developers[0].name;
      articleDOM.querySelector("p.tag span").innerHTML = tags[0].name;
      articleDOM.querySelector("p.genre").innerHTML = genres[0].name;
      articleDOM.querySelector("p.publisher").innerHTML = publishers[0].name;
      articleDOM.querySelector("p.platform").innerHTML = parent_platforms.map(platform => platform.platform.name).join(", ");
      articleDOM.querySelector("p.web").innerHTML = website;

      const trailerContainer = articleDOM.querySelector(".trailer");
      const firstTrailer = trailerData.results[0];
      if (firstTrailer) {
        trailerContainer.innerHTML = `<iframe width="560" height="315" src="${firstTrailer.data.max}" frameborder="0" allowfullscreen></iframe>`;
      }

      articleDOM.querySelector("p.note span").innerHTML = rating;
      articleDOM.querySelector("p.meta span").innerHTML = metacritic;
      articleDOM.querySelector("img.screenshots").innerHTML = screenshots; // marche po
      articleDOM.querySelector("p.store").innerHTML = stores.map(store => store.store.name).join("<br><br>");

    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          fetchtrailer(url, argument, responseData);
        });
    };

    const fetchtrailer = (url, argument, gameData) => {
      fetch(`${url}/${argument}/movies?key=${API_KEY}`)
        .then((response) => response.json())
        .then((trailerData) => {
          displayGame(gameData, trailerData);
        });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
    <section class="page-detail">
    <div class="article">
        <img class="game-image" src="">

        <div class="titre_vote">
            <h1 class="title"></h1>
            <div class="note_and_vote">
                <p class="note"> <span></span>/5 </p>
                <p class="meta">vote: <span></span></p>
            </div>
        </div>



          <div>
           <p><strong>PLOT</strong></p>
           <p class="description"></p>
          </div>

          <div class="aligne">
            <div>
             <p><strong>Release Date :</strong></p>
             <p class="release-date"></p>
            </div>
                <div>
                    <p><strong>Developer</strong></p>
                    <p class="dev"></p>
                </div>
                <div>
                    <p><strong>platform</strong></p>
                    <p class="platform"></p>
                </div>
                <div>
                    <p><strong>publisher</strong></p>
                    <p class="publisher"></p>
                </div>
          </div>
          <div class="aligne2">
                <div>
                    <p><strong>genre</strong></p>
                    <p class="genre"></p>
                </div>
                <div>
                    <p><strong>tag</strong></p>
                    <p class="tag"> tags<span></span> </p>
                </div>
          </div>
            <div>
            <p class="red"<strong>BUY</strong></p>
            <p class="store"></p>
            </div>
            <p class="web"></p>
            <div>
            <p class="red"><strong>TRAILER</strong></p>
            <div class="trailer"></div>
            </div>
            <img class="screenshots" src="">
            <p class="store"></p>

</section>
      `;

    preparePage();
  };

  render();
};

export default PageDetail;