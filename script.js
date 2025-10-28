
const sections = {
  gametab: "games",
  classictab: "classics",
  tooltab: "tools",
  abouttab: "about",
  contacttab: "contacts"
};

Object.keys(sections).forEach(tabId => {
  document.getElementById(tabId).onclick = () => {
    Object.values(sections).forEach(sectionId => {
      document.getElementById(sectionId).hidden = true;
    });
    document.getElementById(sections[tabId]).hidden = false;
  };
});

document.getElementById("QC").onclick = () => {
  location.assign("https://natotatoshc.github.io/QuantumClicker");
};
document.getElementById("J").onclick = () => {
  location.assign("https://natotatoshc.github.io/Jokes");
};
document.getElementById("rala").onclick = () => {
  // location.assign("https://natotatoshc.github.io/Ralandia");
};
document.getElementById("NWA").onclick = () => {
  location.assign("https://natotatoshc.github.io/NateWorks-Attack");
};
