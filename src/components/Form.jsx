const Form = () => {
    return (
        <form className="my-4 border border-gray-400 rounded-md p-4">
            <input type="text" className="boder border-gray-500 rounded-md p-2.5 w-full" placeholder="Enter Pokemoon Game " required />
            <button className="bg-red-500 text-white font-bold w-full p-4 border border-red-100 rounded-md hover:bg-red-500 cursor-pointer">Submit</button>
        </form>
    )
}
export default Form