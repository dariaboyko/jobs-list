import BookmarkSVG from "../../assets/icons/BookmarkSVG";
import ShareSVG from "../../assets/icons/ShareSVG";
export const JobInfoHeader = () => (
  <header className="flex justify-between pb-[9px] items-center border-solid border-b-[1px] border-[#3A4562]/[.13] ">
    <h2 className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[28px]">
      Job Details
    </h2>
    <div className="flex gap-[24px] font-['Roboto'] text-[#3A4562] text-[18px] font-normal tracking-[-0.5625px] md:hidden">
      <p className="flex items-center gap-[8px]">
        <BookmarkSVG />
        <span>Save to my list</span>
      </p>
      <p className="flex items-center gap-[8px]">
        <ShareSVG />
        <span>Share</span>
      </p>
    </div>
  </header>
);
