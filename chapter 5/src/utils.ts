export const stringToDate = (stringDate: string): Date => {

    const dateArr = stringDate
        .split('/')           // ['28', '2', '2018' ]
        .map((value: string) => parseInt(value));

    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
}