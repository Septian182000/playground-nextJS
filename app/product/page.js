import Link from "next/link";

const Product = () => {
  return (
    <main className="mt-10 px-10">
      <div>
        <h3>
          <Link href={"/"}>Back to home</Link>
        </h3>
      </div>
      <div className="flex flex-row place-items-center justify-center gap-3">
        <Link href={"/product/item-one"}>
          <div
            className="border border-gray-400 rounded"
            style={{ padding: 20, cursor: "pointer" }}
          >
            <span>Item 1</span>
          </div>
        </Link>
        <Link href={"/product/item-two"}>
          <div
            className="border border-gray-400 rounded"
            style={{ padding: 20, cursor: "pointer" }}
          >
            <span>Item 2</span>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Product;
