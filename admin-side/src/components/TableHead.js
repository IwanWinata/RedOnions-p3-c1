const TableHead = (props) => {
    return (
        <th 
        className="px-6 bg-blueGray-50 text-blueGray-500 align-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
        {props.el}
        </th>
    )
}

export default TableHead