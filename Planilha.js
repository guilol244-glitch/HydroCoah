function togglePlanilha(element) {
  const conteudo = element.nextElementSibling;
  if (conteudo.style.display === "block") {
    conteudo.style.display = "none";
  } else {
    conteudo.style.display = "block";
  }
}