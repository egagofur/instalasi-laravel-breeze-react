import { MutableRefObject, useEffect, useRef } from "react";

interface Props {
  type?: string;
  name?: string;
  id: string | undefined;
  value: string;
  ref?: MutableRefObject<HTMLInputElement>;
  className?: string;
  autoComplete?: string | undefined;
  required?: boolean;
  isFocused?: boolean;
  placeHolder?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({
  type = "text",
  name,
  id,
  value,
  className,
  autoComplete,
  required,
  isFocused,
  handleChange,
}: Props) => {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused) {
      input.current?.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className={
          `border-[#27AB00] focus:border-[#27AB00] focus:ring-[#27AB00] rounded-md shadow-sm ` +
          className
        }
        ref={input}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default TextInput;
