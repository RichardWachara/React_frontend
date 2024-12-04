import React from "react";
import { Link } from "react-router-dom";
import "./CardArticle.css";

const CardArticle = (props) => {

  const BASE_URL = import.meta.env.VITE_BASE_URL

  return (
    <div className="article-container" style={{
      border: props.border
    }}>
      <Link to={`/product/?id=${props.product.id}`}>
        <article className="article-card">
          <figure className="article-image">
            <img src={`${BASE_URL}/${props.product.image}`} alt="Watch image" />
          </figure>
          <div className="article-content">
            <span className="card-category">REF 126710BLRO-0001</span>
            <h3 className="card-title">
              {props.product.name}
            </h3>
            <p className="card-price">{props.product.price}</p>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default CardArticle;
