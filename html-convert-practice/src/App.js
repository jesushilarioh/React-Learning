
import './App.css';
import Paragraph from './components/Paragraph';
import { 
  Heading1, 
  Heading2,
  Heading3,
  Heading4,
  Heading5
} from './components/Headings';

import UnorderedList from './components/UnorderedList';
import OrderedList from './components/OrderedList';

const title = "Changing to React Components";

const heading = [
  "Heading 2",
  "Heading 3", 
  "Heading 4",
  "Heading 5"
];
const info = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis, ipsa, fugit odio voluptatum ad inventore nisi doloribus iusto nemo consequatur tempora sapiente commodi tenetur mollitia aut sed vel eos.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident est ad libero odit. Asperiores, provident fuga, vero numquam harum accusamus quidem nisi quae nesciunt ut cum. Rem aliquid aperiam tempora?",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia aliquam dolor voluptas delectus fugit odit maxime velit corporis, deleniti ullam repellat unde magni suscipit, sunt id quibusdam nam vitae!",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus suscipit a doloribus laborum quod, facilis sapiente eius perspiciatis modi voluptatem iusto harum voluptatum blanditiis dolorum laboriosam? Eligendi perspiciatis veniam soluta?"
];
const orderedListInfo = [
  {
    id: "98845", 
    name: "James",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: "98846", 
    name: "James",
    description: "Perferendis veritatis, ipsa, fugit odio voluptatum ad i."
  },
  {
    id: "98847", 
    name: "James",
    description: "Modi voluptatem iusto harum voluptatum blanditiis dosam?"
  },
  {
    id: "98848", 
    name: "James",
    description: "Accusamus officia aliquam dolor voluptas delectus fugit!",
  },
  {
    id: "98849", 
    name: "James",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: "98850", 
    name: "James",
    description: "Perferendis veritatis, ipsa, fugit odio voluptatum ad i."
  }
]

function App() {
  return (
    <>
      <Heading1 headingValue={title}/>
      <Paragraph paragraphValue={info[0]} />
      <Heading2 headingValue={heading[0]} />
      <Paragraph paragraphValue={info[1]} />
      <Heading3 headingValue={heading[1]} />
      <Paragraph paragraphValue={info[2]} />
      <Heading3 headingValue={heading[1]} />
      <UnorderedList listItems={info} />
      <Heading4 headingValue={heading[2]} />
      <Paragraph paragraphValue={info[3]} />
      <Heading5 headingValue={heading[3]} />
      <Paragraph paragraphValue={info[0]}/>
      <Heading3 headingValue="Here's a Ordered List: " />
      <OrderedList orderedListItems={orderedListInfo} />
      <Heading2 headingValue="Here's a Table: " />
      {/* <Table tableItems={orderedListInfo} /> */}
      <br />
    </>
  );
}

export default App;
