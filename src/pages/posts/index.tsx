import axios from "axios";
import Head from "next/head";
import Link from "next/link";


import styles from "./posts.module.scss";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Lucas Cipriano</title>
      </Head>

      <main className={styles.container}>
        <h1>Posts</h1>

        {posts.map((post) => {
          return (
            <>
              <div className={styles.posts}>
                <Link href={`/posts/${post.id}`}>
                  <div className={styles.body}>
                    <div className={styles.text}>
                      <h2>{post.attributes.title}</h2>
                      <p>{post.attributes.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");
  // console.log(postsRes.data.data);

  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
