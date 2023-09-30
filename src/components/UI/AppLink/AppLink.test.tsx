//@ts-nocheck
import { AppLink } from "./AppLink";
import { render,screen } from "@testing-library/react";

describe('Тестирование компонента AppLink', () => {
    const renderAppLink = (linkLabel, hasIcon) => render(<AppLink linkLabel={linkLabel} hasIcon={hasIcon}/>)
    
    test('AppLink рендерится с правильным лейблом', () => {
        renderAppLink('Тест')

        const appLinkElement = screen.getByText('Тест')

        expect(appLinkElement).toBeInTheDocument()
    })

    test('AppLink отображается с иконкой arrow', () => {
        renderAppLink('Тест' , true)
        const appLinkElement = screen.getByText('Тест')
        const linkElementIcon = screen.getByTestId('arrow-icon')
        
        expect(appLinkElement).toBeInTheDocument()
        expect(linkElementIcon).toBeInTheDocument()
    })
})