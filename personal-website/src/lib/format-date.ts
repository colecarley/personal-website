


export function formatDate(date: string) {
    if (date == "Present") {
        return date;
    }
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });
}