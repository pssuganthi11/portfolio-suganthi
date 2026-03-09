function FormLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block mb-2 font-medium">
      {children}
    </label>
  );
}
export default FormLabel;
