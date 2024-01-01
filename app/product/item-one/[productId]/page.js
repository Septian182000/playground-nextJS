"use client";
import { Provider } from "react-redux";
import { store } from "@/lib/state_manager/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import Image from "next/image";
import Link from "next/link";
import {
  getProductDetail,
  getProductDetailData,
  getProductDetailStatus,
} from "@/lib/state_manager/reducers/productDetailSlice";

const DetailProductWraper = ({ params }) => {
  return (
    <Provider store={store}>
      <DetailProductOne params={params} />
    </Provider>
  );
};

const DetailProductOne = ({ params }) => {
  const id = params.productId;

  const dispatch = useDispatch();
  const detailData = useSelector(getProductDetailData);
  const detailStatus = useSelector(getProductDetailStatus);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getProductDetail({ id: id }));
  }, [dispatch]);

  useEffect(() => {
    if (detailStatus === "success") {
      setData(detailData);
      setIsLoading(false);
    }
  }, [detailStatus]);

  return (
    <main className="mt-10 px-10">
      <div className="mb-7">
        <h3>
          <Link href={"/product/item-one"}>Back</Link>
        </h3>
      </div>
      <div className="text-center mb-10">
        <p style={{ fontSize: 30 }}>Detail Product</p>
      </div>
      <div className="flex flex-col">
        <div className="inline-block align-middle flex flex-row justify-center">
          {!isLoading ? (
            <Image src={data?.images[0]} width={300} height={300} />
          ) : (
            <Oval
              color={"red"}
              secondaryColor={"black"}
              height={80}
              width={80}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default DetailProductWraper;
