// Toggle navigation for mobile
document.getElementById('menuToggle').addEventListener('click', function () {
  document.querySelector('nav ul').classList.toggle('show');
});

// Filter Courses
function filterCourses(category) {
  const courses = document.querySelectorAll('.course');
  courses.forEach(course => {
    if (category === 'all' || course.dataset.category === category) {
      course.style.display = 'block';
    } else {
      course.style.display = 'none';
    }
  });
}