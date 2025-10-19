// Select the container where courses will be rendered
const coursesContainer = document.getElementById('courses-container');

// Function to create HTML for a single course card
function createCourseCard(course) {
  return `
    <div class="col-md-4">
      <div class="card course-card shadow-sm h-100">
        <img src="${course.image}" class="card-img-top" alt="${course.title}" />
        <div class="card-body">
          <h5 class="card-title">${course.title}</h5>
          <p class="card-text"><i class="fa-solid fa-user me-1"></i>${course.instructor}</p>
          <p class="card-text"><i class="fa-solid fa-star text-warning me-1"></i>${course.rating} | ${course.students} Students</p>
          <a href="#" class="btn btn-primary">Enroll</a>
        </div>
      </div>
    </div>
  `;
}

// Fetch courses from the backend API and display them
function loadCourses() {
  fetch('/api/courses') // Your backend API endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(courses => {
      let coursesHTML = '';
      courses.forEach(course => {
        coursesHTML += createCourseCard(course);
      });
      coursesContainer.innerHTML = coursesHTML; // Insert courses into the container
    })
    .catch(error => {
      coursesContainer.innerHTML = `<p class="text-danger">Failed to load courses: ${error.message}</p>`;
      console.error('Fetch error:', error);
    });
}

// Call loadCourses when the page loads
document.addEventListener('DOMContentLoaded', loadCourses);
