// pagination

const Pagination = props => {
  const {onClickViewMoreBtn} = props
  return (
    <li style={{display: 'flex', justifyContent: 'center'}}>
      <button
        style={{
          backgroundColor: '#18C683',
          color: '#fff',
          padding: '10px',
          borderRadius: '10px',
          border: 'none',
          margin: '30px',
        }}
        onClick={() => onClickViewMoreBtn()}
        type="button"
      >
        View More
      </button>
    </li>
  )
}
export default Pagination
