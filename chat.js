const input = document.getElementById("ChatInput");
const messages = document.getElementById("messages");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    const msg = document.createElement("div");
    msg.classList.add("mensagem");
    msg.textContent = input.value;

    messages.appendChild(msg);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
});
