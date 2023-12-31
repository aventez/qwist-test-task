export interface MonzoTransaction {
  id: string;
  created: string;
  description: string;
  amount: number;
  currency: string;
  metadata: {
    reference: string;
  };
}
