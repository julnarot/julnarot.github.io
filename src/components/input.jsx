export default function Input({ label, value }) {
    const [firstCharLab, ...rest] = label ? label.split("") : "label";
    return (
        <div className="flex gap-2">
            <label htmlFor="sal">
                <span className="text-yellow-300">{firstCharLab.toUpperCase()}</span>
                {rest.join("")}:
                </label>
            <input type="text" name="" id="sal" value={value} 
            className="bg-blue-600 text-white px-2 focus:outline-none" readOnly />
        </div>
    )
}