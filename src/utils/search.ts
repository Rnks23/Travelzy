import { destinations } from '../data/destinations';

export const searchDestinations = (query: string) => {
  const normalizedQuery = query.toLowerCase().trim();
  return destinations.filter(destination => 
    destination.searchTerms.some(term => term.includes(normalizedQuery)) ||
    destination.title.toLowerCase().includes(normalizedQuery)
  );
};

export const getDestinationImage = (query: string): string => {
  const matchingDestination = destinations.find(destination => 
    destination.searchTerms.some(term => term.includes(query.toLowerCase())) ||
    destination.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return matchingDestination?.image || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da';
};