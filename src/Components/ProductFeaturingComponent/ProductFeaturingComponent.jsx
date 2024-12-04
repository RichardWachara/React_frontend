import React, {useContext} from "react";
import CardArticle from "../CardArticles/CardArticle";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import ProdContext from "../Utils/Context/ProdContext";


const ProductFeaturingComponent = (props) => {

  const {products} = useContext(ProdContext)


  return (
    <section className="feature-section bg-width">
      <div className="section-title">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
      <div className="card-container">

        {products.map((product) => (
          <CardArticle key={product.id} border={props.border} product={product}/>
        ))}

      </div>
      <div className="category-selection">
        <ul>
          <li>
            <Link className="active">1</Link>
          </li>
          <li>
            <Link>2</Link>
          </li>
          <li>
            <Link>3</Link>
          </li>
          <li>
            <Link>4</Link>
          </li>
          <li>
            <Link>5</Link>
          </li>
          <li>
            <Link>
              <FaChevronRight className="arrow_Icon" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductFeaturingComponent;
