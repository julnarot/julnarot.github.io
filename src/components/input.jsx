export default function Input({ label, value, className }) {
    const [firstCharLab, ...rest] = label ? label.split("") : "label";
    const concClass = `bg-blue-600 dark:bg-purple-900 text-white px-2 focus:outline-none ${className}`
    return (
        <div className="flex flex flex-col md:flex-row mb-2 mr-4">
            <label htmlFor="sal" className="mr-2 whitespace-nowrap dark:text-white">
                <span className="text-yellow-300 dark:text-cyan-500">{firstCharLab.toUpperCase()}</span>
                {rest.join("")}:
            </label>
            <input type="text" name="" id="sal" value={value}
                className={concClass} readOnly />
        </div>
    )
}