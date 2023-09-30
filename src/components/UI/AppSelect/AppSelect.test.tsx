//@ts-nocheck
import { AppSelect } from "./AppSelect";
import { render, screen } from "@testing-library/react";



describe('Тест компонента AppSelect', () => {
    const renderAppSelect = (variants) => render(<AppSelect variants={variants}/>)

    test('AppSelect отображается с правильным title', () => {
        const variants = [
          { value: 'en', title: 'English' },
          { value: 'ru', title: 'Русский' },
        ];
      
        renderAppSelect(variants);
      
        const AppSelectElement = screen.getByTestId('appLanguage')
      
        expect(AppSelectElement).toBeInTheDocument();
      });
})