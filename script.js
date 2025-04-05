
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


const emojiArea = document.getElementById("emojiArea");
const scoreDisplay = document.getElementById("score");
let score = 0;

function createMouseEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = "🐭";
  emoji.style.left = Math.random() * 90 + "%";
  emoji.style.top = Math.random() * 70 + "%";
  emojiArea.appendChild(emoji);

  emoji.addEventListener("click", () => {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;
    emoji.remove();
  });

  setTimeout(() => {
    emoji.remove();
  }, 2000); 
}

setInterval(createMouseEmoji, 1200);
