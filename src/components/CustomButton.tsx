interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomButton = ({ onClick, children }: CustomButtonProps) => {
  return (
    <button
      className="text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
