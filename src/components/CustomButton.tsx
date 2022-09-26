interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const CustomButton = ({
  onClick,
  children,
  className,
  ...other
}: CustomButtonProps) => (
  <button
    className={`${className} my-2 mr-2 cursor-pointer rounded-lg border-2 border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300`}
    onClick={onClick}
    {...other}
  >
    {children}
  </button>
);

export default CustomButton;
