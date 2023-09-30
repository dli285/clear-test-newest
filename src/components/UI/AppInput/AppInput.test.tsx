//@ts-nocheck
import { AppInput } from "./AppInput";
import { render,screen } from "@testing-library/react";

describe('Тестирование компонента AppInput', () => {
    const renderAppInput = (hasError, iconName) => render(<AppInput hasError={hasError} iconName={iconName}/>)

    test('AppInput отображается с error текстом', () => {
        renderAppInput(true)
        const appInputElement = screen.getByText('Ошибка!')
        const appInputErrorMessage = screen.getByTestId('error-message')
        
        expect(appInputElement).toBeInTheDocument()
        expect(appInputErrorMessage).toBeInTheDocument()
    })   
    test('AppInput отображает icon', () => {
        renderAppInput('Тест', true)
        const appInputIcon = screen.getByTestId('error-icon')

        expect(appInputIcon).toBeInTheDocument()
    })
})