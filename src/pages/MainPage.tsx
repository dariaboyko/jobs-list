import { BlueBackground } from "../components/backgrounds/BlueBackground";
import { JobCard } from "../components/cards/JobCard";
import { useFetch } from "usehooks-ts";
import { IJob } from "../components/interfaces/JobInterface";
const url = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data`;

export const MainPage = () => {
  const { data, error } = useFetch<IJob[]>(url, {
    headers: {
      Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
    },
  });
  if (error) return <p>There is an error.</p>;
  return (
    <BlueBackground>
      {data ? (
        <ul className="flex gap-[8px] flex-col max-w-[1400px] my-0 mx-auto py-[30px]">
          {data.map((job) => (
            <JobCard
              key={job.name + Math.random()}
              title={job.title}
              name={job.name}
              pictures={job.pictures}
              location={job.location}
              id={job.id}
            />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </BlueBackground>
  );
};
