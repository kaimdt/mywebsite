import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Navbar from '../../components/Navbar';
import blog from '../../styles/blog.module.css';
import NowPlaying from '../../components/NowPlaying';
import { motion } from 'framer-motion';

import React from 'react'
import matter from 'gray-matter'
import dayjs from "dayjs";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
export const DATE_FORMAT = "MMMM DD, YYYY";




function PostTemplate({ content, data }) {
  const frontmatter = data
  const date = frontmatter.date;
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Kai Lukas Marquardt</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer src="/all.js"></script>
      </Head>
      <div className={styles.backgroundblur}></div>
      <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
      <NowPlaying/>
      </motion.div>
      <Navbar/>
      <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
      <div className={blog.container}>
        <div className={blog.header}>
          <p className={blog.title}>{frontmatter.title}</p>
          <div className={blog.author}>
            <div className={blog.one}>
              <img src="/assets/images/avatar.jpg" /><p>Kai Marquardt</p>
            </div>
            <div className={blog.two}></div>
            <div className={blog.three}>{dayjs(date).format(DATE_FORMAT)}</div>
          </div>
        </div>
        <div className={blog.content}>
          <Markdown options={options}>{content}</Markdown>
        </div>
      </div>
      </motion.div>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../posts/${slug}.md`)
  
  // Parse .md data through `matter`
  const data = matter(content.default)
  
  // Pass data to our component props
  return { ...data }

  return { slug }
}

const options: MarkdownToJSX.Options = {
  overrides: {
    h1: {
      props: { className: "h1" },
    },
    h2: {
      props: { className: "mb-2 text-4xl font-bold mt-10" },
    },
    h3: {
      props: { className: "mb-2 text-3xl font-normal mt-8 text-gray-700" },
    },
    h4: {
      props: { className: "mb-1 text-2xl mt-8" },
    },
    h5: {
      props: { className: "mb-1 text-xl text-gray-700 mt-6" },
    },
    h6: {
      props: { className: "mb-0.5 text-gray-500 mt-6" },
    },
    p: {
      props: { className: "leading-7 my-4 text-gray-600" },
    },
    img: {
      props: { className: "w-100" },
    },
    a: {
      props: { className: "underline hover:text-blue-500 hover:no-underline" },
    },
    ol: {
      props: { className: "list-decimal" },
    },
    ul: {
      props: { className: "list-disc" },
    },
    li: {
      props: { className: "mt-1" },
    },
    hr: {
      props: {
        className: "mt-5 border-none border-gray-200 border-top-4",
      },
    },
  },
};

export default PostTemplate
