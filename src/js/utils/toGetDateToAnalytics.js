export const toGetDateToAnalytics = (data) => {
    const getLocalDate = new Date(data).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short'
    });
    const sliceDate = getLocalDate.substr(0, getLocalDate.length - 16);
    const getDayFromSliceDate = sliceDate.substr(sliceDate.length - 2);
    const getDayOfWeekFromSliceDate = sliceDate.substr(0, sliceDate.length - 4);
    return `${getDayFromSliceDate}` + ', ' + `${getDayOfWeekFromSliceDate}`;
}