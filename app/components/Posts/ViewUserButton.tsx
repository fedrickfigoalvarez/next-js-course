"use client";

interface ViewUserButtonProps {
  userId: number;
}

export const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`User id: ${userId} `);

  return (
    <>
      <button
        className="px-2 py-1 bg-white text-black rounded-md hover:bg-white/70 transition-all font-semi-bold text-sm"
        onClick={handleClick}
      >
        View User
      </button>
    </>
  );
};
