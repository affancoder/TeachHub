export interface Teacher {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  avatar?: string;
  createdAt?: string;
  department?: string;
  qualifications?: string;
  address?: string;
  dateOfBirth?: string;
}

export interface Payment {
  id: number;
  teacherId: number;
  amount: number;
  date: string;
  note?: string;
}
