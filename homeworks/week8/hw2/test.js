// 串接 Twitch API (https://dev.twitch.tv/docs/api)
// Twitch API didn't support CORS -> use curl
// 顯示出目前最熱門的 5 個遊戲
// 點下去之後可以顯示正在直播這遊戲的前 20 個實況（要剛好 20 個
// 可以切換不同的遊戲，顯示不同遊戲的熱門實況。

let user_id_list = [];
let profile_image_url_list = [];
getTopGames();
// console.log(user_id_list);
// console.log(profile_image_url_list);

let avatars = document.querySelectorAll(".avatar");
for (let i = 0; i < avatars.length; i++) {
  avatars[i].innerHTML = `
    <img
      src="${profile_image_url_list[i]}"
    />
  `;
}

function getTopGames() {
  const request = new XMLHttpRequest();

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.responseText);
      const games = json.data;
      console.log(games);

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
            getStreams(game_id);
          });
      }
    }
  };
  request.onerror = function () {
    console.log(request.status, "error");
  };
  request.open("get", "https://api.twitch.tv/helix/games/top?first=5", true);
  request.setRequestHeader(
    "Authorization",
    "Bearer yvm1x2ndhjhghpzx7542zljxsvh944"
  );
  request.setRequestHeader("Client-Id", "eq9p3uunmx3y6a20c9kt4w9owylbe5");
  request.send();
}

function getStreams(game_id) {
  const request = new XMLHttpRequest();

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.responseText);
      const streams = json.data;
      console.log(streams);

      const live_channels = document.createElement("div");
      live_channels.classList.add("live-channels");

      for (stream of streams) {
        let thumbnail_url = stream.thumbnail_url.substring(
          0,
          stream.thumbnail_url.length - 20
        );
        thumbnail_url += "300x200.jpg";

        let user_id = stream.user_id;
        user_id_list.push(user_id);
        getUsers(user_id, profile_image_url_list);

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
              src=""
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
  };

  request.onerror = function () {
    console.log(request.status, "error");
  };

  request.open(
    "get",
    `https://api.twitch.tv/helix/streams?first=20&game_id=${game_id}`,
    true
  );
  request.setRequestHeader(
    "Authorization",
    "Bearer 3d6s76k57p7hd54j3k92w3o7uf2yc2"
  );
  request.setRequestHeader("Client-Id", "iyge4tz8yrbpp1yrwtpemsufmdd2sf");
  request.send();
}

function getUsers(user_id, profile_image_url) {
  // live 封面用 getStreams 的 thumbnail_url
  // user 頭像用 getUsers 的 profile_image_url
  const request = new XMLHttpRequest();

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.responseText);
      profile_image_url.push(json.data[0].profile_image_url);
    }
  };
  request.onerror = function () {
    console.log(request.status, "error");
  };
  request.open("get", `https://api.twitch.tv/helix/users?id=${user_id}`, true);
  request.setRequestHeader(
    "Authorization",
    "Bearer ya3ugmfegg090frdyt3i4kfiohvd0z"
  );
  request.setRequestHeader("Client-Id", "ufn4hx5ph1ntmezj21qxytd8af677z");
  request.send();
}
