import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

export default function ProductCard({ data }) {
  return (
    <Card className="mb-3 text-center product-card">
      <img
        className="product-image"
        src={data.image.thumbnail}
        alt={data.slug}
      />
      <Card.Body as={Link} to={`/product/${data.slug}`}>
        <Card.Title className="text-dark">
          {data.name.substring(0, 25)}
        </Card.Title>
        <Card.Text>
          <span>$</span>
          <b>{data.price}</b>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <CartButton product={data} />
      </Card.Footer>
    </Card>
  );
}
