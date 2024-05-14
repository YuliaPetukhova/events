import {reactive} from 'vue'
import {ITicketGroup} from "../models/ITicketGroup";
export const SamarkandTickets: {data: ITicketGroup[]} = reactive({
    data: [
        {
            'name': 'Памятники',
            'tickets': [
                {
                    'name': 'Мавзолей Гур-Эмир',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Площадь Регистан',
                    'priceAdult': 65000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 8,
                },
                {
                    'name': 'Мечеть Биби-Ханум',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Некрополь Шахи Зинда',
                    'priceAdult': 40000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 2,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Мавзолей Рухабад',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 3,
                    'childTicketsNumber': 1,
                },
            ],
        },
        {
            'name': 'Музеи',
            'tickets': [
                {
                    'name': 'Самаркандский государственный музей',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Дом-музей Садриддина Айни',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 8,
                },
                {
                    'name': 'Музей Улугбека',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Афрасиаб',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 2,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Краеведческий музей',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 3,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Арт-галерея «Счастливая птица»',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 3,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Мануфактура по производству шёлковой бумаги',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 3,
                    'childTicketsNumber': 1,
                },
            ],
        },
    ],
})
