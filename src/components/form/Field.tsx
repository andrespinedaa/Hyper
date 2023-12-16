interface props {
    type: string
}

function Field({type} : props) {
  return (
    <fieldset>
        <label htmlFor={type}>{type}</label>
        <input type="text" name={type} id={type}/>
    </fieldset>
  )

}

export default Field