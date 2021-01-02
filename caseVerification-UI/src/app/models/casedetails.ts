import { address } from "./address";

export interface casedetails {

  CaseID: string;
  Name: string;
  Description: string;
  InsurerVerificationNotes: string;
  ThirdpartyVerificationNotes: string;
  CreatedBy: string;
  LastModifiedBy:string;

  insAddress:address;
}
