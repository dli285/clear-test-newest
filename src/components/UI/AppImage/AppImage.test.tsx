//@ts-nocheck
import { render, screen } from "@testing-library/react";
import { AppImage } from "./AppImage";

describe('Тестируем компонент AppImage', () => {
    const renderAppImage = (src, altSrc) => render(<AppImage imgSrc={src} imgAlt={altSrc}/>)

    test('Компонент отображается', () => {
        renderAppImage('test.png', 'test-img')

        const imgElement = screen.getByAltText('test-img')

        expect(imgElement).toBeInTheDocument
    })

    test('Компонент отображается', () => {
        renderAppImage('test.png', 'test-img')

        const imgElement = screen.getByAltText('test-img')

        expect(imgElement).toHaveAttribute('src', './img/test.png')
    })
})