const PurpleGradient = (el?: HTMLElement | null): void => {
  if (!el) return;

  const canvas = document.createElement("canvas");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  el.append(canvas);

  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );

    gradient.addColorStop(0, "#3f2745");
    gradient.addColorStop(1, "#0D083B");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
};

export default PurpleGradient;
