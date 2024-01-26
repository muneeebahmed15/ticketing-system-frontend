const SmallItems = ({title, content}) =>{
    return ( 
    <div className="d-flex just-content-start align-items-center gap-3 mb-2">
      <span style={{fontWeight:"500"}}>{title}</span>: <span>{content}</span>
    </div>
    )
  }

  export default SmallItems ;