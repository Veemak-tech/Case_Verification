import { address } from "./address";
import { insurerDetails } from "./insurerDetails"
import { thirdpartyDetails } from "./thirdpartydetails"

export interface casedetails {

  CustomerCaseID: string;
  Name: string;
  Description: string;
  InsurerVerificationNotes: string;
  ThirdpartyVerificationNotes: string;
  CreatedBy: string;
  LastModifiedBy:string;

  insAddress:address;

  insDetails: insurerDetails;

  tpartyDetails: thirdpartyDetails;

}
