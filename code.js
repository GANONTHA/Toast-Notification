let toastBox = document.getElementById("toastBox");
let successMsg = "submitted with success";
let invalidMsg = "Invalid message";
let errorMsg = "Error";

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
