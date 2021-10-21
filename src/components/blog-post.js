import * as styles from "./blog-post.module.css";
import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import SyntaxHighlighter from 'react-syntax-highlighter';
import anOldHope from 'react-syntax-highlighter/src/styles/hljs/an-old-hope';

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
  } = props;
  //
  //
  console.log(_rawBody)
  return (
    <>
      <Helmet
        meta={[
          {
            name: "description",
            content: mainImage.alt,
          },
        ]}
      />
      <article className={styles.container}>
        <p className={styles.author_date}>
          {publishedAt ? format(new Date(publishedAt), "MM.dd.yy") : null}
        </p>
        <div className={styles.flexHeader}>
          <Link to="/" className={styles.headerLink}>
            Bulletin |
          </Link>
          <h2 className={styles.subheader}>
            {categories[0].title ? categories[0].title : "Press Release"}
          </h2>
        </div>
        <h1 className={styles.header}>{title ? title : "NFT Title"}</h1>
        {mainImage.asset ? (
          <img
            className={styles.image}
            src={imageUrlFor(buildImageObj(mainImage))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        ) : null}
        <h3 className={styles.secondHeader}>
          {mainImage.alt ? mainImage.alt : null}
        </h3>
        {_rawBody
          ? _rawBody.map((item, index) => {
              if (item._type === "block") {
                if (item.style === "normal") {
                  if (item.children.length === 1) {
                    return (
                      <p className={styles.description} key={index}>
                        {item.children[0].text ? item.children[0].text : null}
                      </p>
                    );
                  } else if (item.children.length !== 1) {
                    return (
                      <div style={{ display: "flex" }}>
                        <p
                          key={index}
                          className={
                            // item.marks[0] === "strong"
                            // ? null

                            styles.description
                          }
                          // style={{
                          //   fontWeight:
                          //     item.marks[0] === "strong" ? "bold" : null,
                          // }}
                        >
                          {item.children.map((item, index) => {
                            // console.log(item);
                            if (item.marks[0] === "strong") {
                              return (
                                <span
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                >
                                  {item.text}
                                </span>
                              );
                            } else {
                              return item.text;
                            }
                          })}
                        </p>
                      </div>
                    );
                  }
                } else if (item.style === "h4") {
                  return (
                    <h4 className={styles.subtitleh4} key={index}>
                      {item.children[0].text ? item.children[0].text : null}
                    </h4>
                  );
                }
              } else if (item._type === "mainImage") {
                return (
                  <img
                    className={styles.secondImage}
                    src={imageUrlFor(buildImageObj(item))
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt={item.alt}
                    key={index}
                  />
                );
              }
              else if (item._type === "code"){
                return(
                <SyntaxHighlighter language={item.language || 'text'} style={anOldHope} customStyle={{background:"#072b2c", color:"#95bc98"}}>
                  {item.code}
                </SyntaxHighlighter>
                );
              }
            })
          : null}
        <div className={styles.flex}>
          <p className={styles.author_date}>
            {authors[0].author.name ? authors[0].author.name : "Author Name"}
          </p>
        </div>
      </article>
    </>
    // <article className={styles.root}>
    //   {mainImage && mainImage.asset && (
    //     <div className={styles.mainImage}>
    //       <img
    //         src={imageUrlFor(buildImageObj(mainImage))
    //           .width(1200)
    //           .height(Math.floor((9 / 16) * 1200))
    //           .fit("crop")
    //           .auto("format")
    //           .url()}
    //         alt={mainImage.alt}
    //       />
    //     </div>
    //   )}
    //   <Container>
    //     <div className={styles.grid}>
    //       <div className={styles.mainContent}>
    //         <h1 className={styles.title}>{title}</h1>
    //         {_rawBody && <PortableText blocks={_rawBody} />}
    //       </div>
    //       <aside className={styles.metaContent}>
    //         {publishedAt && (
    //           <div className={styles.publishedAt}>
    //             {differenceInDays(new Date(publishedAt), new Date()) > 3
    //               ? formatDistance(new Date(publishedAt), new Date())
    //               : format(new Date(publishedAt), "MMMM Mo, yyyy")}
    //           </div>
    //         )}
    //         {authors && <AuthorList items={authors} title="Authors" />}
    //         {categories && (
    //           <div className={styles.categories}>
    //             <h3 className={styles.categoriesHeadline}>Categoriesssss</h3>
    //             <ul>
    //               {categories.map((category) => (
    //                 <li key={category._id}>{category.title}</li>
    //               ))}
    //             </ul>
    //           </div>
    //         )}
    //       </aside>
    //     </div>
    //   </Container>
    // </article>
  );
}

export default BlogPost;
