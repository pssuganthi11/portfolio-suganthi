export default function FormTextArea({ id, placeholder }) {
  return (
    <textarea
      id={id}
      rows="4"
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-[#F9DFDF] focus:outline-none focus:border-[#F9DFDF]"
    />
  );
}