import MenuItem from "./MenuItem";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const MenuList = ({foodItems, setFoodItems}) => {
  return (
    <Container fluid>
      <Row>
      {
        foodItems.map(item => {
          return (
            <MenuItem key={item.name} setFoodItems={setFoodItems} {...item}/>
          )
        })
      }
      </Row>
    </Container>
  )
};

export default MenuList;