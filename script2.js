const courses = [
  { title: "HTML for Beginners", description: "Learn HTML from scratch." },
  { title: "CSS Essentials", description: "Style your websites beautifully." },
  { title: "JavaScript Basics", description: "Add interactivity with JS." },
  { title: "Advance course in Excel", description: "Learn excel from scratch." },
];

function showCourses() {
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = ''; // Clear existing

  courses.forEach(course => {
    const div = document.createElement('div');
    div.className = 'course-card';
    div.innerHTML = `<h4>${course.title}</h4><p>${course.description}</p>`;
    courseList.appendChild(div);
  });

  document.getElementById('courses-section').scrollIntoView({ behavior: 'smooth' });
}