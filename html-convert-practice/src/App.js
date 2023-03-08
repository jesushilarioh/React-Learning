
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
import Table from './components/Table';

import {
  title, 
  heading, 
  info, 
  orderedListInfo
} from './Data';

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
      <Table tableItems={orderedListInfo} />
      <br />
    </>
  );
}

export default App;
