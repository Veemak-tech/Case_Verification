import { address } from "./address";
import { insurerDetails } from "./insurerDetails"
import { thirdpartyDetails } from "./thirdpartydetails"

export interface casedetails {

  CaseID: string;
  Name: string;
  Description: string;
  InsurerVerificationNotes: string;
  ThirdpartyVerificationNotes: string;
  CreatedBy: string;
  LastModifiedBy:string;
  ReferenceNumber:string;
  DueDate:string;

  insAddress:address;

  insDetails: insurerDetails;

  tpartyDetails: thirdpartyDetails;

}
