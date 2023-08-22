export async function getStaticProps() {
    const response = await fetch("https://dummyjson.com/products");
    const posts = await response.json();
  
    return {
      props: {
        posts,
      },
    };
  }
  