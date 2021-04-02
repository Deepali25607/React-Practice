import React from 'react'
export const GlobalFilter = ({filter,setFilter }) => {
    return(
<span>
    Search: { ' '}
    <input placeholder="Search Here..." value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
</span>
    );
}
export default GlobalFilter;