import { HTML } from "../HTML.js"
import { MyTableComponent } from "./Table.js"

export class Example extends HTML
{
    constructor()
    {
        super('div', {id: 'exmaple-component', class: 'example-component'})

        new HTML('h1', 'Hello World').append(this.el)
        let container = new HTML('div', {class: 'example-container'}).append(this.el)

        let paragraph = new HTML('p', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
        paragraph.append(container);

        var table = new MyTableComponent(['header-1', 'header-2', 'header-3']).append(container)
        table.addRow(['row1-data1', 'row1-data2', 'row1-data3'])
        table.addRow(['row2-data1', 'row2-data2', 'row2-data3'])

    }
}