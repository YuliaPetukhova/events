import {defineStore} from 'pinia'
import {ITicketGroup} from "../models/ITicketGroup";
import {ICity} from "../models/ICity";

export const useTicketStore = defineStore('ticketStore', {
    state: () => ({
        tashkent: {
            tickets: [
                {
                    name: 'Памятники',
                    tickets: [
                        {
                            name: 'Мечеть Минор',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 3,
                        },
                        {
                            name: 'Медресе Барак-хана',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Хаст-Имам',
                            priceAdult: 65000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 8,
                        },
                        {
                            name: 'Мечеть Тиля Шайх',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Медресе Абул Касыма',
                            priceAdult: 40000,
                            priceChild: 20000,
                            adultTicketsNumber: 2,
                            childTicketsNumber: 1,
                        },
                    ],
                },
                {
                    name: 'Музеи',
                    tickets: [
                        {
                            name: 'Музей Ленина, или Музей истории Узбекистана',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 3,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Музей прикладного искусства и ремесленничества',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Музей Кукельдаш',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Океанариум',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Дом-музей Садриддина Айни',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 8,
                        },
                        {
                            name: 'Планетарий',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Музей восковых фигур',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 2,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Музей искусств',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 3,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Выставочный зал Союза художников',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 3,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Музей Корана',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 3,
                            childTicketsNumber: 1,
                        },
                    ],
                },
            ] as ITicketGroup[],
        } as ICity,

        samarkand: {
            tickets: [
                {
                    name: 'Памятники',
                    tickets: [
                        {
                            name: 'Мавзолей Гур-Эмир',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Площадь Регистан',
                            priceAdult: 65000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 8,
                        },
                        {
                            name: 'Мечеть Биби-Ханум',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Некрополь Шахи Зинда',
                            priceAdult: 40000,
                            priceChild: 20000,
                            adultTicketsNumber: 2,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Мавзолей Рухабад',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 3,
                            childTicketsNumber: 1,
                        },
                    ],
                },
                {
                    name: 'Музеи',
                    tickets: [
                        {
                            name: 'Самаркандский государственный музей',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Дом-музей Садриддина Айни',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 8,
                        },
                        {
                            name: 'Музей Улугбека',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 0,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Афрасиаб',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 2,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Краеведческий музей',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 3,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Арт-галерея «Счастливая птица»', 'priceAdult': 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 3,
                            childTicketsNumber: 1,
                        },
                        {
                            name: 'Мануфактура по производству шёлковой бумаги',
                            priceAdult: 30000,
                            priceChild: 20000,
                            adultTicketsNumber: 3,
                            childTicketsNumber: 1,
                        },
                    ],
                },
            ] as ITicketGroup[],
        } as ICity,

    }),
});
