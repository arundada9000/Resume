const img = document.getElementById("myImage");

img.addEventListener("click", () => {
  // Check if fullscreen API is supported
  if (img.requestFullscreen) {
    img.requestFullscreen();
  } else if (img.webkitRequestFullscreen) {
    // Safari
    img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) {
    // IE/Edge
    img.msRequestFullscreen();
  }

  // Apply temporary styles for fullscreen mode
  img.style.position = "static";
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "contain";
});

// Listen for exit from fullscreen to restore styles
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    restoreImageStyles();
  }
});

document.addEventListener("webkitfullscreenchange", () => {
  if (!document.webkitFullscreenElement) {
    restoreImageStyles();
  }
});

document.addEventListener("msfullscreenchange", () => {
  if (!document.msFullscreenElement) {
    restoreImageStyles();
  }
});

function restoreImageStyles() {
  // Restore original styles when exiting fullscreen
  img.style.position = "absolute";
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.objectPosition = "center top";
  img.style.top = "12px";
}

// Disable default right-click menu
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  showCustomMenu(event);
});

// Show custom context menu
function showCustomMenu(event) {
  const menu = document.getElementById("customMenu");
  menu.style.top = `${event.clientY}px`;
  menu.style.left = `${event.clientX}px`;
  menu.style.display = "block";
}

// Hide custom context menu
document.addEventListener("click", () => {
  const menu = document.getElementById("customMenu");
  menu.style.display = "none";
});

// Download image function
function downloadImage() {
  const link = document.createElement("a");
  link.href = document.getElementById("myImage").src;
  link.download = "me.jpg";
  link.click();
}

// Download HTML as PDF function
async function downloadHtmlAsPdf() {
  const menu = document.getElementById("customMenu");
  menu.style.display = "none";

  const { jsPDF } = window.jspdf;
  const element = document.body;
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("Arun_Resume.pdf");
}

// Open link function
function openLink(url) {
  window.open(url, "_blank");
}
