describe('How to do it in JS homepage', function() {

	it('should have How to do it in JavaScript title', function(){
    browser.driver.get('http://localhost:8888');
    var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("How to do it in JavaScript");
	});

});