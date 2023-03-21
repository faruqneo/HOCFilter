import * as React from "react";

export type Person = {
    id: number;
    name: string;
    phone: string;
    email: string;
    country: string;
    address: string;
    postalZip: string;
  }

export enum CaseEnum {
  arrowUp = "arrowUp",
  arrowDown = "arrowDown",
  select = "select"
}