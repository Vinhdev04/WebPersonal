fetch("http://localhost:3000/courses")
  .then((response) => response.json())
  .then((data) => {
    const courses = data;
    console.log(courses);

    // Bắt đầu xây dựng HTML
    let html = "";

    // Lặp qua danh sách các khóa học và thêm từng khóa học vào HTML
    courses.forEach((course) => {
      html += `
        <div class="course__item">
          <img src="${course.image}" alt="${course.title}" class="course__image" />
          <h3 class="course__title">${course.title}</h3>
          <p class="course__description">${course.description}</p>
          <p class="course__info">
            <span>Duration: ${course.duration}</span>
            <span>Price: ${course.price} VND</span>
            <span>Rating: ${course.rating} ⭐</span>
          </p>
          <p class="course__category">${course.category}</p>
        </div>
      `;
    });

    // Hiển thị nội dung HTML vào một container trong DOM
    const container = document.querySelector(".container");
    if (container) {
      container.innerHTML = html;
    } else {
      console.error("Container element not found!");
    }
  })
  .catch((error) => {
    console.error("Error fetching courses:", error);
  });
