/* eslint-disable react/no-children-prop */
import axios from "axios";
import styles from "./post.module.scss";
import MarkdownIt from "markdown-it/lib";

export default function Postpage({ post }) {
  const md = new MarkdownIt({
    html: true,

    
  })
  const htmlContent = md.render(post.data.attributes.content);

  return (
    <>
      <article className={styles.container}>
        <header>
        <h1>{post.data.attributes.title}</h1>
        <p>{post.data.attributes.summary}</p>
        </header>
        <section dangerouslySetInnerHTML={{__html: htmlContent}} >
        </section>
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const postRes = await axios.get(
    `http://localhost:1337/api/posts/${params.id}`
  );
  console.log(postRes.data.data )
  return {
    props: {
      post: postRes.data,
    },
  };
}

export async function getStaticPaths() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");
  const paths = postsRes.data.data.map((post) => {
    return { params: { id: post.id.toString(), conteto: post.content} };
  });
  return {
    paths,
    fallback: false,
  };
}
