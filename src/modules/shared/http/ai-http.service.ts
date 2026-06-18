import { HttpException, Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class AiHttpService {
  async post<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response = await axios.post<T>(url, data, {
        timeout: 60000,
        ...config,
      });

      return response.data;
    } catch (error: any) {
      const statusCode = error.response?.status || 500;

      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        'AI service error';

      throw new HttpException(
        {
          success: false,
          message,
          serviceUrl: url,
        },
        statusCode,
      );
    }
  }
}
