//@ts-nocheck
import { render, screen } from "@testing-library/react";
import { AppButton } from "./AppButton";

describe('Тестируем компонент AppButton', () => {
    const renderAppButton = (buttonLabel) => render(<AppButton buttonLabel={buttonLabel}/>)

    test('AppButton рендерится с правильным лейблом', () => {
        renderAppButton('Тест')

        const appButtonElement = screen.getByText('Тест')

        expect(appButtonElement).toBeInTheDocument()
    })
})