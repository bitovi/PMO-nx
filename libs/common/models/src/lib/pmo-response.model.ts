import { HttpStatus } from '@nestjs/common';

export interface PmoResponse<T> {
  status: HttpStatus;
  data: T;
  error?: string;
  message?: string;
}
