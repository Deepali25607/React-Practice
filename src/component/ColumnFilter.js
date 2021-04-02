import React from 'react'
export const ColumnFilter = ({column }) => {
    const { filterValue, setFilter} = column
    return(
<span>
    Search: {' '}
    <input placeholder="Search Here..." value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} />
</span>
    );
}

export default ColumnFilter ;
