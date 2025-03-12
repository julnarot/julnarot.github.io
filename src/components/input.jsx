export default function Input({ label, value, className }) {
    const [firstCharLab, ...rest] = label ? label.split("") : "label";
    const concClass = `bg-blue-600 text-white px-2 focus:outline-none ${className}`
    return (
        <div className="flex flex flex-col md:flex-row mb-2 mr-4">
            <label htmlFor="sal" className="mr-2 whitespace-nowrap">
                <span className="text-yellow-300">{firstCharLab.toUpperCase()}</span>
                {rest.join("")}:
            </label>
            <input type="text" name="" id="sal" value={value}
                className={concClass} readOnly />
        </div>
    )
}