function FormInput({ id, type = "text", placeholder }){
    return(
       <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-[#F9DFDF] focus:outline-none focus:border-[#F9DFDF]"
    />
    )
}
export default FormInput

