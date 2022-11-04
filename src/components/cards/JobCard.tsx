import LocationSVG from "../../assets/icons/LocationSVG";
import BookmarkSVG from "../../assets/icons/BookmarkSVG";
import StarSVG from "../../assets/icons/StarSVG";
import { NavLink } from "react-router-dom";
import { IJob } from "../interfaces/JobInterface";
import { useFetch } from "usehooks-ts";
import dayjs from "dayjs";
type Location = {
  locality: string;
  city: string;
  countryName?: string;
};
export const JobCard = ({
  title,
  name,
  pictures,
  id,
  location,
  createdAt,
}: IJob) => {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.long}&localityLanguage=en`;
  const { data, error } = useFetch<Location>(url);
  return (
    <NavLink to={id}>
      <li className="p-[24px] pl-[16px] flex gap-[26px] bg-white shadow-card rounded-lg relative h-[164px] mx-[10px] md:bg-[#EFF0F5] md:h-[206px] md:px-[16px] md:py-[17px] md:gap-[19px]">
        <BookmarkSVG className="absolute right-[16px] md:hidden" />
        <p className="font-['Proxima_Nova'] text-[16px] font-normal text-[#878D9D] absolute right-[16px] bottom-[24px] md:top-[17px] md:text-[14px]">
          Posted {dayjs().diff(dayjs(createdAt), "day")} days ago
        </p>
        <img
          src={pictures[0]}
          className="rounded-full w-[85px] h-[85px] md:min-w-[65px] md:min-h-[65px] md:h-[65px] md:w-[65px]"
          alt={title}
        />
        <ul className="flex gap-[8px] flex-col justify-start">
          <span className="flex absolute top-[73px] right-[186px] md:opacity-[0.7] md:scale-[0.5] md:static md:text-left  md:w-min md:ml-[-22px]">
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
          </span>
          <li className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-xl">
            {title.slice(0, 50)}
          </li>
          <li className="font-['Proxima_Nova'] text-[#878D9D] text-[16px] font-normal">
            Department name • <span className="">{name}</span>
          </li>
          <li className="text-[#878D9D] text-[16px] font-normal flex gap-[8px]">
            <LocationSVG />
            <span>
              {data?.city ? data.city + ", " : ""}
              {data?.countryName ? data.countryName : data?.locality}
            </span>
          </li>
        </ul>
      </li>
    </NavLink>
  );
};
