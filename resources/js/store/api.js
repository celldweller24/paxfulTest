export const fetchDataAsync = async () => {
    try {
        const response = await fetch("api/data");
        const data = await response;
        return data;
    } catch (e) {
        console.log(e);
    }
};