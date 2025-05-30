import Label from "./label";

export default function Input({ label, value, className }) {
  const concClass = `bg-blue-600 dark:bg-purple-900 text-white px-2 focus:outline-none ${className}`;
  return (
    <div className="flex flex flex-col md:flex-row mb-2 mr-4">
      {label && <Label label={label} firstCharHighLighting={true} />}
      <input
        type="text"
        name=""
        id="sal"
        value={value}
        className={concClass}
        readOnly
      />
    </div>
  );
}
