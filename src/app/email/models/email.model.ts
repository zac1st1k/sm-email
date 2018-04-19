export interface EmailRequest {
  from: string[];
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  body: string;
}

export interface EmailResponse {
  id: string,
  from: string[];
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  body: string;
}