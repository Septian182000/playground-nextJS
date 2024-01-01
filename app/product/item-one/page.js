"use client";
import { Provider } from "react-redux";
import { store } from "@/lib/state_manager/store";
import { useState, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Oval } from "react-loader-spinner";
import {
  getProduct,
  getProductData,
  getProductStatus,
} from "@/lib/state_manager/reducers/productSlice";

const ClothesWraper = () => {
  return (
    <Provider store={store}>
      <Clothes />
    </Provider>
  );
};

const Clothes = () => {
  const dispatch = useDispatch();
  const productData = useSelector(getProductData);
  const productStatus = useSelector(getProductStatus);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    if (productStatus === "success") {
      setData(productData);
      setIsLoading(false);
    }
  }, [productStatus]);

  return (
    <main className="mt-10 px-10">
      <div className="mb-7">
        <h3>
          <Link href={"/product"}>Back</Link>
        </h3>
      </div>
      {!isLoading ? (
        <div className="grid grid-cols-4 gap-4 mb-6">
          {data?.products?.map((data, index) => (
            <Link href={`/product/item-one/${data.id}`}>
              <div
                key={index}
                className="border border-gray-400 rounded"
                style={{ padding: 20, cursor: "pointer" }}
              >
                <span>{data.title}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Oval color={"red"} secondaryColor={"black"} height={300} />
        </div>
      )}
    </main>
  );
};

export default ClothesWraper;
