interface Props {
  name: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox({ name, value, handleChange }: Props) {
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      className="text-[#27AB00] border-gray-300 rounded shadow-sm focus:ring-[#27AB00]"
      onChange={(e) => handleChange(e)}
    />
  );
}
