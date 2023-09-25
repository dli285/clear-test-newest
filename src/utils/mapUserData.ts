import { userData } from "../components/ProfileElems/ProfileElems.data";

const fields = {
//FIXME: Сделать  норм типиз
    name: 'Имя',
    surname: 'Фамилия',
    phoneNumber: 'Номер',
    eMail: 'E-mail',
    country: 'Страна'
}

interface MappedFieldItem {
    fieldName: string
    fieldValue: string
}

export const mapUserDataFields = (): Array<MappedFieldItem> => {
    const userEntries = Object.entries(userData)
    const mappedFields: Array<MappedFieldItem> = []

    for (const [key,value] of userEntries) {
        let field = {
            //@ts-ignore
            fieldName: fields[key],
            fieldValue: value
        }

        mappedFields.push(field)
    }

    return mappedFields.filter(item => item.fieldName)
}