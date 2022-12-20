import Head from 'next/head'
import Image from 'next/image'
import HeadTags from '../components/metaData/HeadTags'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home({posts}) {
  return (
    <div className={styles.container}>
     <HeadTags />
     <h1>Free bird</h1>
     {
      posts && posts.length > 0 && posts.map((post,index) => <h1 key={index} >{post}</h1>)
     }
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const {name} = ctx.query
  console.log(name,'is the name')
  return {posts: ['sjfklsjf' , 'skljfsdjf' , 'skjfklsdjfsdjf' ,'ksjdfj']}
}