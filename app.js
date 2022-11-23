document.querySelectorAll('[role="switch"]').forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const isChecked = toggle.checked;
    const thumb = toggle
      .closest(".custom-check-wrapper")
      .querySelector(".custom-check-thumb");

    thumb.style.animation = isChecked
      ? "toggleOn 200ms cubic-bezier(0.4, 0, 0.6, 1) forwards"
      : "toggleOff 200ms cubic-bezier(0.4, 0, 0.6, 1) forwards";
  });
});
