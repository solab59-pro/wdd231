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

function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();

  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}

courseDiv.addEventListener('click', () => {
  displayCourseDetails(course);
});