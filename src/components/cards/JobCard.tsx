import LocationSVG from "../../assets/icons/LocationSVG";
import BookmarkSVG from "../../assets/icons/BookmarkSVG";
import { NavLink } from "react-router-dom";
import { IJob } from "../interfaces/JobInterface";
import { useFetch } from "usehooks-ts";
type Location = {
  locality: string;
  city: string;
  countryName?: string;
};
export const JobCard = ({ title, name, pictures, id, location }: IJob) => {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.long}&localityLanguage=en`;
  const { data, error } = useFetch<Location>(url);
  console.log(data);
  return (
    <NavLink to={id}>
      <li className="p-[24px] pl-[16px] flex gap-[26px] bg-white shadow-card rounded-lg relative">
        <BookmarkSVG className="absolute right-[16px]" />
        <img
          src={pictures[0]}
          className="rounded-full w-[85px] h-[85px]"
          alt={title}
        />
        <ul className="flex gap-[8px] flex-col">
          <li className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-xl">
            {title}
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
