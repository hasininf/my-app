import AddProduct from "./addProduct";

type Products={
    id:number;
    title:string;
    price:number;
}

async function getProducts(){
    const res=await fetch("http://localhost:5000/products", {cache:"no-store"});
    return res.json();
}
export default async function page() {
    const products: Products[]=await getProducts();
  return (
    <div className="py-10 px-10">
        <div className="py-2">
            <AddProduct/>
        </div>
        <table className="table w-full bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
        {products.map((product, index)=>(
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                </tr>
        ))}
            </tbody>
        </table>
    </div>
  )
}
