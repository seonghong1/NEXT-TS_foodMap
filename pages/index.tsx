import { Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import MapSection from '../components/home/MapSection';
import Header from '../components/home/Header';
import { Store } from '../types/store';
import useStores from '../hooks/useStores';
import DetailSection from '@/components/home/DetailSection';
import { NextSeo } from 'next-seo';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <NextSeo
        title='매장지도'
        description='네이버 맛집 지도를 활용해 맛집을 찾아보세요~'
      />
      <Header />
      <main style={{ width: '100%', height: '100%', overflow: 'hidden'}}>
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
};
export default Home;

export async function getStaticProps() {
  /** TODO: next api routes로 불러오기 */
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
