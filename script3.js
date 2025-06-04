const projects = [
  {
    title: "Quiz app",
    description: "A responsive quiz application built with HTML, CSS, and JS.",
  },
  {
    title: "chat website",
    description: "a chat website using html, css and javascript.",
  },
  {
    title: "e learning website",
    description: "E learning website",
  },
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  projectList.appendChild(div);
});