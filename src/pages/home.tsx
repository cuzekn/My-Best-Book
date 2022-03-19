import type { NextPage } from "next";
import Image from "next/image";

import { Header } from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <Header>
      <div className="flex fixed top-0 right-0 justify-center items-center p-3 m-8 w-6 h-6 font-mono text-xs text-white bg-gray-700 rounded-full sm:bg-pink-500 lg:bg-green-500 xl:bg-blue-500">
        <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
        <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
        <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
        <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div>

      <div className="w-full h-96 bg-white">サイトの説明</div>
      <h1 className="text-4xl text-center font-bold py-12">みんなのオススメ</h1>
      <div>
        <div className="max-w-lg m-12">
          <div className="flex  max-h-24 bg-primary-green rounded-t-2xl">
            <Image
              src="/images/book.jpg"
              alt="bookPhoto"
              className="m-4 rounded-full"
              width={65} height={65}
            />
            <div className="mx-5">
              <div className="m-2 text-lg text-white">name</div>
              <button className="p-2 text-white bg-primary-red rounded-md">
                ＋フォロー
              </button>
            </div>
          </div>
          <div className="h-96 bg-white">
            
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Home;
