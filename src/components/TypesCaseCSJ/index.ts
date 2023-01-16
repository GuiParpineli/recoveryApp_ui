import {user} from "../../hooks/useUserData";

export type linkHateoas = {
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
    resolutionDate: number | null,
    value: number,
    valueWithDiscount?: number,
    coverageValue: number,
    resolutionType: string | null,
    postCode: string | null,
    observation: string[] | null,
    typeCaseCSJ: string,
    initialTime?: number | Date,
    internalStatus: string,
    externalStatus: string,
    sinistroType?: string,
    imeiStatus?: boolean,
    boStatus?: boolean,
    videoStatus?: boolean,
    sinistroDate?: number | Date,
    franchise?: number,
    franchiseTotalValue?: number,
    discountValue?: number,
    payment?: boolean,
    payMethod?: string,
    chargeBack?: boolean,
    chargeBackDate?: number,
    repairValue?: number,
    status?: boolean
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
    links?: linkHateoas[]
}

export type planInput = {
    code: string,
    value: number,
    planStatus: boolean,
    initialDate: number | string,
    finalDate: number | string | null,
    analystId: string,
    productListId: string[],
    customerId: string,
    bondsmanId: string,
    caseCSJId: string[] | null[]
}