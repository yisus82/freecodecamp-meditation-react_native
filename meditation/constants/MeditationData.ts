export interface MeditationItem {
  id: number;
  title: string;
  image: string;
  audio: string;
}

export const MEDITATION_DATA: MeditationItem[] = [
  {
    id: 1,
    title: 'Mountains',
    image: 'trees',
    audio: 'trees',
  },
  {
    id: 2,
    title: 'Rivers',
    image: 'river',
    audio: 'river',
  },
  {
    id: 3,
    title: 'Sunset',
    image: 'meditateUnderTree',
    audio: 'meditateUnderTree',
  },
  {
    id: 4,
    title: 'Beaches',
    image: 'beach',
    audio: 'beach',
  },
  {
    id: 5,
    title: 'Starry Night',
    image: 'yosemiteStars',
    audio: 'yosemiteStars',
  },
  {
    id: 6,
    title: 'Waterfall',
    image: 'waterfall',
    audio: 'waterfall',
  },
];
