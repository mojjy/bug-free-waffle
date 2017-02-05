describe('Messages Page', () => {
    beforeEach(() => {
        browser.get('#/messages');
    });

    it('Messages should be present', () => {
        let testimonials = element.all(by.css('.testimonial-section'));
        var actual = testimonials.count();
        expect(actual).toBe(3);


        //add a message  --typically I would use page objects here --
        let message = $('#message');
        let name = $('#username');
        let postMessage = $('#postMessage');

        message.sendKeys('hello');
        name.sendKeys('world');
        postMessage.click();

        testimonials = element.all(by.css('.testimonial-section'));
        expect(testimonials.count()).toBe(4);
    });
});
