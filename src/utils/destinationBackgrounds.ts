interface DestinationImage {
  url: string;
  climate: 'cold' | 'hot' | 'temperate';
}

const destinationData: Record<string, DestinationImage> = {
  'swiss alps': {
    url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
    climate: 'cold'
  },
  'iceland': {
    url: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307',
    climate: 'cold'
  },
  'dubai': {
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    climate: 'hot'
  },
  'sahara': {
    url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
    climate: 'hot'
  },
  'bali': {
    url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    climate: 'hot'
  },
  'maldives': {
    url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    climate: 'hot'
  }
};

const defaultBackgrounds = {
  cold: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22',
  hot: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0',
  temperate: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba'
};

export function getDestinationBackground(searchTerm: string): string {
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  // Check for exact matches first
  const exactMatch = destinationData[normalizedSearch];
  if (exactMatch) {
    return exactMatch.url;
  }

  // Check for partial matches and climate indicators
  if (normalizedSearch.includes('beach') || 
      normalizedSearch.includes('desert') || 
      normalizedSearch.includes('tropical')) {
    return defaultBackgrounds.hot;
  }

  if (normalizedSearch.includes('mountain') || 
      normalizedSearch.includes('snow') || 
      normalizedSearch.includes('glacier')) {
    return defaultBackgrounds.cold;
  }

  // Default background for empty or unmatched searches
  return defaultBackgrounds.temperate;
}