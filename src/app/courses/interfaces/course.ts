export interface Course {
  _id?: string;
  name: string;
  description: string;
  objective: string;
  workload: number;
  period: {
    start: Date;
    end: Date;
  };
}
