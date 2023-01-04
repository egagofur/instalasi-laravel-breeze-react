interface Props {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  processing: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function PrimaryButton({
  type = "submit",
  className = "",
  processing,
  children,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `inline-flex w-full justify-center items-center px-4 py-2 bg-[#27AB00] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-[#27AB00] active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
