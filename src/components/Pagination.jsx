import BoxPagination from "../styles/BoxPagination"

const Pagination = ({paginationBack, paginationNext, count, countrecords, take, data}) => {
    return(
        <>
        {
            countrecords >= take &&
            <BoxPagination>
                <div className='container'>
                    {
                        count > 1 &&
                        <i onClick={paginationBack} className="material-symbols-outlined right">chevron_left</i>
                    }
                    <p>Páginas: </p>
                    {count != 1 && <span onClick={paginationBack}>{count - 1}</span>}
                    <span style={{backgroundColor: '#0575e6', cursor: 'auto'}}>{count}</span>
                    {count < Math.ceil(countrecords / take) && <span onClick={paginationNext}>{count + 1}</span>}
                    <p>{`${data}/${countrecords}`}</p>
                    {
                        count < Math.ceil(countrecords / take) && countrecords > take && 
                        <i onClick={paginationNext} className="material-symbols-outlined left">chevron_right</i>
                    }
                </div>
            </BoxPagination>
        }
        </>
    )
}

export default Pagination