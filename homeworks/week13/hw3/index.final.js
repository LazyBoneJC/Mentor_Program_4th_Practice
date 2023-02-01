// 串接 Twitch API (https://dev.twitch.tv/docs/api)
// Twitch API didn't support CORS -> use curl to get auth code
// 顯示出目前最熱門的 5 個遊戲
// 點下去之後可以顯示正在直播這遊戲的前 20 個實況（要剛好 20 個
// 可以切換不同的遊戲，顯示不同遊戲的熱門實況。
// 此為使用 Fetch 的版本

const authorization_code = "Bearer 7xw60zlcdo6jz8hzlo0z9fh4kvipg9";
const client_id = "eq9p3uunmx3y6a20c9kt4w9owylbe5";

function getTopGames() {
  const api_topGames = "https://api.twitch.tv/helix/games/top?first=5";
  return fetch(api_topGames, {
    method: "GET",
    headers: new Headers({
      Authorization: authorization_code,
      "Client-Id": client_id,
    }),
  })
    .then(res => res.json())
    .then(function (json) {
      // console.log("getTopGames() Response:", json);
      return json.data; // 把解析成 js obj 的 json data 回傳
    })
    .catch(function (err) {
      console.log("getTopGames() Error:", err);
    });
}

async function appendNavbar() {
  let games = {}; // data of top five games

  try {
    games = await getTopGames();
  } catch (error) {
    console.log("Error:", error);
  }

  for (game of games) {
    const display_game_name = game.name;
    const game_name = game.name.replace(/\s/g, "");
    const game_id = game.id;

    const list_item = document.createElement("li");
    list_item.classList.add(`${game_name}`);
    list_item.innerHTML = `<a href="#">${game.name}</a>`;
    document.querySelector(".navbar__list").appendChild(list_item);

    document
      .querySelector(`.${game_name}`)
      .addEventListener("click", function () {
        // 在載入新的 stream channel 前，remove 舊的 channels
        let channels = document.querySelectorAll(".channel");
        for (channel of channels) {
          channel.remove();
        }

        document.querySelector(".live-section").innerHTML = "";
        document.querySelector(".live-section").innerHTML = `
        <p class="game-title">${display_game_name}</p>
        <p class="live-desc">
          Top 20 popular live streams sorted by current viewers
        </p>
        `;

        appendStreams(game_id);
      });
  }
}

function getStreams(game_id) {
  const api_getStreams = `https://api.twitch.tv/helix/streams?first=20&game_id=${game_id}`;

  return fetch(api_getStreams, {
    method: "GET",
    headers: new Headers({
      Authorization: authorization_code,
      "Client-Id": client_id,
    }),
  })
    .then(res => res.json())
    .then(function (json) {
      return json.data;
      // console.log("getStreams Response:", json);
    })
    .catch(function (err) {
      console.log("getStreams Error:", err);
    });
}

async function appendStreams(game_id) {
  let streams = {}; // data of top 20 streams

  try {
    streams = await getStreams(game_id);
    console.log(streams);
  } catch (error) {
    console.log("Error:", error);
  }

  const live_channels = document.createElement("div");
  live_channels.classList.add("live-channels");

  for (stream of streams) {
    let thumbnail_url = stream.thumbnail_url.substring(
      0,
      stream.thumbnail_url.length - 20
    );
    thumbnail_url += "300x200.jpg";

    // let user_id = stream.user_id;
    // getUsers(user_id, profile_image_url);

    const channel = document.createElement("div");
    channel.classList.add("channel");
    channel.innerHTML = `
      <div class="channel-img">
      <img
        src="${thumbnail_url}"
      />
      </div>
      <div class="channel-info">
        <div class="avatar">
          <img
            src="./pic/avatar.png"
          />
        </div>
        <div class="info">
          <p class="info-title">
            ${stream.title}
          </p>
          <p class="info-name">${stream.user_name}</p>
        </div>
      </div>
      `;

    live_channels.appendChild(channel);
  }

  document.querySelector("body").appendChild(live_channels);
}

function main() {
  appendNavbar();
}

main();
