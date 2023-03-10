import React from 'react';
import { client } from '../lib/client';
import { Products, Footer, HeroBanner, FooterBanner} from '../components';



const Home = ({products, bannerData}) => (
  <div>
  <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    {console.log(bannerData)}
    <div className="products-heading">
      <h2>Products</h2>
      <p>Best Electronic Products</p>
    </div>

    <div className="products-container">
    {products?.map((product) => <Products key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery =  '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}

export default Home;