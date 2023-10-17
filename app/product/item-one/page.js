"use client";
import { Provider } from "react-redux";
import { store } from "@/app/state_manager/store";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  getProduct,
  getProductData,
  getProductStatus,
} from "@/app/state_manager/reducers/productSlice";

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

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    if (productStatus === "success") {
      setData(productData);
    }
  }, [productStatus]);

  return (
    <main className="mt-10 px-10">
      <div className="mb-7">
        <h3>
          <Link href={"/product"}>Back</Link>
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {data?.products?.map((data, index) => (
          <Link href={`/product/item-one/${data.id}`} key={index}>
            <div
              className="border border-gray-400 rounded"
              style={{ padding: 20 }}
            >
              <span style={{ cursor: "pointer" }}>{data.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ClothesWraper;
