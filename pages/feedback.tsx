import { Fragment } from "react"
import Header from "@/components/common/Header"
import { NextSeo } from "next-seo"


const Feefback = ()=>{
  return(
    <Fragment>
      <NextSeo
        title="피드백"
        description="피드백 페이지"
        canonical='https://next-ts-food-map.vercel.app/'
      />
      <Header />
    </Fragment>
  )
}

export default Feefback
