export type ErrorSeverity = 'info' | 'warning' | 'success' | 'error';

export interface IApiErrorParams {
  exceptionType?: ErrorSeverity;
  messages?: string[];
}

export default class ApiError extends Error {
  status: ErrorSeverity;
  messages: string[];

  constructor({
    exceptionType = 'error',
    messages = ['Ocorreu um erro inesperado'],
  }: IApiErrorParams) {
    super(messages.join('\n'));
    this.name = 'ApiError';
    this.status = exceptionType;
    this.messages = messages;
  }

  toJSON(): object {
    return {
      name: this.name,
      status: this.status,
      messages: this.messages,
    };
  }
}