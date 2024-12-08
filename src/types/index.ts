export interface Destination {
  id: string;
  title: string;
  image: string;
  description: string;
  price: string;
  duration: string;
  highlights: string[];
}

export interface BookingFormData {
  name: string;
  email: string;
  destination: string;
  date: string;
  guests: number;
  message: string;
}