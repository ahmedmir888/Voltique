const categoriesContainer = document.querySelector(".categories-container");

function renderingProducts(productsData) {
  if (productsData.length !== 0) {
    productsData.forEach((product) => {
      let categoriesImgs = `
            <div class="img-box">
                <img src="${product.img}" alt="${product.name}">
            </div>
        `;

    categoriesContainer.innerHTML += categoriesImgs;
    });
  }
}
renderingProducts(productsData);

const categoriesImgBox = document.querySelector(".img-box");
const categoriesImg = document.querySelector(".img-box img");

