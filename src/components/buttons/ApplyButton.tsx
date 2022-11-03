type Props = {
  className?: string;
};

export const ApplyButton = ({ className }: Props) => (
  <button
    className={
      "font-['Proxima_Nova'] uppercase text-[12px] text-white  w-[127px] h-[52px] bg-[#384564] rounded-lg " +
      className
    }
  >
    Apply now
  </button>
);
