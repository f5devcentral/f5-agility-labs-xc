function setNamespace() {
  const ns = document.getElementById("namespaceInput").value.trim();
  if (!ns) return;

  // Save namespace
  localStorage.setItem("namespace", ns);

  updateNamespace();
}

function updateNamespace() {
  // Get stored namespace (null if not set)
  const ns = localStorage.getItem("namespace");

  // Update namespace display
  const nsDisplay = document.getElementById("currentNamespace");
  if (nsDisplay) {
    nsDisplay.innerText = ns || "<namespace>";
  }

  // Do nothing if namespace is not set
  if (!ns) return;

  // Replace placeholders across the page
  document.querySelectorAll("code, pre, td, p, span").forEach(el => {
    el.innerHTML = el.innerHTML
      .replace(/&lt;namespace&gt;/g, ns)
      .replace(/<namespace>/g, ns);
  });
}

// Run when page loads
window.addEventListener("DOMContentLoaded", updateNamespace);