export type IJob = {
  name: string;
  pictures: [string];
  id: string;
  title: string;
  location: { lat: number; long: number };
  salary?: string;
  createdAt?: string;
  description?: string;
  benefits?: [string];
  employment_type?: [string];
  address?: string;
  phone?: string;
  email?: string;
  className?: string;
};
