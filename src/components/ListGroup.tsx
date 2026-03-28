import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  heading: string;
  items: string[];

}

function ListGroup({ heading, items }: Props) {
  // items = [];

  const msg = items.length === 0 ? <p>No items found</p> : null;

  const getMessage = () => (items.length === 0 ? <p>No items found</p> : null);

  // Hook - a hook is a function that allows us to tap into built-in features in react
  // this is state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading} </h1>

      {/* {getMessage()} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
        {/* in JSX only html and react code is allowed thus we added {} */}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
