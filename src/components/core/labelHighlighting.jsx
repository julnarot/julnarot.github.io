export default function SpanTextWithFirstCharHighLighting({label}) {
    const [firstCharLab, ...rest] = label ? label.split("") : "label";
    return (
      <span>
        <span className="text-yellow-300 dark:text-cyan-300">
          {firstCharLab.toUpperCase()}
        </span>
        {rest.join("")}
      </span>
    );
  }