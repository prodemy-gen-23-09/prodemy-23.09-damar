let productList = [
  {
    id: 1,
    name: "Ardiles Black Sneakers Casual",
    price: 290000,
    image: "../assets/Sepatu-1.png",
    description:
      "Ardiles Black Sneakers Casual <br><br> TIDAK AKAN JEBOL setelah dicuci atau kehujanan karena menggunakan technologi baru Shoes Injection Mould bahan sole dicairkan dengan tekanan tinggi menyatu sempurna dengan bahan kain dari sepatu tanpa menggunakan proses lem. <br><br> Bahan : Kanvas - Mesh - Kulit sintetis <br><br> Size : 39 - 43",
    stock: 10,
    toko: {
      name: "Tokopedia Official",
      rating: 4.5,
      location: "Jakarta",
    },
  },
  {
    id: 2,
    name: "Adidas Dark Blue Sneakers Casual",
    price: 990000,
    image: "../assets/Sepatu-2.png",
    description:
      "Adidas Dark Blue Sneakers Casual <br><br> TIDAK AKAN JEBOL setelah dicuci atau kehujanan karena menggunakan technologi baru Shoes Injection Mould bahan sole dicairkan dengan tekanan tinggi menyatu sempurna dengan bahan kain dari sepatu tanpa menggunakan proses lem. <br><br> Bahan : Kanvas - Mesh - Kulit sintetis <br><br> Size : 39 - 43",
    stock: 15,
    toko: {
      name: "Tokopedia Official",
      rating: 4.5,
      location: "Jakarta",
    },
  },
  {
    id: 3,
    name: "Nike White Sneakers Casual",
    price: 870000,
    image: "../assets/Sepatu-3.png",
    description:
      "Nike White Sneakers Casual <br><br> TIDAK AKAN JEBOL setelah dicuci atau kehujanan karena menggunakan technologi baru Shoes Injection Mould bahan sole dicairkan dengan tekanan tinggi menyatu sempurna dengan bahan kain dari sepatu tanpa menggunakan proses lem. <br><br> Bahan : Kanvas - Mesh - Kulit sintetis <br><br> Size : 39 - 43",
    stock: 25,
    toko: {
      name: "Tokopedia Official",
      rating: 4.5,
      location: "Jakarta",
    },
  },
  {
    id: 4,
    name: "Aerostreet Black & White Sneakers Casual",
    price: 190000,
    image: "../assets/Sepatu-4.png",
    description:
      "Aerostreet Black & White Sneakers Casual <br><br> TIDAK AKAN JEBOL setelah dicuci atau kehujanan karena menggunakan technologi baru Shoes Injection Mould bahan sole dicairkan dengan tekanan tinggi menyatu sempurna dengan bahan kain dari sepatu tanpa menggunakan proses lem. <br><br> Bahan : Kanvas - Mesh - Kulit sintetis <br><br> Size : 39 - 43",
    stock: 10,
    toko: {
      name: "Tokopedia Official",
      rating: 4.5,
      location: "Jakarta",
    },
  },
  {
    id: 5,
    name: "Aerostreet Black Sneakers Casual",
    price: 990000,
    image: "../assets/Sepatu-1.png",
    description:
      "Aerostreet Black Sneakers <br><br> TIDAK AKAN JEBOL setelah dicuci atau kehujanan karena menggunakan technologi baru Shoes Injection Mould bahan sole dicairkan dengan tekanan tinggi menyatu sempurna dengan bahan kain dari sepatu tanpa menggunakan proses lem. <br><br> Bahan : Kanvas - Mesh - Kulit sintetis <br><br> Size : 39 - 43",
    stock: 10,
    toko: {
      name: "Tokopedia Official",
      rating: 4.5,
      location: "Jakarta",
    },
  },
];

document.getElementById("navbar").innerHTML = `
  <img src="../assets/back-arrow.png" class="h-8 md:hidden" alt="back-arrow" />
  <img
    src="../assets/Tokopedia-logo.svg"
    class="hidden md:block md:h-10"
    alt="logo"
  />
  <input
    name="search"
    class="hidden md:block flex-1 h-fit px-3 px-5 py-2 outline outline-1 outline-gray-300 rounded-lg"
    placeholder="Cari di tokokami"
  />
  <nav class="flex flex-row items-center gap-x-5 md:gap-x-8">
    <img
      src="../assets/wishlist.png"
      alt="wishlist"
      class="hidden md:block md:h-10"
    />
    <img src="../assets/search.png" alt="search" class="h-7 md:hidden" />
    <img src="../assets/shopping-cart.png" alt="cart" class="h-8 md:h-10" />
    <img
      src="../assets/profile.png"
      alt="profile"
      class="hidden md:block md:h-10"
    />
    <img src="../assets/menu.png" class="h-8 md:hidden" alt="menu" />
  </nav>
`;

document.getElementById("footer").innerHTML = `
  <div class="hidden md:flex flex-row justify-center items-center border border-transparent border-t-gray-300 py-4 px-3 md:px-4 lg:px-10 xl:px-12 gap-x-5 md:gap-x-8">
    <p class="text-gray-500 text-sm">
      &copy; 2023 <span class="font-semibold">Damar Galih Anshary</span> - All Rights
      Reserved
    </p>
  </div>
`

const productDetailsElement = document.getElementById("product-details");
const productListElement = document.getElementById("product-list");

const fetchProductDetails = (id) => {
  let productDetail = productList.find((sepatu) => sepatu.id === id);

  productListElement.className = "hidden";

  productDetailsElement.className =
    "block h-screen xl:container md:px-3 mx-auto lg:mx-6 xl:mx-auto mt-0 md:mt-10";
  
  productDetailsElement.innerHTML = `
  <main class="flex flex-col justify-center gap-y-5 md:flex-row md:items-start md:gap-x-2 lg:gap-x-6">
    <img
      src=${productDetail.image}
      alt="PC EK Gaming"
      class="w-full md:w-3/12 md:rounded-lg"
    />
    <article class="flex flex-col w-full px-3 md:w-6/12">
      <div class="border border-transparent border-b-gray-200 mb-5">
        <h3 class="text-xl mb-2 font-semibold md:font-bold">
          ${productDetail.name}
        </h3>
        <div class="flex flex-row items-center gap-x-2">
          <p class="text-base line-clamp-1">
            Terjual <span class="text-gray-500">5rb+</span>
          </p>
          <span>&#8226;</span>
          <p clas="text-base">
            <span>&#9733;</span> 4.9
            <span class="text-gray-500">(3.011 rating)</span>
          </p>
          <span>&#8226;</span>
          <p class="md:hidden lg:block text-base">
            Diskusi <span class="text-gray-500">106</span>
          </p>
        </div>
        <p class="text-2xl md:text-3xl font-bold my-5">${
          "Rp. " + productDetail.price.toLocaleString("id-ID")
        }</p>
      </div>
      <h4 class="text-lg font-bold mb-2">Deskripsi Produk</h4>

      ${productDetail.description}

      <div class="flex flex-row w-full gap-x-3 items-center border border-transparent py-4 border-y-gray-100 my-5">
        <img
          src="../assets/tokopedia-little-logo.png"
          alt="tokopedia"
          class="h-12"
        />
        <div class="flex flex-col grow ms-5">
          <h4 class="text-lg font-bold line-clamp-1">${
            productDetail.toko.name
          }</h4>
          <p class="text-gray-500 mt-0">${productDetail.toko.location}</p>
        </div>
        <button class="outline outline-1 outline-green-500 rounded-lg px-6 py-1 h-fit font-bold text-green-500">
          Follow
        </button>
      </div>
    </article>

    <div class="hidden md:flex flex-col gap-y-5 w-3/12 p-4 border border-gray-300 rounded-lg">
      <h4 class="text-lg font-bold">Atur jumlah dan catatan</h4>
      <div class="flex flex-row gap-x-3 border border-transparent pb-3 border-b-gray-100">
        <img
          src="${productDetail.image}"
          alt="PC Thumbnail"
          class="w-10 min-w-10 rounded-lg"
        />
        <p>${productDetail.name}</p>
      </div>
      <div class="flex flex-row gap-x-3 justify-start items-center">
        <span>&#45;</span>
        <input
          class="h-fit w-20 px-3 self-center py-0.5 outline-none border rounded-lg text-center"
          value="1"
        />
        <span>&#43;</span>
        <p class="text-sm lg:text-base">
          Stok: <span class="font-bold">${productDetail.stock}</span>
        </p>
      </div>
      <div class="flex flex-row justify-between items-center">
        <p class="text-sm lg:text-md text-gray-500">Subtotal</p>
        <p class="text-md lg:text-lg font-bold">${
          "Rp. " + productDetail.price.toLocaleString("id-ID")
        }</p>
      </div>
      <div class="flex flex-col gap-y-3">
        <button class="bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg font-bold">
          <span>&#43;</span> Keranjang
        </button>
        <button class="outline outline-1 outline-green-500 text-green-500 p-2 rounded-lg font-bold">
          Beli Langsung
        </button>
      </div>
    </div>
    <div class="flex flex-row justify-between gap-x-4 p-3 sticky w-full bottom-0 left-0 z-10 bg-white border border-t-green-500 md:hidden">
      <button class="flex-1 outline outline-1 outline-green-500 text-green-500 p-2 rounded-lg font-bold">
        Beli Langsung
      </button>
      <button class="flex-1 bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg font-bold">
        <span>&#43;</span> Keranjang
      </button>
    </div>
  </main>`;
};

productDetailsElement.className = "hidden";

productListElement.className =
  "product-list md:h-screen lg:container md:px-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-fit grid gap-5 mx-5 md:mx-auto my-5 md:mt-10";

let i = 0;
productList.forEach((product) => {

  const productCard = document.createElement("div");

  productCard.className =
    "product-card h-fit flex flex-col border border-gray-300 p-4 pb-6 gap-1 rounded-lg hover:shadow-md cursor-pointer";

  productCard.addEventListener("click", () => {
    fetchProductDetails(product.id);
  });

  productCard.innerHTML = `
      <img class="self-center w-40 h-40" src="${product.image}" alt="${product.name}" />
      <h3 class="line-clamp-1 font-semibold">${product.name}</h3>
      <p class="text-gray-400 text-sm">${product.toko.name}</p>
      <p class="font-bold text-lg mt-2">${"Rp. " + product.price.toLocaleString("id-ID")}</p>
  `;
  productListElement.appendChild(productCard);
  i++;
});
