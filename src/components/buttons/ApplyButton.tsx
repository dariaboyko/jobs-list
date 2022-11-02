type Props = {
  className?: string;
};

export const ApplyButton = ({ className }: Props) => (
  <button
    className={
      "font-['Proxima_Nova'] uppercase text-[12px] text-white px-[30px] py-[18px] bg-[#384564] font-semibold " +
      className
    }
  >
    Apply now
  </button>
);
