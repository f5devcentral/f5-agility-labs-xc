function setNamespace() {
  const ns = document.getElementById("namespaceInput").value.trim();
  if (!ns) return;

  // Save in localStorage
  localStorage.setItem("namespace", ns);

  updateNamespace();
}

function updateNamespace() {
  const ns = localStorage.getItem("namespace") || "<namespace>";

  // Update currentNamespace placeholder
  const nsDisplay = document.getElementById("currentNamespace");
  if (nsDisplay) nsDisplay.innerText = ns;

  // Replace placeholders across page
  document.querySelectorAll("code, pre, td, p, span").forEach(el => {
    if (el.innerHTML.includes("&lt;namespace&gt;")) {
      el.innerHTML = el.innerHTML.replace(/&lt;namespace&gt;/g, ns);
    }
    if (el.innerHTML.includes("<namespace>")) {
      el.innerHTML = el.innerHTML.replace(/<namespace>/g, ns);
    }
  });
}

// Run when page loads
window.addEventListener("DOMContentLoaded", updateNamespace);