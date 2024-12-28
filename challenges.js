// Các phần tử DOM
const api = "http://localhost:3000/challenges";
// const perPage = 9; // Số item hiển thị mỗi trang
// let currentPage = 1; // Trang hiện tại
// let totalPages = 4; // Tổng số trang

// // Hàm gọi API để lấy dữ liệu
// const fetchAPI = async (page) => {
//   try {
//     const res = await fetch(`${api}?_page=${page}&_limit=${perPage}`);
//     if (!res.ok) {
//       throw new Error(`Lỗi HTTP! Mã lỗi: ${res.status}`);
//     }
//     const totalItems = res.headers.get("X-Total-Count"); // Lấy tổng số item từ header
//     const data = await res.json(); // Chuyển dữ liệu JSON
//     return {
//       challenges: data,
//       total: totalItems ? parseInt(totalItems, 10) : data.length, // Số lượng item
//     };
//   } catch (err) {
//     console.error("Lỗi khi gọi API:", err.message);
//   }
// };

// // Hàm hiển thị dữ liệu
// function showChallenges(challenges) {
//   let html = "";
//   challenges.forEach((challenge) => {
//     html += `
//       <div class="challenges__item">
//         <div class="challenges__img">
//           <a href="#">
//             <img src="${challenge.image}" alt="${challenge.title}" />
//           </a>
//         </div>
//         <div class="challenges__info">
//           <h3 class="title">
//             <a href="#">${challenge.title}</a>
//           </h3>
//           <div class="info__box">
//             <div class="type">
//               ${challenge.type
//                 .map((type) => `<span>${type.skill}</span>`)
//                 .join("")}
//             </div>
//             <div class="level">
//               <span>${challenge.level}</span>
//             </div>
//           </div>
//           <p class="desc">${challenge.description}</p>
//         </div>
//       </div>
//     `;
//   });
//   const challengeContainer = document.querySelector(".challenges__content");
//   if (challengeContainer) {
//     challengeContainer.innerHTML = html;
//   }
// }

// // Hàm tải dữ liệu và phân trang
// async function loadData(page = 1) {
//   const result = await fetchAPI(page); // Gọi API với trang hiện tại
//   if (result) {
//     const { challenges, total } = result;

//     // Hiển thị danh sách khóa học
//     showChallenges(challenges);

//     // Tính tổng số trang
//     totalPages = Math.ceil(total / perPage);

//     // Cập nhật phân trang
//     displayPagination(totalPages);
//   }
// }

// // Hàm hiển thị phân trang
// function displayPagination(totalPages) {
//   const pagination = document.querySelector(".pagination");
//   if (!pagination) {
//     console.error("Pagination container element not found!");
//     return;
//   }

//   let html = "";
//   for (let i = 1; i <= totalPages; i++) {
//     html += `<button class="pagination-btn ${
//       i === currentPage ? "active" : ""
//     }" data-page="${i}">${i}</button>`;
//   }
//   pagination.innerHTML = html;

//   // Gắn sự kiện click cho các nút phân trang
//   const buttons = document.querySelectorAll(".pagination-btn");
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       currentPage = parseInt(button.dataset.page, 10);
//       loadData(currentPage); // Tải lại dữ liệu cho trang mới
//     });
//   });
// }

// // Khởi tạo trang đầu tiên khi tải trang
// loadData(currentPage);
// Hàm tìm kiếm khóa học theo tênonst inputSearch = document.querySelector(".challenges__input");
// Các phần tử DOM
const inputSearch = document.querySelector(".challenges__input");
const btnSearch = document.querySelector(".btn-search");
const items = document.querySelectorAll(".challenges__item");

// Hàm tìm kiếm khóa học theo tên
function searchCourses() {
  const searchValue = inputSearch.value.toLowerCase(); // Lấy giá trị tìm kiếm
  items.forEach((item) => {
    const title = item
      .querySelector(".challenges__info .title a")
      .innerText.toLowerCase(); // Lấy tên khóa học
    if (title.includes(searchValue)) {
      item.style.display = "block"; // Hiển thị khóa học nếu tìm thấy
    } else {
      item.style.display = "none"; // Ẩn khóa học nếu không khớp
    }
  });
}

// Gắn sự kiện cho nút tìm kiếm
if (btnSearch) {
  btnSearch.addEventListener("click", searchCourses);
}

// Tìm kiếm theo khi người dùng nhập vào input (thêm sự kiện nếu cần)
inputSearch.addEventListener("keyup", searchCourses);
