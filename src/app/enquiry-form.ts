export class EnquiryForm {
    constructor(
        public From: string,
        public To: string,
        public members: string,
        public onwardsDate: string,
        public hotelCategory: string,
        public mealPlan: string,
        public email: string,
        public otherComments?:string
    ){}
}
