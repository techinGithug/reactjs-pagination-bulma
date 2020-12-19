import React, { Fragment } from 'react'
import usePagination from "./pagination"

const Country = ({ data, itemsPerPage, startFrom }) => {
    const { slicedData, pagination, prevPage, nextPage, changePage } = usePagination({ itemsPerPage, data, startFrom })
    return (
       <Fragment>
           <table className="table is-fullwidth is-striped">
               <thead>
                   <th>COUNTRY-TH</th>
                   <th>COUNTRY-EN</th>
                   <th>ALPHA2</th>
                   <th>ALPHA3</th>
                   <th>NUMERIC</th>
                   <th>ISO3166_2</th>
               </thead>
               <tbody>
                    {slicedData.map(item =>(
                        <tr key={item.numeric}>
                            <td>{item.name}</td>
                            <td>{item.enName}</td>
                            <td className="has-text-centered">{item.alpha2}</td>
                            <td className="has-text-centered">{item.alpha3}</td>
                            <td className="has-text-centered">{item.numeric}</td>
                            <td>{item.iso3166_2}</td>
                        </tr>
                    ))}
               </tbody>
           </table>
           <nav className="pagination">
                <a href="/#" className="pagination-previous" onClick={prevPage}>Previous</a>
                <a href="/#" className="pagination-next" onClick={nextPage}>Next</a>
                <ul className="pagination-list">
                    {pagination.map(page => {
                        if(!page.ellipsis) {
                            return <li key={page.id}>
                                <a
                                    href="/#"
                                    className={page.current ? 'pagination-link is-current' : 'pagination-link'}
                                    onClick={(e) => changePage(page.id, e)}
                                >
                                    {page.id}
                                </a>
                            </li>
                        } else {
                            return <li key={page.id}><span className="pagination-ellipsis">&hellip;</span></li>
                        }
                    })}
                </ul>
           </nav>
       </Fragment>
    )
}

export default Country
