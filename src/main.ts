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
authDialog?.addEventListener("click", (e) =>
  closeOnBackDropClick({ currentTarget: authDialog, target: e.target }),
);
openAuthDialogBtn?.addEventListener("click", openAuthDialog);
closeAuthDialogBtn?.addEventListener("click", () => authDialog?.close());

function openAuthDialog() {
  authDialog?.showModal();
  document.body.classList.add("scroll-lock");
}

function returnScroll() {
  document.body.classList.remove("scroll-lock");
}

function closeOnBackDropClick({
  currentTarget,
  target,
}: {
  target: EventTarget | null;
  currentTarget: HTMLDialogElement;
}) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) {
    dialogElement.close();
  }
}
