export type ChallengeType = 'mind' | 'body' | 'spirit';

export interface Challenge {
  id: string;
  title: string;
  type: ChallengeType;
  description: string;
  startDate: string;
  endDate: string;
  participants: string[];
}