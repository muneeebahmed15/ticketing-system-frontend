import React from 'react'

const TcDetailHead = ({singleItem}) => {
  return (
    <>
     <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              {/* <th scope="col">#{loading && "..."}</th> */}
              <th scope="col">Title</th>
              <th scope="col" className='d-none d-md-block'>Description</th>
              <th scope="col">Priority</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
           
              <tr >
              {/* <th scope='row'>{++index}</th> */}
              <td>{singleItem?.title}</td>
              {/* {!useBreakpoint().md && <td className='d-none d-md-block'>{singleItem?.description}</td>} */}
              <td className='d-none d-md-block'>{singleItem?.description}</td>
              <td>{singleItem?.priority} </td>
              <td>{singleItem?.category?.name}</td>
              <td>{singleItem?.status}</td>
              
            </tr>
          
          </tbody>
        </table>


      </div> 
    </>
  )
}

export default TcDetailHead
