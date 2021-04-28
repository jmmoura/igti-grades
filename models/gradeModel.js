export default mongoose => {
    const gradeSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        lastModified: {
            type: String,
            required: true,
        },
    })

    const gradeModel = mongoose.Model('grades', gradeSchema)

    return gradeModel
}
