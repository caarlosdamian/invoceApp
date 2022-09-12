import { clientAddress, items, senderAddress } from "../types";

export interface RowInfo {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: senderAddress;
  clientAddress: clientAddress;
  items: items[];
  total: number;
}
