import { JobInfoHeader } from "../components/headers/JobInfoHeader";
import { ApplyButton } from "../components/buttons/ApplyButton";
import { useParams } from "react-router-dom";
export const JobDetailsPage = () => {
  const { id } = useParams();
  return (
    <div className="flex justify-between max-w-[1260px] my-0 mx-auto pt-[56px]">
      <section className="max-w-[725px] w-full">
        <JobInfoHeader />
        <ApplyButton className="mt-[40px] mb-[32px]" />
        <div>
          <h1 className="font-['Proxima_Nova'] text-[#3A4562] font-bold text-[28px]"></h1>
        </div>
      </section>
      <section className="w-[400px] h-[435px] bg-blueBG"></section>
    </div>
  );
};
