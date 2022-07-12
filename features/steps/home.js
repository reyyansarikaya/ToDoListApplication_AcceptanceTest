const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const assert = require("assert");


Given(/^Empty ToDo list$/, async function () {
    await openUrl.call(this, "/")
});

When(/^I write "([^"]*)" to <text box> and click to <add button>$/, async function (input_value) {
    await this.page.type('input[name=add-input]', input_value, {delay: 20})
    await this.page.click('#add-button');
});

Then(/^I should see "([^"]*)" item in ToDo list$/, async function (input_value) {
    await this.page.waitForTimeout(4000);
    const todoItems = await this.page.$$('.todo-container');
    for (let todo of todoItems) {
        let todoNode = await todo.$("#list-to-do");
        const todoText = await this.page.evaluate(todoNode => todoNode.textContent, todoNode);
        if (todoText === input_value) {
            return !todoText
        }
    }
    assert.strictEqual(todoItems, true)
});