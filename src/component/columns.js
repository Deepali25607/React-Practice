import {format} from 'date-fns'
import {ColumnFilter} from './ColumnFilter'
export const icon= true;

export const COLUMNS = [

    { 
        Header:'ID',
        Footer:'ID',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true

    },
    { 
        Header:'First Name',
        Footer:'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    { 
        Header:'Last Name',
        Footer:'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    { 
        Header:'Date of Birth',
        Footer:'Date of Birth',
        accessor: 'date_of_birth',
        Cell:({value}) => {return format(new Date(value), 'dd/MM/yyyy')},
        Filter: ColumnFilter
    },
    { 
        Header:'Country',
        Footer:'Country',
        accessor: 'country',
        icon: true,
        Filter: ColumnFilter
        
            
        
    },
    
]
