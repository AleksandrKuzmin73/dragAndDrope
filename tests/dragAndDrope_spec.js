describe ("Test Alerts", function(){
    var common = require('../config/common.js'),
        dragAndDropForm = new common.dragAndDropForm(),
        droppable = element (by.id('droppable'));
        browser.waitForAngularEnabled(false);

    beforeEach(function () {
        dragAndDropForm.getSite();
    });

    // 1.Создание скрина;
    it("DragAndDrop", function () {
        dragAndDropForm.auth();
        dragAndDropForm.dragAndDrope();
        expect(droppable.getText()).toBe('Dropped!');
    });

});