// Handle icon click interaction, toggle content visible/hidden
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.interactive-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const targetId = icon.dataset.target;
      const target = document.getElementById(targetId);
      if (target) target.classList.toggle('hidden');
    });
  });

  // Fetch and render courses dynamically from backend
  fetch('/api/courses')
    .then(res => res.json())
    .then(courses => {
      const container = document.getElementById('courses-container');
      container.innerHTML = courses.map(course => `
        <div class="col-md-4">
          <div class="card course-card shadow-sm">
            <img src="${course.image}" alt="${course.title}" class="card-img-top" />
            <div class="card-body">
              <h5>${course.title}</h5>
              <p>${course.instructor}</p>
              <p>Rating: ${course.rating}</p>
              <a href="#" class="btn btn-primary">Enroll</a>
            </div>
          </div>
        </div>
      `).join('');
    })
    .catch(err => console.error('Error loading courses:', err));
});
