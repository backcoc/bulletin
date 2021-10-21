import React from "react";
import * as styles from "./blog-post-preview-list.module.css";
// import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import { getBlogUrl } from "../lib/helpers";
import { format } from "date-fns";

function BlogPostPreviewGrid(props) {
  return (
    <>
      <article className={styles.containerblog}>
        <h1 className={styles.header}>Bulletin</h1>
        <p className={styles.desc}>
          Published communications, includes press releases and articles.
        </p>
        {props.nodes.reverse().map((item, index) => {
          return (
            <div
              className={styles.maxWidth}
              style={{ padding: "1rem 0 3rem" }}
              key={index}
            >
              <Link
                className={styles.containerblogpostLink}
                to={getBlogUrl(item.publishedAt, item.slug.current)}
              >
                <h1 className={styles.title}>
                  {item.title ? item.title : "Title"}
                </h1>
                <h2 className={styles.subheader}>
                  {item.mainImage ? item.mainImage.caption : "Subheader"}
                </h2>
                <div className={styles.flex}>
                  <h4 className={styles.category}>
                    {item.categories ? item.categories[0].title : "Category"}
                  </h4>
                  <p className={styles.date}>
                    posted on {""}
                    {item.publishedAt
                      ? format(
                          new Date(
                            item.publishedAt.slice(0, 10).replaceAll("-", ",")
                          ),
                          "MMMM do, yyyy"
                        )
                      : "00"}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </article>
    </>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
