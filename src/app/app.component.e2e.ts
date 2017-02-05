'use strict';

describe('App', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        let title = browser.getTitle();
        expect('Fizz Buck').toEqual(title);
    });
});
