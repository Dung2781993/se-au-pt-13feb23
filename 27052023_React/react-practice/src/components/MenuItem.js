import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const MenuItem = (props) => {
  return (
    <Col>
      <Card>
        <Card.Img className="food-image" variant="top" src={props.foodImage} />
        <Card.Body>
          <Card.Title>{props.itemName}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <div className="rightContainer">
        <div>${props.price}</div>
        <div
          id="favorite"
          className={props.isFavorite ? 'isFavorite' : 'notFavorite'}
          onClick={() =>
            props.setFoodItems((oldState) => {
              // 0. Find index to modify using name as reference
              const indexToModify = oldState.findIndex(
                (item) => item.itemName === props.itemName
              );
              // 1. Make a shallow copy of the items
              let items = [...oldState];
              // 2. Make a shallow copy of the item you want to mutate
              let item = { ...items[indexToModify] };
              // 3. Replace the property you're intested in
              item.isFavorite = !item.isFavorite;
              // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
              items[indexToModify] = item;
              // 5. Set the state to our new copy
              return items;
            })
          }
        />
      </div>
      </Card>
    </Col>
  );
};

export default MenuItem;
