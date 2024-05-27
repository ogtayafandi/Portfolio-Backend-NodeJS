class Experience {
    constructor({name, startDate, endDate, description, position}) {
        this.name = name
        this.description = description
        this.startDate = new Date(startDate)
        if (isNaN(this.startDate)) {
            throw new Error("Invalid startDate format. Expected format: YYYY-MM-DD")
        }

        this.endDate = new Date(endDate)
        if (isNaN(this.endDate)) {
            throw new Error("Invalid endDate format. Expected format: YYYY-MM-DD")
        }
        this.position = position
    }
}

module.exports = Experience