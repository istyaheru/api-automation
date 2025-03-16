import { request } from '../../utils/requests.js'

export async function getBooks() {
    it('Get all books', async function () {
        await request(this, 'GET', '/books', undefined, false, 
            {
                statusCode : 200,
                expectedFields: ['0.id', '7.id'],
                expectedValues: [
                                    {path: '0.id', value: 1}
                                    //{path: '7.id', value: 8}
                                ]
            }
        )
    })
}