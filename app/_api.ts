export interface Card {
  rank: string;
  suit: string;
  image_url: string;
}

export const fetchRandomCard = async (): Promise<Card> => {
  try {
    const response = await fetch('https://armaiti.pythonanywhere.com/api/card', {  // Update to your deployed URL
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch card');
    }

    const data: Card = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching card:', error);
    throw error;
  }
};