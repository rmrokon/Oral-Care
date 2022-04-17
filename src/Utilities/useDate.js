const useDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    return year;
};

export default useDate;