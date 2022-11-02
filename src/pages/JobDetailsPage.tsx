import { JobInfoHeader } from "../components/headers/JobInfoHeader";
import { ApplyButton } from "../components/buttons/ApplyButton";
export const JobDetailsPage = () => (
  <div className="flex justify-between max-w-[1260px] my-0 mx-auto pt-[56px]">
    <section className="max-w-[725px] w-full">
      <JobInfoHeader />
      <ApplyButton />
    </section>
    <section className="w-[400px] h-[435px] bg-blueBG"></section>
  </div>
);
