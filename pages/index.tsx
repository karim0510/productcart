import Product from "./product";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <p>
          Get started by visiting the <Link href="/product"><code>/product</code></Link> URL and editing{" "}
          <code>client/pages/product.js</code>
        </p>
      </div>
    </main>
  );
}

export default Home;
