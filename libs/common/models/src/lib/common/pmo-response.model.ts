import { PmoHttpStatus } from './pmo-http-status.model';

export interface PmoResponse<T> {
  status: PmoHttpStatus;
  data: T;
  error?: string;
  message?: string;
}
