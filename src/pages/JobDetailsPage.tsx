import { JobInfoHeader } from "../components/headers/JobInfoHeader";
import { ApplyButton } from "../components/buttons/ApplyButton";
import { useParams } from "react-router-dom";
import { useFetch } from "usehooks-ts";
import { IJob } from "../components/interfaces/JobInterface";
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
          <p className="flex flex-col font-['Proxima_Nova'] text-[#3A4562] font-bold text-[20px] tracking-[letter-spacing: -0.625px]">
            <span>€ {Post.salary}</span>
            <span>Brutto, per year</span>
          </p>
        </div>
      </section>
      <section className="w-[400px] h-[435px] bg-blueBG"></section>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
