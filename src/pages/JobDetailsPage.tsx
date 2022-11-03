import { JobInfoHeader } from "../components/headers/JobInfoHeader";
import { ApplyButton } from "../components/buttons/ApplyButton";
import { useParams } from "react-router-dom";
import { useFetch } from "usehooks-ts";
import { IJob } from "../components/interfaces/JobInterface";
import { ReturnButton } from "../components/buttons/ReturnButton";
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
  console.log(data);
  if (error) return <p>There is an error.</p>;
  if (data) {
    let filteredArray = data.filter((job) => {
      return job.id === id;
    });
    if (filteredArray.length > 0) Post = filteredArray[0];
  }
  return data && Post.title.length > 0 ? (
    <div className="flex justify-between max-w-[1260px] my-0 mx-auto pt-[56px]">
      <section className="max-w-[725px] w-full">
        <JobInfoHeader />
        <ApplyButton className="mt-[40px] mb-[32px]" />
        <div className="flex justify-between">
          <p className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[24px] max-w-[500px]">
            {Post.title}
          </p>
          <p className="flex flex-col font-['Proxima_Nova'] text-[#3A4562] font-bold text-[20px] tracking-[-0.625px]">
            <span>€ {Post.salary}</span>
            <span className="font-['Roboto'] text-[18px] font-normal">
              Brutto, per year
            </span>
          </p>
        </div>
        <p className="font-['Roboto'] text-[18px] font-normal text-[#38415D5B] my-[7px]">
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
              <li className="relative mb-[3px]">
                <span className="absolute left-[-18px] top-[7px] block h-[9px] w-[9px] bg-[#384564A1]"></span>
                {el}
              </li>
            ))}
          </ul>
          <ApplyButton className="mt-[80px]" />
        </article>
        <div>
          <p className="mt-[86px] pb-[9px] border-solid border-b-[1px] border-[#3A4562]/[.13] ">
            <h2 className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[28px]">
              Additional info
            </h2>
          </p>
          <p>
            <h3 className="font-['Roboto'] text-[18px] font-normal text-[#3A4562] mt-[15px]">
              Employment type
            </h3>
            <ul className="mt-[10px] flex gap-[10px]">
              {Post.employment_type?.map((el) => (
                <li className="h-[50px] w-[222px] flex justify-center items-center bg-[#a1b1db]/[.3] rounded-lg border-[1px] border-solid border-[#55699E4D] font-['Proxima_Nova'] text-[#55699E] font-semibold text-[16px] tracking-[0.45px]">
                  {el}
                </li>
              ))}
            </ul>
          </p>
          <p>
            <h3 className="font-['Roboto'] text-[18px] font-normal text-[#3A4562] mt-[23px]">
              Benefits
            </h3>
            <ul className="mt-[10px] flex gap-[10px]">
              {Post.benefits?.map((el) => (
                <li className="h-[50px] w-[222px] flex justify-center items-center bg-[#ffcf00]/[.1] rounded-lg border-[1px] border-solid border-[#FFCF00] font-['Proxima_Nova'] text-[#988B49] font-semibold text-[16px] tracking-[0.45px]">
                  {el}
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div>
          <p className="mt-[86px] pb-[9px] border-solid border-b-[1px] border-[#3A4562]/[.13] ">
            <h2 className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[28px]">
              Attached images
            </h2>
          </p>
          <ul className="flex gap-[10px] mt-[21px]">
            {Post.pictures.map((el) => (
              <li>
                <img src={el} className="h-[115px] w-[209px] rounded-lg" />
              </li>
            ))}
          </ul>
        </div>
        <ReturnButton className="mt-[90px] ml-[-50px] mb-[160px]" />
      </section>
      <section className="w-[400px] h-[435px] bg-blueBG"></section>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
