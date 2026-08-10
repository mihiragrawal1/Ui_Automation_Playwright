export class EventPage {

    constructor(page) {
        this.page = page;
        this.eventTab=page.locator("#nav-events")
        this.createEventButton = page.locator('a[href="/admin/events"]')

    }

    async goToEventsPage(){
        await this.eventTab.first().click();

    }

    async addNewEvent(){
        await this.createEventButton.click();
    }



}