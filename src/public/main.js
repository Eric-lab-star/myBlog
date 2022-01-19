const videos = document.querySelector("#videos");
const loadingEL = document.querySelector("#loading");

let loading = true;
async function getData() {
  loading = true;
  const res = await fetch("http://localhost:4000/video");
  const data = await res.json();
  loading = false;
  return data;
}

async function addData() {
  if (loading) {
    console.log("hello");
    loadingEL.innerHTML = "<h1>Loading Videos</h1>";
  }
  const videoData = await getData();
  loadingEL.innerText = "";
  videoData.forEach((video) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <ul>
            <li>${video.name}</li>
            <li>${video.date}</li>
            <li>${video.tags}</li>
            <li>${video.descriptions}</li>
        </ul>
      `;
    videos.appendChild(div);
  });
}

addData();
