import { BlueBackground } from "../components/backgrounds/BlueBackground";
import { JobCard } from "../components/cards/JobCard";
import { useFetch } from "usehooks-ts";
const url = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data
`;

interface JobPost {
  name: string;
  pictures: [string];
  id: number;
  title: string;
  location: { lat: number; long: number };
}
export const MainPage = () => {
  const { data, error } = useFetch<JobPost[]>(url, {
    headers: {
      Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
    },
  });
  console.log(data);
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
              pictureURL={job.pictures[0]}
              lat={job.location.lat}
              lng={job.location.long}
            />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </BlueBackground>
  );
};
