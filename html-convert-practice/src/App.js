
import './App.css';
import {
  Paragraph, 
  ParagraphDataFromIndexJs
} from './components/Paragraph';
import { 
  Heading1, 
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  HeadingDataFromIndexJs
} from './components/Headings';

import UnorderedList from './components/UnorderedList';
import OrderedList from './components/OrderedList';
import Table from './components/Table';
import {
  Form,
  FormOf2Inputs 
}from './components/Form';

import {
  title, 
  heading, 
  info, 
  orderedListInfo
} from './Data';

function doStuff() {
  alert("alert from App.js, notice");
}

function App(props) {

  let dataFromIndexJs = props.indexJsData;

  return (
    <>
      <Heading1 headingValue={title}/>
      <Paragraph paragraphValue={info[0]} />

      <Heading2 headingValue={dataFromIndexJs[0].info} />
      <Paragraph paragraphValue={dataFromIndexJs[0].paragraph} />

      <HeadingDataFromIndexJs headingValue={dataFromIndexJs} />
      <ParagraphDataFromIndexJs paragraphValue={dataFromIndexJs} />

      <Heading3 headingValue="Here's a form: " />
      <Form formInfo={props.indexJsData}/>

      <Paragraph paragraphValue={info[2]} />

      <Heading3 headingValue="Here's another form: " />
      <FormOf2Inputs formInfo={props.indexJsData} />

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
      
      <Heading3 headingValue={heading[1]} />
      <Paragraph paragraphValue={info[1]}/>
    </>
  );
}

export default App;
