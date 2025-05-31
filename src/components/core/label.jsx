import SpanTextWithFirstCharHighLighting from "./labelHighlighting";


export default function Label({label , firstCharHighLighting} ) {
  return (
    <label htmlFor="sal" className="mr-2 whitespace-nowrap dark:text-white">
      {firstCharHighLighting ? (
        <SpanTextWithFirstCharHighLighting label={label}/>
      ) : (
        {label}
      )}
      :
    </label>
  );
}
