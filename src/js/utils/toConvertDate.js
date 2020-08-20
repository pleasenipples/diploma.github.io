export const toConvertDate = (date) => {
    const getLocalDate = new Date(date).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const sliceDate = getLocalDate.substr(0, getLocalDate.length - 3);
    const getYearFromSliceDate = sliceDate.substr(sliceDate.length - 4);
    const getDateFromSliceDate = sliceDate.substr(0, sliceDate.length - 5);
    return `${getDateFromSliceDate}` + ', ' + `${getYearFromSliceDate}`;
}