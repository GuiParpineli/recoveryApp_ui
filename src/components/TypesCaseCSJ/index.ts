import {user} from "../../hooks/useUserData";

export type linkHeateoas = {
    rel: string,
    href: string,
    title: string
}

export type customer =
    {
        id: string,
        name: string,
        lastName: string,
        phone: string,
        email: string,
        address: {
            id: number,
            street: string,
            city: string,
            state: string,
            country: string,
            postalCode: string,
            complement?: string
        }
    }
export type caseCSJType = {
    type: string,
    id: string,
    date: number,
    stepCSJ: string,
    resolutionDate: number,
    value: number,
    valueWithDiscount: number,
    coverageValue: number,
    resolutionType: string,
    postCode: string,
    observation: string[],
    internalStatus: string,
    externalStatus: string,
    payMethod: string,
    chargeBack: boolean,
    chargeBackDate: number,
    typeCaseCSJ: string
}

export type product = {
    id: string,
    name: string,
    statusProduct: string,
    imei: string,
    imei2: string,
    value: number
}

export type planProps = {
    code: string,
    value: number,
    recidivistCustomer: boolean,
    initialDate: Date | number,
    finalDate?: Date | number,
    planStatus: boolean,
    creationDate: Date | number,
    productList: product[],
    analyst: user,
    customer: customer,
    bondsman: customer,
    caseCSJ?: caseCSJType[],
    links?: linkHeateoas[]
}
