import { IJob } from "../interfaces/JobInterface";
import LocationSVG from "../../assets/icons/LocationSVG";
import MapIMG from "../../assets/images/Map.png";

export const LocationCard = ({
  address,
  phone,
  email,
  title,
  name,
  pictures,
  id,
  location,
  className,
}: IJob) => (
  <section
    className={
      "relative bg-[#2A3047] w-[400px] h-[435px] rounded-lg font-['Proxima_Nova'] text-white text-[20px] font-semibold z-[-2] " +
      className
    }
  >
    <ul className="mx-auto mt-[30px] w-fit flex flex-col gap-[8px]">
      <li>
        Department name. <br />
        {name}.
      </li>
      <li className="flex gap-[8px] text-[18px] font-normal">
        <LocationSVG opacity="0.7" /> {address}
      </li>
      <li className="text-[18px] font-normal">{phone}</li>
      <li className="text-[18px] font-normal">{email}</li>
    </ul>
    <img
      src={MapIMG}
      className="absolute top-0 z-[-1] xsm:bottom-0 xsm:top-auto"
    />
    <LocationSVG
      className="absolute bottom-[150px] left-[70px] scale-[1.7]"
      fill="#D8D8D8"
    />
  </section>
);
