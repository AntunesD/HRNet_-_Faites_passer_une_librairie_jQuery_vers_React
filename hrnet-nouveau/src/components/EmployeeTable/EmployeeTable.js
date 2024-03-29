import React from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from 'react-table';
import "./EmployeeTable.scss"


// Fonction de filtre personnalisée pour la recherche
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
    return (
        <span className='employee-filter'>
            Search:{' '}
            <input
                value={globalFilter || ''}
                onChange={e => setGlobalFilter(e.target.value)}
                placeholder="Search employees..."
            />
        </span>
    );
};

function EmployeeTable({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state: { globalFilter, pageIndex, pageSize },
        gotoPage,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        pageCount,
        setPageSize,
        setGlobalFilter
    } = useTable(
        { columns, data },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    return (
        <div className='EmployeeList_content'>
            <h1>Current Employees</h1>
            <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
            {data.length > 0 ? (
                <div>
                    <table {...getTableProps()} className="table">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? ' 🔽'
                                                        : ' 🔼'
                                                    : ''}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{(cell.column.id === 'dateOfBirth' || cell.column.id === 'startDate') ? new Date(cell.value).toLocaleDateString() : cell.render('Cell')}</td>;
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className='pagination'>
                        <button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>{'<<'}</button>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                        <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={pageIndex === pageCount - 1}>{'>>'}</button>
                        <span>
                            Page{' '}
                            <strong>
                                {pageIndex + 1} of {pageCount}
                            </strong>{' '}
                        </span>
                        <span>
                            | Go to page:{' '}
                            <input
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                                    gotoPage(pageNumber);
                                }}
                                style={{ width: '100px' }}
                            />
                        </span>
                        <select
                            value={pageSize}
                            onChange={e => setPageSize(Number(e.target.value))}
                        >
                            {[10, 20, 30, 40, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            ) : (
                <p>No employees found.</p>
            )}
        </div>
    );
}

export default EmployeeTable;
