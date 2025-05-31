export default function Button({ value, onClick }) {
    return (
        <button className="bg-lime-600 text-white font-bold py-1 px-3 border border-lime-600 shadow-[5px_7px_0px_0px_rgba(0,_0,_0,_1)]" onClick={onClick}>
            {value}
        </button>
    )
}