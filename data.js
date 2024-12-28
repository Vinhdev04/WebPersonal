const api = "http://localhost:3000/projects"; // API URL
const perPage = 9; // Số item mỗi trang
let currentPage = 1;

// Function để lấy dữ liệu khóa học
function fetchCourses(page) {
  return fetch(`${api}?_page=${page}&_limit=${perPage}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const totalItems = response.headers.get("X-Total-Count"); // Tổng số mục từ API
      return response.json().then((data) => ({
        projects: data,
        total: totalItems ? parseInt(totalItems) : data.length,
      }));
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
    });
}

// Function để hiển thị khóa học vào HTML
function displayCourses(projects) {
  let html = "";
  projects.forEach((project) => {
    html += `
      <div class="course__item">
        <img src="${project.image}" alt="${project.title}" class="course__image" />
        <h3 class="course__title">${project.title}</h3>
        <p class="course__description">${project.description}</p>
        <p class="course__info">
          <span>Duration: ${project.duration}</span><br>
          <span>Price: ${project.price} VND</span><br>
          <span>Rating: ${project.rating} ⭐</span>
        </p>
        <p class="course__category">${project.category}</p>
      </div>
    `;
  });
  const container = document.querySelector(".container");
  if (container) {
    container.innerHTML = html;
  } else {
    console.error("Container element not found!");
  }
}

const challenges = document.querySelector(".challenges");
console.log(challenges);
const apiKey = "http://localhost:3000/challenges";

// Function để hiển thị phân trang
function displayPagination(totalPages) {
  const pagination = document.querySelector(".pagination");
  if (!pagination) {
    console.error("Pagination container element not found!");
    return;
  }

  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="pagination-btn ${
      i === currentPage ? "active" : ""
    }" data-page="${i}">${i}</button>`;
  }
  pagination.innerHTML = html;

  // Gắn sự kiện click cho các nút
  const buttons = document.querySelectorAll(".pagination-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = parseInt(button.dataset.page, 10);
      loadData(currentPage);
    });
  });
}

// Function chính để tải dữ liệu và phân trang
function loadData(page = 1) {
  fetchCourses(page).then((result) => {
    if (result) {
      const { projects, total } = result;

      // Hiển thị khóa học
      displayCourses(projects);

      // Tính tổng số trang
      const totalPages = Math.ceil(total / perPage);

      // Hiển thị phân trang
      displayPagination(totalPages);
    }
  });
}

// Gọi lần đầu tiên
loadData(currentPage);
