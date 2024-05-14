import {reactive} from 'vue'
import {ITicketGroup} from "../models/ITicketGroup";

export const TashkentTickets: { data: ITicketGroup[] } = reactive({
    data: [
        {
            'name': 'Памятники',
            'tickets': [
                {
                    'name': 'Мечеть Минор',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 3,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Медресе Барак-хана',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Хаст-Имам',
                    'priceAdult': 65000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 8,
                },
                {
                    'name': 'Мечеть Тиля Шайх',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Медресе Абул Касыма',
                    'priceAdult': 40000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 2,
                    'childTicketsNumber': 1,
                },
            ],
        },
        {
            'name': 'Музеи',
            'tickets': [
                {
                    'name': 'Музей Ленина, или Музей истории Узбекистана',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 3,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Музей прикладного искусства и ремесленничества',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Музей Кукельдаш',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Океанариум',
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
                    'name': 'Планетарий',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 0,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Музей восковых фигур',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 2,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Музей искусств',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 3,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Выставочный зал Союза художников',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 3,
                    'childTicketsNumber': 1,
                },
                {
                    'name': 'Музей Корана',
                    'priceAdult': 30000,
                    'priceChild': 20000,
                    'adultTicketsNumber': 3,
                    'childTicketsNumber': 1,
                },
            ],
        },
    ],
})
