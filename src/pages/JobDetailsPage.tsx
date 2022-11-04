import { JobInfoHeader } from "../components/headers/JobInfoHeader";
import { ApplyButton } from "../components/buttons/ApplyButton";
import { useParams } from "react-router-dom";
import { useFetch } from "usehooks-ts";
import { IJob } from "../components/interfaces/JobInterface";
import { ReturnButton } from "../components/buttons/ReturnButton";
import { LocationCard } from "../components/cards/LocationCard";
import FavoriteStarSVG from "../assets/icons/FavoriteStar";
import ShareSVG from "../assets/icons/ShareSVG";
import dayjs from "dayjs";
const url = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data`;
export const JobDetailsPage = () => {
  const { id } = useParams();
  let Post: IJob = {
    name: "",
    pictures: [""],
    id: "",
    title: "",
    location: { lat: 1, long: 1 },
  };
  const { data, error } = useFetch<IJob[]>(url, {
    headers: {
      Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
    },
  });
  if (error) return <p>There is an error.</p>;
  if (data) {
    let filteredArray = data.filter((job) => {
      return job.id === id;
    });
    if (filteredArray.length > 0) Post = filteredArray[0];
  }
  return data && Post.title.length > 0 ? (
    <div className="flex justify-between max-w-[1260px] my-0 mx-auto pt-[56px]">
      <section className="max-w-[725px] w-full ml-[15px] lg:mx-auto lg:px-[20px]">
        <JobInfoHeader />
        <div className=" gap-[24px] font-['Roboto'] text-[#3A4562] text-[18px] font-normal tracking-[-0.5625px] mt-[24px] hidden md:flex">
          <p className="flex items-center gap-[8px]">
            <FavoriteStarSVG />
            <span>Save to my list</span>
          </p>
          <p className="flex items-center gap-[8px]">
            <ShareSVG />
            <span>Share</span>
          </p>
        </div>
        <ApplyButton className="mt-[40px] mb-[32px] md:hidden" />
        <div className="flex justify-between relative">
          <p className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[24px] max-w-[500px]">
            {Post.title}
          </p>
          <p className="flex flex-col font-['Proxima_Nova'] text-[#3A4562] font-bold text-[20px] tracking-[-0.625px] md:absolute md:right-[10px] md:bottom-[-55px] md:text-right md:flex-col-reverse">
            <span>€ {Post.salary}</span>
            <span className="font-['Roboto'] text-[18px] font-normal">
              Brutto, per year
            </span>
          </p>
        </div>
        <p className="font-['Roboto'] text-[18px] font-normal text-[#38415D5B] my-[7px] md:text-[13px] md:mt-[21px] md:mb-[30px]">
          Posted {dayjs().diff(dayjs(Post.createdAt), "day")} days ago
        </p>
        <article className="font-['Roboto'] text-[18px] font-normal text-[#3A4562] leading-6">
          <p className="mb-[35px]">{Post.description}</p>
          <h3 className="font-['Proxima_Nova'] font-bold text-[20px]">
            Responsibilities
          </h3>
          <p className="mt-[15px]">{Post.description?.slice(0, 380)}.</p>
          <p className="mt-[15px]">{Post.description?.slice(0, 380)}.</p>
          <p className="mt-[15px]">{Post.description?.slice(0, 380)}.</p>
          <h3 className="font-['Proxima_Nova'] font-bold text-[20px] mt-[35px] mb-[8px]">
            Compensation & Benefits:
          </h3>
          <ul>
            {Post.benefits?.map((el) => (
              <li key={el + Math.random()} className="relative mb-[3px]">
                <span className="absolute left-[-18px] top-[7px] inline-block h-[9px] w-[9px] bg-[#384564A1] md:static md:mr-[10px]"></span>
                {el}
              </li>
            ))}
          </ul>
          <ApplyButton className="mt-[80px] md:mt-[20px] md:mx-auto md:block" />
        </article>
        <div className="md:hidden">
          <div className="mt-[86px] pb-[9px] border-solid border-b-[1px] border-[#3A4562]/[.13] ">
            <h2 className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[28px]">
              Additional info
            </h2>
          </div>
          <div>
            <h3 className="font-['Roboto'] text-[18px] font-normal text-[#3A4562] mt-[15px]">
              Employment type
            </h3>
            <ul className="mt-[10px] flex gap-[10px]">
              {Post.employment_type?.map((el) => (
                <li
                  key={el + Math.random()}
                  className="h-[50px] w-[222px] flex justify-center items-center bg-[#a1b1db]/[.3] rounded-lg border-[1px] border-solid border-[#55699E4D] font-['Proxima_Nova'] text-[#55699E] font-semibold text-[16px] tracking-[0.45px]"
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-['Roboto'] text-[18px] font-normal text-[#3A4562] mt-[23px]">
              Benefits
            </h3>
            <ul className="mt-[10px] flex gap-[10px]">
              {Post.benefits?.map((el) => (
                <li
                  key={el + Math.random()}
                  className="h-[50px] w-[222px] flex justify-center items-center bg-[#ffcf00]/[.1] rounded-lg border-[1px] border-solid border-[#FFCF00] font-['Proxima_Nova'] text-[#988B49] font-semibold text-[16px] tracking-[0.45px]"
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="mt-[86px] pb-[9px] border-solid border-b-[1px] border-[#3A4562]/[.13] ">
            <h2 className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[28px]">
              Attached images
            </h2>
          </div>
          <ul className="flex gap-[10px] mt-[21px] overflow-scroll">
            {Post.pictures.map((el) => (
              <li key={el + Math.random()}>
                <img
                  src={el}
                  className="h-[115px] w-[209px] min-h-[115px] min-w-[209px] rounded-lg"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="mt-[86px] pb-[9px] border-solid border-b-[1px] border-[#3A4562]/[.13] ">
            <h2 className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[28px]">
              Additional info
            </h2>
          </div>
          <div>
            <h3 className="font-['Roboto'] text-[18px] font-normal text-[#3A4562] mt-[15px]">
              Employment type
            </h3>
            <ul className="mt-[10px] flex gap-[10px]">
              {Post.employment_type?.map((el) => (
                <li
                  key={el + Math.random()}
                  className=" w-[122px] text-right bg-[#a1b1db]/[.3] rounded-lg border-[1px] border-solid border-[#55699E4D] font-['Proxima_Nova'] text-[#55699E] font-semibold text-[16px] tracking-[0.45px] py-[14px] pr-[10px]"
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-['Roboto'] text-[18px] font-normal text-[#3A4562] mt-[23px]">
              Benefits
            </h3>
            <ul className="mt-[10px] flex gap-[10px]">
              {Post.benefits?.map((el) => (
                <li
                  key={el + Math.random()}
                  className="h-[50px] w-fit px-[10px] flex justify-center items-center bg-[#ffcf00]/[.1] rounded-lg border-[1px] border-solid border-[#FFCF00] font-['Proxima_Nova'] text-[#988B49] font-semibold text-[16px] tracking-[0.45px]"
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="mt-[86px] pb-[9px] border-solid border-b-[1px] border-[#3A4562]/[.13] ">
            <h2 className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[28px]">
              Contacts
            </h2>
          </div>
          <LocationCard
            address={Post.address}
            phone={Post.phone}
            email={Post.email}
            title={Post.title}
            name={Post.name}
            pictures={Post.pictures}
            location={Post.location}
            id={Post.id}
            className="hidden lg:block w-[100%] max-w-[400px] mb-[20px] pt-[5px] mt-[30px]"
          />
        </div>
        <ReturnButton className="mt-[90px] ml-[-50px] mb-[160px] md:hidden" />
      </section>
      <LocationCard
        address={Post.address}
        phone={Post.phone}
        email={Post.email}
        title={Post.title}
        name={Post.name}
        pictures={Post.pictures}
        location={Post.location}
        id={Post.id}
        className="lg:hidden"
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
