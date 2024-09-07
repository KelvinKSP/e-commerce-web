// import Carousel from "@/components/carousel";
import HeaderWeb from "@/components/header-web";
import ProductList from "@/components/product-list";
import "@fortawesome/fontawesome-svg-core/styles.css";
import dynamic from 'next/dynamic'
// import "./global.css"

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Carousel = dynamic(() => import('@/components/carousel'), {
  ssr: false,
  loading: () => <div className="skeletonCarousel"></div>,
})


export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <HeaderWeb />
      </div>
      <div className="mt-1">
        <Carousel />
      </div>
      <div>
        <ProductList />
      </div>
    </>
  );
}
