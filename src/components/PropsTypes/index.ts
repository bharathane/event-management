// props Types for Header button
export interface headerButtonType {
  id: string;
  name: string;
  key?: string;
  getId?: (id: string) => void;
  isActiveId?: boolean;
  navigate?: string | null;
}

// props Types for Event object
export interface eventsObjType {
  id: string;
  category: string;
  imgUrl: string;
}

/*export interface venueType {
  city: string;
  country: string;
  full_address: string;
  name: string;
  phone_number: string;
  rating: number;
  review_count: number;
  state: string;
  street: string;
  street_number: string;
  subtype: string;
  timezone: string;
  website: string;
}

export interface serverEventsTypes {
  description: string;
  event_id: string;
  link: string;
  name: string;
  start_time: string;
  thumbnail: string;
  venue: venueType;
}*/
