import LocationSVG from "../../assets/icons/LocationSVG";
type Props = {
  title: string;
  name: string;
  pictureURL: string;
  lat: number;
  lng: number;
};

export const JobCard = ({ title, name, pictureURL, lat, lng }: Props) => (
  <li className="p-[24px] pl-[16px] flex gap-[26px] bg-white shadow-card rounded-lg">
    <img src={pictureURL} className="rounded-full w-[85px] h-[85px]" />
    <ul className="flex gap-[8px] flex-col">
      <li className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-xl">
        {title}
      </li>
      <li className="font-['Proxima_Nova'] text-[#878D9D] text-[16px] font-normal">
        Department name • <span className="">{name}</span>
      </li>
      <li className="text-[#878D9D] text-[16px] font-normal flex gap-[8px]">
        <LocationSVG />
        <span>{name}</span>
      </li>
    </ul>
  </li>
);