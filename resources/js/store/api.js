export const fetchDataAsync = async () => {
    try {
        const response = await fetch("api/data");
        return await response.json();
    } catch (e) {
        console.log(e);
    }
};