import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Store } from '../types/store';
import styles from '../styles/detail.module.scss';
import DetailHeader from '../components/home/DetailHeader';
import DetailContent from '../components/home/DetailContent';
import useCurrentStore from '@/hooks/useCurrentStore';
import { NextSeo } from 'next-seo';
import Router, { useRouter } from 'next/router';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true;
  const router = useRouter()
  const {setCurrentStore} = useCurrentStore()
  const goMap = ()=>{
    setCurrentStore(store)
    router.push(`
      /?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}
    `);
  }
  return (
    <>
      <NextSeo
      title={store.name}
      description='맛집 상세페이지'
      canonical={`https://next-ts-food-map.vercel.app/${store.name}`}
      />
      <div className={`${styles.detailSection} ${styles.expanded}`}>
        <DetailHeader
          currentStore={store}
          expanded={expanded}
          onClickArrow={() => goMap()}
        />
        <DetailContent currentStore={store} expanded={expanded} />
      </div>
    </>
  );
};
export default StoreDetail

export const getStaticPaths:GetStaticPaths = async ()=>{
    const stores = (await import('../public/stores.json')).default
    const paths = stores.map((store)=>({params:{name:store.name}}));
    return{paths, fallback:false}
}

export const getStaticProps:GetStaticProps = async ({params})=>{
    const stores = (await import('../public/stores.json')).default
    const store = stores.find((store)=> store.name === params?.name)

    if(!store){
        return{
            notFound:true
        }
    }
    return {props:{store}}
}