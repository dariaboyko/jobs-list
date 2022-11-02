export type IJob = {
  name: string;
  pictures: [string];
  id: string;
  title: string;
  location: { lat: number; long: number };
};
