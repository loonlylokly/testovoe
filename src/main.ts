import "./styles/style.css";

const authDialog = window.document.getElementById(
  "authDialog",
) as HTMLDialogElement | null;

const openAuthDialogBtn = window.document.getElementById(
  "openAuthDialogBtn",
) as HTMLButtonElement | null;

const closeAuthDialogBtn = window.document.getElementById(
  "closeAuthDialogBtn",
) as HTMLButtonElement | null;

authDialog?.addEventListener("close", returnScroll);
openAuthDialogBtn?.addEventListener("click", openAuthDialog);
closeAuthDialogBtn?.addEventListener("click", () => authDialog?.close());

function openAuthDialog() {
  authDialog?.showModal();
  document.body.classList.add("scroll-lock");
}

function returnScroll() {
  document.body.classList.remove("scroll-lock");
}
