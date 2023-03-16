
export function Paragraph(props) {
    return <p>{props.paragraphValue}</p>;
}
export function ParagraphDataFromIndexJs(props) {
    let dataFromIndexJs = props.paragraphValue;
    return <p>{dataFromIndexJs[1].paragraph}</p>
}