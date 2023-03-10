describe('Basic API Test',function()
{
    it('Demo API Test',function()
    {
        cy.request('POST','https://reqres.in/api/users',{
            "name": "Test",
            "job": "QA"
        }).then((response)=>
        {
            expect(response.body).to.have.property('job','QA')
            expect(response.status).to.eq(201)
        })
    })
})