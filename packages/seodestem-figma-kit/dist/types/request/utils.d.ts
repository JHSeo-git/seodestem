import { Response } from 'node-fetch';
export declare function getBufferResponse(response: Response): Promise<ArrayBuffer>;
export declare function getResponseData(response: Response): Promise<any>;
export declare function toErrorMessage(data: any): string;
