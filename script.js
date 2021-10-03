const player = document.getElementById("video-player-hex");
const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];

document.addEventListener("click", (e) => {
  if (e.target.id === "video-player-hex") {
    modal.style.display = "block";
    player.style.display = "none";

    close.onclick = function () {
      closeModal();
    };
  }
});

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function closeModal() {
  modal.style.display = "none";
  player.style.display = "block";
  player.play();
}
