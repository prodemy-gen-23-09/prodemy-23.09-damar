// export interface Response {
//   products: Product[];
//   total: number;
//   skip: number;
//   limit: number;
// }

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// }

const fetchData = async (query) => {
  const data = await axios
    .get(`https://dummyjson.com/products/search?q=${query}`)
    .then((res) => res.data)
    .catch((err) => err)
    .finally(() => console.log("fetch successful"));

  return data;
};

// const fetchProducts = async (query: string) => {
//   await fetchData(query)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("done"));
// };
const search = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const content = document.getElementById("content");

let data = {};

let query = "";

searchInput.onchange = (e) => {
  query = e.target.value;
};

search.onsubmit = async (e) => {
  e.preventDefault();
  data = await fetchData(query);
  console.log(data);

  if (data.products?.length > 0) {
    content.innerHTML = `<table>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>description</th>
        <th>price</th>
        <th>discountPercentage</th>
        <th>rating</th>
        <th>stock</th>
        <th>brand</th>
        <th>category</th>
        <th>thumbnail</th>
      </tr>
      ${data.products?.map((product) => {
        return `
        <tr>
          <td>${product.id}</td>
          <td>${product.title}</td>
          <td>${product.description}</td>
          <td>${product.price}</td>
          <td>${product.discountPercentage}</td>
          <td>${product.rating}</td>
          <td>${product.stock}</td>
          <td>${product.brand}</td>
          <td>${product.category}</td>
          <td><img src="${product.thumbnail}" /></td>
        </tr>
        `;
      })}
    </table>`;
  } else {
    content.innerHTML = `<div>No data found</div>`;
  }
};
